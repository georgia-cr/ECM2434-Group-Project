/*
authors: Georgia Crouch, Henry Cook
dates edited:
23/02/2021
*/

const apiUrl = 'https://7f38cec5.eu-gb.apigw.appdomain.cloud/teamlappproject';
const existingLogin = {
  get() {
    return $.ajax({
      type: 'GET',
      url: `${apiUrl}/loginEntry`,
      dataType: 'json'
    });
  } 
};

(function() {	
	
	function checkUsername(){
		console.log('thig');
		existingLogin.get().done(function(result){
			
			const fldUser = $('#username').val().trim();
			const fldPass = $('#password').val().trim();
			
			
			console.log('yeet');
			console.log(result);
			
			console.log(result.entries);
			
			const arr = result.entries;
			var dbUser = "";
			var dbPass = "";
			var userAuthenticated = false;
			
			for (var i = 0; i < arr.length; i++){
			  console.log(" index: " + i);
			  var obj = arr[i];
			  for (var key in obj){
				var value = obj[key];
				console.log(" " + key + ": " + value);
				if (key == "user"){
					dbUser = value;
				}
				if (key == "pass"){
					dbPass = value;
				}
			  }
			  userAuthenticated = checkIfCorrect(dbUser, dbPass, fldUser, fldPass);
			  if (userAuthenticated){
				  break;
			  }
			}
			console.log('u a ', userAuthenticated);
			
			
			
			
			if (userAuthenticated){
				sessionStorage.setItem("username", dbUser);
				console.log('session username ', sessionStorage.getItem("username"));
				
				window.location.assign('http://team-l-project-bucket.s3-web.eu-gb.cloud-object-storage.appdomain.cloud/homePage.html');
			} else {
				window.location.assign('http://team-l-project-bucket.s3-web.eu-gb.cloud-object-storage.appdomain.cloud/loginOptions.html');
			}
			
		});
		
	}
	
	function checkIfCorrect(dbUser, dbPass, fldUser, fldPass){
		console.log(dbUser, dbPass, fldUser, fldPass);
		if (dbUser === fldUser && dbPass === fldPass){
			console.log('returns true');
			return true;
		} else {
			return false;
		}
	}
	
	
	$(document).on('submit', '#existingLogin', function(e) {
    e.preventDefault();
	checkUsername();
/*
    existingLogin.get(
      $('#username').val().trim()
    ).done(function(result) {
      // reload entries
      console.log('added to db');
    }).error(function(error) {
      console.log(error);
    });
	*/
  });
  
  
})();



/*
(function() {
// on the submit of the html form checks the login details
$(document).on('submit', '#addQuiz', function(e) {
    e.preventDefault();
	
	function loadEntry() {
    console.log('Loading entries...');
    existingLogin.get().done(function(result) {
      if (!result.user || !result.pass) {
		console.log('no entries...');
        return;
      }
    }).error(function(error) {
      $('#entries').html('No entries');
      console.log(error);
    });
  }
  
  $(document).on('submit', '#existingLogin', function(e) {
    e.preventDefault();
	
	if (result.user == ($('username').val()) && result.pass == ($('password').val())){
		window.location.assign('https://7f38cec5.eu-gb.apigw.appdomain.cloud/teamlproject/homePage.html');
	} else {
		window.location.assign('https://7f38cec5.eu-gb.apigw.appdomain.cloud/teamlproject/loginOptions.html');
	}

  $(document).ready(function() {
	  loadEntry();
  });
  });
  });
  
})();

*/