listenerAttach();
//attach the listener
function listenerAttach(){
    document.addEventListener("keypress", getChar, false);
    document.addEventListener("keydown", getControlKeys, false);
}
function getChar(event) {
    if (event.which == null) { // IE
        if (event.keyCode === 13) { //enter
            userSay();
            return null;
        }
        if (event.keyCode < 32) return null; // special chars
        document.getElementById("usermessage").innerHTML += String.fromCharCode(event.keyCode);
    }
    if (event.which != 0 && event.charCode != 0) { // all without IE
        if (event.keyCode === 13) { //enter
            userSay();
            return null;
        }
        if (event.which < 32) return null; // special char
        document.getElementById("usermessage").innerHTML += String.fromCharCode(event.which); // other
    }
    return null; // special char
}
//for Backspace only
function getControlKeys(event) {
    const key = event.key; // const {key} = event; ES6+
    if (key === "Backspace") {
        document.getElementById("usermessage").innerHTML = document.getElementById("usermessage").innerHTML.slice(0, -1);
        event.preventDefault(); //to prevent the default action (for example - "return back")
    }
}
function userSay() {
    var xhr = new XMLHttpRequest();

    var body = { 'message': document.getElementById("usermessage").innerHTML };

    xhr.open("POST", '/Home/Index', true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById("userhistory").innerHTML = " Stranger said: " +
                document.getElementById("usermessage").innerHTML;
            document.getElementById("serveranswer").innerHTML = "";
            slowSay("Someone There said: " + xhr.responseText,0);
            document.getElementById("usermessage").innerHTML = "";
            //prevent the user entering and hide the cursor
            document.removeEventListener("keypress", getChar, false);
            document.removeEventListener("keydown", getControlKeys, false);
            document.getElementsByClassName("blinking-cursor")[0].innerHTML = "";
        }
    };

    xhr.send(JSON.stringify(body));
}
//character - by - character output from server
function slowSay(text, index) {
    if (index < text.length) {
        document.getElementById("serveranswer").innerHTML += text[index++];
        setTimeout(function () { slowSay(text, index); }, 100);
    }
    else {
        listenerAttach();
        document.getElementsByClassName("blinking-cursor")[0].innerHTML = ">";
    }
}