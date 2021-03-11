/*
authors: Georgia Crouch,
dates edited:
23/02/2021
*/

// sets url
const apiUrl = 'https://7f38cec5.eu-gb.apigw.appdomain.cloud/teamlappproject';
const fillInWord = {
  	
  // add a single quiz question entry
  add(ID, missingWord, sentencePart1, sentencePart2) {
    console.log('Sending', ID, missingWord, sentencePart1, sentencePart2)
    return $.ajax({
      type: 'PUT',
      url: `${apiUrl}/fillWordsEntry`,
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify({
        ID,
		missingWord, 
		sentencePart1, 
		sentencePart2,
      }),
      dataType: 'json',
    });
  }
};

(function() {

  // intercept the click on the submit button, add the fillInWord entry
  $(document).on('submit', '#addFillInWord', function(e) {
    e.preventDefault();

    fillInWord.add(
      $('#ID').val().trim(),
	  $('#missingWord').val().trim(),
	  $('#sentencePart1').val().trim(),
	  $('#sentencePart2').val().trim()
    ).done(function(result) {
      // reload entries
      console.log('added to db');
    }).error(function(error) {
      console.log(error);
    });
  });
 
})();