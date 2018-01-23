var a = [99, -10, 10012, 18, -978, 5623, 463, -9, 287, 49];
var charArray = ['b', 'a', 't', 'g', 'e', 'm', 'r', 'q', 'c'];
var floatArray = [30.5, 10.02, 56.17, -1.01, 7.66, 5.17, 1000.33, -500.9];

function display() {
    var i = +document.getElementById("i").innerHTML;
    var j = +document.getElementById("j").innerHTML;
    var temp = +document.getElementById("t").innerHTML;

    //begin of the new outer iteration
    if (j === -2) {
        i++;
        if (i >= a.length) return;
        temp = a[i];
        j = i - 1;        
    }

    if (j >= 0 && a[j] > temp) {
        a[j + 1] = a[j];
        document.getElementById(j + 1).style.background = "#f5f5f5";
        document.getElementById(j).style.background = "#32CD32";
        j--;
    } else {
        a[j + 1] = temp;
        document.getElementById(j + 1).style.background = "#f5f5f5";
        // -2 indicates the end of outer iteration
        j = -2;
    }
    
    for (var k = 0; k < a.length; k++) {
        document.getElementById(k).innerHTML = a[k];
    }

    document.getElementById("i").innerHTML = i;
    document.getElementById("j").innerHTML = j;
    document.getElementById("t").innerHTML = temp;
}

document.getElementById("nextiteration").addEventListener("click", display);
for (var k = 0; k < a.length; k++) {
    document.getElementById(k).innerHTML = a[k];
}
