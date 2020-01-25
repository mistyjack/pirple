/*

    Primary file for the API

*/

// Dependences
var http = require("http");
var port = process.env.PORT;
var url = require("url");
var StringDecoder = require("string_decoder").StringDecoder;

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
        
        // Send the respone
        res.end("Hello World\n");
    
        // Log the request path
        console.log("Request received with this payload: ", buffer);
    })
    
    
});

// Start the server and have it listen on port 3000
server.listen(port, function(){
    console.log("The server is listening on port " + port + " now");
});