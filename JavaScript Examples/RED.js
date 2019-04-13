/* 

Hello World JS

This opens a prompt and displays hello world */

alert("Hello World!");

/* Variables;

let - const - var 

Nest a value into the variable such as */

const a = 10; 

/* 
	a statement you can write with this 
*/

const a = 10;

if (a > 21 || a * 4 === 32) {
	consoel.log('Got a result!');
}

/* you can use two variables, one can be an "amount" then the second can be a result,
	taking the "VALUE" variable into its own variable like so */


/* Uninitialized Variables;

	We can declare variavles, without assigning a value using let.

	Unassigned variables automatically get the JS value of undefined */

let a;
let b;
let c;

console.log(a); // Logs "undefined"

/* Defined Variables sharing values.

you can use two variables, one can be an "amount" then the second can be a result,
	taking the "VALUE" of 'amount' variable into its own variable like so */

const amount = 100;
const result = amount * 10;

console.log(amount) // Prints 1000 to the console.

/* Statement & Variable */

const today = new Date();
const dayOfWeek = today.getDay(); // Gets today's date
let greeting; // Defining a variable of greeting.

if (dayOfWeek === 2) { // Statement (if) takes argument of variable dayOfWeek, checks if its 2(tuesday)
  greeting = 'Today is Tuesday'; // greeting will be Tuesday
} else { // Statement (else) not 2 (tuesday) 
  greeting = 'Nope, not Tuesday!'; // greeting will be not tuesday
} 
console.log(greeting); // Logs either Tuesday or not Tuesday.

/* USING PROMT 

using the words prompt will allow you to set an alert that allows for a text input in return */

console.log('Hello World!');
const yourName = prompt('Oliver')
console.log(yourName);

/* PRIMITIVES 

When working with operators, we'll have to ensure that the alue swe are using in our expressions are appropriate;

That means numbers for math, strings for creating text, etc.

Primitive values include;  */

'I am a String'; // String
'I am another string'; // string
42; // Number
true; // boolean
false; // boolean

/* ARITHMETIC OPERATORS 

JavaScript has basic arthimetic operators ;

+ - / % and *

In use; */

const quantity = 3 + 2; // 5
const total = (4 - 1) * 3; 
let totalAndOne = total++;
let totalMinusOne = total--;

// There are also special operators that allow us to increment and decrement a value;

let i = 5;
i++;

console.log(i); // Logs 6

let i = 5;
i--; 

console.log(i); // Logs 4

// Or we can find the remainder of an expression;

const remainderOne = 10 % 3;
console.log(remainderOne); // Prints 1

const remainderTwo = 6 % 2;
console.log(remainderTwo); // Prints 0

/* Comparison Operators 

We can also compare values and evaluate their result; */

const value = 3 > 2;
console.log(value); // Log - True

const value = 3 >= 2; 
console.log(value) // Log True

const value = 3 < 2; 
console.log(value) // False

const value = 3 == 2:
console.log(value) // False - Does this = to it 

const value = 3 === '3';
console.log(value); // False as its not EXACT - STRICT

const value = 3 != '3';
console.log(value); // False 

const value = 3 !== 2;
console.log(value); // True 



/*  COMPARISON OPERATORS AND CONDITIONS 

Comparison operators are helpful when paired with conditional statements */

const score = prompt("What's your score?");
if (score >= 50) { // operator written in conditional
  console.log('You passed!'); // If you input 50 or above this will print
} else {
  console.log('Keep trying...'); // If you input a number between 0 - 49 this will print
}

// Another version 

const score = prompt("What was your driving test score");
if (score >= 43) {
  console.log("Well done, you can drive!"); // 43 or above responds this
} else {
  console.log("best to try again, don't want you too crash"); // 42 or below responds this 
}


/* TYPE COERCION

In JS, certain operations can cahgne the value of primitives

Getting used to how javascript handles primitives is an important part of using the language,
and also the cause of many bugs and frustrations for beginners. 

Try this; */

const a = '42';
const b = Number(a);

console.log(a); // "42" - prints as a STRING.
console.log(b); // 42 - prints as a number.

/* COERCION + OVERLOADING

More type coercion; */

'2' === 2; // False = as its a string comparing a number
'2' == 2; // True as it does eqaul the same VALUE 

// Operator Overloading 

'42' + 5; // "425" - Adds the 5 INTO the string as its not a number adding number.
5 + '42'; // "542" - Places the 5 into the string due to hierachy

/* Because of this unqiue behavior, its best practice to always use === when doing value comparisons.


AND ( && ) AND OR ( || )

In JS we can check for truthy and falsy values;

for example, we can write an if statement like this; */

if (a < b || b > c) {
	console.log('Got a result');
}


// EXERCISE 

if (8 < 10 && 10 > 9) {
	console.log('Got a result'); // Returns got a result 
} else {
  console.log('Didn`t get a result'); // If (8 & 10) are swapped same with (10>9) this will print.
}


/* SHORT CIRCUITS 

We can use a comparison operators and asssignment to get a value depending on some condition. */

const b = 7;
const c = 8;
const a = b && c;

console.log(a); // This prints the higher number, so 8(c) is printed.

const b = 7;
const c = 8;
const a = b || c;

console.log(a); // Prints the lowest number, so 7(b) is printed.


/* THE TERNARY OPERATOR

We can reduce the number of line in simple conditionals by using the ternary operator; */

const a = b < 21 ? b : c;

/* This statement reads, "If (b) is less than 21, then the value of (a) will be (b),
	otherwise (a) will have the value of (c)" */

const b = 10;
const c = 18;
const a = b < 21 ? b : c;

