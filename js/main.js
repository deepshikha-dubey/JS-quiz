 // function check(){
 
 //         var question1 = document.quiz.question1.value;
// 	   var question2 = document.quiz.question2.value;
// 	   var question3 = document.quiz.question3.value;
// 	   var correct = 0;
	   
// 	   if(question1 == "New Delhi"){
// 	      correct++;
// 	   }
// 	   if(question2 == "Hartford"){
// 	       correct++;
// 	   }
// 	   if(question3 == "Albany"){
// 	     correct++;
// 	   }
	   
// 	    var message = ["Great job!", "That's just okay!", "You need to do better"];
// 		var pictures = ["image/giphy.gif","image/tenor.gif","image/fall.gif"];
		
// 		var range;         
// 		if(correct < 1){
// 		  range = 2;
// 		}
// 		if(correct > 0 && correct < 3){
// 		 range = 1;                                               
// 		}
// 		if(correct > 2){
// 		  range = 0;
// 		}
	   
 //     document.getElementById("after_submit").style.visibility="visible";
	 
// 	 document.getElementById("message").innerHTML = message[range];
// 	 document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
// 	 document.getElementById("picture").src=[range];                              
	 
 // }

function check() {
  var question1 = document.quiz.question1.value;
  var question2 = document.quiz.question2.value;
  var question3 = document.quiz.question3.value;
  var correct = 0;

  if (question1 == "New Delhi") {
    correct++;
  }
  if (question2 == "Hartford") {
    correct++;
  }
  if (question3 == "Albany") {
    correct++;
  }

  var messages = ["Great job!", "That's just okay!", "You need to do better"];
  var pictures = ["image/giphy.gif", "image/tenor.gif", "image/fall.gif"];

  var range;
  if (correct < 1) {
    range = 2;
  } else if (correct > 0 && correct < 3) { // Changed to 'else if' to make it mutually exclusive
    range = 1;
  } else if (correct > 2) { // Changed to 'else if' for the same reason
    range = 0;
  }

  document.getElementById("after_submit").style.visibility = "visible";
  document.getElementById("message").innerHTML = messages[range]; // Changed to 'messages' to match the array name
  document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
  document.getElementById("picture").src = pictures[range]; // Corrected to use 'pictures' array with 'range' index
}