var todos = ["buy new dog"];

var input = prompt("What would you like to do?");

while (input !== "quit") {
  if (input === "list") {
    listTodo();
  }else if (input === "new") {
    addTodo();
  }else if (input === "delete") {
    deleteTodo();
  }
  input = prompt("What would you like to do?")
}
console.log("OK, you quit the app!");

function listTodo() {
    console.log("**********");
    todos.forEach(function(todo, index) {
      console.log(index + ":" + todo);
    });
    console.log("************");
  }

  function addTodo(){
      console.log("*********");
      var newTodo = prompt("Enter new to-do.")
      todos.push(newTodo);
      console.log("Added to-do");
      console.log("**********");
  }

  function deleteTodo(){
    var index = prompt("Enter index of todo to delete");
    todos.splice(index, 1); //delete one item at index
    console.log("Deleted to-do");
    console.log("************");
  }
