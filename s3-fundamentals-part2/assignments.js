/*
JavaScript Fundamentals – Part 2
*/

'use strict';

// -------------------------------------
// Lecture 33. Functions 
// -------------------------------------
/* 
Write a function called 'describeCountry' which takes three parameters: 
'country', 'population', and 'capitalCity'. Based on this input, the function
returns a string with this format: 'Finland has 6 million people and its capital
city is Helsinki'
*/
function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

console.log(describeCountry('Finland', 6, 'Helsinki'));

// --------------------------------------------------
// Lecture 34. Function Declarations vs. Expressions 
// --------------------------------------------------
/*
The world population is 7900 million people. 

Create a function declaration called 
'percentageOfWorld1' which receives a 'population' value, and returns the percentage
of the world population that the given population represents. 

Create a function expression which does the exact same thing, called 
'percentageOfWorld2'.
*/

// function declaration 
function percentageOfWorld1(population) {
    return 100 * population / 7900;
}
const chinaPercentage1 = percentageOfWorld1(1441);
console.log(chinaPercentage1);

// function expression 
const percentageOfWorld2 = function (population) {
    return 100 * population / 7900;
}
const chinaPercentage2 = percentageOfWorld2(1441);
console.log(chinaPercentage2);

// -------------------------------------
// Lecture 35. Arrow Functions (ES6)
// -------------------------------------
/*
Repeat the last assignment, but this time create an 
arrow function called 'percentageOfWorld3'
*/

const percentageOfWorld3 = population => 100 * population / 7900;
console.log(percentageOfWorld3(1441));

