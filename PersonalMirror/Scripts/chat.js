$(document).ready(function () {
    var nickName = "wanderer";
    // make the link with parameters
    var href = "/Home?user=" + encodeURIComponent(nickName);
    href = href + "&logOn=true";
    $("#LoginButton").attr("href", href).click();
});

//success - loading messages
function LoginOnSuccess(result) {

    Scroll();
    ShowLastRefresh();

    //refresh every 5 sec
    setTimeout("Refresh();", 5000);

    //sending messages on pressing Enter
    $('#txtMessage').keydown(function (e) {
        if (e.keyCode == 13) {
            e.preventDefault();
            $("#btnMessage").click();
        }
    });

    //setting a click event handler for sending messages
    $("#btnMessage").click(function () {
        var text = $("#txtMessage").val();
        if (text) {

            //turn to the method Index and pass the parameter "chatMessage"
            var href = "/Home?user=" + encodeURIComponent($("#Username").text());
            href = href + "&chatMessage=" + encodeURIComponent(text);
            $("#ActionLink").attr("href", href).click();
        }
    });

    //обработчик кнопки выхода из чата
    $("#btnLogOff").click(function () {

        //обращаемся к методу Index и передаем параметр "logOff"
        var href = "/Home?user=" + encodeURIComponent($("#Username").text());
        href = href + "&logOff=true";
        $("#ActionLink").attr("href", href).click();

        document.location.href = "Home";
    });
}

//при ошибке отображаем сообщение об ошибке при логине
function LoginOnFailure(result) {
    $("#Username").val("");
    $("#Error").text(result.responseText);
    setTimeout("$('#Error').empty();", 2000);
}

// каждые пять секунд обновляем поле чата
function Refresh() {
    var href = "/Home?user=" + encodeURIComponent($("#Username").text());

    $("#ActionLink").attr("href", href).click();
    setTimeout("Refresh();", 5000);
}

//Отображаем сообщение об ошибке
function ChatOnFailure(result) {
    $("#Error").text(result.responseText);
    setTimeout("$('#Error').empty();", 2000);
}

// при успешном получении ответа с сервера
function ChatOnSuccess(result) {
    Scroll();
    ShowLastRefresh();
}

//скролл к низу окна
function Scroll() {
    var win = $('#Messages');
    var height = win[0].scrollHeight;
    win.scrollTop(height);
}

//отображение времени последнего обновления чата
function ShowLastRefresh() {
    var dt = new Date();
    var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
    $("#LastRefresh").text("Последнее обновление было в " + time);
}