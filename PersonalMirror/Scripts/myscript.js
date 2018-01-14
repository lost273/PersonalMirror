var array = [99, -10, 100123, 18, -978, 5623, 463, -9, 287, 49];

var sort = function(a){
    
    for (var i = 0; i < a.length; i++){
        for (var j = a.length - 1; j > 0; j--){
            if (a[j-1] > a[j]) {
                var temp;
                temp = a[j-1];
                a[j-1] = a[j];
                a[j] = temp;
            }
        }
    }
}
sort(array);
for (var index in array) {
    document.write(array[index] + "</br>");
}