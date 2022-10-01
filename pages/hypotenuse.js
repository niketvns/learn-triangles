var base = document.querySelector("#base");
var height = document.querySelector("#height");

var button = document.querySelector("button");
var hypotenuseOutput = document.querySelector(".hypotenuse-output");

button.addEventListener("click", calculateHypotenuse)


function calculateHypotenuse() {

    if (base.value < 0 || height.value < 0) {
        hypotenuseOutput.innerHTML = "Enter a Valid Data";
        hypotenuseOutput.style.color = "Red";
    } else if (base.value.length == 0 || height.value.length == 0) {
        hypotenuseOutput.innerHTML = "Please enter all the fields";
        hypotenuseOutput.style.color = "Red";
    } else if (base.value == 0 || height.value == 0) {
        hypotenuseOutput.innerHTML = "Side of triangle cannot be 0";
        hypotenuseOutput.style.color = "Red";
    } else {
        var baseSqure = Math.pow(base.value, 2)
        var heightSqure = Math.pow(height.value, 2)
        var hypotenuse = Math.sqrt(baseSqure + heightSqure)
        hypotenuseOutput.innerHTML = "Hypotenuse is: " + hypotenuse.toFixed(2)
        hypotenuseOutput.style.color = "Green";
    }
}
