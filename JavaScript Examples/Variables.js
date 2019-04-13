/* JavaScript VARIABLES

VARIABLES

In programming ,a variable is a container for a value. You can think of variables as little containers for information that live n a computers memory. Information stored in variables such as a username, account number, or even personalised greeting can be found in memory.

Variables also provide a way of labelling data with a descriptive name, so our programs can be understand more clearly by the readers and ourselves.

In short, variables label and store at a in memory. There are only a few things you can do with variables:

1. Create a variable with a descriptive name.
2. Store or update information stored in a variable.
3. Reference or “get” information stored in a variable.

It is important to distinguish that variables are not values; they contain values and represent them with a name. Observe the diagram (JAVASCRIPT VARIABLES.PNG). Each box represents variables; the values are represented by the content, and the name is represent with the label.

- var
- let
- const 

are keywords to create variables.

CREATE A VARIABLE: ‘var’

There were a lot of changes introduced in the ES6 version of JavaScript in 2015. One of the biggest changes was two new keywords, ‘let’ and ‘const’, to create, or declare, variables. Prior to the ES6, programmers could only use the ‘var’ keyword to declare variables.
*/

var myName = ‘Arya’;
console.log(myName);
// Output: Arya

/*
In the example above;

1. var, short for variable, is a JavaScript keyword that creates, or declares, a new variable. 
2. myName is the variables name. capitalising in this way is a stand invention in JavaScript called camel casing. In camel casing you group words into one, the first word is lowercase, then every word that follows will have its first letter uppercased (e.g camelCaseEverything).
3. = is the assignment operator. It assigns the value ‘Arya’ to the variable (myName)
4. ‘Area’ is the value assigned (=) to the variable myName. You can also say that the myName variable is initialised with a value of ‘Arya’
5. After the variable is declared, the string value ‘Arya’ is printed to the console by referencing the variable name: console.log(myName).

There are a few general rules for naming variables:

- Variable names cannot start with numbers.
- Variable names are case sensitive, so myName and byname would be different variables. It is bad practice to create two variables that have the same name using different cases.
- Variable names cannot be the same as keywords. For comprehensive list of the keywords check bookmark! (Lexical grammar - JavaScript | MDN)


CREATE A VARIABLE: ‘let’

As mentioned in the previous exercise, the ‘let’ keyword was introduced in ES6. The ‘let’ keyword signals that the variable can be reassigned a different value. 
	Take a look at the example:
*/
let meal = ‘Enchiladas’;
	console.log(meal); // Output: Enchiladas
meal = ‘Burrito’;
	console.log(meal); // Output: Burrito


/* Another concept that we should be aware of when using ‘let’ (and even ‘var’) is that we can declare a variable without assigning the variable a value. 
	In such a case, the variable will be automatically initialised with a value of ‘undefined’: */

let price;
console.log(price); // Output: undefined
price = 350;
console.log(price); // Output: 350

/* 
IN the example above:

- If we don’t assign a value to a variable declared using the ‘let’ keyword, it automatically has a value of undefined
- We can reassign the value of the variable. */


let changeMe = true;

changeMe = false;

console.log(changeMe);

/* 
CREATE A VARIABLE: const

The const keyword was also introduced in ES6, and is short for the word constant.
Just like with ‘var’ and ‘let’ you can store any value in a ‘const’ variable. 
The way you declare a ‘const’ variable and assign a value to it follows the same structure as ‘let’ and ‘var’. 
Take a look at the following example. */

const myName= ‘Gilberto’;
console.log(myName); // Output: Gilberto

/* 
However, a ‘const’ variable cannot be reassigned because it is constant. 
	If you try to reassign a ‘const’ variable, you’ll get a ‘TypeError’.

Constant variables must be assigned a value the declared. 
	If you try to declare a ‘const’ variable without a value, you’ll get a ‘SyntaxError;.

If you’re trying to decide between which keyword to see, ‘let’ or ‘const’, 
	think about whether you’ll need to resign the variable later on. 
	If you do need to reassign the variable use ‘let’, otherwise, use ‘const’.

MATHEMATICAL ASSIGNMENT OPERATORS;

Lets consider how we can use variables and math operators to calculate new values and assign them to a variable. 
	Check out the example below:
*/

