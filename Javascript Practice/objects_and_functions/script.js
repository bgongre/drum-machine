//Objects and Functions
function interviewQuestion(job) {
  if (job === 'designer') {
    return function(name) {
      console.log(name + ', can you please explain what  UX design is?');
    }
  } else if (job === 'teacher') {
    return function(name) {
      console.log('What subject do you teach, ' + name + "?");
    }
  } else {
    return function(name) {
      console.log('Hello ' + name + ', what do you do?');
    }
  }
}

var teacherQuestion = interviewQuestion('teacher');
teacherQuestion('John');
var designerQuestion = interviewQuestion('designer');
designerQuestion('John');
designerQuestion('Jane');
designerQuestion('Mark');
designerQuestion('Mike');

interviewQuestion('teacher')('Mark');

//////////////////////////////////////////////
//IIFE Immediately-Invoked Function Expression
//Standard function below
function game() {
  var score = Math.random() * 10;
  console.log(score >= 5);
}
game();


//anonymous function IIFE
(function () {
  var score = Math.random() * 10;
  console.log(score >= 5);
})();

//how to add parameters to IIFE
(function (goodLuck) {
  var score = Math.random() * 10;
  console.log(score >= 5 - goodLuck);
})(5);
