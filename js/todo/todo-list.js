// const todoList = ["make dinner", "wash dishes", "watch youtube"];
// when adding dueDate, we need to use objects to use both name and dueDate inside todoList
const todoList = [
  { name: "make dinner", dueDate: "2024-07-11" },
  { name: "wash dishes", dueDate: "2024-07-12" },
];

renderTodoList();

function renderTodoList() {
  let todoListHTML = "";
  // for (let i = 0; i < todoList.length; i++) {
  //   const todoObject = todoList[i];
  //   // const name = todoObject.name;
  //   // const dueDate = todoObject.dueDate;
  //   // Destructuring - shortcut for the name and dueDate variables above
  //   const { name, dueDate } = todoObject;

  //   const html = `
  //     <div>${name}</div>
  //     <div>${dueDate}</div>
  //     <button onclick="deleteTodo(${i})" class="todo-delete-button">Delete</button>
  //   `;
  //   todoListHTML += html;
  // }

  // swithing code above to use forEach method instead

  todoList.forEach((todoObject, index) => {
    const { name, dueDate } = todoObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class="todo-delete-button">Delete</button>
    `;
    todoListHTML += html;
  });
  document.querySelector(".todo-container").innerHTML = todoListHTML;
  // in the line above html code is placed inside html
  // so we need to add eventListener bellow

  // to get all element we need to use querySelectorAll to get list of delete buttons
  // this list works like array so we can use forEach method to loop them
  document
    .querySelectorAll(".todo-delete-button")
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener("click", () => deleteTodo(index));
    });

  // to use an evenetListener, delete button is just a string, to use is we need to put it inside html element

  // Closure -> deleteTodo() with index that is passed inside
  // index is defined inside forEach and it only exist inside forEach
  // if we console log index outside forEach we will get error that the index is not defined

  // but inner function deleteTodo() has access to that value
  // and if we click delete in some time in the future, it will still have access to that value (if a function has access to a value it will always have access to that value)
}

document
  .querySelector(".todo-add-button")
  .addEventListener("click", () => addTodo());

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

  // to clear input after we click add button... if we don't set it to "" value stays inside input
  inputElement.value = "";
  // render newly added todo
  renderTodoList();
}

function deleteTodo(index) {
  todoList.splice(index, 1);
  renderTodoList();
}
