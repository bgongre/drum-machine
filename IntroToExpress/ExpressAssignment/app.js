var express = require("express"),
        app = express();

app.get('/', function(req, res){
    res.send('Hi there, welcome to my assignment!');
});

app.get('/speak/:animal', function(req, res){
    var sounds = {
        pig:'oink',
        cow:'moo',
        dog:'woof',
        cat:'meow',
        goldfish:'...'
    }
    var animal = req.params.animal.toLowerCase();
    var sound = sounds[animal];

    res.send('The ' + animal + ' says ' + sound);
});

app.get('/repeat/:str/:num', function(req, res) {
    var str = req.params.str;
    //adding Number makes num a number and not a string
    var num = Number(req.params.num);
    var result = "";

    for(var i = 0; i < num ; i++){
        result += str + " ";
    }

    res.send(result);
});

app.get('*', function(req, res) {
    res.send('Sorry, page not found.. What are you doing with your life?');
});

//tell Express to listen for request (start server)
//to test open browser and go to http://localhost:3000
app.listen(3000, function(){
    console.log('Server Listening on PORT 3000');
});

module.exports = app;
