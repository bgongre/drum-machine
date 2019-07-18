///////////////////////////////////
//Blocks and IIFEs

//ES6
{
  const a = 1;
  let b = 2;
  var c = 3;
}

// console.log(a + b); cannot be accessed outside of the block
console.log(c); //can be accessed because of 'var' keyword

//ES5 IIFE
(function(){
  var c = 3;
})();

// console.log(c); cannot be accessed outside of the block
