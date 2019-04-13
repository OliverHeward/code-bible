//One of many JavaScript HTML methods is getElementbyId()
//This example uses the method to "find" an HTML element (with id="demo") and canges the element contect (innerHTML) to "Hello JavaScript":

document.getElementById("demo").innerHTML = 'Hello Javascript!';

// in Javascript you can change the style of a HTML element, is a varient of changing a HTML Attribute

document.getElementById(demon.style.fontsize)

// Hiding HTML elements can be done by changing the display style:

document.getElementbyId("demo").style.display = "none";
//or
document.getElementbyId("demo").style.display = 'none';

// Showing hidden HTML elements can also be done by changing the dispay style

document.getElementbyId("demo").style.display = "block";
//or
document.getElementbyId("demo").style.display = 'block';

// SEE HTML TAG FOR NEXT SECTION - COMMENT <script tag>


// JAVASCRIPT STATEMENTS

// example

var = x, y, z; // statement 1
x = 5; // statement 2
y = 6; // statement 3
z = x + y; // statement 4

// JavaScript statements are composed of: Values, Operators, Expressions, Keywords and Comments.
// This statement tells the browser to write "Hello Dolly". Inside a HTML element with id="demo"

document.getElementById("demo").innerHTML = "Hello Dolly.";

// Most JavaScript programs contain many JavaScript statments
// The statements are executed, one by one, in the same order as they are written


// Semicolons;

// Semicolons seperate JavaScript statments
// Add a semicolon at the end of each executable statement

var = a, b, c,; // Decalre 3 variables
a = 5; // Assign the value 5 to a 
b = 6; // Assign the value 6 to b
c = a + b; // Assign the sum of a and b to c

// When seperated by semicolons, multiple statements on one line are allowed

a = 5; b = 6; c = a + b;


// JAVASCRIPT  WHITE SPACE
// JavaScript ignores multiple spaces. You can add white space to your script to make it more readable, the following lines are equivalent

var person = "Hege";
var person="Hege";

// A good practice is to put spaces around operators ( = + - * / )

var x = y + z;


// JAVASCRIPT LINE LENGTH AND LINE BREAKS
// For best readability, programmers often like to avoid code lines longer than 80 characters
// If a JavaScript statements does not fit on one line, the best place to break it is after an operator

document.getElementById("demo").innerHTML = "Hello Dolly!";

// JAVASCRIPT CODE BLOCKS
// JavaScript statements can be grouped together in code blocks, inside curly brackets {...}
// The purpose of code blocks is to define to be executed together
// One place you will find statements grouped together in blocks, is in JavaScript functions

function myFunction(){
	document.getElementById("demo").innerHTML = "Hello Dolly!";
	document.getElementById("demo").innerHTML = "How are you?";
}


// JAVASCRIPT KEYWORDS 
// JavaScript satments often start with a keyword to identify the JavaScript action to be performed, below is a list of keywords used

break // Terminates a switch or a loop
continue // Jumps out of a loop and starts at the top
debugger // Stops the exectuion of JavaScript, and calls (if available) the debugging function
do ... while // Executes a block of statements, and repeats the block, while a condition is true
for // Marks a block of statements to be executed, as long as a condition is true
function // Declares a function
if ... else // Marks a block of statements to be executed, depends on a condition
return // Exits a function 
switch // Marks a block of statements to be executed, depending on different cases
try ... catch // Implemenets error handling to a block of statements
var // Declares a variable such as const - let etc


// JAVASCRIPT SYNTAX
// JavaScript syntax is the set of rules, how javaScript programs are constructed

var x, y; // How to declare variables
x = 5; y = 6; // how to assign values
z = x + y; // how to compute values

// Javascript Values
// The JavaScript syntax defines two types of values: Fixed values and variable values
// fixed values are called literals. Variable values are variables

//JavaScript Literals
// The most important rules for writing fixed values are Numbers written with or without decimals

document.getElementById("demo").innerHTML = 10.50;
document.getElementById("demo").innerHTML = 1001;

// Strings are text, written within double or single quotes

document.getElementById("demo").innerHTML = "John Doe"
document.getElementById("demo").innerHTML = 'John Doe'

// Javascript Variables

// In a programming language, variables are used to store data values
// JavaScript uses the var keyword to declare variables
// An Equal sign is used to declare variables
// in this example, X is defined as a variables. Then, X is assigned the value 6

var x;
x = 6;
document.getElementById("demo").innerHTML = x;


// JavaScript Operators
// JavaScript uses arithmetic operators ( + - * / ) to compute values

(5 + 6) * 10;
document.getElementById("demo").innerHTML = (5 + 6) * 10;

// JavaScript uses an assignment operator ( = ) to assign values to variables

var x, y;
x = 5;
y = 6;
document.getElementById("demo").innerHTML = x + y;

// JavaScript Expressions
// An expression is a combination of values, variables and operators, which computes to a value
// The computation is called an evaulation
// For example, 5 * 10 evalutes to 50

5 * 10 
document.getElementById("demo").innerHTML = 5 * 10;

// Expressions can also contain variable values

x * 10;


// THe values can be of various types, such as numbers and strings
// For example, "John" + " " + "Doe", evalutes to "John Doe"


"John" + " " + "Doe";
dociument.getElementById("demo").innerHTML = "John" + " " + "Doe";

// JavaScript Keywords
// JavaScript keywords are used to identify actions to be performed
// The var keyword tells the browser to create variables 

var x, y; 
x = 5 + 6; 
y = x * 10;
document.getElementById("demo").innerHTML = y;

/* JavaScript comments 
// Do these either with // or /* ... */ //


/* JavaScript is Case Sensitive
 	All JavaScript identifiers are case sensitive
	 The variables lastName and lastname, are two different variables */

