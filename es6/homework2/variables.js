/*

    VAR KEYWORD
    
    This keyword was the only way to define variables both inside and outside 
    of different blocks in JavaScript before the advent of ES6.
    
    It is less strict in the sense that if there exists a block of function, 
    and inside this block of function, there exists another block, say if block, 
    if the var keyword is used to define a variable inside the if block, 
    it will still be accessible outside the if block in the function block. 
    An illustration can be seen in example 1.
    
    LET KEYWORD
    
    This was introduced in ES6. It's similar to var keyword just that it is 
    more strict which in turn reduces the ambiguity of the declared variable.
    
    If a variable is defined with let keyword in the inner block mentioned in 
    the description above, the variable won't be accessible anywhere outside the 
    block. An illustration can be seen in example 2.
    
    CONST KEYWORD
    
    This was also introduced in ES6. Changing the value of any variable defined 
    with this keyword is almost impossible. The value can only be mutated in some 
    ways like pushing additional values in the case of array and adding another 
    key-value pair in the case of an object. An illustration can be seen in 
    example 3.


*/


// Example 1
function greet() {
    if (true) {
        var world = "world!";
    }
    console.log("Hello" + " " + world);
    /*
        Even though the varible world was declined in an inner block, it was 
        still accessible outside the block.
    */
}

greet();

// Example 2
function greet() {
    if (true) {
        let world = "world!";
    }
    console.log("Hello" + " " + world);
    /*
        Since the variable world was defined with let inside an inner block,
        this block of code will throw an error because the variable isn't 
        accessible.
    */
}

// Example 3
const PI = 3.142;
const OBJ = {
    name: "Misty"
};
const ARR = [10, 20];

PI += 1; // This line will throw an error since it's trying to reassign PI;
console.log(PI);

OBJ.age = 21; // This line demonstrates the process of mutating a const object
console.log(OBJ);

ARR.push(30, 40); // This line demonstrates the process of mutating an array
console.log(ARR);