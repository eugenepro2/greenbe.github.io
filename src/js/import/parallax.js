import ScrollMagic from 'scrollmagic'
import 'animation.gsap';
import 'debug.addIndicators';
import {TweenMax} from "gsap";


//scrollmagic


//intro
if($('#scene').length) {
  // init controller
  var intro = new ScrollMagic.Controller();
  var textFields = ["#scene", "#scene1", "#scene2"]; 
  // build tween
  var tween = TweenMax.staggerFrom(textFields, 0.5, {y: '80'});

  // build scene and set duration to window height
  new ScrollMagic.Scene({
    triggerElement: ".intro .btn",
    duration: "150%"
  })
  .setTween(tween)
  .addTo(intro);
}




//description
if($('#description').length) {
  //img-1
    // init controller
    var description = new ScrollMagic.Controller();
    // build tween
    var descriptionBlock1 = ["#description", "#description1", "#description3, #description2, #description4"]; 
    var tweenDescription = TweenMax.staggerFrom(descriptionBlock1, 0.5, {y: '80'});
  
    // build scene and set duration to window height
    new ScrollMagic.Scene({
      triggerElement: ".home-description",
      duration: "150%"
    })
    .setTween(tweenDescription)
    .addTo(description);
}




//productCard
if($('.product-triger').length) {
  // init controller
  var productCard = new ScrollMagic.Controller();
  // build tween
  var productCardBlock = [".home-solutions__block"]; 
  var tweenProductCard = TweenMax.staggerFrom(productCardBlock, 0.01, {y: '110'});

  // build scene and set duration to window height
  new ScrollMagic.Scene({
    triggerElement: ".product-triger",
    duration: "300%"
  })
  .setTween(tweenProductCard)
  // .addIndicators()
  .addTo(productCard);
}


//customerSolutions
if($('.customer-solutions').length) {
  // init controller
  var customerSolutions = new ScrollMagic.Controller();
  // build tween
  var customerSolutionsBlock = [".product-triger-block"]; 
  var tweenCustomerSolutions = TweenMax.staggerFrom(customerSolutionsBlock, 0.01, {y: '110'});

  // build scene and set duration to window height
  new ScrollMagic.Scene({
    triggerElement: ".product-triger",
    duration: "200%"
  })
  .setTween(tweenCustomerSolutions)
  // .addIndicators()
  .addTo(customerSolutions);
}



//key
if($('.customer-project__key').length) {
  // init controller
  var productCard = new ScrollMagic.Controller();
  // build tween
  var productCardBlock = [".customer-project__key__block"]; 
  var tweenProductCard = TweenMax.staggerFrom(productCardBlock, 0.01, {y: '80'});

  // build scene and set duration to window height
  new ScrollMagic.Scene({
    triggerElement: ".customer-project__key",
    duration: "200%"
  })
  .setTween(tweenProductCard)
  // .addIndicators()
  .addTo(productCard);
}


//video
if($('#video').length) {
  // init controller
  var video = new ScrollMagic.Controller();
  // build tween
  var videoBlock = ["#video", "#video1"]; 
  var tweenVideo = TweenMax.staggerFrom(videoBlock, 0.5, {y: '80'});

  // build scene and set duration to window height
  new ScrollMagic.Scene({
    triggerElement: ".home-solutions .btn.btn-primary",
    duration: "150%"
  })
  .setTween(tweenVideo)
  .addTo(video);
}





//feature
if($('#feature1').length) {
  // init controller
  var feature = new ScrollMagic.Controller();
  // build tween
  var featureBlock = ["#feature1"]; 
  var tweenFeature = TweenMax.staggerFrom(featureBlock, 0.01, {y: '80'});

  // build scene and set duration to window height
  new ScrollMagic.Scene({
    duration: "150%"
  })
  .setTween(tweenFeature)
  .addTo(feature);
  


  // init controller
  var feature1 = new ScrollMagic.Controller();
  // build tween
  var featureBlock1 = ["#feature2"]; 
  var tweenFeature1 = TweenMax.staggerFrom(featureBlock1, 0.01, {y: '80'});

  // build scene and set duration to window height
  new ScrollMagic.Scene({
    duration: "150%"
  })
  .setTween(tweenFeature1)
  .addTo(feature1);
}

if($('#feature3').length) {
  // init controller
  var appGovernment = new ScrollMagic.Controller();
  // build tween
  var appGovernmenteBlock = ["#feature3"]; 
  var tweenAppGovernment = TweenMax.staggerFrom(appGovernmenteBlock, 0.01, {y: '80'});

  // build scene and set duration to window height
  new ScrollMagic.Scene({
    triggerElement: ".feature__app--parallax",
    duration: "150%"
  })
  .setTween(tweenAppGovernment)
  .addTo(appGovernment);
  


  // init controller
  var appGovernment = new ScrollMagic.Controller();
  // build tween
  var appGovernmentBlock1 = ["#feature4"]; 
  var tweenAppGovernment = TweenMax.staggerFrom(appGovernmentBlock1, 0.01, {y: '80'});

  // build scene and set duration to window height
  new ScrollMagic.Scene({
    triggerElement: ".feature__app--parallax",
    duration: "150%"
  })
  .setTween(tweenAppGovernment)
  .addTo(appGovernment);
}


if($('#feature5').length) {
  // init controller
  var feature2 = new ScrollMagic.Controller();
  // build tween
  var featureBlock2 = ["#feature5"]; 
  var tweenFeature2 = TweenMax.staggerFrom(featureBlock2, 0.01, {y: '80'});

  // build scene and set duration to window height
  new ScrollMagic.Scene({
    triggerElement: ".feature__text-1",
    duration: "150%"
  })
  .setTween(tweenFeature2)
  .addTo(feature2);
}


if($('#feature6').length) {
  // init controller
  var feature3 = new ScrollMagic.Controller();
  // build tween
  var featureBlock3 = ["#feature6"]; 
  var tweenFeature3 = TweenMax.staggerFrom(featureBlock3, 0.01, {y: '80'});

  // build scene and set duration to window height
  new ScrollMagic.Scene({
    triggerElement: ".feature__text-2",
    duration: "150%"
  })
  .setTween(tweenFeature3)
  .addTo(feature3);
}


if($('#feature7').length) {
  // init controller
  var feature4 = new ScrollMagic.Controller();
  // build tween
  var featureBlock4 = ["#feature7"]; 
  var tweenFeature4 = TweenMax.staggerFrom(featureBlock4, 0.01, {y: '80'});

  // build scene and set duration to window height
  new ScrollMagic.Scene({
    triggerElement: ".feature__administrator",
    duration: "150%"
  })
  .setTween(tweenFeature4)
  // .addIndicators()
  .addTo(feature4);
}