/*		Introduction to Mouse Events 			

The jQuery library provides a collection of methods  that serve one of two purposes.

	- To listen for an event -- an event (e.g. clicking a button) is something that the user does to trigger an action.

	- To add a visual effect -- a visual effect (e.g. a drop-down menu appearing when a user clicks a button) is something that changes the apperance of the web page. Events are often responsible for triggering a visual effect.


There ar etwo parts to an event handler: an event listener and a callback function. 

	- An event listener is a method that listens for a specified event to occur, like a click event. 

	- A callback function is a function that executes when something triggers the event listener. 


Both the event listener and callback function make up an event handler.

In code, this looks like */

$('.example-class').on('click', () => {
	// Execute code here when .example-class is clicked
});

/* Lets consider the example above step-by-step:

	- $('.example-class') selects all HTML elements with a class of 'example-class'

	- The 'on('click')' method is the event listener. It checks if the user has clicked an '.example-class' HTML element 

	- The second argument to .on() is a callback function. When a 'click' occurs on an 'example-class' element, this function executes. 
*/ 

$(document).ready(() => {
  $('.login-button').on('click', () => {
    $('.login-form').show();
  })
});

// With this code, the login button now listens for a click event. The callback function in the event handler displays a login form when you click the button. 


/* 		On 'mouseenter'

ANother popular jQuery event listener is 'mouseenter'. The 'mouseenter' event triggers a  callback function when a user enters the area that a targeted element occupies. 

To listen for a mouse enter event, we can use the 'mouseenter' event listener. Take a look at this code and compare it with the click function from earlier. */

$('.example-class').on('mouseenter',  () => {
    // Execute code here when mouse enters .example-class
});

/*
	- As before '.on()' is called on a jQuery object that selects 'example-class' elements. 

	- The first argument for '.on()' is the 'mouseenter' event handler. The code above will trigger the callback function when the mouse enters an .example-class elements area. 

*/ 

$(document).ready(() => {
  $('.login-button').on('click', () => {
    $('.login-form').show();
  });
  $('.menu-button').on('mouseenter', () => {
    $('.nav-menu').show();
  });
});

// Event handler targetting '.menu-button' and adding a callback function to show '.nav-menu'

/*		On 'mouseleave'

One issue with the behavior we added to our Soles Shoes website in the last exercise is that the menu remains in the DOM after the mouse leaves the menu area.  

The 'mouseleave' event listener can detect when a users' mouse leaves the area that an elment occupies. THe syntax looks like: */

$('.example-class').on('mouseleave', function() {
    // Execute code here when mouse leaves .example-class
});

// In the example code above, a user will trigger the callback function when their mouse leaves the '.example-class' area.

$(document).ready(() => {
  $('.login-button').on('click', () => {
    $('.login-form').show();
  });
  
  $('.menu-button').on('mouseenter', () => {
    $('.nav-menu').show();
  });
  $('.nav-menu').on('mouseleave', () => {
    $('.nav-menu').hide();
  });
  
}); 

// Event handler targetting the .nav-menu and adding a callback function to hide itself when mouseleaves.


/*		Chaining Events 

jQuery also allows us to chain multiple methods. Instead of re-declaring the HTML element you're selecting, you can append one event to another. Lets see how we can use chaining to add hover functionality to '.example-class' elements. */

$('.example-class').on('mouseenter', () => {
	$('.example-class-one').show();
}).on('mouseleave', () => {
	$('.example-class-one').hide();
});

/* 
In the example above, we chain a mouse enter event to a mouse lave event. Both of the event handlers target '.example-class' elements.

When a user's mouse enters '.example-class' elements area we show '.example-class-one' elements. When a user's mouse leaves an '.example-class' element's area, we hide '.example-class-one' elements
*/

$(document).ready(() => {
  $('.login-button').on('click', () => {
    $('.login-form').show();
  });
  
  $('.menu-button').on('mouseenter', () => {
    $('.nav-menu').show()
  })
  
  $('.nav-menu').on('mouseleave', () => {
    $('.nav-menu').hide();
  })
  
  $('.product-photo').on('mouseenter', () => {
    $('.product-photo').addClass('photo-active');
  }).on('mouseleave', () => {
    $('.product-photo').removeClass('photo-active');
  });
}); 

// Event handler targetting .product-photo with a mouseenter event listener, when a mouseenters the class photo-active is added to the element. 
// A mouseleave event handler is chained to the original handler so that when the mouseleaves the HTML element the class is removed. 


/* 		currentTarget

Have you ntoiced in our Sole Shoes website that when you mosue over on photo, all of the images zoom. That's because .product-photo is a calss on all product photos/ 

One way to solve this issue is to give each HTML element a unqiue class and to write three 'mouseenter' and 'mouseleave' functions. That, however would result in a lot of repetitive code. Luckily theres a better way.

The solution is in the callback function and selector we're using when we add a new class. INstead of selecting $('.product-photo') in each callback function, we need to pass event information into the function and call the 'currentTarget' attribute. */

$('.example-class').on('mouseenter', event => {
	$(event.currentTarget).addClass('photo-active');
});

/* The points below explain some of the features of the event.currentTarget slector in the example above.

	- When a user triggers the 'mouseenter' event listener above, the '.on()' method generates an 'event' object that we pass into the callback function

	- Inisde the callback function, we select 'event.currentTarget'. The 'currentTarget' attribute refers to only the '.example-class' element that the leaner has moused over.

	- Since $(event.currentTarget) refers to the element that an event is detected on, you will only use it inside a callback function.

In our Sole Shoes website, we will use $(event.currentTarget) to target the one image a user mouses over.  */

$(document).ready(() => {
  $('.login-button').on('click', () => {
    $('.login-form').show();
  });
  
  $('.menu-button').on('mouseenter', () => {
    $('.nav-menu').show()
  })
  
  $('.nav-menu').on('mouseleave', () => {
    $('.nav-menu').hide();
  })
  
  $('.product-photo').on('mouseenter', event => {
    $(event.currentTarget).addClass('photo-active')
  }).on('mouseleave', event => {
    $(event.currentTarget).removeClass('photo-active')
  })
}); 

// The original function is removed and an 'event' is passed in its place. This allows for the use of event.currentTarget so that only the current element that is moused into/left will be affected by the callback.


/* For more challenging events you can use 

	Mouse Events

		- 'dblclick'
		- 'mousemove'

	Keyboard Events

		- 'keydown'
		- 'keypress'
		- 'keyup'



