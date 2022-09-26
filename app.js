var declare = document.querySelector("#declare");
var button = document.querySelector(".button");

declare.addEventListener("click", function () {
    if (declare.checked == true) {
        button.style.cursor = "pointer";
        button.style.backgroundColor = "turquoise";
        button.style.display = "block";
    } else {
        button.style.cursor = "not-allowed";
        button.style.backgroundColor = "gray";
        button.style.display = "none";
    }
})
