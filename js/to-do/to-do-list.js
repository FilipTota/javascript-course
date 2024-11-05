const todoList = [];

function addTodo() {
  const inputElement = document.querySelector(".todo-input");
  const todo = inputElement.value;
  todoList.push(todo);
  console.log("todoList :>> ", todoList);

  // to clear input after we click add button... if we don't set it to "" value stays inside input
  inputElement.value = "";
}
