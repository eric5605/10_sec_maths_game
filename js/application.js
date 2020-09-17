$(document).ready(function(){

var userAnswer;
var mathsAnswer;


  var randomNumberGenerator = function (num) {
    // console.log(Math.floor((Math.random() * num) + 1));
    return Math.floor((Math.random() * num) + 1);
  }

  var createMathsQuestion = function () {

    var num1 = randomNumberGenerator(10);
    var num2 = randomNumberGenerator(10);
    mathsAnswer = num1 + num2;
     console.log(String(num1), ' + ', String(num2), ' = ');
     $('#equation').text(String(num1) + " + " + String(num2) + " = ");

  }

  var checkUserInput = function () {
    return (userAnswer === mathsAnswer);
  }

  var gamePlay = function () {
    createMathsQuestion();

    $('#user-input').on('keyup', function () {
      // console.log($(this).val());
      userAnswer = Number($(this).val());
      console.log('userAnswer: ', userAnswer);
      console.log('mathsAnswer: ', mathsAnswer);

      if(checkUserInput()) {
        console.log('add one sec');
      }
    });

  }

   gamePlay();
});
