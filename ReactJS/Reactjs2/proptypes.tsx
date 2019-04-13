/* propTypes

This session, we'll learn to use an important React feature called 'propTypes'.

'propTypes' are useful for two reasons. 
	The first reason is prop validation.

Validation can ensure that your 'props' are doing what they're supposed to be doing.
	if 'props' are missing, or if they're present but they are't waht you're expecting,
		then a warning will print in the console.

This is useful, but reason #2 is arguably more useful documentation;

Documenting 'props' makes it easier to glace at a file and quickly understand the component class inside.
	When you have lots of files, and you will, this can be a huge benefit.
*/

/* APPLY PROPTYPES.

look at the code below for MessageDisplayer.js */

import React from 'react';

export class MessageDisplayer extends React.Component {
  render() {
    return <h1>{this.props.message}</h1>;
  }
}

// This propTypes object should have
// one property for each expected prop:
MessageDisplayer.propTypes = {
  message: React.PropTypes.string
};

/* Notice the expression 'this.props.message'.
	From this expression, we can deduce that 'MessageDisplayer' expects to get passed a 'prop' named 'message'.
	Somewhere, at some time, this ode is expected to execute. */

<MessageDisplayer message="something" />

/* If a component class expects a 'prop', then you can give that component class a 'propType'.

The first step to making a 'propType' is to search for a property named 'propTypes' on the instructions object.
	If there isn't one, make one!
You will have to declare it after the close of your component declaration, since this will be a state property.

See the example of a 'propTypes' property on lines 32 - 34.
	Notice that the value of 'propTypes' is an object, not a function.

The second step is to add a property to the 'propTypes' object. 
	For each 'prop' that your component class expects to receive,
		There can be one  property on your 'propTypes' object.

MessageDisplayer only expects on 'prop: message'.
	Therefore, its 'propTypes' object only has one property.
*/


// EXERICSE

BestSeller.propTypes = {}; // A component class of propTypes property, set to an empty object literal.

/* ADD PROPERTIES TO PROPTYPES.

Look at this example below, the property on 'MessageDisplayers propTypes' object. */

MessageDisplayer.propTypes = {
	message: React.PropTypes.string
};

/* What are the properties on 'propTypes' supposed to be, exactly?

The name of each property in 'propTypes' should be the expected 'prop'. 
	In our case, 'MessageDisplayer' expects a 'prop' named 'message',
	so our property's name is 'message'.

The value of each property in 'propTypes' should fit this pattern. 

React.PropTypes.expected-data-type-goes-here; 

Since 'message' is presumably going to be a string,
	we chose React.PropTypes.string.
Notice the difference in capitalization between the 'propTypes' object and 'React.PropTypes'

Each property on the 'propTypes' object is called a 'propType'.

See code below for Runner.js */
import React from 'react';

export class Runner extends React.Component {
  render() {
  	let miles = this.props.miles;
    let km = this.props.milesToKM(miles);
    let races = this.props.races.map(function(race, i){
      return <li key={race + i}>{race}</li>;
    });

    return (
      <div style={this.props.style}>
        <h1>{this.props.message}</h1>
        { this.props.isMetric && 
          <h2>One Time I Ran {km} Kilometers!</h2> }
        { !this.props.isMetric && 
          <h2>One Time I Ran {miles} Miles!</h2> }
        <h3>Races I've Run</h3>
        <ul id="races">{races}</ul>
      </div>
    );
  }
}

Runner.propTypes = {
  message:   React.PropTypes.string.isRequired, // in message.js
  style:     React.PropTypes.object.isRequired,
  isMetric:  React.PropTypes.bool.isRequired,
  miles:     React.PropTypes.number.isRequired,
  milesToKM: React.PropTypes.func.isRequired,
  races:     React.PropTypes.array.isRequired
};

/* 'Runner' has six 'propTypes'!
	Look at each one. Note that 'bool' and 'func' are abbrieviated,
		but all other datatypes are spelt normally.

If you add '.isRequired' to a 'propType', 
	then you will get a console warning if that 'prop' isnt sent.

Try to find all six 'props' from the 'propTypes' object in 'Runners' render function;
	'this.props.message', 'this.props.style' etc.






















