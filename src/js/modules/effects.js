import Utility from './utility'
const utility = new Utility();

export default class Effects {
    /*
        effectParallax: Adds a parallax effect to elements
        @rotation: the rotation tranform already on the element or that you wish to add
        @scale: the scale transform already on the element or that you wish to add
        @x: the x transform already on the element or that you wish to add
        @speed: the speed that you wish the scroll the element by
        @element: the element you wish to apply this effect to 
        @debug: prints the position of the scroll for the site and the amount the element has been transformed by
    */
    parallax(rotation, scale, xOffset, yOffset, speed, element, debug){
        let scrolled = window.pageYOffset;
        let transformTop = - ((scrolled * speed) - yOffset) + "px";
        if (debug==true){
            console.log(`Element ID: ${element.id}\nEffect: parallax:\nScrolled:${scrolled}\nTransformTop:${transformTop}`);
        }
        element.style.transform = " translate(" + xOffset + ", " + transformTop + ")" + rotation + " " + scale;
    }

    /*
        effectFlashAnimation: Adds the class triggers to animate the Flash Animation
        @elements: list of all elements with the AnimationFlashWrapper class
        @yOffset: The distance the top of the page should be from the top of the element to start the animation
        @debug: Outputs debug information if turned on
    */
    flashAnimation(elements, distanceFromTop, debug){
        let scrolled = window.pageYOffset;
        for(let i = 0; i < elements.length; i++){
            
            //TODO: Fix mobile mode for animation
            //Resize cell height to ensure mobile mode doesn't turn height to 0
            // let cell = elements[i].parentElement;
            // let animationFlashContent = elements[i].querySelector('.AnimationFlashContent');
            // let content = animationFlashContent.firstElementChild;
            // let contentHeight = content.offsetHeight;
            // let contentMarginBottom = content.style.marginTop;
            // contentMarginBottom = contentMarginBottom.substring(0, contentMarginBottom.length - 2);
            // contentMarginBottom = parseInt(contentMarginBottom);
            // let contentMarginTop = content.style.marginTop;
            // contentMarginTop = contentMarginTop.substring(0, contentMarginTop.length - 2);
            // contentMarginTop = parseInt(contentMarginTop);
            // let marginHeight = contentMarginTop + contentMarginBottom;
            // contentHeight = (marginHeight + contentHeight);
            // contentHeight = contentHeight + "px";
            // cell.style.minHeight = contentHeight;
        
            let elementOffset = utility.getPosition(elements[i]).y;
            let distance = (elementOffset - distanceFromTop);
            if (debug == true){
                console.log(`
                    Element: ${elements[i]}\n
                    Flash Animation\n
                    Scroll Position: ${scrolled}\n
                    ElementOffset: ${elementOffset}\n
                    Distance: ${distance}\n
                    `);
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
}