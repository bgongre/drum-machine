//there are two ways to create functions:
//
//This is a declaration function
//function thisIsAFucntion(){
//  something runs here
//}
//
//This is a fucntion expression, if the variable is changed the funciton is lost
//var cat = function(){
//  something goes here
//}

function isEven(num){
  return num % 2 === 0;
}

function factorial(num){
  var result = 1;
  for (var i = 2; i <= num; i++) {
    result = result *= i;
  }
  return result;
}

function kebabToSnake(string){
  var newString = string.replace(/-/g, "_");
  return newString;
}
