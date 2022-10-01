var angle1 = document.querySelector("#angle1");
var angle2 = document.querySelector("#angle2");
var angle3 = document.querySelector("#angle3");
var button = document.querySelector("button");
var isAngleOutput = document.querySelector(".isAngleOutput");

button.addEventListener("click", calculateAngle)


function calculateAngle() {

    var total = angle1.value * 1 + angle2.value * 1 + angle3.value * 1;

    if (angle1.value < 0 || angle2.value < 0 || angle3.value < 0) {
        isAngleOutput.innerHTML = "Enter a Valid Data";
        isAngleOutput.style.color = "Red";
    } else if (angle1.value.length == 0 || angle2.value.length == 0 || angle3.value.length == 0) {
        isAngleOutput.innerHTML = "Please enter both the fields";
        isAngleOutput.style.color = "Red";
    } else if (total === 180) {
        if (angle1.value == 0 || angle2.value == 0 || angle3.value == 0) {
            isAngleOutput.innerHTML = "No, This is not a triangle, With angle 0 degree if we try to draw such a triangle, we only get a line which cannot be a triangle!";
            isAngleOutput.style.color = "#ea580c";
        } else {
            isAngleOutput.innerHTML = "Yeah, This is a Triangle";
            isAngleOutput.style.color = "Green";
        }
    } else {
        isAngleOutput.innerHTML = "No, This is not a triangle";
        isAngleOutput.style.color = "Red";

    }
}


