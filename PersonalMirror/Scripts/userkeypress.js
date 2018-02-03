document.addEventListener("keypress", getChar, false);
function getChar(event) {
    if (event.which == null) { // IE
        if (event.keyCode === 13) { //enter
            userSay();
            return null;
        }
        if (event.keyCode < 32) return null; // special chars
        document.getElementById("chat").innerHTML += String.fromCharCode(event.keyCode);
    }
    if (event.which != 0 && event.charCode != 0) { // all without IE
        if (event.keyCode === 13) { //enter
            userSay();
            return null;
        }
        if (event.which < 32) return null; // special char
        document.getElementById("chat").innerHTML += String.fromCharCode(event.which); // other
    }
    return null; // special char
}
function userSay() {
    var xhr = new XMLHttpRequest();

    var body = document.getElementById("chat").innerHTML.toString();

    xhr.open("POST", '/Home', true);
    xhr.setRequestHeader('Content-Type', 'text-plain');

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById("chat").innerHTML += xhr.responseText;
        }
    };

    xhr.send(body);
}