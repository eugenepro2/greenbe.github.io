import ScrollMagic from 'scrollmagic'
import 'animation.gsap';
import 'debug.addIndicators';
import {TweenMax} from "gsap";


//scrollmagic



//intro
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


//description
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

//video
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
  // .addIndicators()
  .addTo(video);