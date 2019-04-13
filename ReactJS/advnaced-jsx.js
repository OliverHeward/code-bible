==== CLASS VS CLASSNAME ====;

/* Grammar in JSX is mostly the same in HTML,
But there are subtle differences to watch out for.
Probbly the most frequent of these involves the word 'class'

In HTML, it's common to use class as an attribute name; */

<h1 class="big">Hey</h1>

// In JSX, you can't use the word 'class'! You have to use className instead; 

<h1 className="big">Hey</h1>

/* This is because JSX gets translated into JavaScript and class is a reserved word in JavaScript.

When JSX is rendered, JSX className attributes are automatically rendered as class attributes.
*/
//Exercise

import React from 'react';
import ReactDOM from 'react-dom';

const myDiv = 
      <div className="big">I AM A BIG DIV</div>;

ReactDOM.render(myDiv,
               document.getElementById('app'));

==== SELF-CLOSING TAGS ====;

/* Another JSX gotcha involves self closing tags.

Most HTML elements use two tags;
	An opening tag (<div>)
	and a closing tag (</div>)

However, some HTML elements such as <img> and <input> use only one tag.
The tag that belongs to a single-tag element isn't an opening tag nor a closing tag
its a self closing tag.

When you write a self-closing tag in HTML, 
it is optional to include a forward-slash immediately before the final angle bracket.
*/

//fine in HTML with a slash
<br />
// also fine, without a slash
<br></br>

/* But,

In JSX, you have to include the slash. If you write a self-closing tag in jsx and forget the slash
you'll raise an error! */

<br /> 
// fine in jsx

// EXERCISE EXAMPLE 

const profile = (
  <div>
    <h1>I AM JENKINS</h1>
    	<img src="images/jenkins.png" />
    		<article>
      				I LIKE TO SIT
      			<br /> 
      				JENKINS IS MY NAME
      			<br />
      				THANKS HA LOT
    		</article>
  </div>
);

==== JAVASCRIPT IN YOUR JSX IN YOUR JAVASCRIPT ====;

/* So far, we've focused on writing JSX expressions,
It's similar to writing bits of HTML, but inside of a JS file.\

Now to add JavaScript into a JSX expression. */

// EXERCISE

import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:

ReactDOM.render( <h1>2 + 3</h1>, document.getElementById('app') ); // prints 2+3

==== CURLY BRACES IN JSX ====;

/* The code above didn't behave as one might expect, instead of adding 2+3 it printed it as a string.

This happened because 2+3 is located inbetween <h1> tags.

Any code in between the tags of a JSX element will be read as JSX,
not as regular JavaScript!
JSX doesn't add numbers - it reads them as text, just like HTML.

You need a way to write code that says, 
"Even though i am located in between JSX tags, treat me like ordinary JS and not like JSX".

We do this by wrapping code in {}!
*/

import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render( <h1>{2 + 3} </h1>, document.getElementById('app') ); //now prints 5!


==== 20 DIGITS OF PI IN JSX ====;

/* Study this expression and notice the following */
import React from 'react';
import ReactDOM from 'react-dom';

const pi = (
  <div>
    <h1>
      PI, YALL!
    </h1>
    <p>
      {Math.PI.toFixed(20)}
    </p>
  </div>
);

ReactDOM.render(
	pi,
	document.getElementById('app')
);

/* - The code is written in a JavaScript file. 
		By default, it will all be treated as regular JavaScript.
	- Find <div> on line 5. 
		From there up through </div>, the code will be treated as JSX.
	- Find 'Math'.
		From there up through (20), the code will be treated as regular JavaScript again
	- The curly braces themselves wont be treated as JSX nor as JavaScript.
		They are markers that signal the beginning and end of a JavaScript injection into JSX,
		similar to the quotation marks that signal the boundaries of a string.
*/

==== VARIABLES IN JSX ====;

/* When we inject JavaScript into JSX, 
that JavaScript is part of the same environment as the rest of the JavaScript in our file.

That menas that you can access variables while inside of a JSX expression, even if those variables were declared on the outisde
*/

// Declared variable
const name = 'Gerdo';

// Accessing the variable, from inside of a JSX expression 
const greeting = <p>Hello, {name}!</p>

// example exercise
import React from 'react';
import ReactDOM from 'react-dom';

const theBestString = 'tralalalala i am da best';

ReactDOM.render(<h1>{theBestString}</h1>, document.getElementById('app'));

==== VARIABLE ATTRIBUTES IN JSX ====;

// When writing JSX, It's common to use variables to set the height and width attributes:

const sideLength = "200xp";

const panda = ( 
	<img
		src="images/panda.jpg"
		alt="panda"
		height={sideLength}
		width={sideLength} />
	);

/* Notice how in the example,
	the <img /> attributes each get their own line.
	this can make your code more readable if you have a lot of attributes on one element.

Object properties are also often used to set attributes */

const pics = {
	panda: "http://bit.ly/1Tqltv5",
	owl: "http://bit.ly/1XGtkM3",
  	owlCat: "http://bit.ly/1Upbczi"
};

