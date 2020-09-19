$(document).ready(function(){

var userAnswer;
var mathsAnswer;
var timeLeft = 10;
var gameHasBegun = false;
var currentScore = 0;

  var randomNumberGenerator = function (num) {
    return Math.floor((Math.random() * num) + 1);
  }

  var createMathsQuestion = function () {
    var num1 = randomNumberGenerator(10);
    var num2 = randomNumberGenerator(10);
    mathsAnswer = num1 + num2;
     console.log(String(num1), ' + ', String(num2), ' = ');
      $('#equation').text(String(num1) + " + " + String(num2));
  }

  // check if user has correct answer
  var checkUserInput = function (userInput) {
    return (userInput === mathsAnswer);
  }

  // update timer
  var updateTimer = function (addTime) {
    timeLeft += addTime;
    $('#countdown').text(timeLeft);
  }
  // reset game
  var resetGame = function () {
    timeLeft = 10;
    gameHasBegun = false;
  }

  //  timer/countdown
  function countdownTimer () {
    var countdownTimer = setInterval(function(){
      if(timeLeft <= 0){
        clearInterval(countdownTimer);
        document.getElementById("countdown").innerHTML = "Game Over!";
        resetGame();
      } else {
        document.getElementById("countdown").innerHTML = timeLeft;
      }
      timeLeft -= 1;
    }, 1000);
  }

  //current score
  var displayCurrentScore = function () {
      $('#current-score').text('Current Score: ' + currentScore);
  }

  var playGame = function () {
    createMathsQuestion();
    // get user input
    // $('#user-input').on('keyup', function () {
    $(document).on('keyup', '#user-input', function () {
      if (gameHasBegun === false) {
        gameHasBegun = true;
        countdownTimer();
      }
      userAnswer = Number($(this).val());
      // console.log('userAnswer: ', userAnswer);
      // console.log('mathsAnswer: ', mathsAnswer);
      if (checkUserInput(userAnswer)) {
        currentScore++;
        displayCurrentScore();
        $('#user-input').val('');
        updateTimer(1);
        createMathsQuestion();
      }
    });
  }


  playGame();
});
