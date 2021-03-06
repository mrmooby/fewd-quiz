$(document).ready(function() {

	// create a factory function to create quiz items; not necessary but chosen for learning purposes
	function makeQuestion(optionA, optionB, optionC, optionD, rightAnswer, qimage) {
		var question = {};
		question.optionA = optionA;
		question.optionB = optionB;
		question.optionC = optionC;
		question.optionD = optionD;
		question.rightAnswer = rightAnswer;
		question.qimage = qimage;
		question.printOptions = function(){
			return this.optionA + "|" + this.optionB + "|" + this.optionC + "|" + this.optionD + "|" + this.rightAnswer
		}
		return question;
	}

	// create quiz items
	var question1 = makeQuestion("biceps brachii", "deltoid", "triceps brachii", "latissimus dorsi", "latissimus dorsi", "lats.jpg");
	var question2 = makeQuestion("abductor magnus", "vastus lateralis", "gluteus maximus", "triceps brachii", "gluteus maximus", "glutes.jpg");
	var question3 = makeQuestion("deltoid", "serratus anterior", "biceps brachii", "trapezius", "trapezius", "traps.jpg");
	var question4 = makeQuestion("biceps brachii", "pectoralis major", "deltoid", "rectus abdominis", "pectoralis major", "pecs.jpg")
	var question5 = makeQuestion("gluteus maximus", "vastus medialis", "rectus abdominis", "pectoralis minor", "rectus abdominis", "abs.jpg");

	// place the objects into an array
	quizQuestions = [question1, question2, question3, question4, question5];
	// initialize loop counting variable
	loopCounter = 0;
	killSwitch = quizQuestions.length - 1;
	stopQuiz = false;
	numberCorrect = 0;
	// load first question
		loadQuestions();
		quizTime();
});

function loadQuestions() {
// radio 1
	document.getElementById('r1').value=quizQuestions[loopCounter].optionA;
	$('label[for=r1]').html(" " + quizQuestions[loopCounter].optionA);
// radio 2
	document.getElementById('r2').value=quizQuestions[loopCounter].optionB;
	$('label[for=r2]').html(" " + quizQuestions[loopCounter].optionB);
// radio 3
	document.getElementById('r3').value=quizQuestions[loopCounter].optionC;
	$('label[for=r3]').html(" " + quizQuestions[loopCounter].optionC);
// radio 4
	document.getElementById('r4').value=quizQuestions[loopCounter].optionD;
	$('label[for=r4]').html(" " + quizQuestions[loopCounter].optionD);
// correct answer variable
	solution = quizQuestions[loopCounter].rightAnswer; 
// load image
	$('#image-box').html('<img src="images/' + quizQuestions[loopCounter].qimage + '">');
	
}

function quizTime() {
	if (!stopQuiz){

		$('form').submit(function(event){
			event.preventDefault();
				if (document.getElementById('r1').checked) {
					userAnswer = document.getElementById('r1').value;
				} else if (document.getElementById('r2').checked) {
					userAnswer = document.getElementById('r2').value;
				} else if (document.getElementById('r3').checked) {
					userAnswer = document.getElementById('r3').value;
				} else {
					userAnswer = document.getElementById('r4').value;
				}
				
				if (userAnswer == solution) {
					alert('correct, that is the ' + solution + ' muscle.');
					numberCorrect++;
					$('#correct-counter').html(numberCorrect);
				} else {
					alert('sorry, that is not the ' + userAnswer + ' it is the ' + solution + '.');
				}		
			
				if (loopCounter >= killSwitch) {
					stopQuiz = true;
					$('.possible-answers').html("");
					$('.question').html("CONGRATULATIONS!</br> You have finished the quiz!</br>  Your score was: " + numberCorrect + "/" + quizQuestions.length + ".");
				} else {
					$('form').trigger("reset");
					loopCounter++;
					loadQuestions();
					$('#counter').html(loopCounter + 1  + "/" + quizQuestions.length);
				}
		
		});

	}


	 
}










