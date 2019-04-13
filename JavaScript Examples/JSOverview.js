/* --------  JAVASCRIPT OVERVIEW  -----------

JavaScript is the only client side programming language that your browser can understand;

--- STATEMENTS ;

	Everything in JavaScript is a statement, or a way of organizing and structuring statements */

	1+1
	console.log('hello');
/* 
--- EXPRESSIONS ;
	
	An expression is when you are making a comparison in JavaScript, */

	1 > 5 (false)
	1 < 5 (true)
	1 === 5 (false) 

//	Any time the use of an operator is used then we are making an expression.

	var i = 5;

	if (i < 5) {
	console.log('i is less than 5');
	} else {
	console.log('i is more than 5');
	}



	while (i < 10) {
		console.log(i);
		i++;
	}
// Expressions are always resulting in either 'true' or 'false'
// Expressions useful for 'if' statements and 'while' and 'for' loops

/* 
--- PRIMITIVES

	Primitives are the types that variables can be such as */

	Numbers: 1 1.5 2 // JS can tell '1.5', doesn't differentiate
	Strings: 'Hello World' "Hello World"
	Boolean: true/false;

	var attendance = 16;

	if (attendance > 0) {
		//do something
	}

// Any variable in JavaScript can be a boolean by adding '!!' infront  of it
	
	!!true		//true
	!!1 		//true
	!!'hello' 	//true
	!!false		//false
	!!0 		//false
	!!''		//false

/* 
--- VARIABLES
	
	Variables are used to organise data that we want to re-use

	C R U D 

	Create - Read - Update - Delete

	Create a variable,
	Read a variables content,
	Update a variables content */

// creating a variable
	
	var varName = 5; 

// reading a variable

	varName

// updating a variable 
	
	varName = 10; 

// Deletion

/* This is not in JS, If we declare a variable, it is there forever,
	but we can think scope and some other techniques to help deal with variables. */
	

	var counter = 0;

	counter = counter + 1;

/* 
--- LOOPS

	Using expressions in 'while' and 'for' loops are especially useful */

	while(expression) {
		//statements;
	}

/* As long as the expression evaulates to 'true', the statement will keep running forever.

	If we need a 'while' loop to run AT LEAST once, we can use a 'do while' instead. */


		let countString = '';
		let i = 0;

			do {
				countString = countString + i; i++;
			} while (i < 5);

			console.log(countString);

// Whilst this code runs, if 'i' is less than 5 - countString will increment until it becomes false.

// For Loops 

// 			A 			B 	  C	
	for (var i = 1; i <= 10; i++) {
		console.log(i);
	}

// var = 1, if 'i' doesnt equal 10 it'll increment until 10 then break as undefined.


	var i = 1; //A

	//			B
	while (i <= 10) {
		console.log(i); // D
	}

	i++; // C

// While loops implemented as a for 

	for (; expression; ) {
		//statements 
	}



// EXERCISE

for (var i = 0; i <= 1000; i = i + 100) { // 0 - 1000 in 100's
  	console.log(i); 
}

for (var i = 1; i <= 128; i = i * 2) { // 1 2 4 8 16 32 64 128
  
  console.log(i); 
}

for (var i = 0; i <= 10; i = i + 2) { // 0 2 4 6 8 10
  
  console.log(i); 
}

for (var i = 3; i <= 15; i = i + 3) { // 3 6 9 12 15
  
  console.log(i);
}


for (var i = 9; i >= 0; i--) { // 9 8 7 6 5 4 3 2 1 
	console.log(i);
}

for (var i = 1; i <= 4; i++) { // 1 1 1 2 2 2 3 3 3 4 4 4 
		console.log(i);
		console.log(i);
		console.log(i);
	}

for (var i = 0; i <= 4; i++) {  
  console.log(i);
  
  for (var j = 1; j <= 4; j++) { // this also prints 1 1 1 2 2 2 3 3 3 4 4 4 
    console.log(j);
    
    for (var k = 1; k <= 4; k++) {
      console.log(k);
    }
  }
}


for (var i = 0; i < 3; i++) {

	for (var j = 0; j <= 4; j++) { // Prints 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4 
		console.log(j);
}
}



