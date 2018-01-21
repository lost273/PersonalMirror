var a = [99, -10, 10012, 18, -978, 5623, 463, -9, 287, 49];
var charArray = ['b', 'a', 't', 'g', 'e', 'm', 'r', 'q', 'c'];
var floatArray = [30.5, 10.02, 56.17, -1.01, 7.66, 5.17, 1000.33, -500.9];

function display() {
    var i = +document.getElementById("i").innerHTML;
    var j = +document.getElementById("j").innerHTML;
    if (j === 0) {
        j = a.length - 1
    }
    document.getElementById(i).style.background = "#FF0000";
    document.getElementById(j).style.background = "#32CD32";
    for (var k = 0; k < a.length; k++) {
        document.getElementById(k).innerHTML = a[k];
    }
    for (; i < a.length; i++) {
        for (; j > 0; j--) {
            if (a[j - 1] > a[j]) {
                var temp;
                temp = a[j - 1];
                a[j - 1] = a[j];
                a[j] = temp;
            }
        }
    }
}

document.getElementById("nextiteration").addEventListener("click", display);

