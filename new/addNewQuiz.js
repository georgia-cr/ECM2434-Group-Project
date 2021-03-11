/*
authors: Georgia Crouch,
dates edited:
23/02/2021
*/

const apiUrl = 'https://7f38cec5.eu-gb.apigw.appdomain.cloud/teamlappproject';
const fillInWord = {
  
  // add a quiz entry
  add(ID, q1, a1, q2, a2, q3, a3, q4, a4, q5, a5, q6, a6, q7, a7, q8, a8, q9, a9, q10, a10) {
    console.log('Sending', ID, q1, a1, q2, a2, q3, a3, q4, a4, q5, a5, q6, a6, q7, a7, q8, a8, q9, a9, q10, a10)
    return $.ajax({
      type: 'PUT',
      url: `${apiUrl}/quizEntry`,
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify({
        ID, q1, a1, q2, a2, q3, a3, q4, a4, q5, a5, q6, a6, q7, a7, q8, a8, q9, a9, q10, a10,
      }),
      dataType: 'json',
    });
  }
};


(function() {
// adds to database on submit of the quiz html form
$(document).on('submit', '#addQuiz', function(e) {
    e.preventDefault();

    fillInWord.add(
      $('#ID').val().trim(),
      $('#q1').val().trim(),
      $('#a1').val().trim(),
	  $('#q2').val().trim(),
      $('#a2').val().trim(),
	  $('#q3').val().trim(),
      $('#a3').val().trim(),
	  $('#q4').val().trim(),
      $('#a4').val().trim(),
	  $('#q5').val().trim(),
      $('#a5').val().trim(),
	  $('#q6').val().trim(),
      $('#a6').val().trim(),
	  $('#q7').val().trim(),
      $('#a7').val().trim(),
	  $('#q8').val().trim(),
      $('#a8').val().trim(),
	  $('#q9').val().trim(),
      $('#a9').val().trim(),
	  $('#q10').val().trim(),
      $('#a10').val().trim()	  
    ).done(function(result) {
      // reload entries
      console.log('added to db');
    }).error(function(error) {
      console.log(error);
    });
  });
})();