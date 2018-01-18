function move(event) {
    if (event.target.id == "square-empty") {
        return;
    }
    var elements = document.querySelectorAll("#field.row div");
    var indexZero, indexCurrent;
    for (var index in elements) {
        if (elements[index].innerText == "") {
            indexZero = index;
        }
        if (elements[index].innerText == event.target.innerText) {
            indexCurrent = index;
        }
    }
    console.log(indexCurrent);
    console.log(indexZero);
    if (((indexCurrent - 3) == indexZero) ||
        ((indexCurrent + 3) == indexZero) ||
        ((indexCurrent - 1) == indexZero) ||
        ((indexCurrent + 1) == indexZero)) {
        elements[indexCurrent].id = "square-empty";
        elements[indexZero].id = "square";
    }
}
//document.getElementById("square-empty").addEventListener("click", move);
var el = document.querySelectorAll("#field.row div");
for (var index in el) {
    console.log(el[index].innerText);
    el[index].addEventListener("click", move);
}