var lastname, lastName;
lastName = "Doe";
lastname = "Peterson";

// JavaScript does not interpret VAR or Var as the keyword var


/* JAVASCRIPT AND CAMEL CASE
	 Historically, programmers have used different ways of joining multiple words into one variable name;

	 Hyphens;

	first-name, last-name, master-card, inter-city
		 hyphens are not allowed in JavaScript. They are reserved for subtractions

 	Underscore
		 first_name, last_name, master_card, inter_city

	 Upper Camel Case (Pascal Case);
		  FirstName, LastName, MasterCard, InterCity

	 Lower Camel Case:
	// JavaScript programmers tend to use camel case that starts with a lowercase letter 

	// firstName, lastName, masterCard, interCity.

// JavaScript uses the Unicode character set
	// Unicode covers (almost) all the characters, punctuations, and symbols in the world.



/* JAVA SCRIPT VARIABLES
	Javascript variables are containers for storing data values
		in this example, x, y, and z, are variables */

var x = 5;
var y = 6;
var z = x + y;
document.getElementbyId("demo").innerHTML = z;

/* from the example above, you can expect
	x stores the value 5 
	y stores the value 6
	z stores the value 11 */

/* Much Like Algebra
	in this example, price1, price2, and total, are variables */

var price1 = 5;
var price2 = 6;
var total = price1 + price2;
document.getElementById("demo").innerHTML = total;

/* In programming, just like in algebra, we use variables (like price1) to hold values
	in programming, just like algebra, we use variables in expressiins 
	(total = price1 + price2).

		From the example above, you can calculate the total to be 11
		JavaScrip variable are containers for storing data values */


/* JavaScript Identifiers
	All JavaScript variables must be indentified with unqiue names these Names are called Identifiers 
	Identifiers can be short names (like x and y) or more descriptive names (age, sum, totalVolume).

	The general rules for constructing names for variables (unique identifiers) are
		Names can contain letters, digits, underscores, and dollar signs
		Names must begin with a letter
		Names can also begin with $ and _ 
		Names are case sensitive (y and Y are different variables)
		Reserved words (like JavaScript Keywords) cannot be used as names

	*/


/* JavaScript Data Types

	JavaScript variables can hold numbers like 100 and text values like "John Doe".
	In programming, text values are called text strings
	JavaScript can handle many types of data, but for now, just think of the numbers and strings
	Strings are written inside double or single quotes. Numbers are written without quotes
	If you put a number in quotes, it will be treate as a text string
*/

var pi = 3.14;
var person = "John Doe";
var answer = 'Yes I am!';
document.getElementById("demo").innerHTML = pi + "<br>" + person + <br> + answer;

// using <br> will tell the script it needs to break to the next line 

/* Declaring (creating) JavaScript Variables

	creating a variable in JavaScrpt is called "declaring" a variable
	you declare a JavaScript variable with the var keyword */

var carName;

/* After the declaration, the variable has no value. (technically it has the value of undefined)
	to assign a value to the variable, use the equal sign */

carName = "Volvo";

// you can also assign a value to the variable when you declare it 

var carName = "Volvo";

/* in the example below, we create a variable called carName and assign the value to Volvo to it.
	then we "output" the value inside a HTML paragraph with id="demo" */


var carName = "Volvo";
document.getElementById("demo").innerHTML = carName;


/* ONE STATEMENT, MANY VARIABLES
	You can declare many variables in one statement 
		start the statement with var and seperate the variables by comma */

var person = "John Doe", carName = "Volvo", price = 200;
document.getElementById("demo").innerHTML = carName;

// This declaration can span multiple lines - here it is broken down

var person = "John Doe",
carName = "Volvo",
price = 200;
document.getElementById("demo").innerHTML = carName;

/* Value = Undefined
	In computer programs, the variables are often declared without a value.
	the value can be something that has to be calculated, 
	or something that will be provided later, like user input

	A variable declared without a value will have the value undefined,
	The variable carName will have the valuye undefined after the execution of this statement */

var carName;
document.getElementById("demo").innerHTML = carName;

/* Re-declaring JavaScript Variables
	if you re-declare a javascript variable, it will not lose its value
	the variable carName will still have the value "Volvo" after the execution of these statements */

var carName = "Volvo";
var carName;
document.getElementById("demo").innerHTML = carName;

/* JavaScript Arithmetic
	as with algebra, you can do arithmetic with JavaScript variables, using operators like = and + */


var x = 5 + 2 + 3;
document.getElementById("demo").innerHTML = x;

// you can also add strings, but strings will be concatenated

var x = "John" + " " + "Doe";
document.getElementById("demo").innerHTML = x;

var x = "5" + 2 + 3;
document.getElementById("demo").innerHTML = x; // will print 523

var x = 2 + 3 + "5";
document.getElementById("demo").innerHTML = x; // will print 55

/* JavaScript string operators
	The + operator can also be used to add (concatenate) strings */

var txt1 = "John";
var txt2 = "Doe";
var txt3 = txt1 + " " + txt2;
document.getElementById("demo").innerHTML = txt1 + " " + txt2; // this is txt3

// the += assignemtn operator can also be used to add (concatenate) strings

var txt1 = "What a very ";
txt 1 += "nice day";
document.getElementById("demo").innerHTML = txt1;
// when used on strings, the + operators is called the concatenation operator

/* Adding Strings and Numbers
	Adding two numbers, will return the sum, but adding a number and a string will return a string
		*/

var x = 5 + 5;
var y = "5" + 5;
var z = "Hello" + 5;
// The result of x, y, and z will be
10 
55
Hello5
// if you add a numer and a string the result will be a string

// JavaScript Comparison Operators

