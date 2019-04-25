/* This code was part of the Trivia Card section of Codecademy's jQuery course.

    The aim of the task was to Show/Hide wrong answers on a multiple choice selection. Each wrong answer will fade out and show a frown face, but when the correct answer is selected all wrong answers fade out and a smiley face is shown.

*/

$(document).ready(() =>{
	$('.hint-box').on('click', () => {
    $('.hint').slideToggle(500);
  })
  
  $('.wrong-answer-one').on('click', () => {
		$('.wrong-answer-one').fadeOut('fast'),
      $('.frown').show();
  })
  
  $('.wrong-answer-two').on('click', () => {
    $('.wrong-answer-two').fadeOut('fast'),
      $('.frown').show();
  })
  
  $('.wrong-answer-three').on('click', () => {
    $('.wrong-answer-three').fadeOut('fast'),
      $('.frown').show();
  })
  
  $('.correct-answer').on('click', () => {
    $('.frown').hide(),
      $('.smiley').show(),
      $('.wrong-answer-one').fadeOut('fast'),
      $('.wrong-answer-two').fadeOut('fast'),
      $('.wrong-answer-three').fadeOut('fast');
  })
  
});
