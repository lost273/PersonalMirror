    Scroll();

    //refresh every 5 sec
    setTimeout("Refresh();", 5000);

    //sending messages on pressing Enter
    $('#txtMessage').keydown(function (e) {
        if (e.keyCode === 13) {
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


function ChatOnFailure(result) {
    $("#Error").text(result.responseText);
    setTimeout("$('#Error').empty();", 2000);
}

function ChatOnSuccess(result) {
    Scroll();
}

function Scroll() {
    var win = $('#Messages');
    var height = win[0].scrollHeight;
    win.scrollTop(height);
}
