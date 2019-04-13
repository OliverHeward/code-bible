/* THIS.PROPS

Previously, we've learned one way that components can interact;
	a component can render another component

In this session, we will learn another way that components can interact;
	a component can pass information to another component. 

Information that gets passed from one component to another is known as "props".



ACCESS A COMPONENTS PROPS 

Every component has something called 'props'.

A components 'props' is an object.
	It holds information about that component.

To see a components 'props' object, you use the expression 'this.props'.
	Heres an example of this.props being used inside a render method; */

render() {
	console.log("Props object comin' up!");
	console.log(this.props);
	console.log("That was my props object!");
	return <h1>Hello world</h1>;
}

/* Most of the information in this.props is pretty useless!
	But some of it is extremely important as we'll find out :) */

// EXERCISE

import React from 'react';
import ReactDOM from 'react-dom';

class PropsDisplayer extends React.Component {
  render() {
  	const stringProps = JSON.stringify(this.props);

    return (
      <div>
        <h1>CHECK OUT MY PROPS OBJECT</h1>
        <h2>{stringProps}</h2>
      </div>
    );
  }
}

// ReactDOM.render goes here:
ReactDOM.render(
  <PropsDisplayer />, document.getElementById('app'));


/* PASS PROPS TO A COMPONENT

You can pass information to a React component.

How? by giving that component an attribute; */

<MyComponent foo="bar" />

/* Lets say that you want to pass a component the message, 
	"This is some top secret info".
Heres how you could do it */

<Example message="This is some top secret info" />

/* As we can see, to pass information to a component,
	you need a name for the information that we want to pass.

In the above example, we used the name message.
	we can use whatever we like though.

If we want to pass information that isn't a string then wrap that information in curly braces.
	Here's how we would pass an array; */

<Greeting myInfo={["top", "secret", "lol"]} />

/* In this example, we pass several pieces of information to <Greeting />.
	The values that are strings are wrapped in curly braces; */

<Greeting name="Frarthur" town="Flundon" age={2} haunted={false} />

// EXERICSE

import React from 'react';
import ReactDOM from 'react-dom';

class PropsDisplayer extends React.Component {
  render() {
  	const stringProps = JSON.stringify(this.props);
    

    return (
      <div>
        <h1>CHECK OUT MY PROPS OBJECT</h1>
        <h2>{stringProps}</h2>
      </div>
    );
  }
}

// ReactDOM.render goes here:
ReactDOM.render(
  <PropsDisplayer myProp="Hello" />, document.getElementById('app'));


/* RENDER A COMPONENTS PROPS 

We've just passed information to a components props object!

We will often want a component to display the inormation that you pass

Heres how to amke a component display passed-in information;

1 - Find the component class that is going to receive that information
2 - Include 'this.props.name-of-information' in that components class's render methods 'return' statement.

*/

// EXERICSE

import React from 'react';
import ReactDOM from 'react-dom';

class Greeting extends React.Component {
  render() {
    return <h1>Hi there, {this.props.firstName}!</h1>;
  }
}

ReactDOM.render(
  <Greeting firstName='Biscoff' />, 
  document.getElementById('app')
);

/* PASS PROPS FROM COMPONENT TO COMPONENT 

We have learned how to pass a prop to a component */

<Greeting firstName="Esmerelda" />

// We also learned how to access a display a passed-in prop;

render() {
	return <h1>{this.props.firstName}</h1>;
}

/* The most common use of props is to pass information to a component,
	from a different component. 
We have't done that yet, but its ery similar to what we;ve already seen.

In this exercise, we'll pass a prop from one component to another. 

A CURMUDGEONLY CLARIFICATION ABOUT GRAMMAR;
We may have noticed some loose usage of the words prop and props. Unfortunately, this is pretty inevitable.

props is the name of the object that stores passed-in information.
this.props refers to that storage object. 
At the same time,
	each peice of passed-in information is called a prop.
This means that props could refer to two pieces of passed-in information,
	or it could refer to the object that sotres those pieces of information. */

// EXERCISE
// Greeting.js
import React from 'react';


export class Greeting extends React.Component {
  render() {
    return <h1>Hi there, {this.props.name}!</h1>;
  }
}

// App.js

import React from 'react';
import ReactDOM from 'react-dom';
import { Greeting } from './Greeting.js';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Hullo and, "Welcome to The Newzz," "On Line!"
        </h1>
        <Greeting name="brekfust"/>
        <article>
          Latest newzz:  where is my phone?
        </article>
      </div>
    );
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('app')
);


