const todoList = ["make dinner", "wash dishes", "watch youtube"];

renderTodoList();

function renderTodoList() {
  let todoListHTML = "";
  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];
    const html = `<p>${todo}</p>`;
    todoListHTML += html;
  }
  document.querySelector(".todo-container").innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector(".todo-input");
  const todo = inputElement.value;
  todoList.push(todo);
  console.log("todoList :>> ", todoList);

  // to clear input after we click add button... if we don't set it to "" value stays inside input
  inputElement.value = "";
  // render newly added todo
  renderTodoList();
}
