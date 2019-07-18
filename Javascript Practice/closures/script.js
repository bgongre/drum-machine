///////////////////////////////
//Closures

function retirement(retirementAge) {
  return function (yearOfBirth) {
    var a = ' years left until retirement.';
    var age = 2018 - yearOfBirth;
    console.log((retirementAge - age) + a);
  }
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementUS(1987);
retirementGermany(1987);
retirementIceland(1987);

//retirement(66)(1987);

//closure exercise
function interviewQuestion(job) {
  return function (name){
    if (job === 'designer') {
      console.log(name + ', can you explained what a UX design is?');
    } else if (job === 'teacher') {
      console.log('What subject do you teach, ' + name);
    } else {
      console.log('Hello ' + name + ', what do you do?');
    }
  }
}

var teacherJob = interviewQuestion('teacher');
teacherJob('Michael');

interviewQuestion('designer')('Mary');
interviewQuestion('teacher')('Frank');
interviewQuestion('Construction')('Chris');
