// const todoList = ["make dinner", "wash dishes", "watch youtube"];
// when adding dueDate, we need to use objects to use both name and dueDate inside todoList
const todoList = JSON.parse(localStorage.getItem("todo")) || [];

console.log("todoList.length :>> ", todoList.length);

if (todoList.length !== 0) {
  renderTodoList();
}

function renderTodoList() {
  let todoListHTML = "";
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    // const name = todoObject.name;
    // const dueDate = todoObject.dueDate;
    // Destructuring - shortcut for the name and dueDate variables above
    const { name, dueDate } = todoObject;

    const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button onclick="deleteTodo(${i})" class="todo-delete-button">Delete</button>
      `;
    todoListHTML += html;
  }
  document.querySelector(".todo-container").innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector(".todo-input");
  // adding date
  const dateInputElement = document.querySelector(".todo-dueDate");
  const todo = inputElement.value;
  // getting date value (same as for text input)
  const dueDate = dateInputElement.value;

  // todoList.push(todo);
  // need to push object instead of just todo string when creating new todo (now we are adding two values - name & dueDate)
  todoList.push({
    name: todo,
    // dueDate: dueDate,
    // if the property and varaibale name are the same we can just type it once
    dueDate, // shorthand property -> same as dueDate: dueDate
  });
  localStorage.setItem("todo", JSON.stringify(todoList));

  // to clear input after we click add button... if we don't set it to "" value stays inside input
  inputElement.value = "";
  // render newly added todo
  renderTodoList();
}

function deleteTodo(index) {
  todoList.splice(index, 1);
  localStorage.setItem("todo", JSON.stringify(todoList));
  renderTodoList();
}
