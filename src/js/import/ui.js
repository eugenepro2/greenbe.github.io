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
  if($(this).hasClass('active')){
    $(this).removeClass('active');
  } else {
    $('.menu__block__nav a').removeClass('active');
    $(this).addClass('active');
  }
  if($(this).next().hasClass('none')){
    event.preventDefault()
    $(this).next('.none').slideToggle()
  }
}); 


//якорь
$(".btn-scroll").on("click", function (event) {
  event.preventDefault();
  var id  = $(this).attr('href'),
    top = $(id).offset().top - 150;
  $('body,html').animate({scrollTop: top}, 1500);
});