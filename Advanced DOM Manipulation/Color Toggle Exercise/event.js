var button = document.querySelector("button");
var isWhite = true;

// button.addEventListener("click", function(){
//   if (isWhite) {
//     document.body.style.background = "purple";
//     isWhite = false;
//   } else {
//     document.body.style.background = "white";
//     isWhite = true;
//   }
// });

//alternate way to toggle page from white and purple, this way toggles style background purple from the document
button.addEventListener("click", function(){
  document.body.classList.toggle("purple");
});
