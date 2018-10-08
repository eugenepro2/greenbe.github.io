import '../lib/selectize.min.js';
// import '../lib/maskedinput.js';
// import modal from 'jquery-modal';

//select
// $('select').selectize();


//header scroll
$(window).scroll(function(){
  if($(window).scrollTop() > 100){
    $('.header').addClass('scroll');
  } else{
    $('.header').removeClass('scroll');
  }
});