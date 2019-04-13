/* JAVASCRIPT FUNCTIONS

What are functions? 

When first learning how to calculate the area of a rectangle, theres a sequence of steps to calculate the correct answer: 

1. Measure the width of a rectangle.
2. Measure the height of the rectangle.
3. Multiply the width and height of the rectangle.

With practice, you can calculate the area of a rectangle without being instructed with these three steps every time.

We can calculate the area of one rectangle with the following code:  */

const width = 10;
const height = 6;
const area = width * height;
console.log(area); // Output: 60


// if you had to work out 3 rectangles!

const width1 = 10;
const height1 = 6;
const area1 = width1 * height1;

const width2 = 4;
const height2 = 9;
const area2 = width2 * height2;

const width3 = 10;
const height3 = 10;
const area3 = width3 * height3;

/* 
In programming, we often use code to perform a specific task multiple times. instead of rewriting the same code, we can group a block of code together and associate it with one task, then we can reuse that block of code whenever we need to perform the task again. We achieve this by creating a function. A function is a reusable block of code that groups together a sequence of statements to perform a specific task.

FUNCTION DECLARATIONS

In JavaScript, there are many ways to create a function. One way to create a function is by using a function declaration. Just like how a variable declaration binds a value to a variable name, a function declaration binds a function to a name, or an identifier. */

function greetWorld() {
	console.log(‘Hello, World!’);
}

/* A function declaration consists of: 

- the function keyword
- the name of the function, or its identifier, followed by a parentheses.
- A function body, or the block of statements required to perform a specific task, enclosed in the function’s curly brackets, {}.

A function declaration is a function that is bound to an identifier, or name. In the next exercise we’ll go over how to run the code inside the function body.

We should also be aware of the hoisting feature in JavaScript which allows access to function declarations before they’re defined. */

console.log(greetWorld()); // Output: Hello, World!

function greetWorld() {
	console.log(‘Hello, World!’);
}


// Notice how hoisting allowed greetWorld() to be called before the greetWorld() function was defined! Since hoisting isn’t considered good practice, we simply want you to be aware of this feature.

function getReminder(){
  console.log('Water the plants.')
}

function greetInSpanish(){
  console.log('Buenas Tardes.')
}

/* —————————

CALLING A FUNCTION

As we saw in previous, a function declaration binds a function to an identifier.

However, a function declaration does not ask the code inside the function body to run, it just declares the existence of the function. The code inside a function body runs, or executes, only when the function is called. To call a function in your code, you type the function name followed by the parentheses. 

greetWorld - is the indentifier. 

This function call executes the function body, or all of the statements between the curly braces in the function declaration. 
*/ 

function getGreeting() {
	console.log(“Hello, World!”);
}
getGreeting();

// To make it say thank you for purchasing an item from a website;

function sayThanks(){
  console.log('Thank you for your purchase! We appreciate your business.')
}
sayThanks();

/* ——————————

PARAMETERS AND ARGUMENTS

So far, the functions we’ve created execute a task without an input. However, some functions can take inputs and use the inputs to perform a task. When declaring a function, we can specify its parameters. Parameters allow functions to accept inputs(s) and perform a task using the inputs(s). We use parameters as placeholders for information that will be passed to the function when it is called. 

Lets observe how to specify parameters in our function declaration; */

function calculateArea(width, height) {
	console.log(width * height);
}

/* In the diagram above, ‘calculateArea()’ computes the area of a rectangle, based on two inputs, width and height. The parakeets are specified between the parenthesis as width and height, and inside the function body, they act just like regular variables. Width and height act as placeholders for values that will be multiplied together.

When calling a function that has parameters, we specify the values n the parentheses that follow the function name. The values that are passed to the function when it is called are called arguments. Arguments can be passed to the function as values or variables. 
*/ 

calculateArea(10, 6);
/*
IN the function call above, the number 10 is passed as the width and 6 is passed as height. Notice that the order in which arguments are passed and assigned follows the order that the parakeets are declared.
*/

const rectWidth = 10;
const rectHeight = 6;

calculateArea(rectWdith, rectHeight);

/* The variables rectWidth and rectHeight are intialiazed with the values for the height and width of a rectangle before being used in the function call.

By using parameters, calculateArea() can be used to computer the area of any rectangle! Functions are a powerful tool in computer programming so let’s practice creating and calling functions with parameters.
*/

function sayThanks(name) {
  console.log('Thank you for your purchase ' + name + '! We appreciate your business.');
}

sayThanks('Cole');




