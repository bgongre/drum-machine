//printReverse() - takes an array as an argument and prints out elements in the array in reverse order
function printReverse(input) {
  for (var i = input.length-1; i >= 0; i--) {
    console.log(input[i]);
  }
}

printReverse([1,2,3,4,5,6]);

//isUniform() - takes an array as an argument and returns true is all elements in the array are identical
function isUniform(input){
  var first = input[0];
  for (var i = 1; i < input.length; i++) {
    if (input[i] !== first) {
      return false;
    }
  }
  return true;
}

// //sumArray - accepts array of numbers and returns teh sum of all the numbers in the array
function sumArray(num){
  var total = 0;
  num.forEach(function(element){
    total += element;
  });
  return total;
}

// //max() - accepts an array of numbers and returns the maximum number in the array
function max(input){
  var max = input[0];
  for (var i = 1; i < input.length; i++) {
    if (input[i] > max) {
      max = input[i];
    }
  }
  return max;
}
