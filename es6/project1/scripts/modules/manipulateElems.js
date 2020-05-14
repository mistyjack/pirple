const manipulate = {};

manipulate.hideElem = (elem) => {
    document.getElementById(elem).hidden = true;
}

manipulate.unhideElem = (elem) => {
    document.getElementById(elem).hidden = false;
}

manipulate.rmvChild = (parent, elem) => {
    parent.removeChild(elem);
}

manipulate.addEvent = (elem, eventType, callback) => {
    document.getElementById(elem)
        .addEventListener(eventType, callback)
}

manipulate.rmvEvent = (elem, eventType, callback) => {
    document.getElementById(elem)
        .removeEventListener(eventType, callback)
}

export default manipulate;