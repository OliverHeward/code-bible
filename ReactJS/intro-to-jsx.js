==== HELLO WORLD ====;

// Take a look at the following like of code;

const h1 = <h1>"Hello world"</h1>;


==== WHAT IS JSX ====;

/* JSX is a sytnax extension for JavaScript. 
	It was written to be used with React
	JSX code looks a lot like HTML

What does "syntax extension" mean?

In this case, it means that JSX is not valid for JavaScript 
	Web browsers can't read it!

If a JavaScript file contains JSX code, then that file will have to be complied 
	That means that before the file reaches a web browers, 
	A JSX compiler will translate any JSX into regular JavaScript. 
*/

==== JSX ELEMENTS ====;

/* A Basic unit of JSX is called a JSX element.

An example of a JSX element is below; */

<h1>Hello World</h1>

/* This JSX element looks exactly like HTML! 
	The only noticeable difference is that you would find it in a JavaScript file, 
	instead of in a HTML file! */

const h1 = <h1>Hello world</h1>;
const p = <p>Hello World</p>;

==== JSX ELEMENTS AND THEIR SURROUNDINGS ====;

/* JSX elements are treated as JavaScript expressions. 
	They can go anywhere that JavaScript expressions can go.

That means that a JSX element can be saved in a variable, 
	passed to a function, stored in an object or array... you name it!

Heres an example of a JSX element being saved in a variable; */

const navBar = <nav>I am a nav bar</nav>

/* Here's an example of serveral JSX elements being stored in an object */

const myTeam = {
	center: <li>Bezno Walli</li>,
	powerForward: <li>Rasha Loa</li>,
	smallForward: <li>Tayshaun Dasmoto</li>
	shootingGuard: <li>Colmar Cumberbatch</li>
	pointGuard: <li>Femi Billon</li>
};


==== ATTRIBUTES IN JSX =====;

/* JSX elements can have attributes, just like HTML elements can.

A JSX attribute is written using HTML-like syntax; 
	a name, followed by an equals sign, followed by a value 
	The value should be wrapped in quotes like this: */
my-attribute-name="my-attribute-value";

// Here are some JSX elements with attributes; 

<a href="http://www.example.com">Welcome to the Web</a>

const title = <h1 id="title">Introduction to React.js: Part 1</h1>

// A single JSX element can have many attributes, just like in HTML;

const panda = <img src="images/panda.jpg" alt="panda" width="500px" height="500px" />;

// Exercise

const p1 = <p id="large">foo</p>;
const p2 = <p id="small">bar</p>;

==== NESTED JSX ====;

/* You can nest JSX elements inside of other JSX elements, just like in HTML

Here's an example of a JSX <h1> element, nested inside of a JSX <a> element. */

<a href="https://www.example.com"><h1>Click me!</h1></a>

/* To make this more readable, you can use HTML-style line breaks and indentation */

<a href="https://www.example.com">
	<h1>
		Click me!
	</h1>
</a>

/* If a JSX experssion takes up more than one line, 
then you must wrap the multi-line JSX expression in parentheses;
This looks strange at first, but you get used to it: */

(
	<a href="https://www.example.com">
		<h1>
			Click me!
		</h1>
	</a>
)

/* Nested JSX expressions can be saved as variables,
passed to functions, etc.. just like non-nested JSX expressions can!

Heres an example of a nested JSX expression being saved as a variable */

const theExample = (
	<a href="https://www.example.com">
		<h1>
			Click me!
		</h1>
	</a>
);


// EXERICSE
	
const myDiv = (
  <div>
    <h1>Hello world</h1>
  </div>
);


==== JSX OUTER ELEMENTS ====;

/* There's a rule that we haven't mentioned: 
	a JSX expression must have exactly one outermost element.

In other words, this code will work */

const paragraphs = (
	<div id="i-am-the-outermost-element">
		<p>I am a paragraph.</p>
		<p>I, too, am a paragraph.</p>
	</div>
	);

// but this code will not work 

