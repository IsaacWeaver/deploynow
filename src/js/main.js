//Import all deploynow libraries
import Effects from './modules/effects';
import Events from './modules/events';

//Retrieve all elements here
let parallax01 = document.getElementById("parallax");
let parallax = document.getElementsByClassName("Parallax");
let animationFlashElements = document.getElementsByClassName("AnimationFlashWrapper");

//Declare all objects here
const effects = new Effects();
const events = new Events();

//Calls all scroll based events here
events.scroll(function(){
    effects.parallaxByClass('', '', 0, 30, 0.05, parallax, false);
    effects.parallaxById('', '', 0, 30, 0.1, parallax01, false);
    effects.flashAnimation(animationFlashElements, 1000, false);
});
