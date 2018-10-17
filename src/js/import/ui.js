import '../lib/selectize.min.js';
// import '../lib/maskedinput.js';
import modal from 'jquery-modal';



//header scroll
$(window).scroll(function(){
  if($(window).scrollTop() > 100){
    $('.header').addClass('scroll');
  } else{
    $('.header').removeClass('scroll');
  }
});

//pop-up
$('[rel="modal:open"]').on('click', function(event) {
  $(this).modal({
    fadeDuration: 200
  });
  return false;
});

//menu open
$('.menu-open').on('click', function() {
  $(this).toggleClass('active');
  $('.header').toggleClass('active');
  $('.menu').fadeToggle();
  $('body').toggleClass('active');
});
//menu slideDown
$('.menu__block__nav a').on('click', function(event){
  if($(this).next().hasClass('none')){
    event.preventDefault()
    $(this).toggleClass('active')
    $(this).next('.none').slideToggle()
  }
}); 