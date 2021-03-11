/*
authors: Georgia Crouch,
dates edited:
23/02/2021
*/

const apiUrl = 'https://7f38cec5.eu-gb.apigw.appdomain.cloud/teamlappproject';
const newRegistration = {
  
  // add a login entry
  add(user, pass, fName, lName, DOB, email, bio, studentNo, courseCode, wellBeingScore, dateOfLastWellbeing, quizAverage, studentSupportCode) {
    console.log('Sending', user, pass, fName, lName, DOB, email, bio, studentNo, courseCode, wellBeingScore, dateOfLastWellbeing, quizAverage, studentSupportCode)
    return $.ajax({
      type: 'PUT',
      url: `${apiUrl}/loginEntry`,
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify({
        user, pass, fName, lName, DOB, email, bio, studentNo, courseCode, wellBeingScore, dateOfLastWellbeing, quizAverage, studentSupportCode
      }),
      dataType: 'json',
    });
  },
  get(){
	  return $.ajax({
      type: 'GET',
      url: `${apiUrl}/studentSupportCode`,
      dataType: 'json'
    });
  }, 
  updateSupportCode(rev, newCode){
	  console.log('Sending', rev, newCode)
    return $.ajax({
      type: 'PUT',
      url: `${apiUrl}/studentSupportCode`,
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify({
        rev, newCode
      }),
      dataType: 'json',
    });
  },
  addFriend(user) {
    console.log('Sending', user)
    return $.ajax({
      type: 'PUT',
      url: `${apiUrl}/friendEntry`,
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify({
        user
      }),
      dataType: 'json',
    });
  },
  
};


(function() {
$(document).on('submit', '#addRegistration', function(e) {
    e.preventDefault();
	
	var rev = -1;
	var studentSupportCode = -1;
	
	function getStudentSupport(){
		newRegistration.get().done(function(result){
		for ( var i=0; i<result.entries.length; i++){
			if (result.entries[i].supportCode != -1){
				rev = result.entries[i].rev;
				studentSupportCode = result.entries[i].supportCode;
				console.log('changed the tings');
				console.log(studentSupportCode, rev);
			}
		}
		studentSupportCode++;
		updateStudentSupport();
		});
		
	}
	
	function updateStudentSupport(){
		newRegistration.updateSupportCode(
			rev, studentSupportCode
		).done(function(result){
			console.log('updated ss');
			addNewRegistration();
		});
		
	}
	
	function addNewRegistration(){
		
		var user = $('#username').val().trim();
		
		newRegistration.add(
		  user,
		  $('#password').val().trim(),
		  $('#firstName').val().trim(),
		  $('#lastName').val().trim(),
		  $('#DOB').val().trim(),
		  $('#email').val().trim(),
		  $('#bio').val().trim(),
		  $('#studentNo').val().trim(),
		  $('#courseCode').val().trim(), 50, 0, 0, studentSupportCode
		).done(function(result) {
		  // reload entries
		  sessionStorage.setItem("username", ($('#username').val().trim()));
		  console.log('added to db');
		  window.location.assign('http://team-l-project-bucket.s3-web.eu-gb.cloud-object-storage.appdomain.cloud/homePage.html');
		}).error(function(error) {
		  console.log(error);
		});
		
		
		newRegistration.addFriend(
			user
		).done(function(result){
			console.log('added friend list');
		});
		
	}
	
	getStudentSupport();
  });

})();