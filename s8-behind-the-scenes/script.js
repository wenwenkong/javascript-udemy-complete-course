'use strict';

// -------------------------------------------------
// Lecture 89. An High-Level Overview of JavaScript
// -------------------------------------------------
/*
High-level
    - Any computer program needs hardware resources such as memory and the CPU
    - Low-level languages such as C, where you have to manually manage these resources. For example, asking the computer for a memory to create a new variable. 
    - For high-level languages such as JavaScript and Python, where we do not have to manage resources at all because these languages have so-called abstractions that take all of the work away from us.
    - The downside is the program will never be as fast or as optimized as C. 
    - One of the powerful tools that takes memory management away from us developers is garbage-collection.

Garbage-collected
    - An algorithm inside the JavaScript engine, which automatically removes old, unused objects from the computer memory in order not to clog it up with unnecessary stuff. 

Interpreted or just-in-time compiled
    - Computer's processor only understands zeros and ones
    - Convert to machine code = compiling --> this happens inside the JavaScript engine

Multi-paradigm
    - In programming, a paradigm is an approach and an overall mindset of structuring our code, which will direct your coding style and technique in a project that uses a certain paradigm. 
    - Three popular paradigms
        1. Procedural programming
        2. Object-oriented programming (OOP)
        3. Functional programming (FP)
    - Can also classify paradigms as 
        Imperative vs Declarative 
    - JavaScript does all three paradigms 

Prototype-based object-oriented
    - Almost everything in JavaScript is an object, except for primitive values such as numbers, strings, etc. 
    - Arrays are just object. Why we can create an array and then use the push method on it? It's because of prototypal inheritance. Basically, we create arrays from an array blueprint, which is like a template and this is called the prototype. This prototype contains all the array methods and the arrays that we create in our code and then inherit the methods from the blueprint so that we can use them on the arrays. 

First-class functions 
    - In a language with first-class functions, functions are simply treated as variables. We can pass them into other functions, and return them from functions. 

Dynamic 
    - Dynamically-typed language: we don't assign types when creating a variable, and the data type of variable can be changed when assigning a new value to it. 

Single-threaded
    - Concurrency model: how the JavaScript engine handles multiple tasks happening at the same time
    - Why do we need concurrency model?
        JavaScript runs in one single thread, so it can only do one thing at a time, and therefore we need a way of handling multiple things happening at the same time
        
        In computing, a thread is like a set of instructions that is executed in the computer's CPU. So a thread is where our code is executed in a machine's processor. 

    - What about a long-running task (such as fetching data from a remote server)? How do we achieve non-blocking behavior?
        --> Use event loop
        

Non-blocking event loop
    - By using an event loop: takes long running tasks, executes them in the "background", and puts them back in the main thread once they are finished 

*/

// -------------------------------------------------
// Lecture 90. The JavaScript Engine and Runtime
// -------------------------------------------------
/*
JS Engine: 
    - Program that executes JavaScript code 
    - Every browser has its own JavaScript engine 
    - The most well known engine is Google's V8. V8 engine powers Google Chrome, but alao Node.js 

Understanding the components of JS engine and how it works:
    - Every JS engine contains a CALL STACK and a HEAP
    - The CALL STACK is where our code is actually executed using something called execution contexts
    - The HEAP is an unstructured memory pool which stores all the objects that our application needs

How the code is compiled to machine code, so that it can be actually executed?

CS sidenote: compilation vs. interpretation 
    - Compilation: entire source code is converted into machine code (a portable file) at once, and written to a binary file that can be executed by a computer. Note that the execution step can happen way after compilation. 
    - Interpretation: interpreter runs through the source code and executes it line by line. Note that for interpretation, source code still needs to be converted to machine code, but that happen right before the execution. 

JavaScript used to be an interpreted language, but interpretable language is much slower than compiled language. 

Modern JavaScript engine now use a mix between compilation and interpretation, which is called just-in-time compilation. 

Just-in-time (JIT) compilation: entire code is converted into machine code at once, then executed immediately. So this still involves two steps, but the difference between JIT and the aforementioned compilation is, there is no portable file of machine code involved, and the execution happens immediately after the compilation. 

Modern JIT compilation of JavaScript
    - As a piece of JavaScript code enters the engine, the first step is to parse the code, which essentially means to read the code. During the parsing process, the code is parsed into a data structure called the abstract syntax tree or AST. This works by first splitting up each line of code into pieces that are meaningful to the language like the const or function keywords, and then saving all these pieces into the tree in a structured way. This step also checks if there are any syntax errors and the resulting tree will later be used to generate the machine code. 
    - Next step is compilation, which takes the generated AST and compiles it into machine code. 
    - This machine code then gets executed right away.
    - Optimization (which can happen multiple times during execution)

JS runtime in the browser and Node.js 
*/
