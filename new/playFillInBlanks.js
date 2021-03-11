/*
authors: Georgia Crouch,
dates edited:
23/02/2021
*/

const apiUrl = 'https://7f38cec5.eu-gb.apigw.appdomain.cloud/teamlappproject';
// gets fill words entry
const fillInBlanks = {
  get() {
    return $.ajax({
      type: 'GET',
      url: `${apiUrl}/fillWordsEntry`,
      dataType: 'json'
    });
  } 
};

(function() {
	
	var answer;

  function loadEntry() {
	  var j;
    console.log('Loading entries...');
    fillInBlanks.get().done(function(result) {
     console.log(result);
	  
	  for (var i=0; i<result.entries.length; i++){
		console.log(result.entries[i].type);
		if (result.entries[i].type == "minigame"){
			j = i;
			break;
		}
	}
	  console.log('j ', j);
	  var temp = result.entries[j];
	  
	  answer = result.entries[j].missingWord;
	  
	  console.log('temp ', temp);
	  
	  document.getElementById("title").innerHTML = temp.title;
	  
	  document.getElementById("sentencePart1").innerHTML = temp.sentencePart1;
	  document.getElementById("sentencePart2").innerHTML = temp.sentencePart2;
	  
    }).error(function(error) {
      $('#entries').html('No entries');
      console.log(error);
    });
  }
  
  $(document).on('submit', '#playFillInBlanks', function(e) {
    e.preventDefault();

    if (answer == $('#missingWord').val().trim()){
		document.getElementById("answerResult").innerHTML = 'Well done! That is the correct answer';
	} else {
		document.getElementById("answerResult").innerHTML = 'Oh no! That is not the correct answer';
	}
  });

  $(document).ready(function() {
	  loadEntry();
  });
})();