var numOfSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message")
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
  setupModeButtons();
  setupSquares();
  reset();
}

function setupSquares(){
  for (var i = 0; i < squares.length; i++) {
    //add click listeners to squares
    squares[i].addEventListener("click", function(){
      //grab color of clicked square
      var clickedColor = this.style.backgroundColor;
      //compare coloe to pickedColor
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!";
        resetButton.textContent = "Play Again?";
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
      }else {
        this.style.backgroundColor = "#232323"
        messageDisplay.textContent = "Try Again";
      }
    });
  }
}

function setupModeButtons(){
  //mode button event listeners
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numOfSquares = 3: numOfSquares = 6;
      reset();
    });
  }
}

for (var i = 0; i < modeButtons.length; i++) {
  modeButtons[i].addEventListener("click", function(){
    modeButtons[0].classList.remove("selected");
    modeButtons[1].classList.remove("selected");
    this.classList.add("selected");
    this.textContent === "Easy" ? numOfSquares = 3: numOfSquares = 6;
    reset();
  });
}

function reset(){
  colors = generateRandomColors(numOfSquares);
  //pick new random color from array4
  pickedColor = pickColor();
  //change color display to match picked color
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Colors"
  messageDisplay.textContent = "";
  //change color of squares on the page
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    }else {
      squares[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function(){
  reset();
});

function changeColors(color){
  //loop through all squares
  for (var i = 0; i < squares.length; i++) {
    //change each color to match given color
    squares[i].style.backgroundColor = color;
  }
}

//picks random color
function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

//generates random colors
function generateRandomColors(num){
  //make an array
  var arr = [];
  //add num random colors to array
  for (var i = 0; i < num; i++) {
    //get random color and push in to array
    arr.push(randomColor());
  }
  //return array
  return arr;
}

function randomColor(){
  //pick a "red" from 0 - 255
  var r = Math.floor(Math.random() * 256)
  //pick a "green" from 0 - 255
  var g = Math.floor(Math.random() * 256)
  //pick a "blue" from 0 - 255
  var b = Math.floor(Math.random() * 256)
  return "rgb(" + r + ", " + g + ", " + b + ")";
}