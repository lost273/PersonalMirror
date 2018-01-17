document.getElementById("square-empty").addEventListener("click", move(this));
function move(obj) {
    //var articleDiv = document.querySelector("div.article");
    document.getElementById("square-empty").id = "square";
    obj.id = "square-empty";
}