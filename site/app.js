"use strict";setTimeout(function(){console.log("ES2015 FTW")},1e3);var parallaxTest=document.getElementById("parallax"),parallax2=document.getElementById("parallax2"),animationFlashElements=document.getElementsByClassName("AnimationFlashWrapper");function effectParallax(a,n,t,e,l,o){var s=window.pageYOffset,c=-s*e+"px";1==o&&console.log("Element ID: ".concat(l.id,"\nEffect: parallax:\nScrolled:").concat(s,"\nTransformTop:").concat(c)),l.style.transform=" translate("+t+", "+c+")"+a+" "+n}function effectFlashAnimation(a,n,t){for(var e=window.pageYOffset,l=0;l<a.length;l++){var o=getPosition(a[l]).y,s=o-n;if(1==t&&console.log("\n                Element: ".concat(a[l],"\n\n                Flash Animation\n\n                Scroll Position: ").concat(e,"\n\n                ElementOffset: ").concat(o,"\n\n                Distance: ").concat(s,"\n\n                ")),s<=0){var c=a[l].querySelector(".AnimationFlashBackground"),i=a[l].querySelector(".AnimationFlashBackgroundFinal"),r=a[l].querySelector(".AnimationFlashContent");c.classList.contains("AnimateFlashBackground")||(a[l].classList.add("AnimateFlashWrapper"),c.classList.add("AnimateFlashBackground"),i.classList.add("AnimateFlashBackgroundFinal"),r.classList.add("AnimateFlashContent"))}}}function getPosition(a){for(var n=0,t=0;a;){if("BODY"==a.tagName){var e=a.scrollLeft||document.documentElement.scrollLeft,l=a.scrollTop||document.documentElement.scrollTop;n+=a.offsetLeft-e+a.clientLeft,t+=a.offsetTop-l+a.clientTop}else n+=a.offsetLeft-a.scrollLeft+a.clientLeft,t+=a.offsetTop-a.scrollTop+a.clientTop;a=a.offsetParent}return{x:n,y:t}}window.addEventListener("scroll",function(){effectParallax("","","0",.5,parallaxTest,!1),effectParallax("","","0",.1,parallax2,!1),effectFlashAnimation(animationFlashElements,400,!1)});