== // equal too
=== // equal value and equal type
!= // not equal 
!== // not equal value or equal type
> // greater than
< // less than 
>= // greater than or equal to
<= // less than or equal to
? // ternary operator
// Comparison operators are fully described in the JS Comparisons chapter

// JavaScript Logical Operators

&& // logical and
|| // logical or
! // logical not
// Logical operators are fully described in the JS comparisons chapter

// JavaScript Type Operators

typeof // returns the type of a variable
instanceof // returns true if an onject is an instance of an object
// Type Operators are fully described in the JS Conversion chapter

/* JavaScript Bitwise Operators
	
	Bit operators work on 32 bits numbers

	Any numberic operand in the operation is converted into a 32 bit number.
	the restuled converted back to a JavaScript Number */

& 			AND 			 5 & 1			0101 & 0001 = 0001 /*decimal */ 1
| 			OR    			 5 | 1			0101 | 0001 = 0101 /*decimal */ 5
~ 			NOT   			 ~5				~0101		= 1010 /*decimal */ 10
^ 			XOR   		     5 ^ 1			0101 ^ 0001 = 0100 /*decimal */ 4
<< 	Zero fill left shift     5 << 1			0101 << 1   = 1010 /*decimal */ 10
>> 	Signed right shift       5 >> 1			0101 >> 1   = 0010 /*decimal */ 2
>>> Zero fill right shift    5 >>> 1		0101 >>> 1  = 0010 /*decimal */ 2

/* The examples above uses 4 bit unsigned examples. but JavaScript uses
	32-bit signed numbers. 
	Because of this, in JavaScript, ~ 5 will not return 10. It will return -6
	~00000000000000000000000000000101 wil return
	 11111111111111111111111111111010
	
	Bitwise operators are fulled described in the JS Bitwise Chapter. */


/* JavaScript Arithmetic Operators
	Arithmetic operators perform arithmetic on numbers (literals or variables). */

+ // Addition
- // Subtraction 
* // Multiplication 
/ // division
% // Modulus (remainder)
++ // Increment
-- // Decrement

/* Arithmetic Operations
	A typical arithmetic operation operates on two numbers
	The two numbers can be literals */

var x = 100 + 50;
document.getElementById("demo").innerHTML = x; // will respond with 150

// or variables

var x = a + b;
document.getElementById("demo").innerHTML = x; // will respond with a + b

// or expression 

var x = (100 + 50) * a;
document.getElementById("demo").innerHTML = x; // will add 100 + 500 then * by a;


/* Operators and Operands
	The numbers (in an arithmetic operation) are called oeprands
	The operation (to be performed between two operands) is defined by an operator */

100 + 50 // 100 & 50 are Operands and the Operator is + 

/* Adding
	the addition operator (+) adds numbers */

var x = 5; 
var y = 2;
var z = x + y;
document.getElementById("demo").innerhtml = z; // will reply with 7

/* Subtracting
	the subtraction operator (-) subtracts numbers */

var x = 5; 
var y = 2;
var z = x - y; 
document.getElementById("demo").innerHTML = z; // will reply 3 

/* Multiplying
	the multiplication operator (*) multiples numbers */

var x = 5;
var y = 2;
var z = x * y;
document.getElementById("demo").innerHTML = z; // will reply 10

/* Dividing 
	the division operator (/) divides numbers */

var x = 5;
var y = 2;
var z = x / y;
document.getElementById("demo").innerHTML = z; // will reply 2.5

/* Remainder 
	the modulus operator (%) returns the division remainder */

var x = 5;
var y = 2;
var z = x % y;
document.getElementById("demo").innerHTML = z; // will reply 1

/* Incrementing 
	the increment operator (++) increments numbers */

var x = 5;
x++;
var z = x;
document.getElementById("demo").innerHTML = z; // will reply 6


/* Decrementing
	the decrement operator (--) decrements numbers */

var x = 5;
x--;
var z = x;
document.getElementById("demo").innerHTML = z; // will reply 4 


/* Operator Precedence
	Operator precedence describes the order in which operations are preformed
	in an arthimetic expression */

var x = 100 + 50 * 30;
document.getElementById("demo").innerHTML = z; // will reply 250

/* The result above isnt 150 * 30, due to tradition mathematics the multiplication is done first
	Multiplcation (*) and Division (/) have higher precedence than addition (+) and (-)

	The Precedence can be changed by using parentheses */

var x = (100 + 50) * 30;
document.getElementById("demo").innerHTML = x; // will reply 450 as the parentheses takes precedence

/* When using parenthese, the operations inside the parenthese are computed first
	when many operations have the same precendece (like addition subtraction), they are computed
	left to right */

var x = 100 + 50 - 3;
document.getElementById("demo").innerHTML = x; // will reply 147

// JAVASCRIPT OPERATOR PRECEDENCE VALUES 

// Value  		Operator  	Description  			Example
20  			()			Expression grouping		(3+4)

19				.			Member					person.name
19				[]			Member 					person["name"]
19				()			Function call 			myFunction()
19 				new			Create 					new Date ()

17				++			Postfix Increment 		i++
17 				--			Postfix Decrement       i--

16 				++ 			Prefix Increment 		++i 
16 				-- 			Prefix Decrement 		--i 
16 				!			Logical not 			!(x==y)
16 				typeof		Type 					typoeof x

15 				**			Exponentation (ES7)		10 ** 2

14 				* 			Multiplication 			10 * 5
14 				/			Division 				10 / 5
14 				%			Division remainder      10 % 5

13 				+ 			Addition 				10 + 5
13 				-			Subtraction 			10 - 5 

12				<< 			Shift left  			x << 2
12				>> 			Shift right 			x >> 2 
12				>>> 		Shift right(unsigned)   x >>> 2

11				< 			Less than 				x < y
11				<= 			Less than or equal 		x <= y
11				> 			Greater than 			x > y
11				>=   		Greater than or equal   x >= y
11				in 			Property in Object 		"PI" in math 
11				instanceof 	Instace of Object 		instanceof Array 

