/*
authors: Georgia Crouch,
dates edited:
23/02/2021
*/

const apiUrl = 'https://7f38cec5.eu-gb.apigw.appdomain.cloud/teamlappproject';
const profilePage = {
  
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
  },
  getFriends(){
	  return $.ajax({
      type: 'GET',
      url: `${apiUrl}/studentFriends`,
      dataType: 'json'
    });
  }, 
  updateFriends(id, rev, friends, user){
	  console.log('Sending', id, rev, friends, user)
    return $.ajax({
      type: 'PUT',
      url: `${apiUrl}/studentFriends`,
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify({
        id, rev, friends, user
      }),
      dataType: 'json',
    });
  },
  
  
  
};


(function() {
	
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
	
	console.log('username ', sessionStorage.getItem("username"));
	var studentSupportCode = '';
	profilePage.getStudentData().done(function(result){
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
		
	});
	
	function updatePage(){
		profilePage.getStudentData().done(function(result){
		
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
				userType = result.entries[i].type;
				console.log(quizAverage, studentNo);
				break;
			}
		}
		
		console.log(fName, lName);
		
		document.getElementById( "bioID" ).innerHTML = bio;
		document.getElementById( "usernameID" ).innerHTML = username;
		document.getElementById( "fNameID" ).innerHTML = fName;
		document.getElementById( "lNameID" ).innerHTML = lName;
		document.getElementById( "DOBID" ).innerHTML = dob;
		document.getElementById( "emailID" ).innerHTML = email;
		document.getElementById( "studentNoID" ).innerHTML = studentNo;
		document.getElementById( "courseCodeID" ).innerHTML = courseCode;
		document.getElementById( "quizAverageID" ).innerHTML = quizAverage;
		if (userType == "login"){
			userType = 'student';
		} else {
			userType = 'admin';
		}
		document.getElementById( "typeID" ).innerHTML = userType;
		
		var friendString = '';
		
		profilePage.getFriends().done(function(result){
			user = sessionStorage.getItem("username");
			for (var i=0; i<result.entries.length; i++){
			if (result.entries[i].user == username){
				for (var j=0; j<result.entries[i].friends.length; j++){
					friendString += ((result.entries[i].friends[j]).concat(" "));
					
				}
				console.log('friends ', friendString);
				document.getElementById( "friendList" ).innerHTML = friendString;
				break;
			}
		}
		});		
		
		
	});
	
	}
	$(document).ready(function(){
		updatePage();		
	});
	

	
	
	
	
$(document).on('submit', '#addFriend', function(e) {
    e.preventDefault();
	
	const friendName = $('#friendUsername').val().trim();
	var friendFound = false;
	
	profilePage.getStudentData().done(function(result){
		
		for (var i=0; i<result.entries.length; i++){
			if (result.entries[i].user == friendName){
				console.log('username found');
				friendFound = true;
				console.log('friend found');
				break;
			} else {
				console.log('friend not found');
			}
		}
		
		var id;
		var rev;
		var friends;
		var user;
				
		profilePage.getFriends().done(function(result){
			user = sessionStorage.getItem("username");
			for (var i=0; i<result.entries.length; i++){
			if (result.entries[i].user == username){
				console.log(result.entries[i]);
				for (var j=0; j<result.entries[i].friends.length; j++){
					console.log(result.entries[i].friends[j]);
				}
				console.log('username found');
				id = result.entries[i].id;
				rev = result.entries[i].rev;
				friends = result.entries[i].friends;
				user = result.entries.user;
				
				if (friendFound){
					friends.push(friendName);
					console.log(friends);
				}	
				
				profilePage.updateFriends(id, rev, friends, username).done(function(result){
					console.log('updated');
					console.log('username ', user);
					updatePage();
				});
				
				
				break;
			}
		}
		});
		
		
		
		
		// get then
		// add friend
		
		
		updatePage();
		// make sure friend displays ^^
	});
	
	
  });


})();