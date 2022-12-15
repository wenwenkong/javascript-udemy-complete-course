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

// -----------------------------------------------
// Lecture 36. Functions Calling Other Functions
// -----------------------------------------------
/*
Create a function called 'describePopulation'. Use the function type you like the most.
This function takes in two arguments: 'country' and 'population', and returns a string like this:
'China has 1441 million people, which is about 18.2% of the world.'

To calculate the percentage, 'describePopulation' call the 'percentageOfWorld' you created earlier
*/

function describePopulation(country, population) {
    const percentage = percentageOfWorld3(population);
    const description = `${country} has ${population} million people, 
    which is about ${percentage}% of the world.`;
    console.log(description);
    return description;
}

// -----------------------------------------------
// Lecture 39. Introduction to Arrays
// -----------------------------------------------
/*
1. Create an array containing 4 population values of 4 countries of your choice.
You may use the values you have been using previously. Store this array into a variable called 'populations'

2. Log to the console whether the array has 4 elements or not (true or false).

3. Create an array called 'percentages' containing the percentages of the world population for these 4 population values. Use the function 'percentageOfWorld1' that you created earlier to compute the 4
percentage values.
*/

const populations = [33.3, 37.3, 45.8, 3.8]; // Peru, Morocco, Argentina, Croatia
console.log(populations.length === 4);

const percentages = [
    percentageOfWorld1(populations[0]),
    percentageOfWorld1(populations[1]),
    percentageOfWorld1(populations[2]),
    percentageOfWorld1(populations[3])];
console.log(percentages);

// -----------------------------------------------
// Lecture 40. Basic Array Operations (Methods)
// -----------------------------------------------
/*
1. Create an array containing all the neighbouring countries of a country of your choice.
Choose a country which has at least 2 or 3 neighbours. Store the array into a variable 
called 'neighbours'.

2. At some point, a new country called 'Utopia' is created in the neighbourhood of your selected 
country. So add it to the end of the 'neighbours' array.

3. Unfortunately, after some time, the new country is dissolved. So remove it from the end of the array.

4. If the 'neighbours' array does not include the country 'Germany', log to the console: 
'Probably not a central European country :D'

5. Change the name of one of your neighbouring countries. To do that, find the index of the country in the 
'neighbours' array, and then use that index to change the array at that index position. For example, 
you can search for 'Sweden' in the array, and then replace it with 'Republic of Sweden'
*/

const neighbours = ['Slovenia', 'Hungary', 'Serbia', 'Bosnia and Herzegovina']; // Croatia's neighbours

neighbours.push('Utopia');
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (!neighbours.includes('Germany')) console.log('Probably not a central European country :D');

neighbours[neighbours.indexOf('Hungary')] = 'Republic of Hungary';
console.log(neighbours);

// -----------------------------------------------
// Lecture 42. Introduction to Objects 
// -----------------------------------------------
/*
Create an object called 'myCountry' for a country of your choice, containing properties 'country', 'capital', 'language', 'population' and 'neighbours' (an array like we used in previous assignments)
*/
const myCountry = {
    country: 'China',
    capital: 'Beijing',
    language: 'Chinese',
    population: 1441,
    neighbours: ['Afghanistan', 'Bhutan', 'India', 'Kazakhstan', 'North Korea', 'Kyrgyzstan', 'Laos', 'Mongolia', 'Myanmar (Burma)', 'Nepal', 'Pakistan', 'Russia', 'Tajikistan', 'Vietnam']
}

// -----------------------------------------------
// Lecture 43. Dot vs. Bracket Notation
// -----------------------------------------------
/*
1. Using the object myCountry, log a string like this to the console:
'Finland has 6 million finnish-speaking people, 3 neighbouring countries and a capital called Helsinki.'

2. Increase the country's population by two million using dot notation, and then decrease it by two million using brackets notation
*/
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);

myCountry.population += 2;

myCountry['population'] -= 2;

// -----------------------------------------------
// Lecture 44. Object Methods
// -----------------------------------------------
/*
1. Add a method called 'describe' to the 'myCountry' object. This method will log a string to the console, similar to the string logged in the previous assignment, but this time using the 'this' keyword.

2. Call the 'describe' method

3. Add a method called 'checkIsland' to the 'myCountry' object. This method will set a new property on the object, called 'isIsland'. 'isIsland' will be true if there are no neighbouring countries, and false if there are. Use the ternary operator to set the property.
*/

const myCountry2 = {
    country: 'China',
    capital: 'Beijing',
    language: 'Chinese',
    population: 1441,
    neighbours: ['Afghanistan', 'Bhutan', 'India', 'Kazakhstan', 'North Korea', 'Kyrgyzstan', 'Laos', 'Mongolia', 'Myanmar (Burma)', 'Nepal', 'Pakistan', 'Russia', 'Tajikistan', 'Vietnam'],

    describe: function () {
        console.log(
            `${this.country} has ${this.population} million ${this.language}-speaking people, 
            ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
        );
    },

    checkIsland: function () {
        this.isIsland = this.neighbours.length === 0 ? true : false;
    }

    // A simpler version of 'checkIsland':
    // this.isIsland = !Boolean(this.neighbours.length);
}

myCountry2.describe();
myCountry2.checkIsland();
console.log(myCountry2);

// -----------------------------------------------
// Lecture 46. Iteration: The for Loop
// -----------------------------------------------
for (let i = 1; i < 51; i++) {
    console.log(`Voter number ${i} is currently voting`);
}

// -----------------------------------------------------
// Lecture 47. Looping Arrays, Breaking and Continuing 
// -----------------------------------------------------
const percentages2 = [];
for (i = 0; i < populations.length; i++) {
    percentages2.push(percentageOfWorld1(populations[i]));
}
console.log(percentages, percentages2);

// -----------------------------------------------------
// Lecture 48. Looping Backwards and Loops in Loops
// -----------------------------------------------------
listOfNeighbours = [
    ['Canada', 'Mexico'],
    ['Spain'],
    ['Norway', 'Sweden', 'Russia']
];

for (let i = 0; i < listOfNeighbours.length; i++) {
    for (let y = 0; y < listOfNeighbours[i].length; y++) {
        console.log(`Neighbour: ${listOfNeighbours[i][y]}`);
    }
}

// -----------------------------------------------------
// Lecture 49. The while Loop
// -----------------------------------------------------
percentages3 = [];
let i = 0;
while (i < populations.length) {
    percentages3.push(percentageOfWorld1(populations[i]));
    i++;
}
console.log(percentages3);