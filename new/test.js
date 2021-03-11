/*
authors: Georgia Crouch,
dates edited:
23/02/2021
*/

const apiUrl = 'https://7f38cec5.eu-gb.apigw.appdomain.cloud/teamlappproject';
const newRegistration = {
  
  get(){
	  console.log('getting');
	  return $.ajax({
      type: 'GET',
      url: `${apiUrl}/studentData`,
      dataType: 'json'
    });
  }  
};


(function() {
	console.log('why does it');
	
$(document).on('submit', '#inputStudentSupportCode', function(e) {
	e.preventDefault();
	console.log('please');
	var inputCode = $('#studentSupportCode').val().trim();
	newRegistration.get().done(function(result){
		console.log(result);
		
		for ( var i=0; i<result.entries.length; i++){
			console.log(result.entries[i].supportCode, ' yeet ', inputCode);
			if (result.entries[i].supportCode == inputCode){
				
				document.getElementById( "studentWellbeingScore" ).innerHTML = 'Your Students Wellbeing Score: '.concat(result.entries[i].wellBeingScore);
				document.getElementById( "studentQuizScore" ).innerHTML = 'Your Students Quiz Average: '.concat(result.entries[i].quizAverage);
				
				console.log('changed the tings');
				break;
			}
		}
	});
  });
})();	