const panda = (
	<img
		src={pics.panda}
		alt="Lazy Panda" />
	);

const owl = (
	<img
		src={pics.owl}
		alt="Unimpressed Owl" />
	);

const owlCat = (
	<img
		src={pics.owlCat}
		alt="Ghastly Abomination" />
	);


// EXERCISE 
import React from 'react';
import ReactDOM from 'react-dom';

const goose = 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-goose.jpg';

// Declare new variable here:
const gooseImg = <img src={goose} />
  
ReactDOM.render(gooseImg, document.getElementById('app'));


===== EVENT LISTENERS IN JSX ====;

/* JSX elements can ahve event listeners, 
	just like HTML elements can.
	Programming in React means constantly working with event listeners.

You create an event listener by giving a JSX element a special attribute; Example below */

<img onClick={myFunc} />

/* An event listener attriutes name should be something like 
	- onClick or - onMouseOver
The word on, plus the type of event that you're listening for.
SEE BOOKMARK --- SyntheticEvent – React

An event listeners attribute's value should be a function.
	The above example would only work if myFunc were a valid function that had been defined elsewhere; */

function myFunc() {
	alert('Make myFunc the pFunc... omg that was horrible i am so sorry');
}

<img onClick={myFunc} />

/* Note that in HTML, event listener names are written in all lowercase, such as;
onclick or onmouseover.
In JSX, event listeners are in camelCase like JavaScript like so;
onClick ----- onMouseOver. */

import React from 'react';
import ReactDOM from 'react-dom';

