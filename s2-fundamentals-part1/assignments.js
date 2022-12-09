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

// --------------------------------------------------
// LECTURE 18: Taking Decisions: if/else statements 
// --------------------------------------------------
// 1. If your country's population is greater than 33 million, log a string like this to the console: 'Portugal's population is above average.' Otherwise, log a string like 'Portugal's population is 22 million below average' (the 22 is the average of 33 minus the country's population)

if (population > 33) {
    console.log(`${country}'s population is above average`);
} else {
    let belowAverage = 33 - population;
    console.log(`${country}'s population is ${belowAverage} million below average`);
}

// 2. After checking the result, change the population temporily to 13 and then to 130. See the different results, and set the population back to original. ---> Skipped this one

// --------------------------------------------------
// LECTURE 20: Type Conversion and Coercion 
// --------------------------------------------------

// 1. Predict the result of these 5 operations without executing them:
// 2. Execute the operations to check if you were right

// '9' - '5'; 
// '19' - '13' + '17'; 
// '19' - '13' + 17; 
// '123' < 57;  
// 5 + 6 + '4' + 9 - 4 - 2; 

console.log('9' - '5'); // we get 4
console.log('19' - '13' + '17'); // we should get '617'
console.log('19' - '13' + 17); // we should get number 23
console.log('123' < 5); // we should get false
console.log(5 + 6 + '4' + 9 - 4 - 2); // we get 1143 

// --------------------------------------------------
// LECTURE 22: Equality Operators: == vs. === 
// --------------------------------------------------
// 1. Declare a variable 'numNeighbours' based on a prompt input like this: prompt('How many neighbour countries does your country have?');
// 2. If there is only 1 neighbor, log to the console 'Only 1 border!' (use loose equality == for now)
// 3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours' is greater than 1
// 4. Use an else block to log 'No borders' (this block will be executed when 'numNeighbours' is 0 or any other value)
// 5. Test the code with different values of 'numNeighbours', including 1 and 0.
// 6. Change == to ===, and test the code again, with the same values of 'numNeighbours'. Notice what happens when there is exactly 1 border! Why is this happening? 
// 7. Finally, convert 'numNeighbours' to a number, and watch what happens now when you input 1
// 8. Reflect on why we should use the === operator and type conversion in this situation

const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));

if (numNeighbours === 1) {
    console.log('Only 1 border!');
} else if (numNeighbours > 1) {
    console.log('More than 1 border!');
} else {
    console.log('No borders');
}

// --------------------------------------------------
// LECTURE 23: Logical Operators  
// --------------------------------------------------
// 1. Comment out the previous code so the prompt doesn't get in the way
// 2. Let's say Sarah is looking for a new country to live in. She wants to live in a country that speaks english, has less than 50 million people and is not an island.
// 3. Write an if statement to help Sarah figure out if your country is right for her. You will need to write a condition that accounts for all of Sarah's criteria. Take your time with this, and check part of the solution if necessary.
// 4. If yours is the right country, log a string like this: 'You should live in Portugal :)'. If not, log 'Portugal does not meet your criteria :('
// 5. Probably your country does not meet all the criteria. So go back and temporarily change some variables in order to make the condition true

if (language === 'english' && population < 50 && !isIsland) {
    prompt(`You should live in ${country} :)`);
} else {
    prompt(`${country} does not meet your criteria :(`)
}


