// ---------------------------------
// LECTURE 10. Values and Variables 
// ---------------------------------

// it's a good habit to add ; at the end of each small piece of code
let js = 'amazing';

// We use console.log() whenever we want to output something in the console of our browser
console.log(40 + 8 + 23 - 10);
console.log("Jonas");
console.log(23);

// Variables
// Naming convention: camelCase - when we have multiple words in a name, write the first word with a lowercase and then all the next words with upper case
// Cannot start with numbers
// Cannot name a variable using the reserved keywords in JavaScript
// Though it's not illegal, suggest not to let a var name starts with an uppercase letter, also suggest not to name a var using name 
// Variable names can only contain numbers, letters, underscores, or the dollar sign.  
// Define constants with all uppercase letter so you know they cannot be changed
let firstName = "Jonas";
console.log(firstName);
let PI = 3.1415;

// Sugest to name variables with descriptive words
let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher';


// ---------------------------------
// LECTURE 12. Data Types 
// ---------------------------------
let javascriptIsFun = true;
console.log(javascriptIsFun);

// use typeof to get the datatype
console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');

// dynamic typing 
// when we want to change value of a variable, we do not need to use let
javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

// undefined variable 
let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

// one error in typeof, which hasn't been corrected for legacy reasons
// the following code will prints that the type is object, which isn't true
console.log(typeof null);

// ---------------------------------
// LECTURE 13. let, const and var 
// ---------------------------------

// let:
// -  we use let keyword to declare variables that can be changed later. That's also called 'mutate' a variable.
// - we can also use let to declare empty variables at the beginning of the script, and assign values to them at a certain point based on certain conditions.

// const: 
//- declare variables that are not supposed to change, these variables are also called 'immutable variables'.
// - cannot create an empty variable using const

// let vs const:
// - as the best practice for writing clean code, always recommend to use const by default, unless you are very sure the variable needs to change at some point.

// var
// - the old way to declare variables, prior to ES6
// - suggest to avoid using var

// ---------------------------------
// LECTURE 14. Basic Operators 
// ---------------------------------

// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5;
x += 10; // x = x + 10
x *= 4; // x = x * 4
x++; // x = x + 1
x--; // x = x - 1
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

// ---------------------------------
// LECTURE 15. Operator Precedence 
// ---------------------------------

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018);

// assignment operates from right to left
let x, y;
x = y = 25 - 10 - 5; // x = y = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

// ---------------------------------
// LECTURE 16: coding challenge #1
// ---------------------------------
// TEST DATA 1
const markWeight = 78;
const markHeight = 1.69;
const johnWeight = 92;
const johnHeight = 1.95;

const markBMI = markWeight / markHeight ** 2;
const johnBMI = johnWeight / johnHeight ** 2;
const markHigherBMI = markBMI > johnBMI;
console.log(markBMI, johnBMI, markHigherBMI);

// ------------------------------------------
// LECTURE 17: Strings and Template Literals
// ------------------------------------------
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!''
console.log(jonas);

// Template Literals 
// Use backticks 
const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

// Can also use backticks for regular string
console.log(`Just a regular string ...`);

// Create multiline strings 

// old way
console.log('String with \n\
multiple \n\
lines');

// new way
console.log(`String
multiple
lines`);

// --------------------------------------------------
// LECTURE 18: Taking Decisions: if/else statements
// --------------------------------------------------

const age = 15;

if (age >= 18) {
    console.log('Sarah can start driving license 🚗');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 1991;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century); // if we do not define century outside of the if-else control strucutre, we would get error from this console.log(century)

// --------------------------------------------------
// LECTURE 19: coding challenge # 2
// --------------------------------------------------

if (markBMI > johnBMI) {
    console.log("Mark's BMI is higher than John's!");
} else {
    console.log("John's BMI is higher than Mark's!");
}

if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
}

// --------------------------------------------------
// LECTURE 20: Type conversion and coercion 
// --------------------------------------------------

// ------ Type conversion
// Suppose we ask users to input a year on our web interface, the input comes in as a string
// in this case we cannot directly use the user input to do math operations
// for example, we would get 199118 in the console from the below code
const inputYear = '1991';
console.log(inputYear + 18);

// We can use Number() to convert to number
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

// We get NaN if Number() fails to produce a number
console.log(Number('Jonas'));

// NaN is still type of number, but it's invalid number
console.log(typeof NaN);

// Convert number to string
// Note the function starts with capital: Number(), String()
console.log(String(23), 23);

// ------ Type coercion
// type coercion happens whenever the operation is dealing with two values of different types
// in that case, javascript will do type coercion behind the scenes, to convert one of the values to match the other value
console.log('I am ' + 23 + ' years old');

// minus sign triggers the conversion from string to number
console.log('23' - '10' - 3); // we get 10

// plus sign triggers the conversion from number to string
console.log('23' + '10' + 3); // we get '23103'

// *
console.log('23' * '2'); // we get 46

// exercise
let n = '1' + 1; // '11'
n = n - 1; // 10
console.log(n);

console.log(2 + 3 + 4 + '5'); // we get '95'

console.log('10' - '4' - '3' - 2 + '5'); // we get '15'

