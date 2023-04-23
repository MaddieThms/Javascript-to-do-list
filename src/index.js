import "./style.css";

const ul = document.querySelector("ul");
const form = document.querySelector("form");
const input = document.querySelector("form > input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = input.value;
  input.value = "";
  addToDoItem(value);
});

const todoItems = [
  {
    text: "ma 1ere tâche",
    done: true,
  },
  {
    text: "ma 2eme tâche",
    done: false,
  },
];

const displayToDoItems = () => {
  const todoNode = todoItems.map((toDoItem, index) => {
    return createTodoElement(toDoItem, index);
  });
  ul.innerHTML = "";
  ul.append(...todoNode);
};

const createTodoElement = (toDoItem, index) => {
  const li = document.createElement("li");
  const delButton = document.createElement("button");
  delButton.innerHTML = "Delete";
  li.innerHTML = `
  <span class="todo ${toDoItem.done ? "done" : ""}"></span>
  <p>${toDoItem.text}</p>
      `;
  li.appendChild(delButton);
  delButton.addEventListener("click", (e) => {
    e.stopPropagation();
    deleteToDoItem(index);
  });
  li.addEventListener("click", (e) => {
    toggleTodo(index);
  });
  return li;
};

const addToDoItem = (text) => {
  todoItems.push({
    text,
    done: false,
  });
  displayToDoItems();
};

const deleteToDoItem = (index) => {
  todoItems.splice(index, 1);
  displayToDoItems();
};

const toggleTodo = (index) => {
  todoItems[index].done = !todoItems[index].done;
  displayToDoItems();
};

displayToDoItems();
