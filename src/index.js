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
  li.innerHTML = `
  <span class="todo ${toDoItem.done ? "done" : ""}"></span>
  <p>${toDoItem.text}</p>
  <button>Delete</button>
      `;
  return li;
};

const addToDoItem = (text) => {
  todoItems.push({
    text,
    done: false,
  });
  displayToDoItems();
};

displayToDoItems();
