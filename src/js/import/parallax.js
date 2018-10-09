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
  var tween = TweenMax.staggerFrom(textFields, 0.5, {y: '80'}, 0.1);

  // build scene and set duration to window height
  new ScrollMagic.Scene({
    duration: "100%"
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
    var descriptionBlock1 = ["#description", "#description1", "#description3"]; 
    var tweenDescription = TweenMax.staggerFrom(descriptionBlock1, 0.5, {y: '90'});
  
    // build scene and set duration to window height
    new ScrollMagic.Scene({
      triggerElement: ".home-description",
      duration: "120%"
    })
    .setTween(tweenDescription)
    .addTo(description);

  //img-2
    // init controller
    var description2 = new ScrollMagic.Controller();
    // build tween
    var descriptionBlock2 = ["#description2", "#description4"]; 
    var tweenDescription2 = TweenMax.staggerFrom(descriptionBlock2, 0.5, {y: '-90'});
  
    // build scene and set duration to window height
    new ScrollMagic.Scene({
      triggerElement: ".home-description",
      duration: "120%"
    })
    .setTween(tweenDescription2)
    .addTo(description2);
}
//video
if($('#video').length) {
  // init controller
  var video = new ScrollMagic.Controller();
  // build tween
  var videoBlock = ["#video", "#video1"]; 
  var tweenVideo = TweenMax.staggerFrom(videoBlock, 0.5, {y: '-70'}, 0.1);

  // build scene and set duration to window height
  new ScrollMagic.Scene({
    triggerElement: ".home-solutions .btn.btn-primary",
    duration: "100%"
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
  var tweenFeature = TweenMax.staggerFrom(featureBlock, 0.01, {y: '-70'});

  // build scene and set duration to window height
  new ScrollMagic.Scene({
    duration: "100%"
  })
  .setTween(tweenFeature)
  .addTo(feature);
  


  // init controller
  var feature1 = new ScrollMagic.Controller();
  // build tween
  var featureBlock1 = ["#feature2"]; 
  var tweenFeature1 = TweenMax.staggerFrom(featureBlock1, 0.01, {y: '70'});

  // build scene and set duration to window height
  new ScrollMagic.Scene({
    duration: "100%"
  })
  .setTween(tweenFeature1)
  // .addIndicators()
  .addTo(feature1);
}