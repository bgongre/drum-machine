var years = [1965, 1993, 2001];
var age = [];
var currDate = new Date().getFullYear();

//Find persons age and push to age array
for (var i = 0; i < years.length; i++) {
  age.push(currDate - years[i]);
}
console.log(age);

//Tell if the age in age array is older or less than 18
for (var i = 0; i < age.length; i++) {
  if (age[i] >= 18) {
    console.log('This person is of  legal age. Their age is ' + age[i]);
  } else {
    console.log('This person is too young. Their age is ' + age[i]);
  }
}

//Takes in array of 'years', finds age and pushes to age array, finds is age is legal (18+), pushes true or false to boolean array depending on if legal
function printFullAge(years) {
  var age = [];
  var boolean = [];

  for (var i = 0; i < years.length; i++) {
    age.push(currDate - years[i]);
  }

  for (var i = 0; i < age.length; i++) {
    if (age[i] >= 18) {
      console.log('This person is of  legal age. Their age is ' + age[i]);
    } else {
      console.log('This person is too young. Their age is ' + age[i]);
    }

    if (age[i] >= 18) {
      boolean.push(true);
    } else {
      boolean.push(false);
    }
  }
  console.log(boolean);
}

console.log('============================================');

var full_1 = printFullAge([2008, 1993, 1987]);
var full_2 = printFullAge([1963, 2001, 1913]);
