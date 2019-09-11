class Events{
    scroll(callBackFunction){
        window.addEventListener('scroll', callBackFunction);
    }
}

module.exports = Events;