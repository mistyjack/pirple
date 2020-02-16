/*
    Homework 4
*/

// Create Mortal construction function
function Mortal(members) {
    this.members = members;
}

// Defining men as an instance of Mortal
var men = new Mortal([]);

// Defining fucntion that checks mortality
const checkMortal = (person="Default") => {
    if(typeof person == "string") {
        return men.members.includes(person) && men instanceof Mortal;
    }
    else {
        console.log("Wrong input, please enter your name");
        return false;
    }
};

// Test before adding Socrates to men members array
console.log(checkMortal("Socrates"));

// Add Socrates to men members array
men.members.push("Socrates");

// Test after adding Socrates to men members array
console.log(checkMortal("Socrates") + "\n");
console.log(checkMortal(10) + "\n");


// Extra credit
const checkCakeFlavour = (cakeArr, isChocolate) => {
    if(isChocolate) {
        return "Chocolate";
    } else {
        return "Vanilla";
    }
};

console.log(checkCakeFlavour(["Chocolate", "Vanilla"], true));