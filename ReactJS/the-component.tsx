/* HELLO WORLD, PART 2... THE COMPONENT 

React applictions are made out of components. 

A component is a small, reusable chunk of code that is responsible for one job.
That job is often to render some HTML.

The code below will create and render a new React Component */

import React from 'react';
import ReactDOM from 'react-dom';

class MyComponentClass extends React.Component {
	render() {
		return <h1>Hello World</h1>;
	}
};

ReactDOM.render(
	<MyComponentClass />,
	document.getElementById('app'));


/* IMPORT REACT 

In line one we can see */

import React from 'react';

/* This line of code creates a new variable.
	That variables name is 'React', and its value is a particular, imported JavaScript Object.

This imported object contains methods that you need in order to use React.
	The object is called the React library.

Later we'll learn where to get the React library imported from, 
	and how the importing process works.
		For now, just know that you get React library via 'import React from 'react'';

You've already seen one of these methods contained in the React library;
	React.createElement().
Recall that when a JSX element is compiled, it transforms into a 'React.createElement()' call.

For this reason, you have to import the React library, and save it in a variable named React,
	before you can use any JSX at all. React.createElement() must be available in order for JSX to work.
*/

import React from 'react';

/* IMPORT REACTDOM

Now in line 2 we can see */

import ReactDOM from 'react-dom';

/* Lines 1 and 2 both import JavaScript objects,
	In both lines the imported object contains React-related methods.

However, there is a difference!

The methods imported from 'react-dom' are meant for interacting with the DOM.
	We're already familiar with one of them; 'ReactDOM.render()'

The methods imported from 'react' dont deal with the DOM at all.
	They dont engage directly with anything that isn't part of React.

To clarify;
	The DOM is used in React applications, but isn't part of React.
	After all,
		The DOM is also used in countless non-React applications.
	Methods imported from 'react' are only for pure React purposes,
	such as creating components or writing JSX elements. */

import ReactDOM from 'react-dom';

/* CREATE A COMPONENT CLASS 

A component class is like a factory that creates components.
	If you have a component class, then you can use that class to produce as many components as you want.

To make a component class, we can use a base class from the react library: 
	'React.Component'
What is a React.Component and how do you use it to make a component class?

React.Component is a JavaScript class. To create you own component class,
	you must subclass React.Component.
We can do this by using the syntax
	class YourComponentNameGoesHere extends React.Component {}

JS classes and subclassing area a complex topic beyon the scope of this ourse.
*/

import React from 'react';
import ReactDOM from 'react-dom';

class x extends React.Component {};


/* NAME A COMPONENT CLASS

Subclassing React.Component is the way to declare a new component class

When you declare a new component class,
	you need to give that component class a name.

Component class variable names must behind with capital letters1

This adheres to JS class sytnax. It also adheres to a broader programming convetion in which,
	Class names are written in UpperCamelCase. */

import React from 'react';
import ReactDOM from 'react-dom';

class MyComponentClass extends React.Component {};

/* COMPONENT CLASS INSTRUCTIONS 

Like all JavaScript classes, 
	this one needs a body.
The body will act as a set of instructions, 
	explaining to your component class how it should build a React component.


Here's what the class body would look like on its own, without the rest of the class. */

{
	render() {
		return <h1>Hello world</h1>
	}
};

/* THE RENDER FUNCTION 

A component class is like a factory that builds components.
	It builds these components by consulting a set of instructions,
		which you must provide.

For starters, these instructions should take the form of a class declaration body.
	That means that they will be delimited by curly braces, like this; */

class ComponentFactory extends React.Component {
	// instructions go here 
};

/* The instructions should be written in typical JS syntax.

There is only one property that you have to include in the instructions: a render method.

A render method is a property whose name is 'render',
	and whose value is a function. 
The term "render method" can refer to the entire property, 
	or to just the function part */

class ComponentFactory extends React.Component {
	render() {}
};

// A render must contain a return statement. Usually, this return statement returns a JSX expression 

class ComponentFactory extends React.Component {
	render() {
		return <h1>Hello world</h1>
	}
};

/* Of course, none of this explains the point of a render method.
	All we know so far is that its name is render, it needs a return statement for some reason,
	and oyu have to include it in the body of your component class declaration. */

import React from 'react';
import ReactDOM from 'react-dom';

class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello world</h1>
  }
};

/* CREATEA COMPONENT INSTANCE 

MyComponentClass is now a working component class!
	Its ready to follow its instructions and make some React components.

So, lets make a React component, it only takes one more line */

<MyComponentClass />

/* To make a React component, you write a JSX element.
	Instead of naming your JSX element something like h1 or div like we've done before,
	Give it the same name as a component class. Voila theres your component instance. 

JSX elements can be either HTMl-like, or component instances.
	JSX uses capitalization to distinguish between the two! 
	That is the React-specific reason why component class names must begin with capital letters.
	In a JSX element, that capitalized first letter says,
	"I will be a component instance and not an HTML tag." */

import React from 'react';
import ReactDOM from 'react-dom';

class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
}

// component goes here:
<MyComponentClass />

/* RENDER A COMPONENT 

WHen we make a new component class, these instructions are the body of our class declaration. */

class MyComponentClass extends React.Component {
	// Everything in between these curly braces is instructions, for how to build components

	render() {
		return <h1>Hello world</h1>
	}
};

/* This class declaration results in a new component class,
	In this case named MyComponentClass.
MyComponentClass has one method, named 'render'. 
This all happens via standard JS class syntax.

When we make a component by using expression ,
<MyComponentClass /> what do these instructions do? 

Whenever we make a component, that component inherits all of the methods of its component class.
MyComponentClass has one method;
MyComponentClass.render().
Therefor, <MyComponentClass /> also has a method named render.

We can make a million different <MyComponentClass /> intances,
and each one would inherit this same exact render method.

In order to render a component, that component needs to have a method named 'render'.
	Our component has this, it inherited a method named render from MyComponentClass.

Since our component has a render method, 
	all that's left to do is call it. This happens in a slightly unusual way.

To call a components render method, you pass that component to ReactDOM.render().
	Notice your component, being passed as ReactDOM.render()'s first argument */

ReactDOM.render(
	<MyComponentClass />,
	document.getElementById('app'));

/* ReactDOM.render() will tell <MyComponentClass /> to call its render method.

<MyComponentClass /> will call its render method,
which will return the JSX element <h1>Hello world</h1>.
ReactDOM.render() will then take that resulting JSX element, and add it to the virtual DOM.
This will make "Hello world" appear on the screen. */

import React from 'react';
import ReactDOM from 'react-dom';

class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
}

<MyComponentClass /> 
  
ReactDOM.render(
	<MyComponentClass />,
document.getElementById('app'));	


















































