var intArray = [99, -10, 100123, 18, -978, 5623, 463, -9, 287, 49];
var charArray = ['b', 'a', 't', 'g', 'e', 'm', 'r', 'q', 'c'];
var floatArray = [30.5, 10.02, 56.17, -1.01, 7.66, 5.17, 1000.33, -500.9];

var sort = function (a) {

    for (var i = 0; i < a.length; i++) {
        for (var j = a.length - 1; j > 0; j--) {
            setTimeout(display(a,i), 5000);
            if (a[j - 1] > a[j]) {
                var temp;
                temp = a[j - 1];
                a[j - 1] = a[j];
                a[j] = temp;
            }
        }
    }
}

var display = function (a, one) {
    document.getElementById(one).style.background = "#FF0000";
    for (var k = 0; k < a.length; k++) {
        document.getElementById(k).innerHTML = a[k];
    }
}

sort(intArray);