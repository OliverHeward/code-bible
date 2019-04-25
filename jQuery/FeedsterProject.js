/* 			Feedster 

In this project, yo uwill help feedster add dynamic behavior to their website. They need help adding hover functionality to their navigation menu and buttons

For a challenge, feedster also wants help limiting their users' posts to 140 characters or less. You'll need to use the jQuery documentation to figure out how to implemenet this using the jQuery 'keyup' method! */

$(document).ready(() => {
	$('.menu').on('mouseover', () => {
    $('.nav-menu').show();
  });
  
  $('.nav-menu').on('mouseleave', () => {
    $('.nav-menu').hide();
  });
  
  $('.btn').on('mouseover', event => {
    $(event.currentTarget).addClass('btn-hover');
  }).on('mouseleave', event => {
    $(event.currentTarget).removeClass('btn-hover');
  })
  
  $('.postText').focus();
  
  $('.postText').on('keyup', event => {
    var post = $(event.currentTarget).val();
    var remaining = 140 - post.length;
    if (remaining <= 0) {
      $('.wordcount').addClass('red');
    } else {
      $('.wordcount').removeClass('red');
    }
    $('.characters').html(remaining);
  })
}); 


/* In is code challenge/task

	.menu is mouseover the .nav-menu shows
	
	.nav-menu on mouseleave the menu will hide 

	.btn on mouseover trigger event specific to only that button
		addClass 'btn-hover' is added.
	.btn on mouseleave is chained to the event to remove the btn-hover class

	.postText is set to focus() 

	.postText on keyup event is triggered.

		post is saved to variable

		maximum wordcount is saved to variable named 'remaining'
			takes in 140 - the length of input data of textarea 

		if/else statement

			If the wordcount is equal too or below 0 (of 140)
				class is added to turn text RED

			Else if its above +0 text will remain grey.
		
		.characters -> html created is the remaining words allowed.

*/
