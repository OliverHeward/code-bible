/* ADVANCED REACT TECHNIQUES 

In this session, we will learn a variety of useful techniques that React programmers are expected to know.

We'll learn how to make a stateless function component,
	how to make a propType, 
	how to write a form,
	and how to use styles.

We'll also be introduced to our second programming pattern;
	dividing components into presentational components and container components.


	INLINE STYLES 

There are many different ways to use styles in React.
This session is focused on one of them; inline styles.

An inline style is a style thats written as an attribute, like so; */

<h1 style={{ color: 'red' }}>Hello world</h1>

/* Notice the double curly braces?

The outter curly braces inject JavaScript into JSX.
	They say "everything between us should read as JavaScript, not JSX"

The inner curly braces create a JavaScript object literal.
	They make this a valid JavaScript object. */

{ color: 'red' };

/* if you inject an object literal into JSX, 
	and your entire injection is only that object literal,
	then you will end up with double curly braces.
Theres nothing unsual about how they work, but they look funny and can be confusing.
*/

import React from 'react';
import ReactDOM from 'react-dom';

const styleMe = <h1 style={{ 
	background: 'lightblue',
	color: 'darkred'}}>Please style me! I am so bland!</h1>;

ReactDOM.render(
	styleMe,
	doument.getElementById('app')
	);


/* MAKE A STYLE OBJECT VARIABLE 

That's all you need to apply basic styles in React! Simple and staightfoward.

One problem with this approach is that it becomes obnoxious if you want to use more than just a few styles.
An alternative thats often nicer is to store a style object in a variable, and then inject that variable into JSX.

In the example below, the style object is defined in const styles, then injected in render.
*/
import React from 'react';

const styles = {
  color: 'darkcyan',
  background: 'mintcream'
};

export class StyledClass extends React.Component {
  render() {
    return (
      <h1 style={styles}>
        Hello world
      </h1>
    );
  }
}

/* Defining a variable named 'stye' in the top-level scope would be an extrmeley bad idea in many JavaScript enviroments!
	In REACT however, its totally chill of course.

Remember that every file is invisible to every other file,
	except for what you choose to expose via module.exports.
You could have 100 different, all with global variables named style,
	and there could be no conflicts. */

// EXERCISE
import React from 'react';
import ReactDOM from 'react-dom';

const styles = {
  background: 'lightblue',
  color: 'darkred'
};

const styleMe = <h1 style={styles}>Please style me! I am so bland!</h1>;

ReactDOM.render(
	styleMe, 
	document.getElementById('app')
);

/* STYLE NAME SYTNAX

In regular JavaScript, style names are written in hyphenated-lowercase */

const styles = {
	'margin-top': "20px",
	'background-color': "green"
};

// In React, those same names are instead writtten in camelCase;

const stypes = {
	marginTop: "20px",
	backgroundColor: "green"
};

// This has zero effecto n style property values, only on style property names.
// EXERICSE
import React from 'react';
import ReactDOM from 'react-dom';

const styles = {
  background: 'lightblue',
  color: 'darkred',
  marginTop: "100px",
  fontSize: "50px"
};

const styleMe = <h1 style={styles}>Please style me! I am so bland!</h1>;

ReactDOM.render(
	styleMe, 
	document.getElementById('app')
);

/* STYLE VALUE SYNTAX

In the last sessions,
	 we learnt how style names are slightly different in React than they are in regular JavaScript.

In this exercise,
	we'll learn how style values are slightly different in Reach than they are in regular JavaScript.

In regular JS, 
	style values are almost always strings.
Even if a style value is numeric,
	you usually have to write it as a string so that you can specify a unit
For example, 
	you have to write "450px" or "20%".

In REACT, if you write a style value as a number, then the unit "px" is assumed.

If you want a font size of 30px we can write; */

{ fontSize: 30 };

// If you want to use units other than px you can use a string;

{ fontSize: "2em" };

// Specifying "px" with a string will still work, although its redundant.
// EXERICSE
import React from 'react';
import ReactDOM from 'react-dom';

const styles = {
  background: 'lightblue',
  color: 'darkred',
  marginTop: 100, // changed from string to number
  fontSize: 50 // changed from string to number
};

const styleMe = <h1 style={styles}>Please style me! I am so bland!</h1>;

ReactDOM.render(
	styleMe, 
	document.getElementById('app')
);

/* SHARE STYLES ACROSS MULTIPLE COMPONENTS

What if you want to reuse styles for several different componants?

One way to make styles reusable is to keep them in a seprate JavaScript file.
	This file should export the styles that you want to reuse, via 'export'.
You can then 'import' your styles into an component that wnats them.



