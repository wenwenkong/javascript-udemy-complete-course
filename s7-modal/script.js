'use strict';

// --------------------------------------
// Lecture 79. PROJECT #2: Modal Window
// --------------------------------------

/*
We select elements we need, and store them into variables, and then we can use them over and over again

We will be concerned with the following classes:
- .modal

- .overlay

- .close-modal 

- .show-modal

*/

/*
Limitation of .querySelector method:

Whenever we use .querySelector with selector that actually match multiple elements, 
only the first one will get selected. 

So if we do 
const btnsOpenModal = document.querySelector('.show-modal');
console.log(btnsOpenModal); 

only the first one is shown in the console.

Remedy: we use .querySelectorAll
*/

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);
// The consol prints NodeList(3)

// We can iterate the btnsOpenModal in the for loop
// Note here we omit the {} because there is just one line to execute within the for loop
for (let i = 0; i < btnsOpenModal.length; i++)
  console.log(btnsOpenModal[i].textContent);

// --------------------------------------
// Lecture 80. Working with classes
// --------------------------------------

/*
Functionality:

1. We want to open a modal when we click each of the three buttons 

2. We want to close the modal when we click the close button or the overlay 

We achieve these functionalities by attaching an event handler to the associated element

We define 'openModal' and 'closeModal' functions for better readibility and make our code more expressive
*/

const openModal = function () {
  console.log('Button clicked');

  /*
    We want to display the modal. 
    It's hidden now because it's with the hidden class. 
    */
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  /*  
    Note that we are not using '.hidden', as the '. ' is only for the selector, 
    here we are not selecting anything.
    */
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Open the modal
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

// Close the modal
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// ----------------------------------------------
// Lecture 81. Handling an "Esc" Keypress Event
// ----------------------------------------------

/*
Keyboard events are so-called global events, because
they don't simply respond to one specific element. 

For global event like keyboard event, we usually listen 
on the whole document. 
*/

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
