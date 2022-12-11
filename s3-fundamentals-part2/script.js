// -------------------------------------
// Lecture 32. Activating Strict Mode 
// -------------------------------------
/*
We can activate strict mode in JavsScript to 
make sure we write secure code

To do so, we add 'use strict'; at the beginning of
the entire code

Note that this statement has to be the very first line
of code, if there are other code pieces before this 
statement, then the strict mode will not be activated.
*/

'use strict';

/*
1) Make it easier for us to catch bug

Below is an example where we can see seting a strict mode helps
us to debug

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log('I can drive :D');
*/

/*
2) Introduce a short list of variable names that are reserved
for features that might be added to the language later.

const interface = 'Audio';
const private = 534;
const if = 23;

We get the error message: 'Uncaught SyntaxError: Unexpected strict mode reserved word'

That's because JavaScript reserves features that might be added in the future
*/

// -------------------------------------
// Lecture 33. Functions 
// -------------------------------------

// {} is the function body
function logger() {
    console.log('My name is Jonas');
}

// calling / running / invoking the function 
logger();

// parameters and returns 
function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);

// --------------------------------------------------
// Lecture 34. Function Declarations vs. Expressions 
// --------------------------------------------------

/*

function declaration

*/
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);

/* 
function expression

function without a name - anonymous functions 

we create this anonymous function as an expression 

*/
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);
console.log(age1, age2);

/*
Difference between function declaration and expression

- We can call function declarations before they are defined 
- But we cannot do so for function expression

*/

// -------------------------------------
// Lecture 35. Arrow Functions (ES6)
// -------------------------------------

// A faster way added in ES6
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

// We use {} and return when we have multiple lines of code in the body 
const yearsUntilRetirement = birthYear => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return retirement;
}
console.log(yearsUntilRetirement(1991));

/*
When we have more than one parameters 
*/
const yearsUntilRetirement2 = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetirement2(1991, 'Jonas'));


