// button: starts quiz 
var startBtn = document.getElementById("startBtn");

// section of the index page
var gamePg = document.getElementById("game");
var quiz = document.getElementById("quiz");
var score = document.getElementById("score");
var scoreBoard = document.getElementById("scoreBoard");

// quiz section
var answerBtn = document.getElementById("answerBtn");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var opt4 = document.getElementById("opt4");
// indicates if answer is correct/incorrect
var huzzah = document.getElementById("huzzah");
var goshDarn = document.getElementById("goshDarn");
//setup for timer
var timerEl = document.querySelector(".timer");
var timerInterval;


// timer will countdown from 30 secs
function timer() {
    var secLeft = 60;
}

// onclick section

// will start time when button is stat button is clicked
startBtn.addEventListener("click, startTime");




// function section
// timer starts on click
function startClick() {
    setTime();
    // gamePg gets hidden on click and the quiz will pop up
    gamePg.className="hidden";
    quiz.className="";
}

// timer will show how many seconds are left 
function setTime() {
    timerInterval =setInterval(
        function () {
            secLeft--;
            timerEl.textContent = "Time: " + secLeft;

            // when secLeft reaches 0 then the questions are scored
            if(secLeft === 0){
                scoredQ();
            }
// CREATE FUNcTION FOR scoredQ - needs to score answers
        }
    )
}