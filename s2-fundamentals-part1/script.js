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
// - wWe can also use let to declare empty variables at the beginning of the script, and assign values to them at a certain point based on certain conditions.

// const: 
//- declare variables that are not supposed to change, these variables are also called 'immutable variables'.
// - cannot create an empty variable using const

// let vs const:
// - as the best practice for writing clean code, always recommend to use const by default, unless you are very sure the variable needs to change at some point.

// var
// - the old way to declare variables, prior to ES6
// - suggest to avoid using var


