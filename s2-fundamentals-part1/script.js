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

// --------------------------------------------------
// LECTURE 21: Truthy and Falsy Values 
// --------------------------------------------------

// Falsy values are values that are not exactly false, but will become false when we try to convert them into a boolean
// 5 falsy values: 0, '', undefined, null, NaN  
// Everything else are Truthy values 

console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean('Jonas')); // true
console.log(Boolean({})); // true

// When does JavaScript do the type coercion to booleans? 
// It happens in two scenarios:
// 1. When using logical operators 
// 2. In a logical context for example in the if-else statement

const money = 0;
if (money) {
    console.log("Don't spend it all ;");
} else {
    console.log("You should get a job!");
}

let height;
if (height) {
    console.log('YAY! Height is defined');
} else {
    console.log('Height is UNDEFINED');
}

// --------------------------------------------------
// LECTURE 22: Equality Operators: == vs. === 
// --------------------------------------------------

// === strict equality operator --> does not do type coercion
// == loose equality operator --> does the type coercion
console.log('18' == 18); // true
console.log('18' === 18); // false
console.log(18 === 18); // true

// if there is just one line for the if condition, we don't need to use {}
if ('18' === 18) console.log('You just became an adult :D (strict)');
if ('18' == 18) console.log('You just became an adult :D (loose)');

// General rule for clean code: avoid loose equality operator as much as possible

// prompt 
const favourite = Number(prompt("What's your favourite number?"))
console.log(favourite); // if we enter 23 at the prompt, we get 23 in the console
console.log(typeof favourite); // if we did not convert favourite to number, the type is string

if (favourite === 23) {
    console.log('Cool! 23 is an amazing number!');
} else if (favourite === 7) {
    console.log('7 is an amazing number!');
} else {
    console.log('Number is not 23 or 7');
}

// different operator
// !== strict version, != loose version

if (favourite !== 23) console.log('Why not 23?');

// --------------------------------------------------
// LECTURE 24: Logical Operators 
// --------------------------------------------------
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

// AND: &&
console.log(hasDriversLicense && hasGoodVision);

// OR: ||
console.log(hasDriversLicense || hasGoodVision);

// NOT: !
console.log(!hasDriversLicense);

if (hasDriversLicense && hasGoodVision) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive ...');
}

const isTired = true; // C

console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVisio && !isTired) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive ...');
}

// --------------------------------------------------
// LECTURE 25: coding challenge #3 
// --------------------------------------------------
// 1.
let averageDolphins = (96 + 108 + 89) / 3;
let averageKoalas = (88 + 91 + 110) / 3;

// 2. 
if (averageDolphins === averageKoalas) {
    console.log('Draw!');
} else if (averageDolphins > averageKoalas) {
    console.log('Dolphins is the winner!');
} else {
    console.log('Koalas is the winner!');
}

// 3.
averageDolphins = (97 + 112 + 101) / 3;
averageKoalas = (109 + 95 + 123) / 3;

if (averageDolphins === averageKoalas) {
    console.log('Draw!');
} else if (averageDolphins > averageKoalas && averageDolphins >= 100) {
    console.log('Dolphins is the winner!');
} else if (averageKoalas > averageDolphins && averageKoalas >= 100) {
    console.log('Koalas is the winner!');
}

// 4.
averageDolphins = (97 + 112 + 101) / 3;
averageKoalas = (109 + 95 + 106) / 3;

if (averageDolphins === averageKoalas && averageDolphins >= 100 && averageKoalas >= 100) {
    console.log('Draw!');
} else if (averageDolphins > averageKoalas && averageDolphins >= 100) {
    console.log('Dolphins is the winner!');
} else if (averageKoalas > averageDolphins && averageKoalas >= 100) {
    console.log('Koalas is the winner!');
} else {
    console.log('No team wins the trophy.');
}

// --------------------------------------------------
// LECTURE 26: The switch Statement 
// --------------------------------------------------
// switch statement is an alternative way to write if-else statement
// and it does strict comparison (===)

const day = 'monday';

switch (day) {
    case 'monday': // day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break;
    default:
        console.log('Not a valid day!');
}

if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'tuesday') {
    console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write code examples');
} else if (day === 'friday') {
    onsole.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend :D');
} else {
    console.log('Not a valid day!');
}

// --------------------------------------------------
// LECTURE 27: Statements and Expressions 
// --------------------------------------------------

// Expression: a piece of code that produces value
// Statement: a bigger piece of code that does not produce values itself 

if (23 > 10) {
    const str = '23 is bigger';
}

// In template literal, can only insert expressions not statements
console.log(`I'm ${2037 - 1991} years old`);

// --------------------------------------------------
// LECTURE 28: The Conditional (Ternary) Operator  
// --------------------------------------------------
// Conditional operator allows us to write an if-else like statement in one line

const age = 23;

age >= 18 ? console.log('I like to drink wine') : console.log('I like to drink water');

// Conditional operators are useful to conditionally declare variables 

const drink = age >= 18 ? 'wine' : 'water'; // this operator is an expression, which produces value, and we can store that value to a variable, drink.
console.log(drink);

// To compare, below is an if-else statement, where we need to define drink2 outside the block, because any variables defined within the if-else structure are not available outside
let drink2;
if (age >= 18) {
    drink2 = 'wine 🍷';
} else {
    drink2 = 'water 💧';
}
console.log(drink2);

// Since the conditional operator is an expression, we can use it 
// within template literal
console.log(`I like to drink ${age >= 18 ? 'wine' : 'water}`);

// --------------------------------------------------
// LECTURE 29: coding challenge # 4
// --------------------------------------------------
const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill & 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${tip + bill}`);