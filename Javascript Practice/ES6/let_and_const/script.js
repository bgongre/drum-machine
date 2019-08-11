//////////////////////////////
//let and const

//ES5
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);

//ES6
const name6 = 'Jane Smith';
let age6 = 23;
// name6 = 'Jane Miller';
// console.log(name6);

//ES5
function driversLicense5(passedTest) {
  if (passedTest) {
    var firstName = 'John'
    var yearOfBirth = 1990;

  }
  console.log(firstName + ', born in ' + yearOfBirth + ' is not officially allowed to drive a car.');
}

driversLicense5(true);

//ES6
let firstName;
const yearOfBirth = 1990;

function driversLicense6(passedTest) {
  if (passedTest) {
    firstName = 'John'
  }
  console.log(firstName + ', born in ' + yearOfBirth + ' is not officially allowed to drive a car.');
}

driversLicense6(true);