10 				== 			Equal 					x == y
10				===			Strict Equal 			x === y
10 				!= 			Uequal 					x != y
10 				!			Strict Unequal 			x !== y

9				& 			Bitwise And 			x & y
8				^ 			Bitwise XOR				x ^ y
7 				|			Bitwise OR 				x | y
6				&& 			Logical AND 			x && y
5				|| 			Logical OR 				x || y 
4 				?: 			Condition 				? "Yes" : "No"

3				+=			Assignment				x += y
3				+=			Assignment				x += y
3				-=			Assignment				x -= y
3				*=			assignment				x *= y
3				%=			Assignment				x %= y
3				<<=			Assignment				x <<= y
3				>>=			Assignment				x >>= y
3				>>>=		Assignment				x >>>= y
3				&=			Assignment				x &= y
3				^=			Assignment				x ^= y
3				|=			Assignment				x |= y

2 				yield 		Pause Function 			yield x
1 				,			Comma 					5, 6 

// Expressions in parentheses are fully computed before the value is used in the rest of the expression 


// JavaScript Assignment

/* JavaScript assignment operators
	Assignment operators assign values to JavaScript Variables */

// Operator 		Example 			Same As
	=				x = y				x = y
	+=				x += y				x = x + y
	-=				x -= y				x = x - y
	*=				x *= y				x = x * y
	/=				x /= y				x = x / y
	%=				x %= y				x = x % y
	<<=				x <<= y				x = x << y
	>>=				x >>= y				x = x >> y
	>>>=			x >>>= y			x = x >>> y
	&=				x &= y				x = x & y
	^=				x ^= y				x = x ^ y
	|=				x |= y				x = x | y
	**=				x **= y				x = x ** y

/* The **= operatori s an experimental part of the ECMAScript 2016 proposal
	(ES7). It is not stable across browsers, do not use it. */

/* Assignemtn Examples
	The = assignment operator assigns a value to a variable */

var x = 10;
x += 5;
document.getElementById("demo").innerHTML = x; // should reply with 15

// The -= assignemtn operator subtracts a value from a variable

var x = 10;
x -= 5;
document.getElementById("demo").innerHTML = x; // should reply with 5

// The *= assignemtn operator multiples a variable

var x = 10;
x *= 5;
document.getElementById("demo").innerHTML = x; // should reply with 50

// The /= assignemtn divides a variable

var x = 10;
x /= 5; 
document.getElementById("demo").innerHTML = x; // should reply with 2

// The %= assignemtn operator assigns a remainder to a variable

var x = 10;
x %= 5;
document.getElementById("demo").innerHTML = x; // should reply with 0


/* JAVASCRIPT DATA TYPES
	JavaScript Data Types
		JavaScript bariables can hold many data types: numbers, strings, objects and more */

var length = 16; 								// number
var lastName = "Johnson";						// string
var x = {firstName:"John", lastName:"Doe"};		// object

/* The Concept of Data Types
	In programming, data types is an important concept.
	To be able to operator on variables, it is important to know something about the type

	without data types, a computer cannt safely solve this; */

var x 16 + "Volvo";

/* Does it make any sense to add Volvo to sixteen? Will it produce an error or will it produce a result?
	JavaScript will treat the example above as; */

var x = "16" + "Volvo";

// When adding a number and a string, JavaScript will treat the number as a string.

var x = 16 + "Volvo"; // Will return 16Volvo

var x = "Volvo" + 16; // Will return Volvo16

/* JavaScript evaulates expressions from left to right. Different sequences can produce
	different results */

var x = 16 + 4 + "Volvo" // Return 20Volvo

var x = "Volvo" + 16 + 4 // Return Volvo164

/* The first example, JavaScript treats 16 and 4 as numbers until it reaches Volvo
	In the second example, since the first operand is a string, all operands are treated
	as strings */

/* JAVASCRIPT TYPES ARE DYNAMIC
	JavaScript has dynamic types. This means that the same variable can be used to hold
		different data types */

var x;		// Now x is undefind
x = 5;		// Now x is a Number
x = "John";	// Now x is a string

/* JavaScript Strings
	A string (or a text string) is a series of characters like "John Doe".
	Strings are written with quotes. You can use single or double quotes */

var carName = "Volvo XC60";		// Using Double Quotes
var carName = 'Volvo XC60'; 	// Using single quotes

/* You can use quotes inside a string, as long as they don't match teh quotes surround the string */

var answer = "It's alright"; 			// Single quote inside double quotes
var answer = "He is called 'Johnny'" 	// Single quotes inside double quotes
var answer = 'He is called "Johnny"'	// Double quotes inside single quotes


/* JAVASCRIPT NUMBERS 
	JavaScript has only one type of numbers;
	Numbers can be written with, or without decimals */

var x1 = 34.00;			// Written with decimals
var x2 = 34; 			// Written without decimals

// Extra large or extra small numbers can be written with scientific (exponential) notation

var y = 123e5;		// 12300000
var z = 123e-5; 	// 0.00123

// Use of the e / -e will determine how many 0's to put after (e) or how many to set behind a decimal place (-e)

/* JAVASCRIPT BOOLEANS
	Booleans can only have two values: true or false. */

var x = 5;
var y = 5;
var z = 6; 
(x == y)		// returns true as x is equal to y
(x == z)		// returns false as x is not equal to z 

// Booleans are often used in conditional testing


/* JAVASCRIPT ARRAYS
	JavaScript arrays are written with square brackets
	Array items are seperated by commas

	The following code declares an array called cars, containing three items (car names) */

var cars = ["Saab", "Volvo", "BMW"];

