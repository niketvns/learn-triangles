var side1 = document.querySelector("#side1");
var side2 = document.querySelector("#side2");
var side3 = document.querySelector("#side3");
var button = document.querySelector("button");
var areaOutput = document.querySelector(".areaOutput");
var errorOutput = document.querySelector(".errorOutput");

button.addEventListener("click", calculateArea)


function calculateArea() {
    var sp = (side1.value * 1 + side2.value * 1 + side3.value * 1) / 2;
    var squreArea = sp * (sp - side1.value * 1) * (sp - side2.value * 1) * (sp - side3.value * 1);

    if (squreArea < 0) {
        areaOutput.innerHTML = ""
        errorOutput.innerHTML = "The sum of two sides must be larger than the third. \n The Value You have entered can not make a triangle";
        errorOutput.style.color = "Red";
    } else {
        var area = Math.sqrt(squreArea)
        areaOutput.innerHTML = "Area: " + area.toFixed(2)
        areaOutput.style.color = "Green";
    }
}
