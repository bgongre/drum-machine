var p1Height = 182;
var p2Height = 182;
var p3Height = 182;

var p1Age = 18;
var p2Age = 18;
var p3Age = 18;

var p1 = p1Height + p1Age * 5;
var p2 = p2Height + p2Age * 5;
var p3 = p3Height + p3Age * 5;

if (p1 > p2 && p1 > p3) {
  console.log("Player 1 wins with a total of " + p1);
} else if (p2 > p1 && p2 > p3) {
  console.log('Player 2 wins with a total of ' + p2);
} else if (p3 > p1 && p3 > p2) {
  console.log('Player 3 wins with a total of ' + p3);
} else {
  console.log('It/s a tie!');
}