const paragraphs = ( 
	<p>I am a paragraph.</p>
	<p>I, too, am a paragraph.</p>
	);

/* The first opening tag and the final closing tag of a JSX expression must belong to the same JSX element!

It's easy to forget about this rule, 
and end up with errors that are tough diagnose. 

If you notice that a JSX expression has multiple outer elements, 
the solution is usually simple: wrap the JSX expression in a <div>
*/

// Exercise

const blog = (
  <div>
  	<img src="pics/192940u73.jpg" />
  		<h1>
   			 Welcome to Dan's Blog!
  		</h1>
  	<article>
    	Wow I had the tastiest sandwich today.  I <strong>literally</strong> almost freaked out.
  	</article>
  </div>
);

==== RENDERING JSX ====;

/* To render a JSX expression means to make it appear onscreen. */

import React from 'react';
import ReactDOM from 'react-dom';

// the JSX expression render
ReactDOM.render(<h1>Hello world</h1>, document.getElementById('app'));


==== REACTDOM.RENDER() 1 ====;

/* Yo ucan see something called ReactDOM, what is it?

ReactDOM is the name ofa JavaScript library.
This library contains several React-specific methods,
all of which deal with the DOM in some way or another.

Moving to the right we can see ReactDOM's method - ReactDOM.render().

ReactDOM.render() is the most common way to render JSX.
It takes a JSX expression, creates a corresponding tree of DOM nodes,
and adds that tree to the DOM. THat is the way to make a JSX expression appear onscreen.

Move to the right a little more, and you come to this expression;  */

<h1>Hello World</h1>

/* This is the first argument being passed to 'ReactDOM.render()'.
ReactDOM.render()'s first argument should be a JSX expression, and it will be rendered to the screen 
*/

// exercise
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<h1>Render me!</h1>, document.getElementById('app'));


==== ReactDOM.render() 2 ====;

// Moving right a little more across the string, we see this expression 

document.getElementByID('app');

/* We just learnt that ReactDOM.render() makes its first argument appear onscreen.
But where one the screen should that first argument appear? 

The first argument is appended to whatever element is selected by the second argument

The element that getElementByID collects is whatever is written in the argument.

The element acted as a container for ReactDOM.render()'s first argument!
*/

<main id="app">
	<h1>Render me!</h1>
</main>

/* changing the 'app' class string in the HTML to container,
means you'd have to change the 'app' in the class string in app.js to container.
*/

ReactDOM.render(<h1>Render me!</h1>, document.getElementById('container'));

<span id="container"></span>


==== PASSING A VARIABLE TO REACTDOM.RENDER() ====;

/* ReactDOM.render()'s first argument should evaulate to a JSX expression,
	it doesn't have to literally be a JSX expression.

The first argument could also be a variable, 
so long as the variable evaulates to a JSX expression. 

In the example below, we save a JSX expression as a variabel named 'toDoList'
We pass the 'toDoList' as the first argument to 'ReactDOM.render()'; */

const toDoList = (
	<ol>
		<li>Learn React</li>
		<li>Become a Developer</li>
	</ol>
);
	
ReactDOM.render(
	toDoList,
	document.getElementById('app')
);

// EXERICSE

import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
const myList = (
	<ul>
  	<li>Heres a list</li>
  	<li>And another</li>
  	<li>one more</li>
  </ul>
);

ReactDOM.render(
  myList, 
  document.getElementById('app')
 );


==== THE VIRTUAL DOM ====;

/* One special thing about ReactDOM.render() is that it only updates DOM elements that have changed.

That means that if you render the exact same thing twice in a row,
the second render will do nothing: */

const hello = <h1>Hello World</h1>;
// This will add "hello world" to the screen:

ReactDOM.render(hello,
	document.getElementById('app'));
// This won't do anything at all:

ReactDOM.render(hello,
	document.getElementById('app'));

/* This is significant! Only update the necessary DOM elements is a large part of what makes React so successful.

React accomplishes this thanks to something called virtual DOM.








