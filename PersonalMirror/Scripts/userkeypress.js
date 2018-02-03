document.addEventListener("keypress", getChar, false);
function getChar(event) {
    if (event.which == null) { // IE
        if (event.keyCode < 32) return null; // special chars
        if (event.keyCode === 13) { //enter
            userSay();
            return null;
        }
        document.getElementById("chat").innerHTML += String.fromCharCode(event.keyCode);
    }
    if (event.which != 0 && event.charCode != 0) { // all without IE
        if (event.which < 32) return null; // special char
        if (event.keyCode === 13) { //enter
            userSay();
            return null;
        }
        document.getElementById("chat").innerHTML += String.fromCharCode(event.which); // other
    }
    return null; // special char
}
function userSay() {
    var xhr = new XMLHttpRequest();

    var body = 'name=' + encodeURIComponent(name) +
        '&surname=' + encodeURIComponent(surname);

    xhr.open("POST", 'Index', true);
    xhr.setRequestHeader('Content-Type', 'text-plain');

    xhr.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("chat").innerHTML += xmlhttp.responseText;
        }
    };

    xhr.send(body);
}