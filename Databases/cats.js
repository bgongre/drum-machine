var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
  name: String,
  age: Number,
  temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

//adding a new cat to the DB
// var lucky = new Cat({
//   name: "Mrs. Norris",
//   age: 19,
//   temperament: "Evil"
// });
//
// lucky.save(function(err, cat){
//   if (err) {
//     console.log("Something went wrong");
//   } else {
//     console.log("A cat has been saved to the database");
//     console.log(cat);
//   }
// });

Cat.create({
  name: "Greymane",
  age: "10",
  temperament: "Cuddly"
}, function(err, cat){
  if (err) {
    console.log(err);
  } else {
    console.log(cat);
  }
});

//retreive all cats from the DB and console.log each one
Cat.find({}, function(err, cats){
  if (err) {
    console.log("Oh no, error!");
    console.log(err);
  } else {
    console.log("All the cats...");
    console.log(cats);
  }
});
