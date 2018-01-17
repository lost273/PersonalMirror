function move(event) {
    //var articleDiv = document.querySelector("div.article");
    //document.getElementById("square-empty").id = "square";
    //event.target.id = "square-empty";
    event.target.id = "square1";
}
//document.getElementById("square-empty").addEventListener("click", move);
var elements = document.querySelectorAll("#field.row div");
for (var index in elements) {
    console.log(elements[index].innerText);
    elements[index].addEventListener("click", move);
}