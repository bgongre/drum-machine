var years = [1965, 1993, 2001];
var age = [];
var boolean = [];

//Find persons age and push to age array
for (var i = 0; i < years.length; i++) {
  age.push(2018 - years[i]);
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

//Allows array of years in parameter, gets persons age, tells if they are less than or older than 18, and pushes 'true' or 'false' to boolean array
function printFullAge(years) {
  var age = [];

  for (var i = 0; i < years.length; i++) {
    age.push(2018 - years[i]);
  }

  for (var i = 0; i < age.length; i++) {
    if (age[i] >= 18) {
      console.log('This person is of  legal age. Their age is ' + age[i]);
    } else {
      console.log('This person is too young. Their age is ' + age[i]);
    }

    if (age[i] >= 18) {
      boolean.push('true');
    } else {
      boolean.push('false');
    }
  }
}

console.log(boolean);

var full_1 = printFullAge([1963, 1993, 1987]);
var full_2 = printFullAge([2008, 2001, 1913]);
