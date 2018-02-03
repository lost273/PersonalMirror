document.addEventListener("keypress", getChar, false);
function getChar(event) {
    if (event.which == null) { // IE
        if (event.keyCode < 32) return null; // special chars
        //enter
        document.getElementById("chat").innerHTML += String.fromCharCode(event.keyCode);
    }
    if (event.which != 0 && event.charCode != 0) { // all without IE
        if (event.which < 32) return null; // special char
        //enter
        document.getElementById("chat").innerHTML += String.fromCharCode(event.which); // other
    }
    return null; // special char
}