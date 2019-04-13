/* STATELESS COMPONENTS INHERIT FROM STATEFUL COMPONENTS 

In this session, we'll take a look at a simple version of a programming pattern.
By the end of this we'll have a programming pattern in its full complexity.

Our programming pattern uses two React components: 
	A stateful component
	and A stateless Component

"Stateful" describes any component that has a state property;
"Stateless" describes any component that does not.

In our pattern, a stateful component passes its state down to a stateless component.


BUILD A STATEFUL COMPONENT CLASS

Here we'll make a stateful component pass its 'state' to a stateless component.

To make that happen, you need two component classes: 
	a stateful class, and a stateless class. */

// EXERCISE 
import React from 'react';
import ReactDOM from 'react-dom';


class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Frarthur' };
  }
  
  render() {
    return <div></div>
  }
}
/* We've made a stateful component class named 'Parent'.
	
	Now lets make our stateless component class.
*/

import React from 'react';

export class Child extends React.Component {
  
  render() {
    return <h1>Hey, my name is {this.props.name}!</h1>;
  }
}

/* PASS A COMPONENTS STATE

A <Parent /> is supposed to pass its 'state' to a <Child />.

Before a <Parent /> can pass anything to a <Child />, we need to import Child into Parent.js */

import React from 'react';
import ReactDOM from 'react-dom';
import { Child } from './Child';

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Frarthur' };
  }

  render() {
    return <Child name={this.state.name} />;
  }
}

ReactDOM.render(<Parent />, document.getElementById('app'));

/* DON'T UPDATE PROPS

We just passed information from a stateful component to a stateless component.

We learned earlier that a component can change its state by calling this.setState() 
We may wonder: how does a component change its props?

It DOESNT

A component should never update this.props.
SEE EXAMPLE BELOW */
import React from 'react';

class Bad extends React.Component {
  render() {
    this.props.message = 'yo'; // NOOOOOOOOOOOOOO!!!
    return <h1>{this.props.message}</h1>;
  }
}
/* This is potentially confusing.
	'props' and 'state' store dynamic information.

	Dynamic information can change, by definition. 
	If a component can't change its 'props', then what are 'props' for?

A React component should use 'props' to store information that can be changed,
but can only be changed by a different component.

A React component should use 'state' to store information that the component itself can change.

