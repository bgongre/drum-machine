//////////////////////////////////////////
//Classes

//ES5
var Person5 = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
}

Person5.prototype.calculateAge = function() {
  var age = new Date().getFullYear - this.year;
  console.log(age);
}

var emily5 = new Person5('Emily', 1990, 'teacher');

//ES6
class Person6 {
  constructor(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
  }

  calculateAge() {
    var age = new Date().getFullYear - this.yearOfBirth;
    console.log(age);
  }
}

const chris6 = new Person6('Chris', 1996, 'designer');
