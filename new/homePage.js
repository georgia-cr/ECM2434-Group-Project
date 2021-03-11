/*
authors: Georgia Crouch,
dates edited:
23/02/2021
*/

const apiUrl = 'https://7f38cec5.eu-gb.apigw.appdomain.cloud/teamlappproject';
const homePage = {
  
  getStudentData(){
	  return $.ajax({
      type: 'GET',
      url: `${apiUrl}/studentAccountDetails`,
      dataType: 'json'
    });
  }, 
  putStudentData(id, rev, dob, bio, courseCode, dateWellbeing, email, fName, lName, pass, quizAverage, noQuizzesTaken, studentNo, supportCode, username, wellbeingScore){
	  console.log('Sending', id, rev, dob, bio, courseCode, dateWellbeing, email, fName, lName, pass, quizAverage, noQuizzesTaken, studentNo, supportCode, username, wellbeingScore)
    return $.ajax({
      type: 'PUT',
      url: `${apiUrl}/studentAccountDetails`,
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify({
        id, rev, dob, bio, courseCode, dateWellbeing, email, fName, lName, noQuizzesTaken, pass, quizAverage, studentNo, supportCode, username, wellbeingScore
      }),
      dataType: 'json',
    });
  }
  
  
};


(function() {
	console.log('username ', sessionStorage.getItem("username"));
	var studentSupportCode = '';
	homePage.getStudentData().done(function(result){
		console.log(result);
		for (var i=0; i<result.entries.length; i++){
			console.log(result.entries[i].studentCode, ' ', sessionStorage.getItem("username"));
			if (result.entries[i].user == sessionStorage.getItem("username")){
				console.log('username found');
				studentSupportCode = result.entries[i].studentCode;
				console.log(studentSupportCode);
				break;
			}
		}
		console.log('hopeufl', studentSupportCode);
		document.getElementById( "changeThis" ).innerHTML = "Welcome : ".concat(sessionStorage.getItem("username")).concat(" Your student support code : ").concat(studentSupportCode);
		
	});
	
$(document).on('submit', '#addRegistration', function(e) {
    e.preventDefault();
	
  });

})();


function smileClick(){
	
	updateWellbeingScore('add');
	
}

function updateWellbeingScore(addToWellbeing){
	var id;
	var rev;
	var dob;
	var bio;
	var courseCode;
	var dateWellbeing;
	var email;
	var fName;
	var lName;
	var pass;
	var quizAverage;
	var noQuizzesTaken;
	var studentNo;
	var supportCode;
	var username;
	var wellbeingScore;
	
	homePage.getStudentData().done(function(result){
		
		for (var i=0; i<result.entries.length; i++){
			if (result.entries[i].user == sessionStorage.getItem("username")){
				console.log('username found');
				username = result.entries[i].user;
				id = result.entries[i].id;
				rev = result.entries[i].rev;
				dob = result.entries[i].dob; 
				pass = result.entries[i].pass;
				fName = result.entries[i].fName;
				lName = result.entries[i].lName; 
				email = result.entries[i].email;
				bio = result.entries[i].bio;
				studentNo = result.entries[i].studentNo;
				courseCode = result.entries[i].courseCode; 
				wellbeingScore = result.entries[i].wellBeingScore;
				dateWellbeing = result.entries[i].dateWellbeing;
				quizAverage = result.entries[i].quizAverage;
				noQuizzesTaken = result.entries[i].noQuizzesTaken;
				supportCode = result.entries[i].studentCode;
				console.log(quizAverage, studentNo);
				break;
			}
		}
		console.log('before ', wellbeingScore);		
		if (addToWellbeing == 'add'){
			wellbeingScore += 5;
			if (wellbeingScore > 100){
				wellbeingScore = 100;
			}
		} else if (addToWellbeing == 'middle'){
			if (wellbeingScore > 50){
				wellbeingScore -= 5;
			} else {
				wellbeingScore += 5;
			}
		} else {
			wellbeingScore -= 5;
			if (wellbeingScore < 0){
				wellbeingScore = 0;
			}
		}
		console.log('after ', wellbeingScore);
		homePage.putStudentData(
			id, rev, dob, bio, courseCode, dateWellbeing, email, fName, lName, pass, quizAverage, noQuizzesTaken, studentNo, supportCode, username, wellbeingScore
			
		).done(function(result){
			console.log('updated');
		});
	});
}

function sosoClick(){
	updateWellbeingScore('middle');
}

function frownClick(){
	updateWellbeingScore('minus');
}

function logOut(){
	sessionStorage.setItem("username", "");
}