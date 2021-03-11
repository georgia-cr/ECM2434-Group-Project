/*
authors: George Daish, Georgia Crouch,
dates edited:
23/02/2021
*/

const apiUrl = 'https://7f38cec5.eu-gb.apigw.appdomain.cloud/teamlappproject';
const quizEntry = {
  get() {
    return $.ajax({
      type: 'GET',
      url: `${apiUrl}/quizEntry`,
      dataType: 'json'
    });
  },
  getStudentData(){
	  console.log('get student');
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
  },
  putNewQuizData(id, rev, title, q1, a1, q2, a2, q3, a3, q4, a4, q5, a5, q6, a6, q7, a7, q8, a8, q9, a9, q10, a10, votes){
	  console.log('Sending', id, rev, title, q1, a1, q2, a2, q3, a3, q4, a4, q5, a5, q6, a6, q7, a7, q8, a8, q9, a9, q10, a10, votes)
    return $.ajax({
      type: 'PUT',
      url: `${apiUrl}/updateQuiz`,
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify({
        id, rev, title, q1, a1, q2, a2, q3, a3, q4, a4, q5, a5, q6, a6, q7, a7, q8, a8, q9, a9, q10, a10, votes
      }),
      dataType: 'json',
    });
  },
};

(function() {
	
	var title;
	var votes;
	var quizID;
	var quizREV;
	
	var q1;
	var q2;
	var q3;
	var q4;
	var q5;
	var q6;
	var q7;
	var q8;
	var q9;
	var q10;
	
	var a1;
	var a2;
	var a3;
	var a4;
	var a5;
	var a6;
	var a7;
	var a8;
	var a9;
	var a10;
	
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
	var userType;

  // retrieve entries and update the UI
  function loadEntry() {
	  var j;
    console.log('Loading entries...');
    quizEntry.get().done(function(result) {
     console.log(result);
	  
	  for (var i=0; i<result.entries.length; i++){
		console.log(result.entries[i].type);
		if (result.entries[i].type == "quiz"){
			j = i;
			break;
		}
	}
	  console.log('j ', j);
	  var temp = result.entries[j];
	  console.log('temp ', temp);
	  document.getElementById("ID").innerHTML = "Title: ".concat(temp.title);
	  
	  document.getElementById("q1").innerHTML = "Question 1: ".concat(temp.q1);
	  document.getElementById("q2").innerHTML = "Question 2: ".concat(temp.q2);
	  document.getElementById("q3").innerHTML = "Question 3: ".concat(temp.q3);
	  document.getElementById("q4").innerHTML = "Question 4: ".concat(temp.q4);
	  document.getElementById("q5").innerHTML = "Question 5: ".concat(temp.q5);
	  document.getElementById("q6").innerHTML = "Question 6: ".concat(temp.q6);
	  document.getElementById("q7").innerHTML = "Question 7: ".concat(temp.q7);
	  document.getElementById("q8").innerHTML = "Question 8: ".concat(temp.q8);
	  document.getElementById("q9").innerHTML = "Question 9: ".concat(temp.q9);
	  document.getElementById("q10").innerHTML = "Question 10: ".concat(temp.q10);
	  
	  a1 = temp.a1;
	  a2 = temp.a2;
	  a3 = temp.a3;
	  a4 = temp.a4;
	  a5 = temp.a5;
	  a6 = temp.a6;
	  a7 = temp.a7;
	  a8 = temp.a8;
	  a9 = temp.a9;
	  a10 = temp.a10;
	  
	  q1 = temp.q1;
	  q2 = temp.q2;
	  q3 = temp.q3;
	  q4 = temp.q4;
	  q5 = temp.q5;
	  q6 = temp.q6;
	  q7 = temp.q7;
	  q8 = temp.q8;
	  q9 = temp.q9;
	  q10 = temp.q10;
	  
	  quizID = temp.id;
	  quizREV = temp.rev;
	  
	  title = temp.title;
	  votes = temp.votes;
	  
    }).error(function(error) {
      $('#entries').html('No entries');
      console.log(error);
    });
  }

  // intercept the click on the submit button
  $(document).on('submit', '#playQuiz', function(e) {
    e.preventDefault();
	
	var points = 0;
	
	if ($('#a1').val() == a1){
		points += 1;
	} 
	if ($('#a2').val() == a2){
		points += 1;
	} if( $('#a3').val() == a3 ){
		points += 1;
	} if ( $('#a4').val() == a4 ){
		points += 1;
	} if ( $('#a5').val() == a5 ){
		points += 1;
	} if( $('#a6').val() == a6){
		points += 1;
	} if( $('#a7').val() == a7){
		points += 1;
	} if ($('#a8').val() == a8 ){
		points += 1;
	} if ($('#a9').val() == a9 ){
		points += 1;
	} if ( $('#a10').val() == a10){
		points += 1;
	} 
		
	document.getElementById("answerResult").innerHTML = "Your score out of 10 : ".concat(points);
	
	console.log(sessionStorage.getItem("username"));
	
	quizEntry.getStudentData().done(function(result){
		console.log('here');
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
		
		quizAverage = (noQuizzesTaken*quizAverage+points)/(noQuizzesTaken+1);
		noQuizzesTaken += 1;
		
		quizEntry.putStudentData(
			id, rev, dob, bio, courseCode, dateWellbeing, email, fName, lName, pass, quizAverage, noQuizzesTaken, studentNo, supportCode, username, wellbeingScore
			
		).done(function(result){
			console.log('updated');
		});
	});
	console.log('skipped');
	
	// then update the user's no quizzes + average quiz score
	
	
	document.getElementById("questionVote").innerHTML = "Did you like this quiz? Up or down vote it below!";

	
  });

  $(document).ready(function() {
	  loadEntry();
  });
  
  
  
})();

function upvoteQuiz(){
	  updateQuiz('yes');
  }
  
  
function updateQuiz(decision){
	quizEntry.get().done(function(result) {
     console.log(result);
	  
	  for (var i=0; i<result.entries.length; i++){
		console.log(result.entries[i].type);
		if (result.entries[i].type == "quiz"){
			j = i;
			break;
		}
	}
	  console.log('j ', j);
	  var temp = result.entries[j];
	  console.log('temp ', temp);
	  
	  
	  a1 = temp.a1;
	  a2 = temp.a2;
	  a3 = temp.a3;
	  a4 = temp.a4;
	  a5 = temp.a5;
	  a6 = temp.a6;
	  a7 = temp.a7;
	  a8 = temp.a8;
	  a9 = temp.a9;
	  a10 = temp.a10;
	  
	  q1 = temp.q1;
	  q2 = temp.q2;
	  q3 = temp.q3;
	  q4 = temp.q4;
	  q5 = temp.q5;
	  q6 = temp.q6;
	  q7 = temp.q7;
	  q8 = temp.q8;
	  q9 = temp.q9;
	  q10 = temp.q10;
	  
	  quizID = temp.id;
	  quizREV = temp.rev;
	  
	  title = temp.title;
	  votes = temp.votes;
	  
	  if (decision == 'yes'){
		  votes += 1;
	  } else {
		  votes -= 1;
	  }
	  
	  quizEntry.putNewQuizData(
			quizID, quizREV, title, q1, a1, q2, a2, q3, a3, q4, a4, q5, a5, q6, a6, q7, a7, q8, a8, q9, a9, q10, a10, votes
		).done(function(result){
			console.log('updated');
		});
	});
}
  
  function downvoteQuiz(){
	  updateQuiz('no');
  }