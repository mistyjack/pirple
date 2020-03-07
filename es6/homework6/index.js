/*
    Write a program that prints the numbers from 1 to 100.
    But for multiples of three print "Fizz" instead of the 
    number and for the multiples of five print "Buzz".
    For numbers which are multiples of both three and five print "FizzBuzz".
    Also, you should print this whenever you encounter a number that is
    prime (divisible only by itself and one). 
*/

// A function that checks for prime numbers
const checkPrime = (num) => {
    if(num === 1) {
        return false;
    }
    for(let i = 2; i <= num/2; i += 1) {
        if(num % i === 0) {
            return false;
        }
    }
    return true;
};

// A function that checks for numbers divisible by 3
const checkFizz = (num) => {
    return num % 3 === 0 ? true : false;
};

// A function that checks for numbers divisible by 5
const checkBuzz = (num) => {
    return num % 5 ===0 ? true : false;
};

// A function that checks for numbers divisible by both 3 and 5
const checkFizzBuzz = (num) => {
    return num % 5 === 0 && num % 3 === 0 ? true : false;
};

// The main function that executes homework 6
const mainFunc  = () => {
    for(let i = 1; i <= 100; i += 1) {
        checkPrime(i) ? console.log("Prime")
        : checkFizzBuzz(i) ? console.log("FizzBuzz")
        : checkFizz(i) ? console.log("Fizz")
        : checkBuzz(i) ? console.log("Buzz")
        : console.log(i);
    }
};

// Invoking the main function
mainFunc();