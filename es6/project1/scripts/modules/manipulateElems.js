export function hideElem(elem) {
    document.getElementById(elem).hidden = true;
}

export function unhideElem(elem) {
    document.getElementById(elem).hidden = false;
}

export function rmvChild(parent, elem) {
    parent.removeChild(elem);
}

export function addEvent(elem, eventType, callback) {
    document.getElementById(elem)
        .addEventListener(eventType, callback)
}

export function rmvEvent(elem, eventType, callback) {
    document.getElementById(elem)
        .removeEventListener(eventType, callback)
}