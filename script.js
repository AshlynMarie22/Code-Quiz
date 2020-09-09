
var timeEl = document.getElementById("time");
var count = 0;
var secondsLeft = 75;
var startQuiz = document.querySelector("#start-quiz-btn"); 
var start = document.getElementById("start-quiz");
var button1 = document.getElementById("btn1");
var button2 = document.getElementById("btn2");
var button3 = document.getElementById("btn3");
var button4 = document.getElementById("btn4");
var questionHeader = document.getElementById("question-header");



function setCounterText(){
    timeEl.textContent = "Time: " + count;
}
setCounterText();

startQuiz.addEventListener("click", function() {
    function setTime(){
    var timerInterval = setInterval(function(){
        secondsLeft--;
        timeEl.textContent = "Time: " + secondsLeft;

/*        if (secondsLeft === 0){
            clearInterval(timerInterval);
            endGame();
        }*/
}, 1000);
}
setTime();
startQuiz.classList.add('hide')
// start question portion 
}
  
);

//Questions

var allQuestions = [
    {
        question: "Commonly used data types DO NOT include:",
        choices: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
        answer: "3. alerts"
    },
    {
        question: "The condition in an if/else statement is enclosed within:",
        choices: ["1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"],
        answer: "3. parentheses"
    },
    {
        question: "Arrays in JavaScript can be used to store:",
        choices: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
        answer: "4. all of the above"
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables:",
        choices: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
        answer: "3. quotes"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["1. JaveScript", "2. terminal/bash", "3. for loops", "4. console.log"],
        answer: "4. console.log"
    }
];
var startingQuestionIndex = 0;

var questionTitle= allQuestions[startingQuestionIndex].question;

var allChoices = allQuestions[startingQuestionIndex].choices;


        
function quizBody (){

    var questionEl = document.getElementById("question-header");
        questionEl.innerHTML = questionTitle;
       // document.getElementById("question-header").appendChild(questionEl);

       // empty before going to the next
       
     for (var i =0; i < allChoices.length; i++){
        //create the button
        //var ul= document.getElementById("list-button");
        const buttonEL = document.querySelector("#btn1");
        var listButton = document.querySelector("#list-button");
        var li = document.createElement("li");
        li.textContent = listButton
        
        //style the button
      
        //grab choices and append to button
        buttonEL.innerText = allChoices[i];
        listButton.appendChild(buttonEL);

    
    buttonEL.onclick=(function(){ 
        console.log("click");
        console.log(buttonEL.textContent);
        if (buttonEL.textContent == allQuestions[0].answer){
            console.log("correct")
        }
        else console.log("wrong");

        


    })
    startingQuestionIndex++;
    }
}

quizBody();

