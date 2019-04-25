/*		CSS & jQuery

At this point, you likely know that jQuery can link user events to dynamic effects on a web page. One of the most powerful toosets in jQuery allows you to edit CSS property values. With these tools, you can change multiple visual aspects of an element at once.




		.css() 

To modiy CSS properties of an element, jQuery provides a method called .css(). This method accepts an argument for a CSS property name, and a corresponding CSS value. 

It's syntax looks like:  */

$('.example-class').css('color', '#FFFFFF');

/* Lets break the example above into two pieces: 

	- We call the .css() method on .example-class. The first argument is the CSS property we want to change. in this case, thats 'color'

	- The second argument specifies the new value for the given property in the first argument. In this case, the .css() method changes the color of .example-class elements to '#FFFFFF'

Notice both of the inputs to the .css() method are strings. 

*/

$(document).ready(() => {
 
  $('.login-button').on('click', () => {
    $('.login-form').toggle();
  });
  
  $('.menu-button').on('mouseenter', () => {
    $('.nav-menu').show();
    $('.menu-button').css('color', '#C3FF00');
  })
  
  $('.nav-menu').on('mouseleave', () => {
    $('.nav-menu').hide();
    $('.menu-button').css('color', '#EFEFEF');
  })
  
}); 


/*		CSS II 

In addition to changing one poperty at a time, the .css() method can accept many CSS property/value pairs at once. You must pass the .css() method a JavaScript object with a list of key/value pairs like this: */

{
  color: '#FFFFFF',
  backgroundColor: '#000000',
  fontSize: '20px'
}

/* 

There are a few important differences between the key/value pairs in the object above and the arguments from last exercise. 
Lets consider these differences below: 

	- The object is wrapped by an opening and closing curly brace: {}

	- Inside the object, there are three key/value pairs. The keys in the example object are color, backgroundColor, and fontSize. 

	- The values come after the colon : of each key. For instance, fontSize is a key, and its value is '20px'.

	- When referencing CSS properties in an object, the property names are camelCased -- they are modified to have no quotes or spaces, and to start each new word with a capital letter. Therefore, background-color becomes backgroundColor and 'font-size' becomes fontSize. 

To set multiple properties at once, you can pass the whole object into the .css() method as a single element. 
*/

$('.example-class').css({
  color: '#FFFFFF',
  backgroundColor: '#000000',
  fontSize: '20px'
})

// in the example above, we use the .css() method to change the color, background color, and font size values of the .example-class element. 

$(document).ready(() => {
 
  $('.login-button').on('click', () => {
    $('.login-form').toggle();
  });
  
  $('.menu-button').on('mouseenter', () => {
    $('.nav-menu').show();
    $('.menu-button').css({
      color: '#C3FF00',
      backgroundColor: '#535353'
    });
  })
  
  $('.nav-menu').on('mouseleave', () => {
    $('.nav-menu').hide();
    $('.menu-button').css({
      color: '#EFEFEF',
      backgroundColor: '#303030'
    });
  })
  
}); 


/*		.animate()

The jQuery .animate() method enhances the visual possibilities by making CSS value changes over a period of time. 

The first argument passed to .animate() is a JavaScript object of CSS property/value pairs that represent an element's end state. This is identical to the .css() method. For example, the following object could be passed to the .animate() method to change an element's height, width and border thickness. */

{
  height: '100px',
  width : '100px',
  borderWidth : '10px'
}

/* Note that the names of CSS properties in JavaScript object don't have spaces or dashes and are camelCased.

The second parameter of the .animate() method determines how long the animation takes to complete. It is optional; if you do not porivde an argument, the default value is 400 milliseconds. You can sue a number (in milliseconds) or the strings 'fast' or 'slow'. Below is an example of the .animate() method: */

$('.example-class').animate({
  height: '100px',
  width: '100px',
  borderWidth: '10px'
}, 500);

// In the example above, the height, width and boder width will change tto 100px, 100px and 10px respectively over a 500 millisecond period. 

