function move(event) {
    if (event.target.id === "square-empty") {
        return;
    }
    var elements = document.querySelectorAll("#field.row div");
    var indexZero, indexCurrent;
    for (var index = 0; index < elements.length; index++) {
        if (elements[index].innerText === "") {
            indexZero = index;
        }
        if (elements[index].innerText === event.target.innerText) {
            indexCurrent = index;
        }
    }
   
    console.log("Cur " + typeof indexCurrent + indexCurrent);
    console.log("Zer " + typeof indexZero + indexZero);
    if (indexCurrent - 3 === indexZero ||
        indexCurrent + 3 === indexZero ||
        indexCurrent - 1 === indexZero && indexCurrent !== 3 && indexCurrent !== 6 ||
        indexCurrent + 1 === indexZero && indexCurrent !== 2 && indexCurrent !== 5) {
        elements[indexCurrent].id = "square-empty";
        elements[indexZero].id = "square";
        elements[indexZero].innerText = elements[indexCurrent].innerText;
        elements[indexCurrent].innerText = "";
    }
}
var el = document.querySelectorAll("#field.row div");
for (var index = 0; index < el.length; index++) {
    console.log(el[index].innerText);
    el[index].addEventListener("click", move);
}