/* Array indexes are zero-based, which means
	the first item is [0]
	the second item is [1]
	and so on; */


/* JAVASCRIPT OBJECTS
	JavaScript objects are written with curly braces
	Object properties are written as name: value pairs, seperated by commas */

var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

/* The object (person) in the example above has  properties;
	firstName
	lastName
	age
	eyeColor */


/* THE typeof OPERATOR
	You can use the JavaScript typeof operator to find the type of a JavaScript variable
	the typeof operator returns the type of a variable or an expression */

typeof "" 			// Returns "string"
typeof "John"		// Returns "string"
typeof "John Doe"	// Returns "string"

// EXAMPLE

typeof 0			// Returns "number"
typeof 314			// Returns "number"
typeof 3.14			// Returns "number"
typeof (3)			// Returns "number"
typeof (3 + 4)		// Returns "number"


/* UNDEFINED
	In JavaScript, a variable without a value, has the value of undefined.
	The type is also undefined */

var car;		// Value is undefined, type is undefined

// Any variable can be empited, by setting the value to undefined. The type will also be undefined.

car = undefined; 	// Value is undefined, the type is undefined

/* EMPTY VALUES
	An empty alue has nothing to do with undefined
	An empty string has both a legal value and a type */

var car = ""; 		// the value is "", the typeof is "string"


/* NULL
	In JavaScript null is "nothing". It is supposed to be something that doesn't exist
	Unfortunately, in JavaScript, the data type of null is an object
	Consider it a bug of JavaScript that the typeof null is an object, it should be null

	You can empty an object by setting it to null */

var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
person = null; 		// now value is null, but type is still an object
document.getElementById("demo").innerHTML = typeof person;

// You can also empty an object by setting it to undefined

var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
person = undefined; 		// now both value and type is undefined
document.getElementById("demo").innerHTML = typeof person;

/* DIFFERENCE BETWEEN UNDEFINED AND NULL
	undefined and null are equal in value but different in type */

typeof undefined 		// undefined
typeof null 			// object

null === undefined 		// false
null == undefined 		// true


/* Primitive Data
	A primitive data value is a single simple data value with no additional properties and methods

	The typeof operator can return one of these primitive types;

	String
	Number
	Boolean
	Undefined */

typeof "John"			// Returns "string"
typeof 3.14 			// Returns "number"
typeof true 			// Returns "boolean"
typeof false 			// Returns "boolean"
typeof x 				// Returns "undefined" (if x has no value that is)


/* COMPLEX DATA 
	The typeof operator can return one of two complex types
		function
		object
	the typeof operator returns object for both objects, arrays, and null.
	the typeof operator does not return object for functions */

typeof {name:'John', age:34}; 	// Returns "object"
typeof [1,2,3,4]; 				// Returns "object" (not "array")
typeof null 					// returns "object"
typeof function myfunc(){}		// returns "function"

// the typeof operator returns "onject" for arrays because in JavaScript arrays are objects


/* JAVASCRIPT FUNCTIONS

	A JavaScript function is a block of code designed to perform a particular task.

	A JavaScript function is executed when "something" invokes it (calls it) */

function myFunction(p1, p2) {
	return p1 * p2;			// Turn function returns the product of p1 and p2
}
document.getElementById("demo").innerHTML = myFunction(4, 3); // returns as 12 as sets p1(4) * p2(3)

/* JavaScript Function Syntax
	A JavaScript function is defined with a function keyword, followed by a name, followed by parentheses

	Function names can contain letters, digits, underscores, and dollar signs (same rules as variables)

	The parentheses may include parameter names seperated by commas:
	(parameter1, parameter2,...)

	The code that is to be exectued, by the function, is placed inside the curly brackets {} */

function name(parameter1, parameter2, parameter3) {
	// code to be exectued placed here
}

/* Function parameters are listed inside the parenthese () in the functuon definition
	Function arguments are values received by the function when it is invoked
	Inside the function, the arguments (the parameters) behave as local variables

	A function is much the same as a procedure or a subroutine, in other programming languages */


/* Function Invocation
		The code inside the function will execute when "something" invokes (calls) the function:

		When an event occurs (when a user clicks a button)
		When it is invoked (called) from JavaScript code
		Automatically (self invoked */


/* Function Return

	When JavaSript reachs a return statement, the function will stop executing.

	If the function was invoked from a statement, JavaScript will "return" to execute code after invoking statement

	Functions often compute a return value. The return value is "returned" back to the "caller" */

var x = myFunction(4, 3); // Function is called, return value will end up in x

function myFunction(a, b) {
	return a * b;		// Function returns the product of a and b
}
// result in x will be "12"


/* Why Functions?
	
	You can reuse code: Define the code once, and use it many times.

	You can use the same code many times with different arguements, to produce different results */

function toCelsius(fahrenheit) {
	return (5/9) * (fahrenheit-32);
}
document.getElementById("demo").innerHTML = toCelsius(77); // returns 25


/* The () Operator Invokes the Functions
	using the example above, toCelsius refers to the function object,
	toCelsius refers to the function result

	Accessing a function without () will return the function definition istead of the function result
	*/

function toCelsius(fahrenheit) {
	return (5/9) * (fahrenheit-32);
}
document.getElementById("demo").innerHTML = toCelsius;

/* FUNCTIONS USED AS VARIABLE VALUES
	Functions can be used the same way as you use variables, in all types of formulas,
	assignments, and calculations. */

// Instead of using a variable to store the return value of a function:

var x = toCelsius(77);
var text = "The temperature is " + x + " Celsius";
// You can use the function directly, as a variable value:
var text = "The temperature is " + toCelsius(77) + " Celsius";

/* 	LOCAL VARIABLES
	Variables declared within a JavaScript function, become LOCAL to the function
	Local variables can only be accessed from within the function */


