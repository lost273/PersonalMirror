var a = [99, -10, 10012, 18, -978, 5623, 463, -9, 287, 49];
var charArray = ['b', 'a', 't', 'g', 'e', 'm', 'r', 'q', 'c'];
var floatArray = [30.5, 10.02, 56.17, -1.01, 7.66, 5.17, 1000.33, -500.9];

function display() {
    var i = +document.getElementById("i").innerHTML;
    var j = +document.getElementById("j").innerHTML;
    var tempIndex = +document.getElementById("ti").innerHTML;
    var temp = +document.getElementById("t").innerHTML;

    //begin of the new outer iteration
    if (j >= a.length || i === -1) {
        if (i >= a.length) return;
        if (i !== -1) {
            a[tempIndex] = a[i];
            a[i] = temp;
        }
        i++;
        tempIndex = i;
        temp = a[i];
        j = i + 1;
    }

    if (a[j] < temp) {
        tempIndex = j;
        temp = a[j];
    }
    
    if (j < a.length) document.getElementById(j).style.background = "#f5f5f5";   
    j++;
    if (j < a.length) document.getElementById(j).style.background = "#32CD32";

    for (var k = 0; k < a.length; k++) {
        document.getElementById(k).innerHTML = a[k];
    }

    document.getElementById("i").innerHTML = i;
    document.getElementById("j").innerHTML = j;
    document.getElementById("t").innerHTML = temp;
    document.getElementById("ti").innerHTML = tempIndex;
}

document.getElementById("nextiteration").addEventListener("click", display);
for (var k = 0; k < a.length; k++) {
    document.getElementById(k).innerHTML = a[k];
}
