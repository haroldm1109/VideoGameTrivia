var panel = $ ("")
var contStartNumber = 30;

//Question set
var questions = [{
	question: "What is the last level of Pac-Man?",
	answer:["256", "254", "240", "245"],
	correctAnswer: "256"
	image: "assets/Splitscreen.gif"

}, {
	question: "What is chasing Mappy in the game Mappy?",
	answer:["Cats", "Dogs", "Lizards", "Birds"],
	correctAnswer: "Cats"
	image: "assets/download.jpg"
}
// variable to hold our setInterval
var timer;

var game = {

questions: questions,
currentQuestion: 0,
counter: countStartNumber,
correct: 0,
incorrect: 0,

countdown: function() {
	this.counter--;
	$("#conter-number").html(this.counter);
	if (this.counter === 0) {
		console.log('TIMES UP')
		// will fill in later
	}
},
loadQuestion: function() {
	timer = setInterval(this.countdown.bind(this), 1000);
	panel.html("<h2>" + questions[this.currentQuestion] = "<h2>");
	for (var i = 0; i < questions[this.currentQuestion].answers.length; i++) {
		panel.append("button class= 'answer-button' id= 'button' data namae='" + 
			questions[this.currentQuestion].answers[i] + "'>" + 
		questions[this.currentQuestion].answers[i] + "</button>");
	}
},

nextQuestion: function() {
	this.counter = window.countStartNumber;
	$("#counter-number").html(this.counter);
	this.currentQuestion++;
	this.loadQuestion.bind(this)();
},

timeUp: function() {

	clearInterval(window.timer);

	$("#counter-number").html(this.counter);

	panel.html("<h2>Out of Time!</h2>");
	panel.append("<h3>Correct answer was: " 
		+ questions[this.currentQuestion].correctAnswer);
	panel.append("<img src='" + questions[this.currentQuestion].image + "' /");

	if (this.currentQuestion === questions.length - 1) {
		setTimeout(this.results, 3 * 1000);
	} else {
		setTimeout(this.bextQuestion, 3 * 1000);
	}
}


}

}

//click events