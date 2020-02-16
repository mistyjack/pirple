/*
 * Assignment three, keeping up with javascript
*/

let Mortal = {}; // Creating Mortal object
Mortal.men = []; // Men becoming a descendant of Mortal
let man = "Socrates";
Mortal.men.push(man);

// Check if socrates in contained in array of men and if yes,
// check if men is a descendant of mortals

if (Mortal.men.includes(man)) {
    console.log("Correct! " + man + " is a man\n" + 
    "But wait, lets see if men are mortals\n-----------");
    if ("men" in Mortal) {
        console.log("Perfect! Men are mortals and since " +
        man + " is a man and all men are mortals, therefore " + 
        man + " is a mortal\n\n");
    } else {
        console.log("Since men are not mortals and " + man + 
        " is a man, therefore " + man + "is not a mortal\n\n");
    }
}

// Extra credit
let vanila = [];
let chocolate = [];
vanila.push("Cake");

console.log("Lets see if cake is either vanila or chocolate");
if(vanila.includes("Cake") || chocolate.includes("Cake")) {
    console.log("Yup! This cake is either vanila or chocolate\n" +
    "Lets see if the cake is vanila or chocolate");
    if(!(chocolate.includes("Cake"))) {
        console.log("Since cake isn't chocolate, therefore cake is vanila");
    } else {
        console.log("Cake is chocolate");
    }
} else {
    console.log("Cake is neither vanila nor chocolate");
}
