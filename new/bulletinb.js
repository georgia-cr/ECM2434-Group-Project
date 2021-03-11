/*
authors: Georgia Crouch,
dates edited:
08/03/2021
*/

const apiUrl = 'https://7f38cec5.eu-gb.apigw.appdomain.cloud/teamlappproject';
const bulletinEntry = {
   
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
		
		var tempString = [];
		
		
		bulletinEntry.get().done(function(result){
			console.log(result.entries);
			for (var i=0; i<result.entries.length; i++){
				console.log(result.entries[i].type);
				if (result.entries[i].type == "bulletin"){
					console.log('found bull');
					tempString.push(result.entries[i].title.concat(" "));
					tempString.push(result.entries[i].content);
				}
			}
			console.log('temp ', tempString);
		
		document.getElementById( "bulletinEntries" ).innerHTML = tempString;
		});
		
		
	}
		
	  
	$(document).ready(function() {
		loadEntries();
	});
  
})();