/* THIS STATE

React components will often need dynamic information in order to render.
For example, imagine a component that displays the score of a basketball game.
The score of the game night might change over time, 
	meaning that the score is dynamic.
Our component will have to know the score, a piece of dynamic information,
	in order to render in a useful way.

There are two ways for a component to get dynamic information:
	props and state.

Besides props and state, every value used in a component should always stay exactly the same.

Its time to learn about state.

props and state are all that you need to set up an ecosystem of interacting React components.


SETTING INITIAL STATE

A React component can access dynamic information in two ways;
props and state.

Unlike props, a components state is not passed in from the outside.
	A component decides its own 'state'.

TO make a component have state, give the component a state property.
This property should be declared inside of a constructor method like so;
*/

class Example extends React.Component {
	constructor(props) {
		super(props);
		this.state = { mood:'decent' };
	}

	render() {
		return <div></div>;
	}
}
 <Example />

 /* this.state should be equal to an object, like in the example above.
 This object represents the initial "state" of any component instance.

 constructor and super are both features of ES6, not unique to React.

 There is nothing particularly React-y about their usage here.
 It is important to note that React components always have to call super in their constructors to be set up properly.

 Look up at the code above, <Example /> has a state equal to { mood: 'decent' };
 */

 import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	// constructor method begins here:
	constructor(props) {
    super(props);
    this.state = { title: 'Best App' };
  }
	
  render() {
    return (
      <h1>
        Wow this entire app is just an h1.
      </h1>
    );
  }
}

/* ACCESS A COMPONENTS STATE 

To read a component's state, use the expression,
	this.state.name-of-property  */

class TodayImFeeling extends React.Component {
	constructor(props) {
		super(props);
		this.state = { mood: 'decent' };
	}

	render() {
		return (
			<h1>
			Im feeling {this.state.mood}! </h1>	
		);
	}
}

/* The above component class reads a property in its state from inside of its render function.

Just like this.props, you can use this.state from any property defined inside of a component class's body.
*/

// EXAMPLE

import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	// constructor method begins here:
	constructor(props) {
    super(props);
    this.state = { title: 'Best App' };
  }
	
  render() {
    return (
      <h1>
      {this.state.title}
      </h1>
    );
  }
}

ReactDOM.render(
<App />,
document.getElementById('app'));


/* UPDATE STATE WITH THISE.SETSTATE

A component can do more than just read its own state.
	A component can also change its own state.

A component changes its state by calling the function this.setState()

this.setState() takes two arguments: 
	An object that will update the components state
	And a call back, you basically never need the callback.
*/
import React from 'react';

class Example extends React.Component {
  constructor(props) {
  	super(props);
    this.state = {
      mood:   'great',
      hungry: false
    };
  }

  render() {
    return <div></div>;
  }
}

<Example />
/* NOTICE ABOVE
 
<example /> has a state of ;

mood: great 
hungry: false

Now, lets say that <Example /> were to call;  */

this.setState({ hungry:tree });

// After that call, here is what <Examples /> state would be;

{ 
	mood: 'great',
	hungry: true 
};

/* The 'mood' part of the state remains unaffected!

this.setState() takes an object, and merges that object with the components current state.
If there are properties in the current state that aren't part of that object,
	then those properties remain how they were.

/* CALL THIS.SETSTATE FROM ANOTHER FUNCTION 

The most common way to call this.setState() is to call a custom function that wraps this.setState() call.
.makeSomeFog is an example; */

class Example extends React.Component {
	constructor(props) {
		super(props);
		this.state = { weather: 'sunny' };
		this.makeSomeFog = this.makeSomeFog.bind(this);
	}

	makeSomeFog() {
		this.setState({ weather: 'foggy' });
	}
}

/* Notice how the method makeSomeFog() contains a call to this.setState() 

Notce we may have a weird line in there;  */

this.makeSomeFog = this.makeSomeFog.bind(this);

/* This line is necessary because makeSomeFog()s body contains the word this.

Lets walk through how a function wrapping this.setState() might work in practice.
*/
import React from 'react';
import ReactDOM from 'react-dom';

