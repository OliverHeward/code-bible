/* COMPONENTS AND ADVANCED JSX

USE MULTIPLINE JSX IN A COMPONENT;

Take a look at this HTML below */

<blockquote>
  <p>
    The world is full of objects, more or less interesting; I do not wish to add any more.
  </p>
  <cite>
    <a target="_blank"
      href="https://en.wikipedia.org/wiki/Douglas_Huebler">
      Douglas Huebler
    </a>
  </cite>
</blockquote>

/* How might you mkae a React component that renders this HTML? 

see Quotemaker example below */

import React from 'react';
import ReactDOM from 'react-dom';

class QuoteMaker extends React.Component {
    render() {
        return (
            <blockquote>
        <p>
          The world is full of objects, more or less interesting; I do not wish to add any more.
        </p>
        <cite>
          <a target="_blank"
            href="https://en.wikipedia.org/wiki/Douglas_Huebler">
            Douglas Huebler
          </a>
        </cite>
      </blockquote>
        );
    }
};

ReactDOM.render(
    <QuoteMaker />,
    document.getElementById('app')
);

/* The key thing to notice in 'QouteMaker' is the parentheses in the 'return' statement.
Until now, our render function 'return' statements have looked like this, without any parentheses; */

return <h1>Hello world</h1>;

/* However, a multi-line JSX expression should always be wrapped in parentheses! 
That is why 'QuoteMakers' return statement has parentheses around it.  */

// EXERCISE 

import React from 'react';
import ReactDOM from 'react-dom';

class QuoteMaker extends React.Component {
    render() {
        return (
            <blockquote>
  <p>
    What is important now is to recover our senses.
  </p>
  <cite>
    <a target="_blank" 
      href="https://en.wikipedia.org/wiki/Susan_Sontag">
      Susan Sontag
    </a>
  </cite>
</blockquote>
        );
    }
};

ReactDOM.render(
    <QuoteMaker />,
    document.getElementById('app')
);

/* USE A VARIABLE ATTRIBUTE IN A COMPONENT 

Take a look at this JavaScript object named 'redPanda'. */

const redPanda = {
    src: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Endangered_Red_Panda.jpg',
    alt: 'Red Panda',
    width: '200px'
};

// How could you render a React component, and get a picture with redPanda's properties?

import React from 'react';
import ReactDOM from 'react-dom';

const redPanda = {
    src: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Endangered_Red_Panda.jpg',
    alt: 'Red Panda',
    width: '200px'
};

class RedPanda extends React.Component {
    render() {
        return (
            <div>
        <h1>Cute Red Panda</h1>
        <img 
          src={redPanda.src}
          alt={redPanda.alt}
          width={redPanda.width} />
      </div>
        );
    }
}

ReactDOM.render(
    <RedPanda />,
    document.getElementById('app')
);

/* Note that all of the JS within the RedPanda class function, 
all of the curly-brace JavaScript injections inside of the render function. 

You can, and often will, inject JS into JSX inside of a render function. */

// EXERCISE 

import React from 'react';
import ReactDOM from 'react-dom';


const owl = {
    title: 'Excellent Owl',
    src: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-owl.jpg'
};

// Component class starts here:
class Owl extends React.Component {
    render() {
        return (
            <div>
      <h1>{owl.title}</h1>
      <img
        src={owl.src}
        alt={owl.title} />
     </div>
        );
    }
};

ReactDOM.render(
    <Owl />,
    document.getElementById('app'));


/* PUT LOGIC IN A RENDER FUNCTION

A 'render()' function must have a return statement. However,
  That isn't all that it can have.

A render() function can also be a fine place to put simple calculations that need to happen right before a component renders.
  Here's an example of some calculations inside of a render function. 
*/

class Random extends React.Component {
    render() {
        // First, some logic that must happen. 
        // before rendering:
        const n = Math.floor(Math.random() * 10 + 1);
        // Next, a return statement
        // using that logic
        return <h1>The number is {n}!</h1>;
    }
};

// EXERCISE

import React from 'react';
import ReactDOM from 'react-dom';


