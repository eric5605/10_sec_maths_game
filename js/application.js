$(document).ready(function(){

  $('#user-input').on('keyup', function () {
    console.log($(this).val());
  });

  var randonNumberGenerator = function (num) {
    console.log(Math.floor((Math.random() * num) + 1));
  }


  randonNumberGenerator(10);

});
