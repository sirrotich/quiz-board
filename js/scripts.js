var answers = ["navigator","the(</scripts>)","2name","object","if"];
var pointPerCorrect = 10;


function percentage(score) {
return "Your score is " + parseInt((score / 50) * 100) + "%";
}

$(document).ready(function(){
   $("#questions").submit(function (event) {


      $('#result').text('');
      var score = 0;
      var answerOne = ($("input[type=radio][name=quiz1]:checked").val());
      var answerTwo = ($("input[type=radio][name=quiz2]:checked").val());
      var answerThree = ($("input[type=radio][name=quiz3]:checked").val());
      var answerFour = ($("input[type=radio][name=quiz4]:checked").val());
      var answerFive = ($("input[type=radio][name=quiz5]:checked").val());

      if (answerOne === undefined || answerTwo === undefined || answerThree === undefined || answerFour === undefined || answerFive === undefined) {
  $('#questionsIncomplete').text('Please Complete questions Before Submitting');
  $('#questionsIncomplete').fadeOut(10000);
} else {
         if (answerOne === answers[0]) {
    score += pointPerCorrect;
  }
         if (answerTwo === answers[1]) {
    score += pointPerCorrect;
  }
         if (answerThree === answers[3]) {
    score += pointPerCorrect;
  }
         if (answerFour === answers[4]) {
    score += pointPerCorrect;
  }
         if (answerFive === answers[5]) {
    score += pointPerCorrect;
  }

        $("input[type=radio][name=quiz1]:checked").prop('checked', false);
        $("input[type=radio][name=quiz2]:checked").prop('checked', false);
        $("input[type=radio][name=quiz3]:checked").prop('checked', false);
        $("input[type=radio][name=quiz4]:checked").prop('checked', false);
        $("input[type=radio][name=quiz5]:checked").prop('checked', false);



        $('#questionsIncomplete').text('');
        $('#result').text(percentage(score));
}
          event.preventDefault();
 });
});
