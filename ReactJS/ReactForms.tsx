/* React Forms 

	This unites final lesson is about forms.

	Think about how forms work in a typical, non-React enironment. A user types some data into a form's inpt fields, and the server doesn't know about it. The server remains clueless util the user hits a "submit" button, which sends all of the form's data over to the server simultaneously.

	In React, as in many other JavaSript environments, this is not the best way of doing things.

	The problem is the peroid of time during which a form thinks that a user has typed one thing, but the server thinks that the user has typad a different thing. What if, during that time, a third part of the website needs ato know what a user has typed? it could ask the form or the server and get two different answers. In a complex JavaScript app with many moving, interdependent parts, this kind of conflict can easily lead to problems.

	In a React form, you want the server to know about every new character or deletion, as soon as it happens. That way, your sreen will always be in sync with the rest of you application. 
*/

/* INPUT onChange 

	A traditional form doesn't update the server until a user hits submit. But you want to update the server any time a user enters or deletes any character.

*/

import React from 'react';
import ReactDOM from 'react-dom';

export class Input extends React.Component {
    render() {
        return (
            <div>
        <input type="text" onChange={this.handleUserInput}/>
        <h1>I am an h1.</h1>
      </div>
        );
    }
}

ReactDOM.render(
    <input />,
    document.getElementById('app')
);
// <input> has been given an 'attr' of onChange with the value set to {this.handleUserInput}. 
// This will allow for the input field to append the <h1> at a later session when the functio is created.


/* 	Write an Input Event Handler

	In this exercise, you will define a function that gets called whenever a user enters or deletes any character.

	This function will be an event handler. It wil listen for 'change' events. You can see an example of an event handler listening for change events below.
*/

import React from 'react';

export class Example extends React.Component {
    constructor(props) {
        super(props);

        this.state = { userInput: '' };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            userInput: e.target.value
        });
    }

    render() {
        return (
            <input 
	      onChange={this.handleChange} 
	      type="text" />
        );
    }
}

// Input.js
import React from 'react';
import ReactDOM from 'react-dom';

export class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = { userInput: '' };

        this.handleUserInput = this.handleUserInput.bind(this);
    }

    handleUserInput(e) {
        this.setState({ userInput: e.target.value });
    }

    render() {
        return (
            <div>
        <input type="text" onChange={this.handleUserInput} value={this.state.userInput} />
        <h1>{this.state.userInput}</h1>
      </div>
        );
    }
}

ReactDOM.render(
    <Input />,
    document.getElementById('app')
);

/* Before the class Input render() function
	constructor(props) is passed through with super(props)
	this.state is set to = { userInput: ' ' }; which is an empty string

	then handleUserInput is the bound to 'this' with .bind

	handleUserInput is then made as a function with event passed through as a parameter
		then - this.setState's userInput property is set to e.target.value 

	e.target.value will equal the text in the <input /> field. We are setting this.state.userInput eqal to whater text is currently in <input/>

	in Inputs render function 
		the 'attribute' of value is passed through with the value of {this.state.userInput}
		This will take in the 'value' passed through the input field and store it in the STATE
	
		<h1> is then given {this.state.userInput} which will display the value passed through the input field and display it
*/



/* CONTROLLED VS UNCONTROLLED 

	There are two terms that will probably come up when you talk about React Forms: controlled component and uncontrolled component. Like automatic binding, controlled vs uncontrolled components is a topic that you should be familar wth, but you don't need to understand deeply at this point..

	An uncontrolled component is a component that maintains its own internal state. A controlled component is a component that does not maintain any internal state. Since a controlled component has no state, it must be contolled by someone else.

	Think of a typical <input type="text" /> element. It appears onscreen as a text box. if you need to know what text is currently in the box, then youc an ask the <input> possibly with some code like this:
*/

let input = document.querySelector('input[type="text"]');

let typedText = input.value; // input.value will be equal to whatever text is currently in the text box.

/* 

	The important thing here is that the <input> keeps track of its own text. You can ask it what its text is at any time, and it will be able to tell you.

	The fact that <input> keeps track of information makes it an uncontrolled component. It maintains its own internal state by remembering data about itself. 

	A Controlled component, on the other hand, has no memory. If you ask it for information about itself, then it will have to get that information through 'props'. Most React components are controlled.

	In React, when you give an <input> a 'value' attribute, then something strange happens: the <input> BECOMES controlled. It stops using its internal storage. This is a more 'React' way of doing things. 

*/
