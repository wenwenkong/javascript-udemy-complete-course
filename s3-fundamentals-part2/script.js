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

// -----------------------------------------------
// Lecture 41. Coding Challenge #2
// -----------------------------------------------

function calcTip(bill) {
    if (bill >= 50 && bill <= 300) {
        return bill * 0.15;
    } else {
        return bill * 0.2;
    }
    /*
    Could use a simpler ternary operator:
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
    */
}

/*
Could also use an arrow function

const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

*/

console.log(calcTip(100));

const bills = [125, 555, 44];

const tips = [
    calcTip(bills[0]),
    calcTip(bills[1]),
    calcTip(bills[2])
];

const total = [
    bills[0] + tips[0],
    bills[1] + tips[1],
    bills[2] + tips[2]
];

// -----------------------------------------------
// Lecture 42. Introduction to Objects 
// -----------------------------------------------

const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

// In objects, we can have key:value pairs
// Each key is also called 'properties'

const jonasObject = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};

// -----------------------------------------------
// Lecture 43. Dot vs. Bracket Notation
// -----------------------------------------------
// How to retrieve data from objects and how to change data in objects

console.log(jonasObject.lastName);
console.log(jonasObject['lastName']);

// The big difference between using dot vs bracket is we can put expressions in the bracket

const nameKey = 'Name';
console.log(jonasObject['first' + nameKey]);
console.log(jonasObject['last' + nameKey]);

/*
Another example of why the bracket notation is useful

Assume we need to use some input from user interface to determine 
which properties we want to show
*/
const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');
console.log(jonasObject[interestedIn]);

/*
If the property does not exist in the object, it returns 'undefined', 
which is a falsy value; if it exists in the object, it returns a 
truthy value. 

We can thus build conditional statment based on this.
*/

if (jonasObject[interestedIn]) {
    console.log(jonasObject[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job, and friend');
}

/*
How to use dot and bracket notations to add new properties to the object
*/

jonasObject.location = 'Portugal';
jonasObject['twitter'] = '@jonasschmedtman';
console.log(jonasObject);

// Challenge 
// "Jonas has 3 friends, and his best friend is called Michael"
console.log(`${jonasObject.firstName} has ${jonasObject.friends.length} friends, and his best friend is called ${jonasObject.friends[0]}`);

// -----------------------------------------------
// Lecture 44. Object Methods
// -----------------------------------------------
// Recall that functions are just values, we can add functions as values to objects

const jonasObject2 = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    // calcAge4: function (birthYear) {
    //     return 2037 - birthYear
    // }


    // calcAge4: function () {
    //     console.log(this);
    //     return 2037 - this.birthYear;
    // }

    calcAge4: function () {
        this.age = 2037 - this.birthYear;
    },

    // Challenge
    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge4()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
    }
}

// console.log(jonasObject2.calcAge4(jonasObject2.birthYear));
// console.log(jonasObject2['calcAge4'](jonasObject2['birthYear']));

console.log(jonasObject2.calcAge4());
console.log(jonasObject2.age());
console.log(jonasObject2.age());
console.log(jonasObject2.age());

// Challenge
// "Jonas is a 46-year old teacher, and he has a driver's license."
console.log(jonasObject2.getSummary());

// -----------------------------------------------
// Lecture 45. Coding Challenge #3
// -----------------------------------------------

const markObject = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    }
}

const johnObject = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    }
}

markObject.calcBMI();
johnObject.calcBMI();
console.log(markObject.BMI, johnObject.BMI);

// What I did:
console.log(`${johnObject.fullName}'s BMI (${johnObject.calcBMI()}) is ${johnObject.calcBMI() > markObject.calcBMI() ? 'higher' : 'lower'} than ${markObject.fullName}'s (${markObject.calcBMI()})!`);

// Instructor's code:
if (markObject.BMI > johnObject.BMI) {
    console.log(`${markObject.fullName}'s BMI (${markObject.BMI}) is higher than ${johnObject.fullName}'s BMI(${johnObject.BMI})`);
} else if (johnObject.BMI > markObject.BMI) {
    console.log(`${johnObject.fullName}'s BMI (${johnObject.BMI}) is higher than ${markObject.fullName}'s BMI(${markObject.BMI})`);
}

// -----------------------------------------------
// Lecture 46. Iteration: The for Loop
// -----------------------------------------------

// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}

// -----------------------------------------------------
// Lecture 47. Looping Arrays, Breaking and Continuing 
// -----------------------------------------------------

/*
Example 1
*/
const types = [];
const types2 = [];

for (let i = 0; i < jonasArray.length; i++) {

    // Reading from jonasArray array
    console.log(jonasArray[i], typeof jonasArray[i]);

    // Filling types array
    types[i] = typeof jonasArray[i];

    // Using the push method to fill an array
    types2.push(typeof jonasArray[i]);
}

console.log(types);
console.log(types2);

/*
Example 2
*/
const years3 = [1991, 2007, 1969, 2020];
const ages2 = [];

for (let i = 0; i < years3.length; i++) {
    ages2.push(2037 - years[i]);
}
console.log(ages2);

/*
continue and break statement

continue - immediately exit the current iteration 

break - completely terminates the whole loop 
*/

// Let's say, we only want to print out array elements that are strings
console.log('--- ONLY STRINGS ---');
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] !== 'string') continue;
    console.log(jonasArray[i], typeof jonasArray[i]);
}

// Let'say, we want to not log any other elements once we find a number
console.log('--- BREAK WITH NUMBER ---');
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] === 'number') break;
    console.log(jonasArray[i], typeof jonasArray[i]);
}

// -----------------------------------------------------
// Lecture 48. Looping Backwards and Loops in Loops
// -----------------------------------------------------

// Looping Backwards
for (let i = jonasArray.length - 1; i >= 0; i--) {
    console.log(i, jonasArray[i]);
}

// Loops in Loops
for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`-------- Starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
    }
}

// -----------------------------------------------------
// Lecture 49. The while Loop
// -----------------------------------------------------
/*
Example 1
*/
let rep = 1;
while (rep <= 10) {
    console.log(`Lifting weights repetition ${rep}`);
    rep++;
}

/*
Example 2
*/
let dice = Math.trunc(Math.random() * 6) + 1; // random number 1 to 6

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end ...');
}


// -----------------------------------------------------
// Lecture 50. Coding Challenge #4
// -----------------------------------------------------
bills2 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
tips2 = [];
totals2 = [];

for (let i = 0; i < bills2.length; i++) {
    const tip = calcTip(bills2[i]);
    tips2.push(tip);
    totals2.push(bills2[i] + tip);
}
console.log(bills2, tips2, totals2);

// BONUS
const calcAverage2 = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

console.log(calcAverage2(totals2));