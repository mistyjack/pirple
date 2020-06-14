/*
    Since arrays deal with index, destructuring array is also based on
    index making it easy to assign extracted data to any variable name
    unlike destructuring objects, the key must be present even though
    an alias can be created.
    Array destructuring is useful where there's need to extract data
    from an array or to swap values of two variables. Object destructuring
    is useful where there's need to extract data from an object.
*/


let a = 20;
let b = 43;
// To swap the value of a and b
[b, a] = [a, b]

// Destructuring array
const myArr = ["Civil", "Mechanical", "Electrical", "Computer"];
let first, last;
[first, , , last] = myArr;
console.log(first, last);

// Destructuring object
const myObj = {
    firstName: "Misty",
    lastName: "Jack",
};

const {firstName: fName, lastName: lName} = myObj;

console.log(`firstName: ${fName} lastName: ${lName}`);


