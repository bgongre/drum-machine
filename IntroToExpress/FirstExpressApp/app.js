var express = require('express'),
  app = express();

// '/' => "hi there!"
app.get("/", function(req, res) {
  res.send("hi there!");
});

app.get('/r/:subredditName', function(req, res) {
  var subreddit = req.params.subredditName;
  res.send('welcome to the ' + subreddit + " subreddit!");
});

app.get('/r/:subredditName/comments/:id/:title', function(req, res) {
  res.send("Welcome to the comments page!");
});

// "/bye" => "goodbye"
app.get("/bye", function(req, res) {
  res.send('Goodbye');
});

// "/dog" => "meow!"
app.get('/dog', function(req, res) {
  console.log('Someone made a request to /dog');
  res.send('meow!');
});

//order does matter, * should always be last
app.get('*', function(req, res) {
  res.send('You are a star!');
});

//tell express to listen for request (start server)
//to test open browser and go to http://localhost:3000
app.listen(3000, function() {
  console.log('Started on PORT 3000');
});

module.exports = app;
