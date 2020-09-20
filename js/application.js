$(document).ready(function(){

// global variables
var userAnswer;
var mathsAnswer;
var timeLeft = 10;
var gameHasBegun = false;
var currentScore = 0;
var highScore = 0;
var userLimit = 10;
var operators = [];

// generate random number
  var randomNumberGenerator = function (num) {
    return Math.floor((Math.random() * num) + 1);
  }

  // create maths equation
  var createMathsQuestion = function () {
    var num1 = randomNumberGenerator(userLimit);
    var num2 = randomNumberGenerator(userLimit);
    mathsAnswer = num1 + num2;
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
  var playAnotherRound = function () {
    displayHighScore();
    displayCurrentScore();
    timeLeft = 10;
    gameHasBegun = false;
    currentScore = 0;
  }

  // get high score
  var determineHighScore = function () {
    if (currentScore > highScore) {
      highScore = currentScore;
    }
    return highScore;
  }

  // display high score
  var displayHighScore = function () {
    determineHighScore();
    $('#high-score').text('High Score: ' + highScore);
  }

  // display current score
  var displayCurrentScore = function () {
    $('#current-score').text('Current Score: ' + currentScore);
  }

  //  timer/countdown
  function countdownTimer () {
    var countdownTimer = setInterval(function(){
      if (timeLeft <= 0){
        clearInterval(countdownTimer);
        document.getElementById("countdown").innerHTML = "Game Over!";
        playAnotherRound();
      } else {
        document.getElementById("countdown").innerHTML = timeLeft;
      }
      timeLeft -= 1;
    }, 1000);
  }

 // start with math equation, and event listener for user input
  var playGame = function () {
    console.log(operators);
    createMathsQuestion();
    // get user input
    $(document).on('keyup', '#user-input', function () {
      if (gameHasBegun === false) {
        gameHasBegun = true;
        countdownTimer();
      }
      // assign value to glabal variable and check if user input is correct
      userAnswer = Number($(this).val());
      if (checkUserInput(userAnswer)) {
        currentScore++;
        displayCurrentScore();
        $('#user-input').val('');
        updateTimer(+1);
        createMathsQuestion();
      }
    });

    // bootstrap range bar event listeners
    var limiter = document.getElementById("limiter");
    var result = document.getElementById("result");

    limiter.addEventListener("input", function() {
       result.innerHTML = limiter.value;
       userLimit = Number(limiter.value);
    }, false);
  }

  // check user operation input
  $(document).on('click', '.operation-type', function () {
    // var operators = [];
      $.each($("input[name='maths']:checked"), function() {
       operators.push($(this).val());
       console.log(operators);
      });
    });



  playGame();
});
