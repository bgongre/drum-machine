//create request var
var request = new XMLHttpRequest();

//GET request
request.open('GET', 'http://sunnyquotes.net/q.php?random', true);

request.onload = function(){
  //begin parsing JSON data
  var data = JSON.parse(this.response);
  data.forEach(quote =>{
    console.log(quote.sqQuote);
  })



}
