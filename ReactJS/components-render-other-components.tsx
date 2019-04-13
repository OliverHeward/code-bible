/* A COMPONENT IN A RENDER FUNCTION 

Here is a .render() metho that returns a HTML-like JSX element; */

class Example extends React.Component {
	render() {
		return <h1>Helo world</h1> 
	}
}

/* You've seen render emthods return <div></div>, <p> and <h1> just like the above.

Render methods can also return another kind of JSX: component instances. */

class OMG extends React.Component {
	render() {
		return <h1>Whooaa!</h1>;
	}
}

class Crazy extends React.Component {
	render() {
		return <OMG />;
	}
}

/* In the above example, Crazy's render method returns an instance of the OMG component class.
You could say that Crazy renders an <OMG /> */

/* APPLY A COMPONENT IN A RENDER FUNCTION 

We've seen a component render before, though, but not by another component.
Instead, we've seen a component rendered by ReactDOM.render() 

When a component renders another component, what happens is very similar to what happens when ReactDOM.render() renders a component.
*/

// EXERCISE

import React from 'react';
import ReactDOM from 'react-dom';


class ProfilePage extends React.Component {
  render() {
    return (
      <div>
	<NavBar />  
        <h1>All About Me!</h1>
        <p>I like movies and blah blah blah blah blah</p>
        <img src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-monkeyselfie.jpg" />
      </div>
    );
  }
};

/* REQUIRE A FILE 

When you use React.JS, ever JS file in our application is invisible to every other JS file by default.

On line 48 above, we added an instance of NavBar component class.
But since this is added in another file, JS has no idea what NavBar means.

If we want to use a variable thats declared in a different file, 
	such as NavBar, then we have to import the variable we want to use.
To import a variable, we can use an import statement. */

import { NavBar } from './NavBar.js';

/* We've used import before, but not like this!
	Notice the difference between the above line of code and this familiar line to import react! */

import React from 'react';

/* The first important difference is the curly braces around NavBar. 

The second important difference involves the contents of the string at the end of the statement;
	'react' vs './NavBar.js'.

If we use an import statement, and the string at the bengins with either a dot or a slash,
	then import will treat that string as a filepath. 
		Import will follow that filepath, and import the file that it finds.

If our filepath doesn't have a fiel extension, then '.js' is assumed.
	So the above example could be shortened; */

import { NavBar } from './NavBar';

// EXERCISE

import React from 'react';
import ReactDOM from 'react-dom';
import { NavBar } from './NavBar.js';


class ProfilePage extends React.Component {
  render() {
    return (
      <div>
	<NavBar /> 
        <h1>All About Me!</h1>
        <p>I like movies and blah blah blah blah blah</p>
        <img src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-monkeyselfie.jpg" />
      </div>
    );
  }
}

/* EXPORT 

When we import a variable from a file that is not the current file,
	then an import statement isn't quite enough.
We also need an 'export' statement, 
	written in the other file, exporting the variable that you hope to grab.

'export' comes from ES6's module system just like 'import' does.
	 'export' and 'import' are meant to be used together, and you rarely see one without the other!

There a few different ways to use export. 

In one file, place the keyword 'export' immediately before something that you want to export.
	That something can be any top-level var, let, const, function or class; */

export const faveManifestos = {
  futurist: 'http://www.artype.de/Sammlung/pdf/russolo_noise.pdf',
  SCUM:     'http://www.ccs.neu.edu/home/shivers/rants/scum.html',
  cyborg:   'http://faculty.georgetown.edu/irvinem/theory/Haraway-CyborgManifesto-1.pdf'
};

// We can export multiple things from the same file

export const faveManifestos = {
  futurist: 'http://www.artype.de/Sammlung/pdf/russolo_noise.pdf',
  SCUM:     'http://www.ccs.neu.edu/home/shivers/rants/scum.html',
  cyborg:   'http://faculty.georgetown.edu/irvinem/theory/Haraway-CyborgManifesto-1.pdf'
};

export const alsoRan = 'TimeCube';

/* In a different file, import the name of the 'var', 'let', 'const', 'function' or 'class' from the first file.
*/
// App.js:

// Import faveManifestos and alsoRan from ./Manifestos.js:
import { faveManifestos, alsoRan } from './Manifestos';

// Use faveManifestos:
console.log(`A Cyborg Manifesto:  ${faveManifestos.cyborg}`);

/* This style of importing and exporting in JS is known as "named exports".
When you use named exports, you always need to wrap your imported names in curly brace; */

import { faveManifestos, alsoRan } from './Manifestos';

// EXERCISE 
// NavBar.js

import React from 'react';

export class NavBar extends React.Component {
  render() {
    const pages = ['home', 'blog', 'pics', 'bio', 'art', 'shop', 'about', 'contact'];
    const navLinks = pages.map(page => {
      return (
        <a href={'/' + page}>
          {page}
        </a>
      )
    });

    return <nav>{navLinks}</nav>;
  }
}

// profilepage.js

import React from 'react';
import ReactDOM from 'react-dom';
import { NavBar } from './NavBar.js';


class ProfilePage extends React.Component {
  render() {
    return (
      <div>
	<NavBar /> 
        <h1>All About Me!</h1>
        <p>I like movies and blah blah blah blah blah</p>
        <img src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-monkeyselfie.jpg" />
      </div>
    );
  }
}


/* COMPONENT RENDERING IN ACTION 

Now we're ready for <ProfilePage /> to render <NavBar />

All that's left to do is render <ProfilePage /> */

// EXERCISE
//ProfilePage.js

import React from 'react';
import ReactDOM from 'react-dom';
import { NavBar } from './NavBar.js';


class ProfilePage extends React.Component {
  render() {
    return (
      <div>
	<NavBar /> 
        <h1>All About Me!</h1>
        <p>I like movies and blah blah blah blah blah</p>
        <img src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-monkeyselfie.jpg" />
      </div>
    );
  }
}

ReactDOM.render(
	<ProfilePage />,
  document.getElementById('app')
);

//NavBar.js
import React from 'react';

export class NavBar extends React.Component {
  render() {
    const pages = ['home', 'blog', 'pics', 'bio', 'art', 'shop', 'about', 'contact'];
    const navLinks = pages.map(page => {
      return (
        <a href={'/' + page}>
          {page}
        </a>
      )
    });

    return <nav>{navLinks}</nav>;
  }
};