$(document).ready(() => {
 
  $('.login-button').on('click', () => {
    $('.login-form').toggle();
  });
  
  $('.menu-button').on('mouseenter', () => {
    $('.nav-menu').show();
    $('.menu-button').css({
      color: '#C3FF00',
      backgroundColor: '#535353'
    }).animate({
      fontSize: '24px'
    }, 200);
  })
  
  $('.nav-menu').on('mouseleave', () => {
    $('.nav-menu').hide();
    $('.menu-button').css({
      color: '#EFEFEF',
      backgroundColor: '#303030'
    }).animate({
      fontSize: '18px'
    }, 200);
  })
  
}); 


/*    .addClass() 

A JavaScript file can quickly get overloaded with styles if you regularly use the 'css' method to modify element styles. It's best practice to group all of the style code in a CSS file, and use jQuery to add and remove the classes from elements -- this approach aligns to a design principle called separation of concerns.

Separation of concerns is a design principle stating that code should be separated based on its purpose in a program. In web development, that generally means the structure of a page is defined in an HTML document, syles are stored in a CSS file, and code that defines dynamic behavior is stored in a JavaScript file.

To keep CSS properties in a CSS file, jQuery can add a CSS class to an element with a method named addClass. It's syntax looks like this:  */

$('.example-class').addClass('active');

/* In the example above: 

  - .addClass() is called on the jQuery '.example-class' selector.
  - .addClass() adds the 'active' class to all '.example-class' elements.
  - Notce that the argument passed to 'addClass' does not have a period preceding it. This is because it expects a class, and therefore only needs the name of the class.
*/

$(document).ready(() => {
 
  $('.login-button').on('click', () => {
    $('.login-form').toggle();
  });
  
  $('.menu-button').on('mouseenter', () => {
    $('.nav-menu').show();
    $('.menu-button').addClass('button-active')
    
    $('.menu-button').animate({
      fontSize: '24px'
    }, 200)
  })
  
  $('.nav-menu').on('mouseleave', () => {
    $('.nav-menu').hide();
    $('.menu-button').css({
      color: '#EFEFEF',
      backgroundColor: '#303030'
    })
    
    $('.menu-button').animate({
      fontSize: '18px'
    }, 200)
  })
  
}); 




/*    .removeClass() 

Similar to '.addClass()', the jQuery '.removeClass()' method can remove a class from selected elements.

Its syntax is similar to '.addClass()':  */

$('.example-class').removeClass('active');

/* In the example above: 

  - .removeClass() is called on .example-class elements 
  - The emthod removes the 'active' class from all .example-class elements.
*/

$(document).ready(() => {
 
  $('.login-button').on('click', () => {
    $('.login-form').toggle();
  });
  
  $('.menu-button').on('mouseenter', () => {
    $('.nav-menu').show();
    $('.menu-button').addClass('button-active');
    $('.nav-menu').removeClass('hide');
    
    $('.menu-button').animate({
      fontSize: '24px'
    }, 200)
  })
  
  $('.nav-menu').on('mouseleave', () => {
    $('.nav-menu').hide();
    $('.menu-button').css({
      color: '#EFEFEF',
      backgroundColor: '#303030'
    })
    
    $('.menu-button').animate({
      fontSize: '18px'
    }, 200)
  })
  
}); 


/*    .toggleCLass() 

Similar to other effects methods, you can use a toggle method instead of chaining the .addClass() and .removeClass() methods together.

The .toggleClass() method adds a class if an element does not already have it, and removes it if an element does already have it. Its syntax looks like: 

*/

$('.example-class').toggleClass('active');

/* In the example above: 

  - .toggleClass() is called on .example-class elements.
  
  - .toggleClass() will add the 'active' class to .example-class elements if they do not have it already

  - .toggleClass() will remove the 'active' class from .example-class elements if they do have it already.

 */

 $(document).ready(() => {
  $('.login-button').on('click', () => {
    $('.login-form').show();
  });
  
  $('.menu-button').on('click', () => {
    $('.nav-menu').toggleClass('hide');
    $('.menu-button').toggleClass('button-active');
  })  
}); 


