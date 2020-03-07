/*
    Assignment 5
    TimeAdder function that can add two time values together.
*/

// An object that stores conversion rates
const labels = {
    "second": 1,
    "minute": 60,
    "hour": 3600,
    "day": 86400
};

// A function that checks valid inputs
const checkValidity = (val, label) => {
    if(val == 1 && label in labels) {
        return label;
    } else if (val > 1 && label.slice(0, label.length-1) in labels) {
        return label.slice(0, label.length-1);
    } else {
        return false;
    }
};

// A function that checks unit
const checkUnit = (val, label) => {
    switch (label) {
        case 'second':
            return val*labels.second;
        case 'minute':
            return val*labels.minute;
        case 'hour':
            return val*labels.hour;
        case 'day':
            return val*labels.day;
        default:
            console.log("Wrong input");
    }
};

// A function that compute results
const checkResult = (sum) => {
    if(sum < labels.minute) {
        return [sum, "second(s)"];
    } else if(sum >= labels.minute && sum < labels.hour) {
        return [sum/labels.minute, "minute(s)"];
    } else if(sum >= labels.hour && sum < labels.day) {
        return [sum/labels.hour, "hour(s)"];
    } else if(sum >= labels.day) {
        return [sum/labels.day, "day(s)"];
    }
};

// Main function
const timeAdder = (value1, label1, value2, label2) => {
    let validityOne = checkValidity(value1, label1);
    let validityTwo = checkValidity(value2, label2);
    let sum;
    
    if(validityOne && validityTwo) {
        sum = checkUnit(value1, validityOne) + checkUnit(value2, validityTwo);
        return checkResult(sum);
    } else {
        return false;
    }
};

// Testing
console.log(timeAdder(4, "days", 24, "hours"));
console.log(timeAdder(4, "day", 24, "hour"));
console.log(timeAdder(4, "hours", 60, "minutes"));
console.log(timeAdder(4, "minutes", 60, "seconds"));
console.log(timeAdder(4, "minutes", 15, "seconds"));