/* RENDER DIFFERENT UI BASED ON PROPS 

We passed a prop from a component to a different component,
	accessed that prop from the reciever component, and rendered it!

We can do more with 'props' than just display them.
	We can also use 'props' to make decisions. */

import React from 'react';

export class Welcome extends React.Component {
  render() {
    if (this.props.name == 'Wolfgang Amadeus Mozart') {
      return (
      	<h2>
      	  hello sir it is truly great to meet you here on the web
      	</h2>
      );
    } else {
      return (
      	<h2>
      	  WELCOME "2" MY WEB SITE BABYYY!!!!!
      	</h2>
      );
    }
  }
}
/* SEE THE ABOVE!!!
We can tell from this.props.name on line 218 that 'welcome' expects to receive a piece of information called name.
	However, 'Welcome' never renders this piece of information!
Instead, it uses the information to make a decision.

<Welcome /> instances will render the text WELCOME "2" MY WEB SITE BABY!!!!!, 
	unless the user is Mozart, in which case they will render the more respectful
	"hello sir it is truly great to meet you here on the web".

The passed-in name is not displayed in either case! 
	The name is used to decide what will be displayed. This is a common technique.


PUT AN EVENT HANDLER IN A COMPONENT CLASS

We can, and often will, pass funtions as props.
	It especially common to pass event handler functions.

In this session, we will pass an event handler function as a prop.
	However, you have define an event handler before we can pass one anywhere.
We will define an event handler function.

We define an event handler as a method on the component class, just like the render method.
Almost all functions that we define in React will be defined in this way, as methods in a class.
*/

// EXERICSE

import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './Button';

class Talker extends React.Component {
  talk() {
    let speech = '';
    for (let i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
	}
  
  render() {
    return <Button />;
  }
}

ReactDOM.render(
  <Talker />,
  document.getElementById('app')
);

/* PASS AN EVENT HANDLER AS A PROP 

We've defined a new method on the 'Talker' component class.
	Now we're ready to pass that function to another component.

We can pass a method in the exact same way that we pass any other information. 
	Behold, the mighty JAVASCRIPT!

When using a prop name and value to be the name such as talk it needs to be written like so,
	talk={this.talk} */

// EXERCISE
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './Button';

class Talker extends React.Component {
  talk() {
    let speech = '';
    for (let i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
  }
  
  render() {
    return <Button talk={this.talk}/>;
  }
}

ReactDOM.render(
  <Talker />,
  document.getElementById('app')
);

/* RECIEVE AN EVENT HANDLER AS A PROP 

We've hust passed a function from <Talker /> to <Button /> 

If a user clicks on this <button> element, then you want your passed-in 'talk' function to get called.

That means that you need to attach 'talk' to the <button> as an event handler.

How'd we do that? The same way that we've attached any event handler to a JSX element;
	we give that JSX element a special attribute.

The attributes name should be something like onClick or onHover.
The attributes value should be the event handler that you want to attach. */

// EXERCISE
//Button.js
import React from 'react';

export class Button extends React.Component {
  render() {
    return (
      <button onClick={this.props.talk}>
        Click me!
      </button>
    );
  }
}

//Talker.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './Button';

class Talker extends React.Component {
  talk() {
    let speech = '';
    for (let i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
  }
  
  render() {
    return <Button talk={this.talk}/>;
  }
}

ReactDOM.render(
  <Talker />,
  document.getElementById('app')
);

/* HANDLEVENT, ONEVENT AND THIS.PROPS.ONEVENT

naming things....

When we pass an event handler as a prop, as we just did,
	there are two names that we have to choose.

Both naming choices occur in the parent component class - that is,
	in the component class that defines the event handler and passes it.

The first name that we have to choose is the name of the event handler itself.

We choose the name 'talk' as our event handler.

The second name that we have to choose is the name of the prop that we will use to pass the event handler.
	This is the same thing as our attribute name.

For our prop name, we also choose 'talk' as shown below; */

return <Button talk={this.talk} />;

/* These two names can be whatever we want them to be.
	However, there is a naming convention that they often follow.
	We don't have to follow this convention but we should understand it when we see it.

Heres how the naming convertion works;
	First, think about what type of event we are listening for.
	In our example, the event type was "click"

If we are listening fior a "click" event, then we name our event handler 'handleClick'.
	If we are listening for a "keyPress" event, then we name our event handler 'handleKeyPress' */

	class MyClass extends React.Component {
		handleHover() {
			alert('I am an event handler.');
			alert('I will e called in response to "hover" events.');
		}
	};

/* Our prop name should be the word 'on', plus our event type.
	If we are listening for a "click" event,
	Then we name our prop 'onClick'.
		If we are listening for a 'keyPress' event, then we name our prop 'onKeyPress'; */


class myClass extends React.Component {
	
