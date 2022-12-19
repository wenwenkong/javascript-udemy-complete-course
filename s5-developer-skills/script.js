// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// How the prettier formatter works
const x = '23';

if (x === 23) console.log(23);

const calcAge = birthYear => 2037 - birthYear;

// How the user-defined global code-snippets works
// Here we use 'cl' as prefix of 'console.log()'

// How the todohighlighter works: TODO FIXME VIDEO NOTE: BUG

// How to use the Live Server extension
console.log(calcAge(1991));

//---------------------------------------------------
// Lecture 59. Using Google, StackOverflow, and MDN
//---------------------------------------------------
// Showcase how to solve a problem

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what to do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max and return it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    // Exit the current iteration of the curTemp is not a number
    if (typeof curTemp !== 'number') continue;

    // Update max and min
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  // Return the amplitude
  return max - min;
};
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement the functionality twice? Answer: No, just merge two arrays

// 2) Breaking into sub-problems
// - Merge two arrays

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    // Exit the current iteration of the curTemp is not a number
    if (typeof curTemp !== 'number') continue;

    // Update max and min
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  // Return the amplitude
  return max - min;
};
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);

//--------------------------------------------------------
// Lecture 61. Debugging with the Console and Breakpoints
//--------------------------------------------------------

/*
Debugging example: conver celsius to kelvin
*/

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',

    // C) FIX THE BUG
    // Conver the string to a number
    value: Number(prompt('Degrees celsius:')),
  };

  // B) FIND THE BUG
  // We will see that value is type of string
  // That's because the 'prompt' function always returns a string
  console.table(measurement);

  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());

// A) IDENTIFY THE BUG: when we type in 10 in the prompt, we got 10273 in the console, which is not what we expected.

/*
Debugging example: 
*/

const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  // Introducing bug
  // Instead of setting the initial value of max and min to temps[0],
  // we set them to zero, which would be a problem in some circumtances
  let max = 0;
  let min = 0;
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    // Exit the current iteration of the curTemp is not a number
    if (typeof curTemp !== 'number') continue;

    debugger;
    // Update max and min
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  // Return the amplitude
  return max - min;
};
const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 0, 5]);
console.log(amplitudeBug);

//--------------------------------------------------------
// Lecture 62. Coding Challenge # 1
//--------------------------------------------------------

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures. 

Example: [17, 21, 23] will print "... 17°C in 1 days ... 21°C in 2 days ... 23°C in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let printString = '';
  for (let i = 0; i < arr.length; i++) {
    printString += ` ... ${arr[i]}°C in ${i + 1} days`;
  }

  console.log(printString + ' ...');
};
printForecast(data1);
