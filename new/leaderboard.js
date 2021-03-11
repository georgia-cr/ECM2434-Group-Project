/*
authors: Georgia Crouch,
dates edited:
23/02/2021
*/

const apiUrl = 'https://7f38cec5.eu-gb.apigw.appdomain.cloud/teamlappproject';
const profilePage = {
  
  getFriends(){
	  return $.ajax({
      type: 'GET',
      url: `${apiUrl}/studentFriends`,
      dataType: 'json'
    });
  },
  get() {
    return $.ajax({
      type: 'GET',
      url: `${apiUrl}/loginEntry`,
      dataType: 'json'
    });
  }
};


(function(){
	
	var friendString = [];
	var score1 = -1;
	var score2 = -1;
	var score3 = -1;
	var user1;
	var user2;
	var user3;
	
	console.log('anything');
	
	profilePage.getFriends().done(function(result){
		user = sessionStorage.getItem("username");
		for (var i=0; i<result.entries.length; i++){
			if (result.entries[i].user == user){
				friendString = result.entries[i].friends;
				console.log('friends ', friendString);
				break;
			}
		}	
		for (var i in friendString){
			var currentUser = friendString[i];
			console.log(currentUser);
			
			var userScore;
			profilePage.get().done(function(result){
				for (var i=0; i<result.entries.length; i++){
					if (result.entries[i].user == currentUser){
						console.log('found ', currentUser);
						userScore = result.entries[i].quizAverage;
						break;
					}
				}
				console.log(userScore);
				
				var thisScore = userScore;
			
			
			
			console.log('this score ', thisScore);
		
			if (thisScore > score1){
				score3 = score2;
				user3 = user2;
				score2 = score1;
				user2 = user1;
				score1 = thisScore;
				user1 = currentUser;
			} else if (thisScore > score2){
				score3 = score2;
				user3 = user2;
				score2 = thisScore;
				user2 = currentUser;
			} else if (thisScore > score3){
				score3 = thisScore;
				user3 = currentUser;
			}
			
			console.log('FINAL ', user1);
		if (score1 != -1){
			document.getElementById( "user1" ).innerHTML = user1;
			document.getElementById( "score1" ).innerHTML = score1;
		}
		if (score2 != -1){
			document.getElementById( "user2" ).innerHTML = user2;
			document.getElementById( "score2" ).innerHTML = score2;
		}
		if (score3 != -1){
			document.getElementById( "user3" ).innerHTML = user3;
			document.getElementById( "score3" ).innerHTML = score3;
		}
			
			});
			
		}
		
		
	});
						
	

	
	function checkUsername(currentUser){
		console.log('thig');
		var userScore;
		profilePage.get().done(function(result){
			
			
			
			for (var i=0; i<result.entries.length; i++){
				console.log('search ', result.entries[i].user, ' found ', currentUser);
				if (result.entries[i].user == currentUser){
					userScore = result.entries[i].quizAverage;
					break;
				}
			}
						
		});
		return userScore;
	}
	
	
})();

