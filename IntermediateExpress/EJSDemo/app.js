var express = require("express"),
        app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('home');
});

app.get('/fallinlovewith/:thing', function(req, res){
    var thing = req.params.thing;
    res.render('love', {thingVar: thing});
})

app.get('/posts', function(req, res) {
    var posts = [
        {title: 'Post 1', author: 'Susy'},
        {title: 'My adorable pet bunny', author: 'William'},
        {title: 'Can you believe this husky', author: 'Jeremy'},
        {title: 'Cats are the best', author: 'anonymous'},
        ];

        res.render('posts', {posts: posts});
})

app.listen(3000, function(){
    console.log('Server is Listening on PORT 3000');
});

module.export = app;
