
var timeEl = document.getElementById("time");
var count = 0;
var secondsLeft = 60;
var startQuiz = document.querySelector("#start-quiz-btn"); 

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
            sendMessage();
        }*/
}, 1000);
}
setTime();
});


