////////////////////////////////////////
//Destructuring - allows you to take object values and create variables with them.

//ES5
var mike = ['Mike', 26];
var name5 = mike[0];
var age5 = mike[1];

//ES6
const [name, age] = ['Mike', 26];
console.log(name);
console.log(age);

const obj = {
  firstName: 'Mike',
  lastName: 'Smith'
};

const{firstName, lastName} = obj;
console.log(firstName);
console.log(lastName);

const {firstName: a, lastName: b} = obj;
console.log(a);
console.log(b);

//new example
function calcAgeRetirement(year) {
  const age2 = new Date().getFullYear() - year;
  return [age, 65 - age];
}

const [age2, retirement] = calcAgeRetirement(1990);
console.log(age);
console.log(retirement);