for (var i = 1; i <= 3; i++) { // repeats the process 4 times
	for (var j = 1; j <= 3; j++) { // handles 1 2 3 
		console.log(j);
	}
	for (var k = 3; k > 0; k--) { // handles 3 2 1
		console.log(k);
	}
} // final print - 1 2 3 3 2 1 1 2 3 3 2 1 1 2 3 3 2 1 1



for (i = 0, j = 1; i <= 1597; x = i, i = j, j = x+j) {
	console.log(j)
} //  FIBINACHI SEQUENCE - 0 1 1 2 3 5 8 13 21 34 55 89 144 239 377 610 987 1597



/* WHEN TO USE LOOPS

	- iterating through arrays'
	- repeating a set of statements 


--- ARRAYS 

	Usings arrays when working in a variable to keep data together and clean up code;
	
	Rather than using */

const teacherOne = 'carlos';
const teacherTwo = 'ashleigh';
const teacherThree = 'kiran'; //RIP 

	// We can use 
//			index: 	 0			1			2
const teachers = ['carlos', 'ashleigh', 'kiran'];


var x = []

// creating data/array
var y = [1, 2, 3, 4, 5];

// updating data
var z = [];
	z = [0] = 1;
	z = [1] = 2;
	z = [2] = 3;
	z = [3] = 4;
	z = [4] = 5;

// reading data 

y[1] // prints 2 

// updating data
y[1] = 10; // replaces 2 with 10.

// deleting 
y[4];


var animals = ['dog', 'cat', 'dinosaur'];
animals[1] // prints 'cat'

animals[1] = 'tigers' // updates cat to tigers


// Array.length => How many items are in this array;



// USING TABLE
	// console.table


/* with instanews 
	use .slice to take only the index of 0 - 12 ( out of 45 - 50 ) from the json package and display them on the site.
*/




// CHAOS: no relationship, no way to refer to these values;
	'carlos'
	'ashleigh'

// a bit better, we can refer to the values, but still no relationship between the two;

var firstName = 'carlos';
var lastName = 'reyes';
var alive = true;
var height = 190;
var describePerson(firstName, lastName, alive, height) {
	// console.log(firstName + ' ' + lastName + ' is ' (alive ? 'alive' : 'dead') + ' and is ' + height 'cm tall.')
}

// OBJECTS TO THE RESCUE

var obj = {
	firstName: 'carlos',
	lastName: 'reyes',
	alive: true,
	height: 190
}

/* first big difference: sytnax
	Objects use : instead of = 
	Objects use , instead of ; (to tell the computer to carry on and not finish here)
	Variables have names (variable name) and values (what the variable is equal too)
*/

var x = 5;
	// x is my variable name
	// 5 is my value 

{
	x: 5,
}

// x is property name 
// 5 is my property x's value


/* ARRAYS VS OBJECTS 

	Arrays are great for similar names of data, 

	Objects are great for different kinds of related data */

{
	url: 'nyt.com/article-slug/',
	imgUrl: 'nyt.com/image.jpg',
	title: 'Students in london learn about objects'
}

/* CRUD

Create
	 Create an object with things already in it */
var person = {
	firstName: 'carlos',
	lastName: 'reyes',
	alive: true,
	height: 190
}

// Read 

person.firstName(); // calls firstName - prints 'carlos'
person.lastName(); // calls lastName - prints 'reyes'
person.alive(); // calls alive key - prints true.

// Update

person.height = 189; // changes height to 189
person.location = London; // adds key of london to the end of obj
person.jobDescription = 'Lead Dev'; // adds new key of jobDescription with a value of 'Lead Dev';

// Delete

person.firstName = undefined; // changes name from 'carlos' too undefined. (effectively like deleting)


console.table(person); // shows a table instead of logging

Object.keys(person); // list all the keys as an array;


var arrayOfKeys = Object.keys(person); // Takes just the KEYS of the object

for (var i = 0; i < arrayOfKeys.length; i++) { 
	console.log(person[arrayOfKeys[1]]);
}

arrayOfKeys[1]; // grabs lastName
arrayOfKeys[2]; // grabs alive
arrayOfKeys[3]; // grabs height

person[arrayOfKeys[1]]; // grabs the VALUE of key index 1 which is lastName.













