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
var secLeft = 60;
// Q&A for quiz in popQ function
var questions = [
    {
        question:"Pick the one thing JavaScript can't do:",
        answer: {
            a: "Fly Drones",
            b: "Animate Websites",
            c: "Bake A Cake",
            d: "Make Serverless Websites",
        },
        rightAnswer: "c. Bake A Cake" 
    },
    {
        question:"Which one of these comparison operators is incorrect:",
        answer: {
            a: "NaN === NaN // -> false",
            b: "{} >= {} // -> true",
            c: "{} = {} // -> true",
            d: "{} === {} // -> false",
        },
        rightAnswer: "c: {} = {} // -> true"
    },
    {
        question:"What does NaN stand for?",
        answer: {
            a: "Not A Name",
            b: "Not A Noun",
            c: "Not A Number",
            d: "Not a Newt",
        },
        rightAnswer: "c. Not A Number"
    },
    {
        question:"What year was JavaScript created?",
        answer: {
            a: "1986",
            b: "1995",
            c: "2001",
            d: "1999",
        },
        rightAnswer: "b. 1995" 
    },
];


// onclick section

// will start time when button is stat button is clicked
startBtn.addEventListener("click, startTime");

// call function - questions will start to populate once time starts
popQ();




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



function popQ () {
    question.textContent = promptQ[counter].question;
    opt1.textContent = promptQ[counter].answer.a;
    opt2.textContent = promptQ[counter].answer.b;
    opt3.textContent = promptQ[counter].answer.c;
    opt4.textContent = promptQ[counter].answer.d;

    // when answer button is clicked then it will prompt nextQ to run
    answerBtn.onclick = function(event) {
        target = event.target;
        if (target.className !== "answerBtn") {
            return;
        } else {
            nextQ();
        }
    }

    // value = answer for the button & will be used to compare the target value
    opt1.setAttribute("value", promptQ[counter].answer.a);
    opt2.setAttribute("value", promptQ[counter].answer.b);
    opt3.setAttribute("value", promptQ[counter].answer.c);
    opt4.setAttribute("value", promptQ[counter].answer.d);

// function after question is answered and next question is prompted
function nextQ () {
    // if the value of the answer is compared to the chosen answer
    if(target.value === promptQ[counter].rightAnswer){
        // if the answer is right then Huzzah will pop up for 2 seconds
        huzzah.className = "";
        setTimeout(function() {
            // after the 2 seconds then huzzah is hidden
            huzzah.className = "hidden"
        }, 2000)

    } else {
        // value compares answer that was chosen
        goshDarn.className = "";
        // if answer is wrong then gosh darn will show up for 2 seconds
        setTimeout(function() {
            // after the 2 seconds then gosh darn is hidden
            goshDarn.className = "hidden"
        }, 2000)
        // 10 seconds are deducted when the answer is wrong.
        secLeft -= 10;
    }   
}
}

// game functionality: - out of Q then game is over
// increment operator will cause questions to go to the next one
next++;

if(next++ === quizQuestions.length){
    clearInterval(timerInterval);
    setTimeout(scoredQ, 1000);
} else {
    popQ();
}

// score quiz
function scored() {
    // score equals the seconds that are left
    score = secLeft*7;
    var finalScore = document.getElementById("finalScore");
    finalScore.innerHTML =score;
}

// save score