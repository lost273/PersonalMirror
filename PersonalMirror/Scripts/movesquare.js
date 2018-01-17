function move(event) {
    //var articleDiv = document.querySelector("div.article");
    //document.getElementById("square-empty").id = "square";
    //event.target.id = "square-empty";
    event.target.id = "square1";
}
//document.getElementById("square-empty").addEventListener("click", move);
//var elements = document.querySelectorAll("#field.row div");
//for (var el in elements) {
//    el.id = "aa";
//    console.log(el.innerText);
//    //el.addEventListener("click", move);
//}
var elems = document.querySelectorAll("#field.row div");

for (var i = 0; i < elems.length; i++) {
    console.log("Текст селектора " + i + ": " + elems[i].innerText);
}
