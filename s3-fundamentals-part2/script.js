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

// -----------------------------------------------
// Lecture 36. Functions Calling Other Functions
// -----------------------------------------------

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of 
    apple and ${orangePieces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(2, 3));

// -----------------------------------------------
// Lecture 37. Reviewing Functions 
// -----------------------------------------------

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}


const yearsUntilRetirement3 = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        return retirement;
        console.log(`${firstName} retires in ${retirement} years`);
    } else {
        return -1;
        console.log(`${firstName} has already retired 🎉`);
    }
}

console.log(yearsUntilRetirement3(1991, 'Jonas'));
console.log(yearsUntilRetirement3(1950, 'Mike'));

/*

The console.log from the above function is ignored and not get executed,
because the return statement immediately exits / returns the function.
So there is no chance the code pieces after the return statement is even reached.

Can use Option + up arrow to move the console.log code up to execute it.

*/

/*

Function Review: 3 different function types

- Function declaration: can be used before it's declared

- Function expression: essentially a function value stored in a variable

- Arrow function: great for quick one-line functions. Has no 'this' keyword (more later ..)

*/

// -----------------------------------------------
// Lecture 38. coding challenge # 1
// -----------------------------------------------

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const avgDolphins = calcAverage(44, 23, 71);
const avgKoalas = calcAverage(65, 54, 49);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas}) vs. ${avgDolphins}`);
    } else {
        console.log('No team wins...');
    }
}

checkWinner(avgDolphins, avgKoalas);

// -----------------------------------------------
// Lecture 39. Introduction to Arrays
// -----------------------------------------------
/*
The two most important data structures in JavaScript are arrays and objects.
*/

// Literal syntax 
const friends = ['Michael', 'Steven', 'Peter'];

// Or, create array using new Array()
const years = new Array(1991, 1984, 2008, 2020);

// Arrays are zero-based 
console.log(friends[0]);

// .length to get the amount of elements in the array
console.log(friends.length);

// to get the last element
console.log(friends[friends.length - 1]);

// mutate array's element
friends[2] = 'Jay'; // now friends becomes ['Michael', 'Steven', 'Jay']

/*
Array elements are mutatable, but we cannot change the whole array like this:
friends = ['Bob', 'Alice']
*/

const firstName = 'Jonas'
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];

console.log(jonas);

/*
Exercise

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

we can not do calcAge(years2)

years2 + 10 gives us '1990, 1967, 2002, 2010, 201810' because + sign converts the array elements to string

years2 - 10 gives us NaN

===> we cannot directly do operation with arrays

*/

const years2 = [1990, 1967, 2002, 2010, 2018];

const ages = [calcAge(years2[0]), calcAge(years2[1]), calcAge(years2[years2.length - 1])];

// -----------------------------------------------
// Lecture 40. Basic Array Operations (Methods)
// -----------------------------------------------

/*
.push method adds elements to the end of an array
*/

const newLength = friends.push('Jay');
console.log(newLength);

/*
.unshift method adds elements to the beginning of an array
*/

friends.unshift('John');
console.log(friends);

/*
.pop method removes the last element 
*/
const popped = friends.pop();
console.log(popped); // element that is removed
console.log(friends);

/*
.shift() remove the first element
*/

friends.shift(); // 
console.log(friends);

/*
.indexOf method tells the index of an element 

if we try an element that does not exist in the array, we will get -1
*/

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob')); // -1

/*
Added in ES6
.includes returns true or false of whether an element is in the array

*/

friends.push(23);
console.log(friends.includes('Steven')); // true
console.log(friends.includes('Bob')); // false
console.log(friends.includes('23')); // false --> does not do type coercion 
console.log(friends.includes(23)); // true

// .includes can be used in conditional statement 
if (friends.includes('Steven')) {
    console.log('You have a friend called Steven');
}