class Mood extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mood: 'good' };
    this.toggleMood = this.toggleMood.bind(this);
  }

  toggleMood() {
    const newMood = this.state.mood == 'good' ? 'bad' : 'good';
    this.setState({ mood: newMood });
  }

  render() {
    return (
      <div>
        <h1>I'm feeling {this.state.mood}!</h1>
        <button onClick={this.toggleMood}>
          Click Me
        </button>
      </div>
    );
  }
}

ReactDOM.render(<Mood />, document.getElementById('app'));
/* READ THROUGH THE ABOVE 

Here is how a <Mood />'s state would be set:
	- A user triggers an event (in this case a click event, 
		triggered by clicking on a <button></button>).

	-The event from Step 1 is being listened for (in this case by the onClick attribute on line 20).

	- When this listened-for event occurs, 
		it calls an event handler function (in this case, this.toggleMood(), 
		called on line 20 and defined on lines 11-14).

	- Inside of the body of the event handler, 
		this.setState() is called (in this case on line 13).

	- The component's state is changed!

Due to the way that event handlers are bound in JavaScript,
	this.toggleMood() loses its 'this' when it is used on line 20.
	Therefore, the expressions this.state.mood and this.setState on lines 7 and 8 won't meant what they're supposed to.
	Unless you have already bound the correct this to this.toggleMood.

That is why we must bind this.toggleMood to 'this' on line 8 

In React, whenever you define an event handler that uses this, you need to add
	thos.methodName = this.methodName.bind(this) to your constructor function.

Line 12 declares a 'cinst' named newMood equal to the opposite of this.state.mood
	if this.state.mood is "good", then newMood will be "bad" and vice versa.

A <Mood /> instance would display "I'm feeling good!" along with a button.
	Clicking on the button would change the display to,
	"I'm feeling bad!" clicking again would change it back to "I'm feeling good!" etc.

LAST FINAL NOTE;
	You can't call this.setState() from inside of the render function! 
*/


/* THIS.SETSTATE AUTOMATICALLY CALLS RENDER

Theres something odd about all of this. 

Look at the code below; */

import React from 'react';


const green = '#39D1B4';
const yellow = '#FFD712';

class Toggle extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Change my color
        </h1>
      </div>
    );
  }
}

/* When a user clicks on the <button></button>, 
	the .changeColor method is called back. 
	Thake a look at .changeColor()'s definition.

.changeColor() calls this.setState(), which updates this.state.color.
	However, even if this.state.color is updated from green to yellow,
		that alone shouldn't be enough to make the screen's color change!

The screens color doesn't change until 'Toggle' renders.

Inside of the render function, its this line; 

<div style={{background:this.state.color}}>;

That changes a virtual DOM object's color to the new this.state.color,
	eventually causing a change in the screen.

If you call .changeColor(), shouldn't you then also have to call .render() again?
.changeColor() only makes it so that, the next tiem that you render the color will be different.
	Why can you see the new background right away, if you haven't re-rendered the component?

The reason why is Any time that you call this.setState(), this.setState() AUTOMACTICALLY calls .render() as soon as the state has changed.

Think of this.setState() as actually being two things,
	immediately followed by .render() 

That is why you can't call this.setState() from inside of the .render() method!
	this.setState() automatically calls .render().
	If .render() calls this.setState(), then an infinite loop is created.
*/


/* RECAP 

Components Interacting Recap
In this unit, 
you learned how to use import and export to access one file from another. 
You learned about props and state, and the countless variations on how they work.

Before this unit, you learned about JSX, components, 
and how they can work together.

A React app is basically just a lot of components, 
	setting state and passing props to one another. 
	Now that you have a real understanding of how to use props and state, 
	you have by far the most important tools that you need!

In future lessons, 
the focus will shift slightly outward. 
In addition to learning more new skills, 
you'll also learn your first programming patterns. 
These large-scale strategies will help you combine what you've learned and really start building.