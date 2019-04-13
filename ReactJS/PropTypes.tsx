// Apply PropTypes

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

/* In the above, the expression 'this.props.message'. From this expression, you can deduce that MessageDisplayer expects to get passed a prop named 'message'. Somewhere, at some time, this coe is expected to execute: */

<MessageDisplayer message="something" />

/* If a component class epects a 'prop', then you can give that component class a propType!

The first step to making a propType is to search for a property named propTypes on the isntrctuions object. If there isn't one, make one!
You will have to declare it after the close of your component declaration, since it will be a static property.

See the example of a propTypes property on line 13 - 15. Notice that the value of propTypes is an OBJECT, not a function!

The second step is to add a property to the propTypes object. For each 'prop' that your component class expects to receive, there can be one property on your propTypes object.

MessageDisplayer only expects on 'prop:message'. Therefore, its propTypes object only has one property.
*/


// ADD PROPERTIES TO PROPTYPES 

// THe code on line 14 in the MessageDisplayer's PropType object

message: React.PropTypes.string

/*
  What are the properties on propTypes supposed to be, exactly? 

  The name of each property in 'propTypes' should be the name of an expected 'prop'. In our case, MessageDisplayer expects a 'prop' named 'message', so our property's name is 'message'.

  The value of each property in 'propTypes' should fit this pattern:
*/

React.PropTypes.expected - data - type - goes - here

/* 
  Since 'message' is presumably going to be a string, we chose React.PropTypes.string. You can see this on line 14. Notice the difference in capitalization between the 'propTypes' object and 'React.PropTypes'!

  Each property on the propTypes object is called a propType.
*/
// Runner.js
import React from 'react';

export class Runner extends React.Component {
    render() {
        let miles = this.props.miles;
        let km = this.props.milesToKM(miles);
        let races = this.props.races.map(function(race, i) {
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
    message: React.PropTypes.string.isRequired,
    style: React.PropTypes.object.isRequired,
    isMetric: React.PropTypes.bool.isRequired,
    miles: React.PropTypes.number.isRequired,
    milesToKM: React.PropTypes.func.isRequired,
    races: React.PropTypes.array.isRequired
};

/* In this reactjs file we want to find 'Runners' 'propTypes' object. 
  'Runner' has six 'propTypes' as follows 
    - message
    - style
    - isMetric
    - miles
    - milesToKM
    - races

  If we add .isRequired to a 'propType', then we will get a console warning if that 'prop' isn't sent.

  Try to find all six 'prop's from the 'proptypes' object in 'Runners' render function: 'this.props.message', 'this.props.style', etc.
*/
// BestSeller.js
import React from 'react';

export class BestSeller extends React.Component {
    render() {
        return (
            <li>
        Title: <span>
          {this.props.title}
        </span><br />
        
        Author: <span>
          {this.props.author}
        </span><br />
        
        Weeks: <span>
          {this.props.weeksOnList}
        </span>
      </li>
        );
    }
}

BestSeller.propTypes = {
    title: React.PropTypes.string.isRequired,
    author: React.PropTypes.string.isRequired,
    weeksOnList: React.PropTypes.number.isRequired
};
// BookList.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BestSeller } from './BestSeller';

export class BookList extends React.Component {
    render() {
        return (
            <div>
        <h1>Best Sellers</h1>
        <div>
          <ol>
            <BestSeller 
              title="Glory and War Stuff for Dads" 
              author="Sir Eldrich Van Hoorsgaard" 
              weeksOnList={10} />
            <BestSeller 
              title="The Crime Criminals!" 
              author="Brenda Sqrentun" 
              weeksOnList={2} />
            <BestSeller
              title="Subprime Lending For Punk Rockers" 
              author="Malcolm McLaren" 
              weeksOnList={600} />
          </ol>
        </div>
      </div>
        );
    }
}

ReactDOM.render(<BookList />, document.getElementById('app'));



// PROPTYPES IN STATELESS FUNCTIONAL COMPONENTS 

/* Remember stateless functional components? You can see some familiar ones in the code below. */

// Normal way to display a prop:
export class MyComponentClass extends React.Component {
    render() {
        return <h1>{this.props.title}</h1>;
    }
}

// Stateless functional component way to display a prop:
export const MyComponentClass = (props) => {
    return <h1>{props.title}</h1>;
}

// Normal way to display a prop using a variable:
export class MyComponentClass extends React.component {
    render() {
        let title = this.props.title;
        return <h1>{title}</h1>;
    }
}

// Stateless functional component way to display a prop using a variable:
export const MyComponentClass = (props) => {
    let title = props.title;
    return <h1>{title}</h1>;
}

// How could you write 'propTypes' for a stateless functional component

// Usual way:
class Example extends React.component {

}
Example.propTypes = {

};
...

// Statless functional component way:
const Example = (props) => {
    // ummm????
}

/* It turns out the process is fairly similar. To write 'propTypes' for a stateless functional component, you define a 'propTypes' object as a property of the stateless functional component itself. Here's what that looks like: */

const Example = (props) => {
    return <h1>{props.message}</h1>;
}

Example.propTypes = {
    message: React.PropTypes.string.isRequired
};


/* EXERCISE */

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

GuineaPigs.propTypes = {
    src: React.PropTypes.string.isRequired
};

/*
  Defining a propTypes property for GuineaPigs
    props for this Class takes in SRC as its props
    this.props.src -> is a URL string

    So the propType declaration takes in React.PropTypes.string.isRequired

    This allows for the propType to know that it should be taking in a string and that it is a Required field.
*/