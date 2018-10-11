import Swiper from 'swiper';


//home
var swiper = new Swiper('.swiper-description', {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination-description',
    clickable: true,
  },
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  effect: 'slide',
  speed: 800,
  loop: true,
  // breakpoints: {
  //   1024: {
  //     slidesPerView: 1,
  //     spaceBetween: 30
  //   }
  // }
});
