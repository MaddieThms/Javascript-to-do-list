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
    editMode: true,
  },
  {
    text: "ma 2eme tâche",
    done: false,
    editMode: false,
  },
];

const displayToDoItems = () => {
  const todoNode = todoItems.map((toDoItem, index) => {
    if (toDoItem.editMode) {
      return createTodoEditElement(toDoItem, index);
    } else return createTodoElement(toDoItem, index);
  });
  ul.innerHTML = "";
  ul.append(...todoNode);
};

const createTodoElement = (toDoItem, index) => {
  const li = document.createElement("li");
  const delButton = document.createElement("button");
  delButton.innerHTML = "Delete";
  const editButton = document.createElement("button");
  editButton.innerHTML = "Edit";
  li.innerHTML = `
  <span class="todo ${toDoItem.done ? "done" : ""}"></span>
  <p>${toDoItem.text}</p>
      `;
  li.append(editButton, delButton);
  delButton.addEventListener("click", (e) => {
    e.stopPropagation();
    deleteToDoItem(index);
  });
  editButton.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleEdit(index);
  });
  li.addEventListener("click", (e) => {
    toggleTodo(index);
  });
  return li;
};

const createTodoEditElement = (toDoItem, index) => {
  const li = document.createElement("li");
  const editInput = document.createElement("input");
  editInput.type = "text";
  editInput.value = toDoItem.text;
  const saveButton = document.createElement("button");
  const cancelButton = document.createElement("button");
  saveButton.innerHTML = "Save";
  cancelButton.innerHTML = "Cancel";

  li.append(editInput, saveButton, cancelButton);

  cancelButton.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleEdit(index);
  });

  saveButton.addEventListener("click", (e) => {
    editItem(index, editInput);
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

const toggleEdit = (index) => {
  todoItems[index].editMode = !todoItems[index].editMode;
  displayToDoItems();
};

const editItem = (index, editInput) => {
  const value = editInput.value;
  todoItems[index].text = value;
  todoItems[index].editMode = false;
  displayToDoItems();
};

displayToDoItems();
