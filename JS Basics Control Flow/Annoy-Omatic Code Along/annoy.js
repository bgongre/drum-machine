var answer = prompt("Are we there yet?");

// while (answer !== "yes" && answer !== "yeah") {
while (answer.indexOf("yes") === -1) {
  var answer = prompt("Are we there yet?")
}

alert("Yay, we made it!")

// if (answer === "yes") {
//   alert("Yay, we made it!")
// } else {
//   var answer = prompt("Are we there yet?");
// }
