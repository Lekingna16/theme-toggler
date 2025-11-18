

document.getElementById("toggle").addEventListener("click", function () {
    var checkBox = document.getElementById("toggle");
    if (checkBox.checked)
        document.body.style.background = "black";
    else
        document.body.style.background = "white";
});
