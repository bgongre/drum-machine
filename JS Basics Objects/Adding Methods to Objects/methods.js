var obj ={
  name: "chuck",
  age: 45,
  isCool: false,
  friends: ["bob", "tina"],
  add: function (x,y){
    return x + y;
  }
}

// obj.add(10, 5);

var comments = {};

comments.data = ["Goood Job!", "Bye", "Lame..."];

function print(arr){
  arr.forEach(function(el){
    console.log(el);
  });
}

print(comments.data);

comments.print = function(){
  this.data.forEach(function(el){
    console.log(el);
  });
}
