(function() {
  var question = function(question, answer, correctAnswer) {
    this.question = question;
    this.answer = answer;
    this.correctAnswer = correctAnswer;
  }

  question.prototype.displayQuestion = function() {
    console.log(this.question);

    for (var i = 0; i < this.answer.length; i++) {
      console.log(i + ':' + this.answer[i]);
    }
  }

  question.prototype.checkAnswer = function(ans) {
    if (ans === this.correctAnswer) {
      console.log('Correct answer!');
    } else {
      console.log('Wrong answer. Try again.');
    }
  }

  var q1 = new question('Is JavaScript fun?', ['yes', 'no'], 0);

  var q2 = new question('What is the name of the teacher?', ['john', 'jonas', 'michael'], 1);

  var q3 = new question('What does best describe coding?', ['boring', 'hard', 'fun', 'tedious'], 2);

  var question = [q1, q2, q3];

  var n = Math.floor(Math.random() * question.length);

  question[n].displayQuestion();

  var answer = parseInt(prompt('Please select the correct answer.'));

  question[n].checkAnswer(answer);
})();
