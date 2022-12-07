/* JavaScript Fundamentals - Part 1*/

// ---------------------------------
// LECTURE 10: Values and Variables
// ---------------------------------
// 1. Declare variables called 'country', 'continent', and 'population' and assign their values according to your own country (population in millions)

let country = 'China';
let continent = 'Asia';
let population = 1413; // population in millions, as of December 2021

// 2. Log their values to the console
console.log(country);
console.log(continent);
console.log(population);

// ---------------------------------
// LECTURE 12: Data Types
// ---------------------------------
// 1. Declare a variable called 'isIsland' and set its value according to your country. The variable should hold a Boolean value. Also declare a variable 'language', but don't assign it any value yet.
let isIsland = false;
let language;

// 2. Log the types of 'isIsland', 'population', 'country' and 'language' to the console. 
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// ---------------------------------
// LECTURE 13: let, const and var
// ---------------------------------
// 1. Set the value of 'language' to the language spoken where you live (some countries have multiple languages, but just choose one)
language = 'English';

// 2. Think about which variables should be const variables (which values will never change, and which might change?). Then, change these variables to const.
const country = 'China';
const continent = 'Asia';
const isIsland = false;

// 3. Try to change one of the changed variables now, and observe what happens.
continent = 'Europe'; // this throws an error

// ---------------------------------
// LECTURE 14: Basic Operators
// ---------------------------------
// 1. If your country split in half, and each half would contain half the population, then how many people would live in each half?
const halfPopulation = population / 2;

// 2. Increase the population of your country by 1 and log the result to the console
console.log(population + 1);

// 3. Finland has a population of 6 million. Does your country have more people than Finland?
const moreThanFinland = population > 6;
console.log(moreThanFinland);

// 4. The average population of a country is 33 million people. Does your country have less people than the average country?
const lessThanAverage = population < 33;
console.log(lessThanAverage);

// 5. Based on the variables you created, create a new variable 'description' which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'
const description = country + 'is in ' + continent + ', and its ' + population + ' million people speak ' + language;
console.log(description);

// -------------------------------------------
// LECTURE 17: Strings and Template Literals
// -------------------------------------------
// 1. Recreate the 'description' variable from the last assignment, this time using the template literal syntax
const descriptionNew = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(descriptionNew);