console.log(a); // PRINTS 10

const b = 25;
const c = 18;

const a = b < 21 ? b : c;

console.log(a); // PRINTS 18


/* ARRAYS 

Arrays are special object in JS that store a list of values,
but the key for each value is an index.

all Arrays begin with 0 NOT 1. */

const myWords = ["Fam", "Boyzie", "Dude"];

console.log("Yo whats good" + " " + myWords[0]);

const dontForget = ["Milk", "Eggs", "Rizla"];
dontForget.push("Bud");

console.log("Dude, don't forget the" + " " + dontForget[2] + " and " + dontForget[3]);

const myWords = ["Pengting", "Fitty", "Thot"];

console.log("Daaymn, that" + " " + myWords[3] + " " + "is a" + " " + myWords[0]);


// EXERCISE 1 

alert("Hello World!");
const yourName = prompt("What's your name?");
console.log("Hello World!" + " " + yourName);




/* OBJECTS 

Objects are like containers that hold groups of related variaels and functions to create an organized model of something in your code.
*/

const person = {
  firstName: 'Oliver',
  lastName: 'Heward',
  height: 2,
  beard: false
};

console.log(person.firstName, person.lastName, person.height, person.beard);



const person = {
  firstName: 'Silent',
  lastName: 'Bob',
  height: 1.75,
  beard: true,
};

console.log(person['firstName', 'lastName', 'height', 'beard']);

/* Arrays in Objects

We can also store arrays as properties in objects. */

const errands = {
	date: new Date(),
	complete: false,
	locations: ['Post Office', 'Grocery Store', 'Hardware Store']
};

const firstStop = errands.locations[0]; // will equal "post office"


const errands = {
	date: new Date(),
	complete: false,
	locations: ['Post Office', 'Grocery Store', 'Hardware Store']
};

const firstStop = errands.locations[0];
const secondStop = errands.locations[1];
const thirdStop = errands.locations[2];

console.log(firstStop, secondStop, thirdStop);

// pushing more data into it 
const errands = {
	date: new Date(),
	complete: false,
	locations: ['Post Office', 'Grocery Store', 'Hardware Store']
};

errands.locations.push('pub');

const firstStop = errands.locations[0];
const secondStop = errands.locations[1];
const thirdStop = errands.locations[2];
const fourthStop = errands.locations[3];

console.log(firstStop, secondStop, thirdStop, fourthStop);



/* FUNCTIONS 

	Simply writing a function doesnt do much 

	we need to call or invoke it for it to do any work for us. */





// Prompt function 
function fullName() {
  const yourName = prompt("Whats`s your name?");
  console.log(yourName);
}

fullName(); // invoke 


/* Function declarations 
 	function declarations are exactly what we've seen so far.

 	these functions can be called before they are even declared in your code.
 		(known as hoisting). */
const size = volume(3, 4, 5);

console.log(size);

function volume(width, height, depth) {
  return width * height * depth;
}

/* Function expressions 
Function expressions usually dont have a name.
	Functions without names are known as anonymous functions

	This function expression is stored in a variabel called Volume.
*/

const volume = function(width, height, depth) {
  return width * height * depth;
};
const size = volume(3, 4, 5);
console.log(size);

// Unlike function declaration, this function wont be avalible to use until the interpretator reaches that point in the code.



/* METHODS (FUNCTIONS AS OBJECT PROPERTIES)

	for objec tmeothds, we write getName: function () {...}
	instead of function getName() {...} */

const person = {
	firstName: 'Silent',
	lastName: 'Bob',
	height: 1.75,
	beard: true,
	getName: function() {
		return this.firstName + ' ' + this.lastName;
	},
};

const fullName = person.getName(); 
console.log(fullName);

// Brownie Points for me below 

const person = {
	firstName: 'Silent',
	lastName: 'Bob',
	height: 1.75,
	beard: true,
	getName: function() {
		return this.firstName + ' ' + this.lastName;
	},
  getMoreInfo: function() {
    return this.height + ' ' + this.beard;
  },
};

const fullName = person.getName();
const moreInfo = person.getMoreInfo();

console.log(fullName);
console.log(moreInfo);


/* THIS. 

In JS, this is a special word and it always refers to one object!

Inside of an objects method, it refers to the object itself. */


/* WHILE LOOPS 

While loops are helpful when you don't know how many times it needs to run: */

let i = 0;
let score = 0;
while (i < 5) { // cant run past 4 (which is less than 5)
  score = i;
  console.log('Your score : ' + score);
  i++; // increments 1 each time until it reaches 4
}

/* FOR LOOPS 

For loops allow you to set a specific number of times that the loop will run; */

let count = 0;

for (let i = 1; i < 5; i++) {
	count = i;
	console.log('Current count: ' + count);
}

/* ARRAYS AND LOOPS

Take a look at this shopping list array and print it out in a list */

const shopplingList = ['coffee', 'pepper', 'apple juice'];

const totalItems = shoppingList.length;

for (let i = 0, i < totalItems; i++) {
	console.log(shoppingList.length);
};





function dogsCats() {
	const catsDogs = prompt("Do you prefer dogs or cats?");
	console.log(catsDogs);
if (catsDogs = "dogs") {
	return 'I love Dogs too!';
} else {
	return 'Cats are evil!'
}
}

dogsCats();


function dogsCats() {
	const catsDogs = prompt("Do you prefer dogs or cats?");
  console.log(catsDogs);
if (catsDogs === "dogs") {
	return 'I love Dogs too!';
} else {
	return 'Cats are evil!';
  }
}
dogsCats();

