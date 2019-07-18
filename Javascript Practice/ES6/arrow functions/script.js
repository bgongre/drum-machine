/////////////////////////////////
//Arrow functions pt 1.

const years = [1990, 1965, 1982, 1937];

//ES5
var ages5 = years.map(function(el) {
  return 2016 - el;
});

console.log(ages5);

//ES6
let ages6 = years.map(el => 2016 - el);
console.log(ages6);

ages6 = years.map((el, index) => `Age element ${index + 1}: ${2018 - el}.`);
console.log(ages6);

ages6 = years.map((el, index) => {
  const now = new Date().getFullYear();
  const age = now - el;
  return `Age element ${index + 1}: ${age}.`
});
console.log(ages6);

/////////////////////////////////////
//Arrow functions pt 2.

//ES5
var box5 = {
  color: 'green',
  position: 1,
  clickMe: function() {
    var self = this; //this helps use the 'this' keyword in function call. exampled, placed one of the 'this' with 'self' to make function call object values.
    document.querySelect('.green').addEventListener('click', function() {
      var str = 'This is box number ' + self.position + ' and it is ' + this.color;//this keyword in ES5 references the global variable, not local. Thus 'this' shows as undefined.
      alert(str);
    });
  }
}
box5.clickeMe();

//ES6
var box6 = {
  color: 'green',
  position: 1,
  clickMe: function() {
    document.querySelect('.green').addEventListener('click', () => { //'this' calls object values.
      var str = 'This is box number ' + this.position + ' and it is ' + this.color;
      alert(str);
    });
  }
}
box6.clickeMe();

//ES6 new example
var box66 = {
  color: 'green',
  position: 1,
  clickMe: () => { //when anonymous function is changed to hash arrow, the 'this' keyword refers back to global and 'this' in the function call back is undefined.
    document.querySelect('.green').addEventListener('click', () => {
      var str = 'This is box number ' + this.position + ' and it is ' + this.color;
      alert(str);
    });
  }
}
box66.clickeMe();

//ES5 new example
function Person(name) {
  this.name = name;
}

Person.prototype.myFriends5 = function(friends) {
  var arr = friends.map(function(el){
    return this.name + ' is friends with ' + el;
  }.bind(this));//'bind(this)' allows the keyword 'this' to work properly and not show undefined in ES5.
  console.log(arr);
}

var friends = ['Jane', 'Chris', 'Heather', 'Jeremy', 'Christine', 'JR'];
new Person('Brody').myFriends5(friends);

//ES6
function Person(name) {
  this.name = name;
}

Person.prototype.myFriends6 = function(friends) {
  var arr = friends.map((el) => {
    return `${this.name} is friends with ${el}`;
  });
  console.log(arr);
}

var friends = ['Jane', 'Chris', 'Heather', 'Jeremy', 'Christine', 'JR'];
new Person('Brody').myFriends6(friends);
