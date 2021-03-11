/*
authors: Georgia Crouch,
dates edited:
08/03/2021
*/

const apiUrl = 'https://7f38cec5.eu-gb.apigw.appdomain.cloud/teamlappproject';
const bulletinEntry = {
  
  // add a quiz entry
  add(title, content) {
    console.log('Sending', title, content)
    return $.ajax({
      type: 'PUT',
      url: `${apiUrl}/bulletinEntry`,
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify({
        title, content,
      }),
      dataType: 'json',
    });
  }, 
  
  get() {
    return $.ajax({
      type: 'GET',
      url: `${apiUrl}/bulletinEntry`,
      dataType: 'json'
    });
  }  
  
};


(function() {
	
	function loadEntries(){
		document.getElementById( "progressID" ).innerHTML = '';
	}
		
	$(document).on('submit', '#addBulletin', function(e) {
		e.preventDefault();

		bulletinEntry.add(
		  $('#title').val().trim(),
		  $('#content').val().trim()	  
		).done(function(result) {
		  console.log('added to db');
		  document.getElementById( "progressID" ).innerHTML = 'Bulletin entry added!';
		}).error(function(error) {
		  console.log(error);
		});
	  });
	  
	$(document).ready(function() {
		loadEntries();
	});
  
})();