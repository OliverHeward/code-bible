// MOUNTING LIFECYCLE METHODS 

/* What's a Lifecycle Method?

	Lifecycle methods are methods that get called at certain moments in a components life.

	You can write a lifecycle method that gets calle right before a component renders for the first time.

	You can write a lifecycle method that gets called right after a component renders, every time expect for the first time.

	You can attach lifecycle methods to a lot of different moments in a components life. This has powerful implications!

	In this unit, we will walk through each lifecycle method!

*/ 


/* Mounting Lifecycle Methods 

	There are three categories of lifecycle methods: mounting, updating, and unmounting. This lession is about the first category: Mounting lifecycle methods. 

	A component "mounts" when it renders for the first time. This is when mounting lifecycle methods get called.

	There are three mounting lifecycle methods: 

		- componentWillMount

		- render

		- componentDidMount

	When a component mounts, it automatically calls these three methods, in order.

*/


/*	componentWillMount
		The first mounting lifecycle method is called componentWillMount.

		When a component renders for the first time, componentWillMount gets called right before render.

		Look at Example.js, and follow these steps:

		On lines 14-17, <Example /> is rendered for the first time. <Example />‘s mounting period begins.
			<Example /> calls the first mounting lifecycle method, componentWillMount.
				componentWillMount executes, and an alert appears on the screen. (lines 5-7)
			After componentWillMount has finished, <Example /> calls the second mounting lifecycle method: render.
				<h1>Hello world</h1> appears on the screen (lines 9-11)
			Two seconds later, <Example /> renders again (lines 20-22). componentWillMount does NOT get called, because mounting lifecycle events only execute the first time that a component renders.
			You can call this.setState from within componentWillMount!

			Look at Example2.js for an example of this.setState inside of componentWillMount. See if you can follow how <Example2 /> would render <h1>Hello world</h1>.
*/


import React from 'react';
import ReactDOM from 'react-dom';

export class Flashy extends React.Component {
  componentWillMount() {
    alert('AND NOW, FOR THE FIRST TIME EVER...  FLASHY!!!!');
  }
  
  render() {

    alert('Flashy is rendering!');
    
    return (
      <h1 style={{ color: this.props.color }}>
        OOH LA LA LOOK AT ME I AM THE FLASHIEST
      </h1>
    );
  }
}

ReactDOM.render(
  <Flashy color='red' />,
  document.getElementById('app')
);

setTimeout(() => {
  ReactDOM.render(
    <Flashy color='green' />,
    document.getElementById('app')
  );
}, 2000);



/*	Render

	'render' is a lifecycle method! 

	We won't go over 'render' here - we've already talked about it plenty. However, you should understand how render fits into the mounting period. Whenever a component mounts, 'componentWillMount' is called first, followed by 'render', followed by 'componentDidMount'.

	'render' belongs to two categories: mounting lifecycle methods, and updating lifecycle methods. We'll cover updating lifecycle methods in the next lesson. But first, there's one final mounting lifecycle method!
*/

/* 	componentDidMount

		The final mounting lifecycle method is called 'componentDidMount'.

		When a component renders for the first time, 'componentDidMount' gets called right after the HTML from 'render' has finished loading. Look below to see an example of componentDidMount.
*/

import React from 'react';

export class Example extends React.Component {
  componentDidMount() {
    alert('component just finished mounting!');
  }

  render() {
    return <h1>Hello world</h1>;
  }
}

/* componentDidMount gets used a lot!

	I your React App uses AJAX to fetch inital data from an API, then componentDidMount is the place to make that AJAX call. More generally, 'componentDidMount' is a good plac to connect a React app to external applications, such as web API's or JavaScript frameworks.
	'componentDidMount' is also the place to set timers using 'setTimeout' or 'setInterval'

*/

import React from 'react';
import ReactDOM from 'react-dom';

export class Flashy extends React.Component {
  componentWillMount() {
    alert('AND NOW, FOR THE FIRST TIME EVER...  FLASHY!!!!');
  }

  componentDidMount() {
    alert('YOU JUST WITNESSED THE DEBUT OF...  FLASHY!!!!!!!');
  }
  
  render() {

    alert('Flashy is rendering!');

    return (
      <h1 style={{ color: this.props.color }}>
        OOH LA LA LOOK AT ME I AM THE FLASHIEST
      </h1>
    );
  }
}

ReactDOM.render(
  <Flashy color='red' />,
  document.getElementById('app')
);

setTimeout(() => {
  ReactDOM.render(
    <Flashy color='green' />,
    document.getElementById('app')
  );
}, 2000);

	/* componentWillMount allows for the Alert to happen once and once only,
		componentDidMount will run only after everything else has run and once only 
	*/