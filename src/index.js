import "./style.css";

const ul = document.querySelector("ul");

const todoItems = [
  {
    text: "je suis une todo",
    done: true,
  },
  {
    text: "faire du javascript",
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
      `;
  return li;
};

displayToDoItems();
