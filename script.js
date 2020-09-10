//Document Variables:
var startQuizBtn = document.querySelector("#start-quiz-btn");
var startQuiz = document.getElementById("start-quiz");
//var button1 = document.getElementById("btn1");
//var button2 = document.getElementById("btn2");
//var button3 = document.getElementById("btn3");
//var button4 = document.getElementById("btn4");
var questionsCont = document.getElementById("questions");
var questionHeader = document.getElementById("question-header");
var answerWrong = document.getElementById("answer-response-wrong");
var answerRight = document.getElementById("answer-response-correct");
var blankButton = document.getElementById("btn1");


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
var startingQuestionIndex = 0;
var questionTitle = allQuestions[startingQuestionIndex].question;
var allChoices = allQuestions[startingQuestionIndex].choices;
var allAnswers = allQuestions[startingQuestionIndex].answer;

function question1() {
    var startingQuestionIndex = 0;
    var questionTitle = allQuestions[startingQuestionIndex].question;
    var allChoices = allQuestions[startingQuestionIndex].choices;
    var allAnswers = allQuestions[startingQuestionIndex].answer;

    for (var i=0; i< questionTitle.length; i++){  
        var questionEl = document.getElementById("question-header");
        questionEl.innerHTML = questionTitle;}

  // document.getElementById("question-header").appendChild(questionEl);

  // empty before going to the next

  for (var i = 0; i < allChoices.length; i++) {
    //create the button
    //var ul= document.getElementById("list-button");
    const buttonEL = document.querySelector("#btn1");
    var listButton = document.querySelector("#list-button");

    buttonEL.innerText = allChoices[i];
    listButton.appendChild(buttonEL);

    buttonEL.addEventListener("click",()=> {
      console.log("click");
      console.log(buttonEL.textContent);
      if (buttonEL.textContent == allAnswers) {
        console.log("correct");
        answerRight.style.display = "block";
        
        
        
      } else {
        console.log("wrong");
        answerWrong.style.display = "block";
 
        secondsLeft -= 10;

      }

  });

}}
function question2() {
    var startingQuestionIndex = 1;
    var questionTitle = allQuestions[startingQuestionIndex].question;
    var allChoices = allQuestions[startingQuestionIndex].choices;
    var allAnswers = allQuestions[startingQuestionIndex].answer;

    for (var i=0; i< questionTitle.length; i++){  
        var questionEl = document.getElementById("question-header");
        questionEl.innerHTML = questionTitle;}

  // document.getElementById("question-header").appendChild(questionEl);

  // empty before going to the next

  for (var i = 0; i < allChoices.length; i++) {
    //create the button
    //var ul= document.getElementById("list-button");
    const buttonEL = document.querySelector("#btn1");
    var listButton = document.querySelector("#list-button");

    buttonEL.innerText = allChoices[i];
    listButton.appendChild(buttonEL);

    buttonEL.addEventListener("click",()=> {
      console.log("click");
      console.log(buttonEL.textContent);
      if (buttonEL.textContent == allAnswers) {
        console.log("correct");
        answerRight.style.display = "block";
        
        
        
      } else {
        console.log("wrong");
        answerWrong.style.display = "block";
 
        secondsLeft -= 10;

      }

  });
}}



// function endgame(){
   // score = secondsLeft
