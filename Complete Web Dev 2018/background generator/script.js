var _ = require('lodash');

var arr =  [1,2,3,4,5,6,7,8];
console.log('answer:', _.without(arr, 3));

let css = document.querySelector('h3');
let color1 = document.querySelector('.color1');
let color2 = document.querySelector('.color2');
let body = document.getElementById('gradient');
let btn = document.createElement('BUTTON');
const btnText = document.createTextNode('Randomize');
btn.appendChild(btnText);
document.body.appendChild(btn);

displayCSSInit();

console.log(color1.value);

function setGradient() {
  body.style.background = "linear-gradient(to right, "
  + color1.value + ", " + color2.value + ")";

  displayCSS();
}

function randomGradient(){
  body.style.background = "linear-gradient(to right, "
  + rgbColor1() + ", " + rgbColor2() + ")";

  displayCSS();
}

function getRandomColor() {
  let chars = '0123456789abcdef'.split('');
  let color = '#';
  for (var i = 0; i < 6; i++) {
    color += chars[Math.floor(Math.random() * 16)];
  }
  return color;
}

function rgbColor1() {
  let rnd1 = color1.value = getRandomColor();
  return rnd1;
}

function rgbColor2(){
  let rnd2 = color2.value = getRandomColor();
  return rnd2;
}

function displayCSSInit(){
  let value1 = css.textContent = "linear-gradient(to right, rgb(255,0,0), rgb(0,255,0));";
}

function displayCSS() {
  let rgbDisplay = css.textContent = body.style.background + ';';
  return rgbDisplay;
}

color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);
btn.addEventListener('click', randomGradient);
