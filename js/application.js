$(document).ready(function(){

var userAnswer;
var mathsAnswer;
var timeLeft = 10;
var numberOfTurns = 0;

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

  var checkUserInput = function (userInput) {
    return (userInput === mathsAnswer);
  }

  var updateTimer = function (amount) {
    timeLeft += amount;
    $('#countdown').text(timeLeft);
  }
  var resetGame = function () {
    timeLeft = 10;
    numberOfTurns = 0;
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

  var playGame = function () {
    createMathsQuestion();
    // get user input
    $('#user-input').on('keyup', function () {
      if (numberOfTurns === 0) {
        numberOfTurns++;
        countdownTimer();
      }
      userAnswer = Number($(this).val());
      // console.log('userAnswer: ', userAnswer);
      // console.log('mathsAnswer: ', mathsAnswer);
      if (checkUserInput(userAnswer)) {
        $('#user-input').val('');
        updateTimer(1);
        createMathsQuestion();
      }
    });
  }

  // $('#user-input').on('keyup', function () {
  //
  //   userAnswer = Number($(this).val());
  //   console.log('userAnswer: ', userAnswer);
  //   console.log('mathsAnswer: ', mathsAnswer);
  // });

  playGame();
});
