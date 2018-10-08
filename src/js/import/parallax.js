import Parallax from 'parallax-js'

//intro
var scene = $('#scene').get(0);
var parallaxInstance = new Parallax(scene);
parallaxInstance.friction(0, 0.2);

var scene1 = $('#scene1').get(0);
var parallaxInstance1 = new Parallax(scene1);
parallaxInstance1.friction(0, 0.5);

var scene2 = $('#scene2').get(0);
var parallaxInstance2 = new Parallax(scene2);
parallaxInstance2.friction(0, 0.9);


//description
//slide-1
var description = $('#description').get(0);
var description = new Parallax(description);
description.friction(0, 0.2);

//slide-2
var description1 = $('#description1').get(0);
var description1 = new Parallax(description1);
description1.friction(0, 0.2);

var description2 = $('#description2').get(0);
var description2 = new Parallax(description2);
description2.friction(0, 0.5);

//slide-3
var description3 = $('#description3').get(0);
var description3 = new Parallax(description3);
description3.friction(0, 0.2);

var description4 = $('#description4').get(0);
var description4 = new Parallax(description4);
description4.friction(0, 0.5);