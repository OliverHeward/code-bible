/* Stateless functional components

Take a look at the code below for GunieaPigs.js */

import React from 'react';

export class GuineaPigs extends React.Component {
  render() {
    let src = this.props.src;
    return (
      <div>
        <h1>Cute Guinea Pigs</h1>
        <img src={src} />
      </div>
    );
  }
}

/* Notice that its instructions object only has one property;
	render() 

When you separate a container component from a presentational component,
	the presentaional component will always end up like this;
		one render() function, and no other properties.

If you have a component class with nothing but a render function,
	then you can rewrite that component class in a very different way.
Instead of using React.Component,
	you can write it as a JavaScript function!

A component class written as a function is called a stateless functional component.
	Stateless functional components have some advantages over typical component classes.

See new code below for Example.js to see a stateless functional component in action. */


// A component class written in the usual way:
export class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
}

// The same component class, written as a stateless functional component:
export const MyComponentClass = () => {
  return <h1>Hello world</h1>;
}

// Works the same either way:
ReactDOM.render(
	<MyComponentClass />,
	document.getElementById('app')
);


// EXERCISE - changing to a stateless functional component

import React from 'react';
import ReactDOM from 'react-dom';

export const Friend = () => {
  return <img src='https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-octopus.jpg' />;
}

ReactDOM.render(
	<Friend />,
	document.getElementById('app')
);

/* STATELESS FUNCTIONAL COMPONENTS AND PROPS

Stateless functional components usually have 'props' passed to them.

To access these 'props', give your stateless functional component a parameter.
	This parameter will automatically be equal to the components 'props' object.

It's customary to name this parameter 'props'.

Not only are stateless functional components more concise, 
	but they will subtly influence ho you think about components in a positive way.
They emphasize the fact that components are basically functions!
A component takes two optional inputs, 'props' and 'state', and outputs HTML and/or other components.
*/

// EXERICSE

import React from 'react';

export const GuineaPigs = (props) => {
  let src = props.src;
  return (
    <div>
      <h1>Cute Guinea Pigs</h1>
      <img src={src} />
    </div>
  );
}