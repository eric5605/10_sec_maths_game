$(document).ready(function(){

var userAnswer;
var mathsAnswer;
var timeLeft = 10;

  var randomNumberGenerator = function (num) {
    return Math.floor((Math.random() * num) + 1);
  }

  var createMathsQuestion = function () {
    var num1 = randomNumberGenerator(10);
    var num2 = randomNumberGenerator(10);
    mathsAnswer = num1 + num2;
     console.log(String(num1), ' + ', String(num2), ' = ');
     $('#equation').text(String(num1) + " + " + String(num2) + " = ");
  }

  var checkUserInput = function (userInput) {
    return (userInput === mathsAnswer);
  }

  var updateTimer = function (amount) {
    timeLeft += amount;
    $('#countdown').text(timeLeft);
  }

  //  timer/countdown
  var interval = setInterval(function () {
    updateTimer(-1);
    if (timeLeft === 0) {
      clearInterval(interval);
    }
  }, 1000);

  var gamePlay = function () {
    createMathsQuestion();

    $('#user-input').on('keyup', function () {
      userAnswer = Number($(this).val());
      console.log('userAnswer: ', userAnswer);
      console.log('mathsAnswer: ', mathsAnswer);
      if (checkUserInput(userAnswer)) {
        updateTimer(1);
        createMathsQuestion();
      }


    });

  }

   gamePlay();
});
