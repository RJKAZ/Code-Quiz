var timeLeft = document.querySelector("#time-left");
var startGameButton = document.querySelector("#start-game-btn");
var startScreenElement = document.querySelector("#start-screen");
var quizContent = document.querySelector("#quiz-content");
var postGameScreen = document.querySelector("#post-game-screen");
var userScore = document.querySelector("#user-score");
var playAgainBtn = document.querySelector("#play-again-btn");

var timerIntervalId = document.querySelector("#timer-interval-id");
var score = document.querySelector("#score");
var secondsLeft = document.querySelector("#seconds-left");

function startGame() {
  var secondsLeft = 300;
  timeLeftEL.textContent = secondsLeft;
  score =0;
  startScreenElement.classList.add("hide");
  postGameScreen.classList.add("hide");
  displayQuestion(0);
  timerIntervalId = setInterval(function() {
    secondsLeft--;
    if (secondsLeft <= 0) {
      stopGame();
    }
  }, 1000);
}

function displayQuestions(questionIndex) {
  if (!questions[questionsIndex]) {
    return stopGame();
  }
  var currentQuestion = questions[questionIndex];
}


function stopGame() {
  clearInterval(timerIntervalId);
  quizContent.classList.add("hide");
}

startGameButton.addEventListener("click", startGameHandler);
quizContent.addEventListener("click", quizContentHandler);
playAgainBtn.addEventListener("click",startGameHandler); 