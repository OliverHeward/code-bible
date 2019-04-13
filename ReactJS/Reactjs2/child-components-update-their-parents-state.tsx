/* CHILD COMPONENTS UPDATE THEIR PARENTS STATE

last lesson (stateless-components-from-stateful-components),
we passed information from a stateful, parent component to a stateless, child component.

In this session, we'll be expanding on that pattern.
The stateless, child component will update the state of the parent component.

Heres how that works;

1 - The parent component class defines a method that class this.setState()
	- see .handleClick() Method at bottom on Step1.js

2 - The parent component binds the newly-defined method to the current instance of the component in its constructor,
	It will still update the parent component. 
	- see constructor() method at bottom on Step2.js.

3 - Once the parent has defined a method that updates its state and bound to it,
	the parent then passes that method down to a child.
	- see prop at Step2.js on line 73

4 - The child recieves the passed - down function and uses it as an event handler.
	- In Step3.js see the <button>, when it clicks an event will fire.
*/
// step1.js
import React from 'react';
import ReactDOM from 'react-dom';
import { ChildClass } from './ChildClass';

class ParentClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = { totalClicks: 0 };
  }

  handleClick() {
    const total = this.state.totalClicks;

    // calling handleClick will 
    // result in a state change:
    this.setState(
      { totalClicks: total + 1 }
    );
  }
}
// Step2.js
import React from 'react';
import ReactDOM from 'react-dom';
import { ChildClass } from './ChildClass';

class ParentClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = { totalClicks: 0 };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const total = this.state.totalClicks;

    // calling handleClick will 
    // result in a state change:
    this.setState(
      { totalClicks: total + 1 }
    );
  }

  // The stateful component class passes down
  // handleClick to a stateless component class:
  render() {
    return (
      <ChildClass onClick={this.handleClick} />
    );
  }
}
// Step 3.js
import React from 'react';
import ReactDOM from 'react-dom';

export class ChildClass extends React.Component {
  render() {
    return (
      // The stateless component class uses
      // the passed-down handleClick function,
      // accessed here as this.props.onClick,
      // as an event handler:
      <button onClick={this.props.onClick}>
        Click Me!
      </button>
    );
  }
}


/* DEFINE AN EVENT HANDLER

To make a child component update its parent's state,
The first step is something that we've seen before.
We must define a state-changing method on the parent.
*/
// EXERCISE
	// child.js
import React from 'react';

export class Child extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Hey my name is {this.props.name}!
        </h1>
        <select id="great-names">
          <option value="Frarthur">
            Frarthur
          </option>

          <option value="Gromulus">
            Gromulus
          </option>

          <option value="Thinkpiece">
            Thinkpiece
          </option>
        </select>
      </div>
    );
  }
}
	// PARENT.JS
import React from 'react';
import ReactDOM from 'react-dom';
import { Child } from './Child';

class Parent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: 'Frarthur' };
  }
  
  changeName(newName) {
    this.setState({
      name: newName
    });
  }

  render() {
    return <Child name={this.state.name} />
  }
}

ReactDOM.render(
	<Parent />,
	document.getElementById('app')
);

/* PASS THE EVENT HANDLER

In the last exericse, 
	we defined a function in a 'Parent' that can change 'Parents' state.

'Parent' must pass this function down to 'Child', so that 'Child' can use it in an event listener on the dropdown menu.
*/

// EXERCISE
    // Parent.JS
import React from 'react';
import ReactDOM from 'react-dom';
import { Child } from './Child';

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.changeName = this.changeName.bind(this);

    this.state = { name: 'Frarthur' };
  }
  
  changeName(newName) {
    this.setState({
      name: newName
    });
  }

  render() {
    return <Child name={this.state.name} onChange={this.changeName} />
  }
}

ReactDOM.render(
  <Parent />,
  document.getElementById('app')
);
    // child.js

import React from 'react';

export class Child extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Hey my name is {this.props.name}!
        </h1>
        <select id="great-names">
          <option value="Frarthur">
            Frarthur
          </option>

          <option value="Gromulus">
            Gromulus
          </option>

          <option value="Thinkpiece">
            Thinkpiece
          </option>
        </select>
      </div>
    );
  }
}


/* RECEIVE THE EVENT HANDLER 

We just passed a function down to a 'child' that can change 'parents' state!


AUTOMATIC BINDING

Stateless components updating their parent's state is a React pattern that we'll see more and more.
  Learning to recognize it will help us understand how React Apps are organized.
*/

// EXERCISE
      // Parent.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Child } from './Child';

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
    return <Child name={this.state.name} onChange={this.changeName} />
  }
}

ReactDOM.render(
  <Parent />,
  document.getElementById('app')
);

        // Child.js
import React from 'react';

export class Child extends React.Component {
  
  handleChange(e) {
    const name = e.target.value;
    this.props.onChange(name);
  }
  
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  
  render() {
    return (
      <div>
        <h1>
          Hey my name is {this.props.name}!
        </h1>
        <select id="great-names" onClick={this.handleChange}>
          <option value="Frarthur">
            Frarthur
          </option>

          <option value="Gromulus">
            Gromulus
          </option>

          <option value="Thinkpiece">
            Thinkpiece
          </option>
        </select>
      </div>
    );
  }
}











































