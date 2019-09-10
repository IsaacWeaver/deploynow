class Utility{
    getPosition(element){
        let xPos = 0;
        let yPos = 0;
    
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
}

module.exports = Utility;