let w = 4;
w = w + 1;

console.log(w); // Output: 5

/*
In the example above, we created the variable ‘w’ with the number ‘4’  assigned to it. 
	The following line, ‘ w = w + 1 ‘, increase the value of ‘w’ from ‘4 to 5’ 

Another way we could have reassigned ‘w’ after performing some mathematical operation on it is to use built-in mathematical assignment operators: we could re-write the code above to be:
*/

let w = 4;
w += 1;

console.log(w); // Output: 5

/*	In this example, we used the += assignment operator to reassign ‘w’. 
	We’re performing the mathematical operation of the first operator + using the number to the right, 
		then reassigning ‘w’ to the computed value.

We also have access to other mathematical assignment operators: -=, *=, and /= which work in a similar fashion.
*/

let x = 20;
x -= 5; // Can be written as x = x - 5
console.log(x); // Output: 15

let y = 50;
y *= 2; // Can be written as y = y * 2
console.log(y); // Output: 100 

let z = 8;
z /= 2; // Can be written as z = z / 2 
console.log(z); // Output: 4

————————

levelUp += 5;
console.log(levelUp);

powerLevel -= 100;
console.log(powerLevel);

multiplyMe *= 11;
console.log(multiplyMe);

quarterMe /= 4;
console.log(quarterMe);


/* 
THE INCREMENT AND DECREMENT OPERATOR 

Other mathematical assignment operators include the increment operator (++) and decrement operator (—).

The increment operator will increase the value of the variable by 1. 
	The decrement operator will decrease the value of the variable by 1. For example;
*/

let a = 10;
a++;
console.log(a); // Output: 11

let b = 20;
b—;
console.log(b); // Output: 19

/*
Just like the previous mathematical assignment operators (+=, -=, *=, /= ), 
	the variables value is updated and assigned as the new value of that variable. */

 let gainedDollar = 3;
gainedDollar++;
console.log(gainedDollar); // Output: 4
let lostDollar = 50;
lostDollar--;
console.log(lostDollar); // Output: 49


STRING CONCATENATION WITH VARIABLES

In the previous exercises, we assigned strings to variables Now lets go over how to connect or concatenate strings in variables.

The ‘ + ‘ operator can be used to combine two string values even if those values are being stored in variables: 

let myPet = ‘armadillo’;
console.log(‘I own a pet ‘ + myPet + ‘ . ‘);
// Output: ‘I own a pet armadillo.’ 

In the example above, we assigned the value ‘armadillo’ to the myPet variable. 
on the second line, the ‘+’ operator is used to combine three strings: ‘I own a pet’, the value saved to ‘myPet’, and ‘ . ‘
We log the result of this concatenation to the console as: 

I own a pet armadillo.

STRING INTERPOLATION

In the ES6 version of JavaScript, we can insert, or interpolate, variables into strings using template literals. In the following example where a template literal is used to log strings together: 

const myPet = ‘armadillo’;
console.log(`I own a pet ${myPet}.`);
// Output: I own a pet armadillo.

- a template literal is wrapped by backpacks  ` (next to z)
- Inside the template literal, you’ll see a placeholder, ${myPet}. The value of myPet is inserted into the template literal. 
- When we interpolate `I own a pet ${myPet}.`, the output we print is the string: `I own a pet armadillo.’

var myName = 'Oliver';
console.log(myName);

var myCity = 'London';
console.log(myCity);

console.log(`My name is ${myName}. My favorite city is ${myCity}.`);

TYPEOF OPERATOR

While writing code, it can be useful to keep track of data types of the variables in your program. If you need to check the data type of a variable value, you can use the ‘typeof’ operator.

The typeof operator checks the value to its right and returns, or passes back, a string of the data type.

const unknown1 = ‘foo’;
console.log(typeof unknown 1); 
// Output: string

const unknown 2 = 10;
console.log(typeof unknown2);
// Output: number

const unknown3 = true;
console.log(typeof unknown3);
// Output: boolean




let newVariable = 'Playing around with typeof.';

console.log(typeof newVariable);

newVariable = 1;

console.log(typeof newVariable);



