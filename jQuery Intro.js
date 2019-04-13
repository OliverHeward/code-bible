/* jQuery Intro */

/* jQuery is a library of JavaScript,
	 that makes it easy to add dynamic behavior to HTML element. 

Let's look at an example of how JavaScript is used to add dynmaic behavior to a web page.
*/

const login = document.getElementById('login');
const loginMenu = document.getElementById('loginMenu');

login.addEventListener('click', () => {
  if(loginMenu.style.display === 'none'){
    loginMenu.style.display = 'inline';
  } else {
    loginMenu.style.display = 'none';
  }
});

/* In this example, JavaScript is used to apply behavior to a HTML element with id 'login'.
	The behavior allows a user to click a LOGIN button that toggles a login form.

The code below accomplishes the same behavior with jQuery. */

$('#login').click(() => {
	$('#loginMenu').toggle()
});

/* In this example, the same toggle functionality is accomplished using just three lines of code 


	jQuery Methods

Let's use Legos as an analogy for understand how jQuery works.
	With a infinite number of Legos, you could build an entire city
	this of course, would take a long time. 
		What if you were given pre-made lego buildings, Lego roads, Lego parks, etc?
			You could build a city much faster.

The JavaScript language represents an infinite supply of Lego blocks
	The possibilities are endless but time consuming. 
The pre-made lego structures are like jQuery methods. 
	You can use these methods to add dynamic behavior, such as 
		.hide()
		.show()
		.fadeIn()
		.fadeOut()

The example in the last exercise took twelve lines of JavaScript,
	but was achieved with only three lines of jQuery's .click() and .toggle() methods.


	jQuery Library

To use the jQuery library. index.html must load it with the other dependencies.
	
	within head {
		Style: local style elements & imported style sheets
	}

	within body {
		Structure: HTML structural elements
	}

	under body {
		Behavior: Local script elements & imported script files
	}

The document is loaded from top to bottom. 
	So the style dependencies in the <head> will load first,
	then the structual elements in the <body> will load next. 
It has become common practice to link the main JavaScript file at the bottom of the HTMl document,
	because a good deal of the content of the script will require that the dependencies, 
		stylesheets and elements exist before the browser can run the JavaScript that uses and reference those things.

Placing it at the bottom line just before the </body> tag will allow the HTML and CSS not to be affected by load times. 
*/

/*	ADDING JQUERY 

	To include jQuery, we use a <script> tag as follows 

<script
  src="https://code.jquery.com/jquery-3.2.1.min.js"
  integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
  crossorigin="anonymous">
 </script>

 The intgerity and crossorigin properties in the example ensure the file is delivered without any third-party manipulation.

 We will use jQuery methods in a JavaScript file called main.js,
 	which we will load into index.html using a <script> tag.
 	We need to load the jQuery library before the main.js file. 
 		Otherwise, the computer will not understand the jQuery used in main.js */


/* 		.ready() 

The jQuery library makes it quick and easy to add visual effects and interactivity to your web page.
	However, a web page must be rendered in a user's browser before it's possible to have any dynamic behavior.
	To solve this problem, we will use our first jQuery method.

The jQuery .ready() method waits until the HTML page's DOM is ready to manipulate.
	You should wrap all JavaScript behavior inside of the .ready() method.
		This will make sure the webpage is rendered in the browser before any jQuery code executes. */

$(document).ready(() => {

});

/* In this example, the .ready() method waits until the brwoser finihes rendering the HTMl document before triggering a callback function.
	We will write all of our JQuery behavior inside this callback function. */

/* 	TARGETING BY CLASS

Let's look at the code we just pasted into our main.js file; */

$(document).ready(() => {

});

/* IN the example above, 
	document is a special keyword that we use to target the HTML document and create a jQuery object.

We can use the same $() syntax to create jQuery objects for elements on a web page.
	Typically, we pass a string into a $() to target elements by id, class, or tag.
		Once targeted, we can use . notation to attach a handler method that triggers a callback function.

Let's consider how we can target elements by class. We can reference elements by class name with the following syntax. */

$('.someClass').handlerMethod();

/* In the example above, every element with a class of 'someClass' is targeted.
	Note, we prepend the class name with a period (.someClass).
		Then, we call the .handlerMethod() on all the referenced items. */

$(document).ready(() => {
	$('.product-photo').show();
});







