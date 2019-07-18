/////////////////////////////////////
//Strings

//ES6
let firstName = 'Mike';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calcAge (year) {
  return 2018 - year;
}

//ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today he is ' + calcAge(yearOfBirth) + ' years old.');

//ES6
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today he is ${calcAge(yearOfBirth)} years old.`);

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('M'));
console.log(n.endsWith('nd'));
console.log(n.includes('ik'));
console.log(`${firstName} `.repeat(2));
