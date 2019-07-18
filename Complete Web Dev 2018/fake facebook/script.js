var database = [
  {
    username: "Alex",
    password: "secret"
  },
  {
    username: "Sally",
    password: "password"
  },
  {
    username: "Chris",
    password: "password123"
  }
];

var newsfeed = [
  {
    username: "Alex",
    timeline: "I can't believe they shot him.."
  },
  {
    username: "Brandon",
    timeline: "Already trying to get prepared for Burning Man."
  }
];

function isUserValid(username, password){
  for (var i = 0; i < database.length; i++) {
    if (database[i].username === username &&
        database[i].password === password) {
          return true;
    }
  }
  return false;
}
function signIn(username, password){
  console.log(isUserValid(username, password));
  if (isUserValid(username, password)) {
        console.log(newsfeed);
  }else {
    alert('Sorry, wrong username or password');
  }
}

var userNamePrompt = prompt('What\'s your username?');
var passwordPrompt = prompt('What\'s your password?');

signIn(userNamePrompt, passwordPrompt);