// code here can NOT use carName
function myFunction() {
	var carName = "Volvo";
	//code here CAN use carName
}
// code here can NOT use carName

/* Since local variables are only recognized inside their functions, variables with the 
	same name can be used in different functions

	Local variables are reated when a function starts, and deleted when the function is completed.

*/



/* JAVASCRIPT OBJECTS
	REAL LIFE OBJECTS, PROPERTIES, AND METHODS

	In real life, a car is an object.

	A car has properties like weight and color, and methods like start and stop:
*/

// Properties 					Methods
car.name = "Fiat"				car.start()
car.model = "500"				car.drive()
car.weight = "850kg"			car.brake()
car.color = "White"				car.stop()

/* All cars have the same properties, but the property values differ from car to car
	
	All cars have the same methods, but the methods are performed at different times */

/* JavaScript Objects
	JavaScript variables are containers for Data Values
	The code below assigns a simple value (Fiat) to a variable named car */

var car = "Fiat";

/* Objects are variables too, but objects can contain many values
	The code below assigns many values (Fiat, 500, white) to a variable named car:
	*/

var car = {type:"Fiat", model:"500", color:"white"};
// The values are written as name:value pairs (name and value are seperated by a colon).

/* OBJECT DEFINITION
	You define (and create) a JavaScript Object with an object literal */

var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
// Spaces and line breaks are not important. An object definition can span multiple lines:

var person = {
	firstName:"John",
	lastName:"Doe",
	age:50,
	eyeColor:"blue"
};

/* OBJECT PROPERTIES
	the name:values pairs in JavaScript objects are called properties */

// property 			property value
firstName 				John
lastName 				Doe
age 					50
eyeColor 				blue

/* Accessing Object Properties
	You can access object properties in two ways */

objectName.propertyName
//or
objectName["propertyName"]

//example
person.lastName;
//or
person["lastName"];

/* OBJECT METHODS
	Objects can also have methods
	Methods are actions that can be performed on objects
	Methods are stoyed in properties as function definitions */

// Property 			Property Value
firstName 				John
lastName 				Doe 
age 					50
eyeColor 				blue
fullName 				function(){return this.firstName + " " + this.lastName;}
// a method is a function stored as a property

var person = {
	firstName: "John",
	lastName: "Doe",
	id: 5566;
	fullName: function() {
		return this.firstName + " " + this.lastName;
	}
};

/* THE this KEYWORD
	In a function definition, "this" refers to the "owner" of the function
	In the example above, "this" is the person object that "owns" the fullName function.
	In other words, this.firstName means the firstName property of this object
	read more about the this keyword on JS this Keyword. */

/* ACCESSING OBJECT METHODS
	You access an object method with the followign syntax: */

objectName.methodName();
//example
name = person.fullName();

// If you access a method without the () parenthese, it will return the function definition
name = person.fullName;

/* DO NOT DECLARE STRINGS, NUMBERS AND BOOLEANS AS OBJECTS!
	When a JavaScript variable is declared with the keyword "new", the variable is created as an object */
var x = new String(); 		// Declares x as a String Object
var y = new Number();       // Declares y as a Number Object
var z = new Boolean(); 		// Declares z as a Boolean Object

// Avoid String, Number and Boolean Objects. They complicate your code and slow down execution speed.

// SEE NOTEPAD FOR JAVASCRIPT EVENTS // 


/* JAVASCRIPT STRINGS
	A JavaScript string is zero or more characters written inside quotes 

	String Length
		The length of a string is found in the built in property length */
var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sln = "txt.length";

/* Special Characters
	Because strings must be written within quotes, JavaScript will misunderstand this string */
var x = "We are the so-called"Vikings" from the north.";
/* The string will be chopped to "Wear are the so-called"
	The solution to avoid this problem, is to use the backslash escape character
	The backslash (\) escape character turns special characters into string Characters
CODE 					RESULT 					DESCRIPTION  */
\'						'						Single quote
\"						"						Double quote
\\ 						\						Blackslash

// The sequence \" insters a double quote in a string
var x = "We are the so-called \"Vikings\" from the north.";
// The sequence the \' inserts a single quote in a strong
var x = 'It\'s alright.'
// The sequence \\ inserts a blackslash in a string
var x = "The character \\ is called blackslash.";
// Six other escape sequences are valid in JavaScript
// CODE 				RESULT
	\b 					Backspace
	\f 					Form Feed
	\n 					New Line 
	\r 					Carriage Return 
	\t 					Horizontal tabulator 
	\v 					Vertical tabulator 

/* BREAKING LONG CODE LINES
	For readability, programmers often like to avoid code lines longer than 80 characters.
	If a JavaScript statement does not fit on one line, the best place to break it is after an operator */
document.getElementById("demo").innerHTML = "Hello Dolly!";
// You can also break up a code line within a text string with a single backslash
document.getElementById("demo").innerHTML = "Hello \ Dolly!";
/* The \ methiod is not the preferred method. It might not have universal support. some browser do not allow spaces behind the \ character
 A safer way to break up a string, is to use string addtion; */
document.getElementById("demo").innerHTML = "Hello " + "Dolly!";
// you cannot break up a code line with a backslash
document.getElementbyId("demo").innerHTML = \ "Hello Dolly!";

/* STRINGS CAN BE OBJECTS
	Normally, JavaScript strings are primitive values, created from literals
		var firstName = "John";
	But Strings can also be defined as objects with the keywork new
		var firstName = new String("John");  */

var x = "john";					// typeof will return string
var y = new String("John");		// typeof will return object
// Do not create strings at objects. It slows down execution speed, The new keyword complicates the code. 

// When using the == operator, equal strings are equal 
var x = "John"
var y = new String("John");
// (x == y) is true because x and y have equal values