	handleHover() {
		alert('I am an event handler.');
		alert('I will e called in response to "hover" events.');
	}

	render() {
		return <Child onHover={this.handleHover} />;
	}
}

/* THIS.PROPS.CHILDREN

Every component's props object has a proper named 'children'

'this.props.children' will return everything in etween a component's opening and closing JSX tags.

So far, all of the components that we've seen have been self-closing tags, 
	such as <MyComponentClass />.
They don't have to be! We could write;
	<MyComponentClass></MyComponentClass>, and it would still work.

this.props.children would return everything in between <MyComponentClass> and </MyComponentClass> */
// Example code; 

import React from 'react';
import { LilButton } from './LilButton';

class BigButton extends React.Component {
  render() {
    console.log(this.props.children);
    return <button>Yo I am big</button>;
  }
}

// Example 1
<BigButton>
  I am a child of BigButton.
</BigButton>

// Example 2
<BigButton>
  <LilButton />
</BigButton>

// Example 3
<BigButton />

/* In the above, in example 1, 
<BigButton>'s this.props.children would equal the text "I am a child of BigButton"

Example 2,
	<BigButtons> this.props.children would equal <LilButton/> component

Example 3, 
	<BigButtons> this.props.children would equal undefined.


If a component has more than one children between its JSX tags,
	then this.props.children will return those children in an array.
However, if a component has only one child, then this.props.children will return single child,
	not wrapped in an array. */

// Exericse - app.js
import React from 'react';
import ReactDOM from 'react-dom';
import { List } from './List';

class App extends React.Component {
  render() {
    return (
      <div>
        <List type='Living Musician'>
          <li>Sachiko M</li>
          <li>Harvey Sid Fisher</li>
        </List>
        <List type='Living Cat Musician'>
          <li>Nora the Piano Cat</li>
      		<li>Timmy the Trumpet Turtle</li>
        </List>
      </div>
    );
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('app')
);

//List.js

import React from 'react';

export class List extends React.Component {
  render() {
    let titleText = `Favorite ${this.props.type}`;
    if (this.props.children instanceof Array) {
    	titleText += 's'; // this pluralises when there is more than 1 list item
    }
    return (
      <div>
        <h1>{titleText}</h1>
        <ul>{this.props.children}</ul>
      </div>
    );
  }
}


/* DEFAULTPROPS */

import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
  render() {
    return (
      <button>
        {this.props.text}
      </button>
    );
  }
}

// defaultProps goes here:


ReactDOM.render(
  <Button />, 
  document.getElementById('app')
);
/* Take a look at the button component class.

Notice that on line 536, Button expects to receive a prop named text.
	The received text will be displayed inside of a <button> element

What if nobody passes any text to a button? 

If nobody passes any text to button, then buttons display will be blnak.
	It would be better if button could display a default message instead.

	We can make this happen by giving our component class a property named defaultProps; */

class Example extends React.Component {
	render() {
		return <h1>{this.props.text}</h1>;
	}
}

Example.defaultProps;

// The defaultProps property should be equal to an object;
class Example extends React.Component {
	render() {
		return <h1>{this.props.text}</h1>;
	}
}

Example.defaultProps = {};

// Inside of this object, we write properties for any default props that we'd like to set; */
class Example extends React.Component {
	render() {
		return <h1>{this.props.text}</h1>;
	}
}

Example.defaultProps = { text: 'yo' };

/* If an <Example /> doesn't get passed any text, then it will display "yo"

If an <Example /> does get passed some text, then it will display that passed-in text.
*/

// EXERCISE
import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
  render() {
    return (
      <button>
        {this.props.text}
      </button>
    );
  }
}

// defaultProps goes here:
Button.defaultProps = { text: 'I am a button'};

ReactDOM.render(
  <Button text=""/>,  // change this otherwise it over-writes.
  document.getElementById('app')
);


/* this.props Recap
That completes our lesson on props!

props is quite possibly the longest and most difficult lesson in all of our React courses. 
Congratulations on getting this far!

Here are some of the skills that you have learned:

Passing a prop by giving an attribute to a component instance
Accessing a passed-in prop via this.props.prop-name
Displaying a prop
Using a prop to make decisions about what to display
Defining an event handler in a component class
Passing an event handler as a prop
Receiving a prop event handler and attaching it to an event listener
Naming event handlers and event handler attributes according to convention
this.props.children
getDefaultProps































