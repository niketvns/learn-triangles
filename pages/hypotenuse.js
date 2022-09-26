var base = document.querySelector("#base");
var height = document.querySelector("#height");

var button = document.querySelector("button");
var hypotenuseOutput = document.querySelector(".hypotenuse-output");

button.addEventListener("click", calculateHypotenuse)


function calculateHypotenuse() {
    var baseSqure = Math.pow(base.value, 2)
    var heightSqure = Math.pow(height.value, 2)
    var hypotenuse = Math.sqrt(baseSqure + heightSqure)
    hypotenuseOutput.innerHTML = "Hypotenuse is: " + hypotenuse.toFixed(2)
    hypotenuseOutput.style.color = "Green";
}
