/* CHILD COMPONENTS UPDATE SIBLING COMPONENTS 

Patterns within patterns within patterns! 

In lesson 1, we learnt our first React programming pattern;
	A stateful, parent component passes down a 'prop' to a stateless, child component.

In lesson 2, we've learnt that lessons 1 pattern is actually part of a larger pattern:
	a stateful, parent component passes down an event handler to a stateless, child compnent.
The child component then uses that event handler to update its parents 'state'

In these sessons we'll expand the pattern on last time.
A child component updates its parents state,
	and the parent passes that state to a sibling component.


ONE SIBLING TO DISPLAY, ANOTHER TO CHANGE.

One of the very first things that we learned about components is that they should only have one job.

In the last session, 'child' had two jobs;

	- 'Child' displayed a name
	- 'Child' offered a way to change that name

We should make like Solomon and divide 'Child' in two;
	One component for displaying the name,
	Another different component for allowing a user to change the name/

In the new code, we have take nout the <h1> from the return of 'Child.js',
	Its now moved into its own js file called Sibling. 
Sibling now returns a visual including the text/<h> elements.


PASS THE RIGHT PROPS TO THE RIGHT SIBLINGS */
// parent.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Child } from './Child';
import { Sibling } from './Sibling';

class Parent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: 'Frarthur' };

    this.changeName = this.changeName.bind(this);
  }

  changeName(newName) {
    this.setState({
      name: newName
    });
  }

  render() {
    return (
      <div>
        <Child 
          name={this.state.name} 
          onChange={this.changeName} />
        <Sibling />
      </div>
    );
  }
}

ReactDOM.render(
  <Parent />,
  document.getElementById('app')
);
/* Look above at parent.js
	
Three things have changed in this file since that last session;

	- 'Sibling' has been required on line 4
	- A <Sibling /> instance has been aded to the render function on line 27
	- <Sibling /> and <Child /> have been wrapped in a <div>, 
		since JSX expressions must have only one outer element. */


/* DISPLAY INFORMATION IN A SIBLING COMPONENT 

We've passed the name down to <Sibling /> as a prop.
	Now <Sibling /> has to display that prop. */


// FINAL EXERICSE COMPLETED
// Parent.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Child } from './Child';
import { Sibling } from './Sibling';

class Parent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: 'Frarthur' };

    this.changeName = this.changeName.bind(this);
  }

  changeName(newName) {
    this.setState({
      name: newName
    });
  }

  render() {
    return (
      <div>
        <Child onChange={this.changeName} />
        <Sibling name={this.state.name} />
      </div>
    );
  }
});

ReactDOM.render(
  <Parent />,
  document.getElementById('app')
);

//Child.js
import React from 'react';

export class Child extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const name = e.target.value;
    this.props.onChange(name);
  }

  render() {
    return (
      <div>
        <select
          id="great-names"
          onChange={this.handleChange}>

          <option value="Frarthur">Frarthur</option>
          <option value="Gromulus">Gromulus</option>
          <option value="Thinkpiece">Thinkpiece</option>
        </select>
      </div>
    );
  }
}

//Sibling.js
import React from 'react';

export class Sibling extends React.Component {
  render() {
    const name = this.props.name;
    return (
      <div>
        <h1>Hey, my name is {name}!</h1>
        <h2>Don't you think {name} is the prettiest name ever?</h2>
        <h2>Sure am glad that my parents picked {name}!</h2>
      </div>
    );
  }
}


/* STATELESS COMPONENTS INHERIT FROM STATE COMPONENTS RECAP!

We've just executed our first complete React programming pattern!

	- A stateful component class defines a function that calls 'this.setState'

	- The stateful component passes that function down to a stateless component.

	- That stateless component class defines a function that calls the passed-down function,
		and that can take an event object as an argument.

	- The stateless component class uses this new function as an event handler

	- When an event is detected, the parent' state updates. (A user selects a new drop down menu item)

	- That stateless component class receives the state and displays it 

	- An instance of the stateful component class is rendered. One stateless child component displays the state, 
	and a different stateless child component displays a way to change.

This pattern occurs in react all the time!
The more that you set it, the more that its elegance will become clear.

Being introduce to this pattern is our first step towards understanding how React apps fit together.