//When using the === operator, equal strings are not equal, because the === operator expects equality in both type and value
var x = "John";
var y = new String("John");
// (x === y) is false because x and y have different types (string and object)

//OR even worse, objects cannot be compared
var x = new String("John");
var y = new String("John");
// (x == y) is salse because x and y are different objects
var x = new String("John");
var y = new String("John");
// (x === y) is salse because x and y are different objects
// Note the difference between (x == y) and (x === y), comparing two JavaScript objects will always return false

/* String Methods and Properties
	Primitive values, like "John Doe", cannot have properties or methods (because they are not objects)
	But with JavaScript, methods and properties are also available to primitive values, because JavaScript treats primitie values 
	as objects when executing methods and properties.

	String Length
		The length property returns the length of a string */
var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sln = txt.length; // returns 26

/* Finding a String in a String
	the indexOf() method returns the index of (the position of) the first occurence of a specified text in a string. */
var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate"); // this will return it as 7 as its 7th in the string (var being 1)

// The lastIndexOf() method returns the index of the last occurence of a specified text in a string
var str = "Please locate where 'locate' occurs!";
var pos = str.lastIndexOf("locate");// returns 21 in characters of where it is inside a string
// both indexOf(), and lastIndexOf() return -1 if the text is not found 
var str = "Please locate where 'locate' occurs!";
var pos = str.lastIndexOf("John");
//Both methods accept a second parameter as the starting position for the search 
var str = "Please locate where 'locate' occers!";
var pos = str.indexOf("locate",15);

/* Searching for a String in a String
	The search() method searchs a string for a specified value and returns the position of the match */
var str = "Please locate where 'locate' occurs!";
var pos = str.search("locate"); // returns 7
/* DID YOU NOTICE?
	The two methods, indexOf() and search(), are equal? 

	They accept the same arguments (parameters), and return the same value? 

	The two methods are NOT equal. These are the differences;
		The search() Method cannot take a second start position argument
		The indoxOf() method cannot take powerful search values (regular expressions) */

/* EXTRACTING STRING PARTS
	There are 3 methods for extracting a part of a string */
		slice(start, end)
		substring(start, end)
		substr(start, length)

/* The slice() Method
	slice() extracts a part of a string and returns the extracted part in a new string

	The method takes 2 parameters: The starting index (position), and the ending index (position)

	This example slices out a portion of a string from position 7 to position 13; */

var str = "Apple, Banana, Kiwi";
var res = str.slice(7, 13);
document.getElementById("demo").innerHTML = res; // returns Banana

/* If a parameter is negative, the position is counted from the end of the string.
	This example slice sout a portion of a string from position -12 to position -6 */

var str = "Apple, Banana, Kiwi";
var res = str.slice(-12, -6);
document.getElementbyId("demo").innerHTML = res; // returns Banana

// If you omit the second parameter, the method will slice out the rest of the string

var res = str.slice(7);
// or, counting from the end
var res = str.slice(-12);

/* THE SUBSTRING() METHOD
	substring() is similar to slice() 
		The difference is that substring() cannot accept negative indexes */

var str = "Apple, Banana, Kiwi";
var res = str.substring(7, 13);
document.getElementById("demo").innerHTML = res; // Returns Banana
// if you omit the second parameter, substring() will slice out the rest of the string

/* THE SUBSTR() METHOD
	substr() is similar to slice() 
		the difference is that the second parameter specifies the length of the extracted part */
var str = "Apple, Banana, Kiwi";
var res = str.substr(7, 6);
document.getElementById("demo").innerHTML = res; // Returns Banana
// if you omit the second parameter, substr() will slice out the rest of the string

var str = "Apple, Banana, Kiwi";
var res = str.substr(7);
document.getElementById("demo").innerHTML = res; // Returns Banana, Kiwi

// If the first parameter is negative, the position counts from the end of the string

var str = "Apple, Banana, Kiwi";
var res = str.substr(-4);
document.getElementById("demo").innerHTML = res; // Kiwi

/* Replacing String Content
	The replace() method replaces a specified value with another value in a string */
str = "Please visit Microsoft!";
var n = str.replace("Microsoft", "W3Schools");
// The replace() metho does not change the string it is called on. It returns a new string

// By default, the replace() function replaces only the first match
str = "Please visit Microsoft and Microsoft!";
var n = str.replace("Microsoft", "W3Schools");


// By default, the place() function is case sensitive. Writing MICROSOFT will not work
str = "Please visit Microsoft!";
var n = str.replace("MICROSOFT", "W3Schools");

// To replace case insensitive, use a regular expression with an /i flag 
str = "Please visit Microsoft!";
var n = str.replace(/MICROSOFT/i, "W3Schools");
// note that regular expressions are written without quotes

/* To replace all matches, use a regular expression with a /g flag (global match) */
str = "Please visit Microsoft and Microsoft!";
var n = str.replace(/Microsoft/g, "W3Schools");


/* Converting to Upper and Lower Case
	A string is converted to upper case with toUpperCase() */
var text1 = "Hello World!";  	 	// String
var text2 = text1.toUpperCase();	// text2 is text1 coverted to upper
// A string is converted to lower case with toLowerCase()
var text1 = "Hello World!"; 		// String
var text2 = text1.toLowerCase();	// text2 is text1 converted to lower

/* THE CONCAT() METHOD
	concat() joins two or more strings */
var text1 = "Hello";
var text2 = "World";
var text3 = text1.concat(" ", text2); // this will join the two together
// the concat() method can be used instead of the plus operator;
var text = "Hello" + " " + "World!";
var text = "Hello".concat(" ", "World!");
/* All string methos return a new string.
	They don't modify the original string
	Formally said: Strings are immutable: Strings cannot be changed, only replaced. */

/* String.trim()
	String.trim() removes whitespace from both sides of a string */
