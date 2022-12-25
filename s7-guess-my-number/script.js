'use strict';

//---------------------------------------------
// Lecture 70. Project #1: Guess My Number!
//---------------------------------------------

// Select the query element .message
// Console output: <p class="message">Start guessing...</p>
// Select the element property .textContent
// Console output: Start guessing ...
console.log(document.querySelector('.message').textContent);

//-------------------------------------------------
// Lecture 71. What's the DOM and DOM Manipulation
//-------------------------------------------------
/*
DOM = Document Object Model: Structured Representation of HTML documents. 
Allows JavaScript to access HTML elements and styles to manipulate them. 

We can change text, HTML attributes, and even CSS styles. 

So we can view DOM as a connection point between HTML document and JavaScript code.

The DOM is automatically created by the browser as soon as HTML page loads, and it's stored in a tree structure. Each element is an object. 

                         Document

                         Element
                          <html>
            Element                   Element
             <head>                    <body>

            Element             Element         Element
            <title>            <section>        <section>

            ...           Element     Element   Element
                            <p>         <p>      <img>
                            ...        ...        ...
*/

/*
We use terms like 'child element', 'parent element', 'sibling element' and so on when we talk about the DOM tree and DOM manipulation. We can edit and interact with each element node using JavaScript. 
*/

/*
DOCUMENT: special object that is the entry point to the DOM. Example: document.querySelector()
*/

/*
Clarifications
- DOM !== JavaScript 

- DOM Methods and Properties are part of WEB APIs. WEB APIs are libraries (also written in JavaScript) that browsers implement and we can access from our JavaScript code. API stands for Application Programming Interface. 

- Besides DOM, there are many other WEB APIs, such as 'Timers', 'Fetch', etc. 
*/

//-------------------------------------------------
// Lecture 72. Selecting and Manipulating Elements
//-------------------------------------------------

// Change the textContent of the class .message
// This change 'Start guessing ...' to '🎉 Correct Number!'
document.querySelector('.message').textContent = '🎉 Correct Number!';
console.log(document.querySelector('.message').textContent);

// Manipulate the textContent for the .number class and .score class
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

// Manipulate the input box
// Use the .value property to get the input value
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);

//-------------------------------------------------
// Lecture 73. Handling Click Events
//-------------------------------------------------

// In order to listen to events, we first need to select the elements where the event should happen.
// Here, we want to listen to the 'Check!' button, as this is where the click that we are interested in that will happen.

// We call '.addEventListener' method on the element document.querySelector('.check')
// There are multiple ways to listen to an event, this '.addEventListener' method is the mostly used one
// We first pass the type of the event, in this case, it's 'click'
// Then we need to tell the event listener what to do. That is, we need to specify the reaction to the 'click' event. And we do that by defining a function, and that function should contain exact code that should be executed whenever this 'click' event happens on this check button.
// That function is called the event handler
// In the '.addEventListener()' method, we pass the function as the second argument (recall that a function is basically just a value).
// The function will only be called when the event happens.
document.querySelector('.check').addEventListener('click', function () {
  // Recall that the user input will always be a string, so we convert it to a number
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // Implement the game logic
  // Scenario 1: there is no input
  // If there is no value in the input box, guess = 0 (a falsy value), so we use '!guess' to convert it to 'true' to execute the reaction
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No number!';
  }
});
