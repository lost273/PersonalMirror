function move(event) {
    //var articleDiv = document.querySelector("div.article");
    //document.getElementById("square-empty").id = "square";
    //event.target.id = "square-empty";
    event.target.id = "square";
}
document.getElementById("square-empty").addEventListener("click", move);