const friends = [{
        title: "Yummmmmmm",
        src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-monkeyweirdo.jpg"
    },
    {
        title: "Hey Guys!  Wait Up!",
        src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-earnestfrog.jpg"
    },
    {
        title: "Yikes",
        src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-alpaca.jpg"
    }
];

// New component class starts here:
class Friend extends React.Component {
    render() {
        const friend = friends[1];
        return (
            <div>
      <h1>{friend.title}</h1>
      <img
        src={friend.src} />
      </div>
        );
    }
}

ReactDOM.render(
    <Friend />,
    document.getElementById('app'));


/* USE A CONDITIONAL IN A RENDER FUNCTION 

How might you use a conditional statement inside of a render() function? */

import React from 'react';
import ReactDOM from 'react-dom';

class TodaysPlan extends React.Component {
    render() {
        let task;
        if (!apocalypse) {
            task = 'learn React.js'
        } else {
            task = 'run around'
        }

        return <h1>Today I am going to {task}!</h1>;
    }
}

ReactDOM.render(
    <TodaysPlan />,
    document.getElementById('app')
);

/* Notice that in the above, the 'if' stateemnt is located inside of the render function,
but before the return statement. This is pretty much the only way that you will ever see an if statement used in a render function.
*/

// EXERCISE 

import React from 'react';
import ReactDOM from 'react-dom';

const fiftyFifty = Math.random() < 0.5;

// New component class starts here:
class TonightsPlan extends React.Component {
    render() {
        if (fiftyFifty) {
            return <h1>Tonight I'm going out WOOO</h1>;
        } else {
            return <h1>Tonight I'm going to bed WOOO</h1>;
        }
    }
}

ReactDOM.render(
    <TonightsPlan />,
    document.getElementById('app')
);

/* USE THIS IN A COMPONENT 

The word 'this' gets used in React a lot! 

You are especially likely to see 'this' inside of the body of a component class declaration.
Here's an example; */

class IceCreamGuy extends React.Component {
    get food() {
        return 'ice cream';
    }

    render() {
        return <h1>I like {this.food}.</h1>;
    }
}

/* In the code, what does this mean? 

The simple answer is that this refers to an instance of IceCreamGuy.

The less simple answer is that this refers to the object on which this' ecnlosing method,
n this case .render() is called.
It is almost inevitable that this object will be an instance of IceCreamGuy, 
but technically it could be something else.

Lets assume that this refers to an instance of your component class, 
as will be the case in all examples in this course.
IceCreamGuy has two methods: 
.food and .render().
  Since this will evaulate to an instance of IceCreamGuy, this.food will evaluate to call of IceCreamGuys .food method.
This method will, in turn evaulte tothe string "ice cream".

You don't need those parentheses because .food is a getter method. 
You can tell this from the get in the above class declaration body.

There's nothing React-specific about getter methods,
 nor about this behaving in this way! However,
  in React you will see this used in this way almost constantly. */

// EXAMPLE

import React from 'react';
import ReactDOM from 'react-dom';

class MyName extends React.Component {
    // name property goes here:
    get name() {
        return 'Oliver';
    }

    render() {
        return <h1>My name is {this.name}.</h1>;
    }
}

ReactDOM.render(<MyName />, document.getElementById('app'));

/* USE AN EVENT LISTENER IN A COMPONENT 

Rneder functions often contain event listeners.
Heres an example of an event listener in a render function */

render() {
    return (
        <div onHover={myFunc}>
    </div>
    );
}

/* Recall that an event handler is a function that gets called in response to an event.
  In the example, the event handler is 'myFunc()'

In React, you define event handlers as methods on a component class.
  like this; */

class MyClass extends React.Component {
    myFunc() {
        alert('Stop it. Stop hovering.');
    }

    render() {
        return (
            <div onHover={this.myFunc}>
      </div>
        );
    }
}

/* Notice that the component class has two methods;
  .myFunc() and .render() 
.myFunc() is being used as an event handler. 
  .myFunc() will be called any time that a user hovers over te rendered <div></div>
*/
// EXERCISE

import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
    scream() {
        alert('AAAAAAAAHHH!!!!!');
    }

    render() {
        return <button onClick={this.scream}> AAAAAH!</button>;
    }
}

ReactDOM.render(
    <Button />,
    document.getElementById('app'));