var str = "      Hello World!      ";
alert(str.trim());

/* EXTRACTING STRING CHARACTERS
	There are 3 methods for extracting string characters
		charAt(position)
		charCodeAt(position)
		Proper access [ ]
	
	The charAt() Method
		the charAt() method returns the character at a specified index
		(position) in a string. */
var str = "HELLO WORLD";
str.charAt(0); 		// returns H (as its first character)

/* The charCodeAt() Method
	The charCodeAt() Metho returns the unicode of the caracter at a specified
	index in a strong
		The method returns a UTF-16 code (an interger between 0 and 65535) */
	var str = "HELLO WORLD";
	str.charCodeAt(0); 		// returns 72

/* Property Access
	ECMAScript 5 (2009) allows property access [] on strings */
var str = "HELLO WORLD";
str[0]; 		// returns H
/* Property access might be a little unpredictable 
	it does not work in IE7 or earlier
	It makes strings look like arrays when they aren't
	If no character is found, [] returns undefined, while charAt() returns empty
	It is read only. str[0] = "A" gives no error (but does not work) */
var str = "HELLO WORLD";
str[0] = "A";			// gives no error, but does not work
str[0];					// returns H

/* Converting a String to an Array
	A string can be converted to an array with the split() method */
var txt = "a,b,c,d,e"; 		// string
txt.split(",");				// Split on commas 
txt.split(" ");				// split on spaces
txt.split("|"); 			// split on pipe
/* If the separator is omitted, the returned array wil contain the whole string in index [0]
	if the seperator is "", the return array will be an array of single characters */
var text = "Hello"; 		// String
txt.split("");				// Split in characters

/* JAVASCRIPT NUMBERS
	JavaScript has only one type of number.
		Numbers can be written with or without decimals. */
var x = 3.14; 				// a number with decimas
var y = 3;					// A number without decimals

// Extra large or extra small numbers can be written with scientific (exponent) notation:
var x = 123e5; 				// 12300000
var y = 123e-5 				// 0.00123

/* JAVASCRIPT NUMBERS ARE ALWAYS 64-BIT FLOATING POINT
	Unline many other programming languages, JavaScript does not define different types
	of numbers, like integers, short, long, floating-point etc.

	JavaScript numbers are always stored as double precision floating point numbers,
	following the international IEEE 754 standard

	This format stores numbers in 64 bits, where the number (the fraction) is stored in 
	bits 0 to 51, the exponent in bits 52 to 62, and the sign in bit 63.
Value(aka fraction/mantissa) 		Exponent 			Sign */
52 bits (0 - 51)					11 bits (52 - 62)	1 bit (63)

/* Precision 
	Intergers (numbers without a period or exponent notation) are accurate up to 15 digits. */
var x = 999999999999999		// x will be 999999999999999
var y = 9999999999999999	// y will be 10000000000000000
// The maximum number of decimals is 17, but floating point arithmetic is not always 100% accurate
var x = 0.2 + 0.1; 			// x will be 0.30000000000000004
// To solve the problem above, it helps to multiply and divide
var x = (0.2 * 10 + 0.1 * 10) / 10; 	// x will be 0.3

/* Adding Numbers and Strings
	JavaScript ues the + operator for both addition and concatenation
	Numbers are added. strings are concatenated 

	if you add two numbers, the result will be a number */
var x = 10;
var y = 20;
var z = x + y; 		// z will be 30 (a number)
// If you add two strings, the resut will be a string concatenation
var x = "10";
var y = "20";
var z = x + y;		// z will be 1020 (a string)
// If you add a number and a string, the result will be a string concatenation
var x = 10;
var y = "20";
var z = x + y; 		// z will be 1020 (a string) 
// If you add a string and a number, the result will be a string concatenation
var x = "10";
var y = 20;
var z = x + y; 		// z will be 1020 (a string)
// A common mistake is to expect this result to be 30
var x = 10;
var y = 20;
var z = "The result is: " x + y; 		// will return 1020 as there is a string
// A common mistake is to expect this result to be 102030
var x = 10;
var y = 20;
var z = "30";
var result = x + y + z; // This will return 3030
/* JS compiler works from left to right
	first 10 + 20 are added because x and y are both numbers
	then 30 + 30 is concatenated because z is a string. */ 

/* Numeric Strings
	JavaScript strings can have numeric content */
var x = 100;		// x is a number
var y = "100"; 		// y is a string
// JavaScript will try to convert strings to numbers in all numeric operations
var x = "100";
var y = "10";
var z = x / y; // z will be 10
// this also works
var x = "100";
var y = "10";
var z = x * y; // z will be 1000
// this will work
var x = "100";
var y = "10";
var z = x - y; // z will be 90 
// BUT THIS WILL NOT WORK
var x = "100";
var y = "10";
var z = x + y // z will not be 110 (it will be 10010)
// JavaScript using the + operator to concatenate the strings

/* NaN - Not a Number
	NaN is a JavaScript reserved word indicating that a number is not a legal number
	Trying to do arithmetic with a non-numeric string will resutl in NaN (Not a Number) */
var x = 100 / "Apple"; 	// x will be NaN (Not a Number)
// However, if the string contains a numeric value, the result will be a number
var x = 100 / "10"; 	// x will be 10
// You cn use the global JavaScript function isNaN() to find out if a value is a number
var x = 100 / "Apple";
isNaN(x); 	// Returns true because x is Not a Number
// What out for NaN. If you use NaN in a mathematical operation, the result will also be NaN;
var x = NaN;
var y = 5;
var z = x + y; // z will be NaN
// Or the result might be a concatenation
var x = NaN;
var y = "5";
var z = x + y; // z will be NaN5
// NaN is a number: typeof NaN returns number:
typeof NaN; // returns "number"

