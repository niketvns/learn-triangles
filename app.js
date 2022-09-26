var declare = document.querySelector("#declare");
var button = document.querySelector(".button");
var quizForm = document.querySelector(".quiz-form");
var score_html = document.querySelector("#score");
var resultHeader = document.querySelector(".result-header")
var quizHeader = document.querySelector(".quiz-header");



const correctAnswer = [
    "90",
    "right angle",
    "one right angle",
    "12,16,20",
    "equilateral triangle",
    "100",
    "30",
    "a+b+c",
    "no",
    "45",
    "not question"
]

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


button.addEventListener("click", calculateScore);

function calculateScore() {
    const formData = new FormData(quizForm);
    let score = 0;
    let index = 0;
    for (let value of formData.values()) {
        for (let check = 0; check < 10; check++) {
            if (correctAnswer[check] === value) {
                score = score + 1;
            }
        }
        index = index + 1;
    }

    resultHeader.style.display = "block";
    quizHeader.style.display = "none";

    score_html.innerHTML = "Your Score: " + score + "/10";
}

