"use strict";function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(t){var o={};function r(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=o,r.d=function(e,n,t){r.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(n,e){if(1&e&&(n=r(n)),8&e)return n;if(4&e&&"object"===_typeof(n)&&n&&n.__esModule)return n;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)r.d(t,o,function(e){return n[e]}.bind(null,o));return t},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="",r(r.s=0)}([function(e,n,t){t(1),e.exports=t(2)},function(e,n){setTimeout(function(){console.log("ES2015 FTW")},1e3)},function(e,n,t){t.r(n);var o=t(3),r=document.getElementById("parallax"),a=document.getElementsByClassName("AnimationFlashWrapper"),l=new o.default;window.addEventListener("scroll",function(){l.parallax("","",0,30,.1,r,!1),l.flashAnimation(a,1e3,!1)})},function(e,n,t){t.r(n),t.d(n,"default",function(){return r});var o=t(4),s=new(t.n(o).a),r=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"parallax",value:function(e,n,t,o,r,a,l){var c=window.pageYOffset,i=-(c*r-o)+"px";1==l&&console.log("Element ID: ".concat(a.id,"\nEffect: parallax:\nScrolled:").concat(c,"\nTransformTop:").concat(i)),a.style.transform=" translate("+t+", "+i+")"+e+" "+n}},{key:"flashAnimation",value:function(e,n,t){for(var o=window.pageYOffset,r=0;r<e.length;r++){var a=s.getPosition(e[r]).y,l=a-n;if(1==t&&console.log("\n                    Element: ".concat(e[r],"\n\n                    Flash Animation\n\n                    Scroll Position: ").concat(o,"\n\n                    ElementOffset: ").concat(a,"\n\n                    Distance: ").concat(l,"\n\n                    ")),l<=0){var c=e[r].querySelector(".AnimationFlashBackground"),i=e[r].querySelector(".AnimationFlashBackgroundFinal"),f=e[r].querySelector(".AnimationFlashContent");c.classList.contains("AnimateFlashBackground")||(e[r].classList.add("AnimateFlashWrapper"),c.classList.add("AnimateFlashBackground"),i.classList.add("AnimateFlashBackgroundFinal"),f.classList.add("AnimateFlashContent"))}}}}]),e}()},function(e,n){var t=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"getPosition",value:function(e){for(var n=0,t=0;e;){if("BODY"==e.tagName){var o=e.scrollLeft||document.documentElement.scrollLeft,r=e.scrollTop||document.documentElement.scrollTop;n+=e.offsetLeft-o+e.clientLeft,t+=e.offsetTop-r+e.clientTop}else n+=e.offsetLeft-e.scrollLeft+e.clientLeft,t+=e.offsetTop-e.scrollTop+e.clientTop;e=e.offsetParent}return{x:n,y:t}}}]),e}();e.exports=t}]);