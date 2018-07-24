const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo");

//POST - title, content
const postSchema = new mongoose.Schema({
  title: String,
  content: String
});

const Post = mongoose.model("Post", postSchema);

//USER - email, name
const userSchema = new mongoose.Schema({
  email: String,
   name: String,
  posts: [postSchema]
});

const User = mongoose.model("User", userSchema);

// let newUser = new User({
//   email:"Whitney@email.edu",
//   name: "Whitney Sandelbury"
// });
//
// newUser.posts.push({
//   title: "What it's like as a Freshman at MIT",
//   content: "It's expensive.."
// });
//
// newUser.save(function(err, user){
//   if (err) {
//     console.log(err);
//   }else {
//     console.log(user);
//   }
// });

// let newPost = new Post({
//   title: "Reflection on butts",
//   content: "They are better than boobs"
// });
//
// newPost.save(function(err, post){
//   if (err) {
//     console.log(err);
//   }else {
//     console.log(post);
//   }
// })

User.findOne({name: "Whitney Sandelbury"}, function(err, user){
  if (err) {
    console.log(err);
  } else {
    user.posts.push({
      title: "3 Things I really hate.",
      content: "Math, Skunks, and Southern US Accent"
    });
    user.save(function(err, user){
      if (err) {
        console.log(err);
      } else {
        console.log(user);
      }
    });
  }
});