function makeDoggy(e) {
  // Call this extremely useful function on an <img>.
  // The <img> will become a picture of a doggy.
  e.target.setAttribute('src', 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg');
  e.target.setAttribute('alt', 'doggy');
}

const kitty = (
	<img 
		src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg" 
		alt="kitty" 
		onClick={makeDoggy}
		/>
);

ReactDOM.render(kitty, document.getElementById('app'));


==== JSX CONDITIONALS: IF STATEMENTS THAT DONT WORK ====;

/* Here's a rule that we need to know, 
	you can not inject an if statement into a JSX expression.

This code will break 

(
	<h1>
		{
			if(purchase.complete) {
				'Thank you for placing an order!'
			}
		}
	</h1>
)

The reason why has to do with the way that JSX is compiled.

What if you want a JSX expression to render, but only under certain circumstances?
	You can't inject an 'if' statement. What can we do? 

We have lots of options available to us.... */

==== JSX CONDITIONALS: IF STATEMENTS THAT DO WORK ====;

/* How can we write a conditional, if you can't inject an 'if' statement into JSX?

Well, one option is to write an 'if'statement, and not inject it into JSX.

because the words 'if' and 'else' are not injected in between JSX tags. The 'if' statement is on the outside,
	and no JavaScript injection is necessary. 

This is a common way to express conditionals in JSX. */


import React from 'react';
import ReactDOM from 'react-dom';

let message;

if (user.age >= drinkingAge) {
  message = (
    <h1>
      Hey, check out this alcoholic beverage!
    </h1>
  );
} else {
  message = (
    <h1>
      Hey, check out these earrings I got at Claire's!
    </h1> 
if (coinToss() === "heads") {
    img = (
      <img src={pics.kitty} />
    );
  } else {
    img = (
      <img src={pics.doggy} />
);
  }
  );
}

ReactDOM.render(
  message, 
  document.getElementById('app')
);

ReactDom.render(img, document.getElementById('app'));

==== JSX CONDITIONALS: THE TERNARY OPERATOR =====;

/* There's a more compact way to write conditionals in JSX: the ternary operator;

The ternary operator works the same way in React as it does in regular JavaScript. 
	However, it shows up in React suprisingly often.

Recall how it works: 
	You write x ? y : z
		Where x, y, and z are all JavaScript expressons. 

	When your code is executed, x is evaluated as either "truthy" or "falsy".
		If x is truthy, then the entire ternary operator returns y.
	If x is falsy, then the entire ternary operator returns z.

Heres how you might use the ternary operator in a JSX expresson */

const headline = (
	<h1>
		{age >= drinkingAge ? 'Buy Drink' : 'Do Teen Stuff'}
	</h1>
);

/* In the example above, if the 'age' is greater than or equal to 'drinkingAge',
	then 'headline' will equal 'Buy Drink'.
		Otherwise 'headline' will equal 'Do Teen Stuff'.
*/

import React from 'react';
import ReactDOM from 'react-dom';

function coinToss () {
  // Randomly return either 'heads' or 'tails'.
  return Math.random() < 0.5 ? 'heads' : 'tails';
}

const pics = {
  kitty: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg',
  doggy: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg'
};

const img = <img src={pics[coinToss() === 'heads' ? 'kitty' : 'doggy']} />;

ReactDOM.render(
	img, 
	document.getElementById('app')
);


==== JSX CONDITIONALS: && ====;

/* The final way of writing conditionals in React is the && operator.

Like the ternary operator, && is not React-specific, but it shows up in React suprisingly often.

&& works best in conditionals that will sometimes do an action, but other times do nothing at all!

heres an example */

const tasty = (
	<ul>
		<li>Applesuace</li>
		{ !baby && <li>Pizza</li>}
		{ age > 15 && <li>Brussel Sprouts</li>}
		{ age > 20 && <li>Oysters</li>}
		{ age > 25 && <li>Grappa</li>}
	</ul>
);

// Every time that you see && in this example, either some code will run, or else no code will run.

import React from 'react';
import ReactDOM from 'react-dom';

// judgmental will be true half the time.
const judgmental = Math.random() < 0.5;

const favoriteFoods = (
  <div>
    <h1>My Favorite Foods</h1>
    <ul>
      <li>Sushi Burrito</li>
      <li>Rhubarb Pie</li>
      {!judgmental && <li>Nacho Cheez Straight Out The Jar</li>
      <li>Broiled Grapefruit</li>
    </ul>
  </div>
);

ReactDOM.render(
	favoriteFoods, 
	document.getElementById('app')
);

==== .MAP IN JSX ====;

/* The array method .map() comes up often in React.
	Its good to get in the habit of using it alongside JSX.

If you want to create a list of JSX elements, then .map() is often your best bet. It can look odd at first: */

const strings = ['Home', 'Shop', 'About Me'];

const listItems = strings.map(string => <li>{string}</li>);

<ul>{listItems}</ul>

/* In the above example, we start out with an array of strings.
	We call .map() on this array of strings, 
	and the.map() call returns a new array of <li>

On the last line of the example, note that {listItems} will evaulate to an array,
because its the returned value of .map()! JSX <li>s dont have to be in an array like this,
	but they can be. */

// You can write an explicit array like so 

const liArray = [
	<li>item 1</li>,
	<li>item 2</li>,
	<li>item 3</li>,
	<li>item 4</li> // so on so forth 
];

<ul>{liArray}</ul>; // the call for the liArray

// Exercise

import React from 'react';
import ReactDOM from 'react-dom';

const people = ['Rowe', 'Prevost', 'Gare'];

const peopleLis = people.map(person => <li>{person}</li>);
  // expression goes here:
<ul>{peopleLis}</ul>;
);

// ReactDOM.render goes here:
ReactDOM.render(<ul>{peopleLis}</ul>, document.getElementById('app'));



==== .MAP IN JSX ====;

/* The array method .map() comes up often in React. 
	Its good to get in the habit of using it alongside JSX

If you want to create a list of JSX elements,
	then .map() is often your best bet. it can look odd at first; */

const strings = ['Home', 'Shop', 'About Me'];

const listItems = strings.map(string => <li>{string}</li>);

<ul>{listItems}</ul>

/* In the above example, we start out with an array of strings.
	We call .map() on this array of strings, and the .map() call returns a new array of <li>

On the last line of the example, not that {listItems} will evaulate to an array, 
	because it's returned value of .map()!
	JSX <li>'s don't have to be in an array like this, but they can be!

*/

===== KEYS =====;

/* When you make a list in JSX, sometimes your list will need to include something called keys */

<ul>
	<li key="li-01">Example1</li>
	<li key="li-02">Example2</li>
	<li key="li-03">Example3</li>
</ul>

/* A 'key' is a JSX attribute. The attributes name is 'key'.
	The attriute's value should be something unique, similar to an 'id' attribute

keys dont do anything that you can see!
	React uses them internally to keep track of lists.
	If you don't use keys when youre supposed to, 
	React might accidently scramble your list-items into the wrong order.

Not all lists need to have keys. A list needs keys if either of the following are true;

- The list-items have memory from one render to the next. 
	for instance, when a to-do list renders, each item must "remember" whether it was checked off.
	The items shouldnt get amnesia when they render

- A lists order might be shuffled for instance, 
	a list of search results might be shuffled from one render to the next

If neither of these conditions are true, then you dont have to worry about keys.
If you arent sure then it never hurts to use them. */

import React from 'react';
import ReactDOM from 'react-dom';

const people = ['Rowe', 'Prevost', 'Gare'];

const peopleLis = people.map((person, i) =>
  // expression goes here:
  <li key={'person_' + i}>{person}</li>
);

// ReactDOM.render goes here:
ReactDOM.render(<ul>{peopleLis}</ul>, document.getElementById('app'));



==== REACT.CREATEELEMENT =====;

/* You can write React code without using JSX at all!

The majority of React programmers do use JSX, but you should understand that it is possible to write react code without it.

JSX expression; */

const h1 = <h1>Hello world</h1> 

// can be written without jsx like this

const h1 = React.createElement(
	"h1",
	null
	"Hello, world"
	);

/* When a JSX element is compiled, the compiler transforms the JSX element into the method that is above.
	React.createElement(). 
		Every JSX element is secretly a call to React.createElement().
*/

const greatestDivEver = React.createElement(
	"div",
  	null,
  	"I am div"
);









