//create secret number
var secretNumber = 4;

//ask user for their guess
var stringGuess = prompt("Guess a number.");
var guess = Number(stringGuess)
//check Guess
if (guess === secretNumber) {
  alert("You got it right!");
}
//otherwise check if higher
else if (guess > secretNumber) {
  alert("Too high, guess again.")
}
//otherwise check if lower
else{
  alert("Too low, guess again.")
}
