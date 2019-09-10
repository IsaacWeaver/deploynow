import Effects from './modules/effects';

//Retrieve all elements here
let parallax = document.getElementById("parallax");
let animationFlashElements = document.getElementsByClassName("AnimationFlashWrapper");

//Declare effects object
const effects = new Effects();

//Calls all scroll based events here
window.addEventListener('scroll', function() {
    effects.parallax('', '', 0, 30, 0.1, parallax, false);
    effects.flashAnimation(animationFlashElements, 1000, false);
});