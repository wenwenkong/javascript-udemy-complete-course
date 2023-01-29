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

// --------------------------------------------------
// Lecture 91. Execution Contexts and The Call Stack
// --------------------------------------------------

/*
Execution Context steps 
    - A so-called global execution context is created for the top-level code. Top-level code is any code that is not inside any function. So, at the beginning, only the code that is outside of functions will be executed. 
    - In any JS project, no matter how large it is, there is only ever one global execution context. It's always there as the default context, and it's where top-level code will execute. 
    - Once the execution of top-level code is finished, execution of functions and waiting for callbacks. For each and every function call, a new execution context will be created containing all the information that is necessary to run exactly that function. 

Exectuion Context In Detail 
    - What's inside execution context?
        1. Variable Environment: 
            - let, const, and var declarations
            - Functions
            - arguments object 
        2. Scope chain (consists of references to variables that are located outside of the current function). To keep track of the scope chain, it is stored in each execution context. Each context gets a special variable called the this keyword.  
        3. this keyword
    
    - Note for arrow functions: execution contexts belonging to arrow functions do not get their own arguments keyword and this keyword. 

*/

// --------------------------------------------------
// Lecture 92. Scope and The Scope Chain
// --------------------------------------------------

/*
Concepts
    - Scoping
        - Controls how our program's variables are organized and accessed. "Where do variables live?" or "Where can we access a certain variable, and where not?"

    - Lexical scoping
        - Scoping is controlled by placement of functions and blocks in the code; for example, a function that's written inside another function has access to the variables defined in the parent function. 

    - Scope
        - Space or environment in which a certain variable is declared (variable environment in case of functions). There is global scope, function scope, and block scope; 

    - Scope of a variable
        - The entire region of our code where a certain variable can be accessed. 

The 3 types of scope 
    - Global scope
        - Outside of any function or block
        - Variables declared in global scope are accessible everywhere

    - Function scope
        - Variables are accessible ONLY inside function, NOT outside
        - Also called local scope 

    - Block scope (ES6)
        - Variables are accessible ONLY inside block (example: if block, for loop block, etc)
        - HOWEVER, this only applies to let and const variables
            - If we create a variable using var, then that variable is still accessible outside of the block, and would be scoped to the current function or to the global scope
            - So we say let and const are block scoped, while var is function scoped 
        - Functions are also block scoped (only in strict mode)

The scope chain
    - Variable look up
    - Every scope always has access to variables from all outer scopes
    - A certain scope will never ever have access to variables in its inner scope 
    - Again, var is function scoped, while let and const are block scoped 
    - Scope chain only works upwards, not sideways. Thus, sibling scopes cannot access each other

Scope chain vs. Call stack 
    - Scope chain has nothing to do with the order in which functions were called. Or, in other words, scope chain has nothing to do with the order of the execution contexts in the call stack. 
    - 

SUMMARY
    - Scoping asks the question "Where do variables live?" or "Where can we access a certain variable, and where not?"
    - 3 types of scope in JS
    - Only let and const variables are block-scoped; Variables declared with var end up in the closest function scope;
    - Lexical scoping 
    - Scope chain: every scope always has access to all the vars from all its outer scopes
    - Variable lookup
    - ... ... 

*/
