//Document Variables:
var startQuizBtn = document.querySelector("#start-quiz-btn");
var startQuiz = document.getElementById("start-quiz");
var button1 = document.querySelector("#btn1");
var button2 = document.querySelector("#btn2");
var button3 = document.querySelector("#btn3");
var button4 = document.querySelector("#btn4");
var questionsCont = document.getElementById("questions");
var questionHeader = document.getElementById("question-header");
var answerWrong = document.getElementById("answer-response-wrong");
var answerRight = document.getElementById("answer-response-correct");


//Inital set up for questions:
questionsCont.style.display="none";

//Setting the timer:
var timeEl = document.getElementById("time");
var count = 0;
var secondsLeft = 75;

function setCounterText() {
  timeEl.textContent = "Time: " + count;
}
setCounterText();

//Beginning the Quiz:
startQuizBtn.addEventListener("click", function () {
  function setTime() {
    var timerInterval = setInterval(function () {
      secondsLeft--;
      timeEl.textContent = "Time: " + secondsLeft;

            if (secondsLeft < 1){
            clearInterval(timerInterval);
           /*   endGame();*/
        }
    }, 1000);
  }
  setTime();
  startQuiz.style.display = "none";
  answerRight.style.display = "none";
  answerWrong.style.display = "none";
  questionsCont.style.display="block";
 
});

//Questions:

var allQuestions = [
  {
    question: "Commonly used data types DO NOT include:",
    choices: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    answer: "3. alerts",
  },
  {
    question: "The condition in an if/else statement is enclosed within:",
    choices: [
      "1. quotes",
      "2. curly brackets",
      "3. parentheses",
      "4. square brackets",
    ],
    answer: "3. parentheses",
  },
  {
    question: "Arrays in JavaScript can be used to store:",
    choices: [
      "1. numbers and strings",
      "2. other arrays",
      "3. booleans",
      "4. all of the above",
    ],
    answer: "4. all of the above",
  },
  {
    question:
      "String values must be enclosed within ____ when being assigned to variables:",
    choices: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
    answer: "3. quotes",
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: [
      "1. JaveScript",
      "2. terminal/bash",
      "3. for loops",
      "4. console.log",
    ],
    answer: "4. console.log",
  },
];

question1();
function question1() {
    
    questionHeader.innerText = allQuestions[0].question;
    button1.innerHTML = allQuestions[0].choices[0];
    button2.innerHTML = allQuestions[0].choices[1];
    button3.innerHTML = allQuestions[0].choices[2];
    button4.innerHTML = allQuestions[0].choices[3];


    button1.onclick = function(){
        console.log("wrong");
        answerWrong.style.display = "block";
        secondsLeft -= 10;
        question2();
    }
    button2.onclick = function () {
        console.log("wrong");
        answerWrong.style.display = "block";
        secondsLeft -= 10;
        question2();

    }
    button3.onclick = function (){
        console.log("correct");
        answerRight.style.display = "block";
        question2();
    }

    button4.onclick = function () {
        console.log("wrong");
        answerWrong.style.display = "block";
        secondsLeft -= 10;
        question2();

    }

  };



// function endgame(){
   // score = secondsLeft


