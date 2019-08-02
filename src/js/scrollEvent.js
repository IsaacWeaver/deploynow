//Retrieve all elements here
let parallaxTest = document.getElementById("parallax");
let parallax2 = document.getElementById("parallax2");
let animationFlashElements = document.getElementsByClassName("AnimationFlashWrapper");

//Calls all events based on scrolling here
window.addEventListener('scroll', function() {
    effectParallax('', '', '0', 0.5, parallaxTest, false);
    effectParallax('', '', '0', 0.1, parallax2, false);
    effectFlashAnimation(animationFlashElements, 400, false);
});

/*
    effectParallax: Adds a parallax effect to elements
    @rotation: the rotation tranform already on the element or that you wish to add
    @scale: the scale transform already on the element or that you wish to add
    @x: the x transform already on the element or that you wish to add
    @speed: the speed that you wish the scroll the element by
    @element: the element you wish to apply this effect to 
    @debug: prints the position of the scroll for the site and the amount the element has been transformed by
*/
function effectParallax(rotation, scale, x, speed, element, debug){
    let scrolled = window.pageYOffset;
    let transformTop = - (scrolled * speed) + "px";
    if (debug==true){
        console.log(`Element ID: ${element.id}\nEffect: parallax:\nScrolled:${scrolled}\nTransformTop:${transformTop}`);
    }
    element.style.transform = " translate(" + x + ", " + transformTop + ")" + rotation + " " + scale;
}

/*
    effectFlashAnimation: Adds the class triggers to animate the Flash Animation
    @elements: list of all elements with the AnimationFlashWrapper class
    @yOffset: The distance the top of the page should be from the top of the element to start the animation
    @debug: Outputs debug information if turned on
*/
function effectFlashAnimation(elements, yOffset, debug){
    let scrolled = window.pageYOffset;
    for(let i = 0; i < elements.length; i++){
        let elementOffset = getPosition(elements[i]).y;
        let distance = (elementOffset - yOffset);
        if (debug == true){
            console.log(`
                Element: ${elements[i]}\n
                Flash Animation\n
                Scroll Position: ${scrolled}\n
                ElementOffset: ${elementOffset}\n
                Distance: ${distance}\n`);
        }
        if (distance <= 0){
            let flashBackground = elements[i].querySelector('.AnimationFlashBackground');
            let flashBackgroundFinal = elements[i].querySelector('.AnimationFlashBackgroundFinal');
            let flashBackgroundContent = elements[i].querySelector('.AnimationFlashContent');
            if (flashBackground.classList.contains('AnimateFlashBackground')){
            }else{
                elements[i].classList.add('AnimateFlashWrapper');
                flashBackground.classList.add('AnimateFlashBackground');
                flashBackgroundFinal.classList.add('AnimateFlashBackgroundFinal');
                flashBackgroundContent.classList.add('AnimateFlashContent');
            }
        }
    }
}

/*
    getPosition: Retrieves the x and y position of an element on the page
    @element: The element the function will return the x and y for.
*/
function getPosition(element) {
    var xPos = 0;
    var yPos = 0;
   
    while (element) {
      if (element.tagName == "BODY") {
        // deal with browser quirks with body/window/document and page scroll
        var xScroll = element.scrollLeft || document.documentElement.scrollLeft;
        var yScroll = element.scrollTop || document.documentElement.scrollTop;
   
        xPos += (element.offsetLeft - xScroll + element.clientLeft);
        yPos += (element.offsetTop - yScroll + element.clientTop);
      } else {
        // for all other non-BODY elements
        xPos += (element.offsetLeft - element.scrollLeft + element.clientLeft);
        yPos += (element.offsetTop - element.scrollTop + element.clientTop);
      }
   
      element = element.offsetParent;
    }
    return {
      x: xPos,
      y: yPos
    };
  }