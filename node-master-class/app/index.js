/*

    Primary file for the API

*/

// Dependences
var http = require("http");
var url = require("url");
var StringDecoder = require("string_decoder").StringDecoder;
var config = require("./config");

// The server should respond to all request with a string
var server = http.createServer(function(req, res){
    
    // Get the URL and parse it
    var parsedUrl = url.parse(req.url, true);
    
    // Get the path
    var path = parsedUrl.pathname;
    var trimmedPath = path.replace(/^\/+|\/+$/g,"");
    
    // Get the query string as an object
    var queryStringObject = parsedUrl.query;
    
    // Get the HTTP Method
    var method = req.method.toLowerCase();
    
    // Get the headers as an object
    var headers = req.headers;
    
    // Get the payload, if any, use string decoder library
    var decoder = new StringDecoder("utf-8");
    var buffer = "";
    req.on("data", function(data){
        buffer += decoder.write(data); // Binding to the end of stream. Streams are built into node
    });
    req.on("end", function() {
        buffer += decoder.end();
        
        // Choose the handler this request should go to. If one is not found, use not found handler
        var chosenHandler = typeof(router[trimmedPath]) !== 'undefined' ? router[trimmedPath] : handlers.notFound
        
        // Construct the data object to send to the handler
        var data = {
            'trimmedPath': trimmedPath,
            'queryStringObject': queryStringObject,
            'method': method,
            'headers': headers,
            'payload': buffer
        };
        
        // Route the request to the handler specified in the router
        chosenHandler(data, function(statusCode, payload){
           // Use the status code called back by the handler, or default to 200
           statusCode = typeof(statusCode) == 'number' ? statusCode : 200;
           
           // Use the payload called back by the handler, or default to an empty object
           payload = typeof(payload) == 'object' ? payload : {};
           
           // Convert the payload to a string
           var payloadString = JSON.stringify(payload);
           
           // Return the response
           res.setHeader('Content-Type', 'application/json');
           res.writeHead(statusCode);
           res.end(payloadString);
           
                   // Log the request path
        console.log("Returning this response: ", statusCode, payloadString);
        });
        
    });
    
    
});

// Start the server and have it listen on port 3000
server.listen(config.port, function(){
    console.log("The server is listening on port " + config.port + " in " + config.envName + " mode");
});

// Define the handlers
var handlers = {};

// Sample handler
handlers.sample = function(data, callback) {
    // Callbackc a http status code, and a payload which should be an object
    callback(406, {'name': 'sample handler'});
};

// Not found handler
handlers.notFound = function(data, callback) {
    callback(404);
};

// Define a request router
var router = {
    'sample': handlers.sample
};