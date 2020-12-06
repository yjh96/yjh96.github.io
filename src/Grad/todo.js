const TODOLS = "todo";

const toDoList = document.getElementById("todoList");
const toDoInput = document.getElementById("JS-todo");
const toDoInputBox = document.getElementById("JS-todoInput");

let toDo = [];

function getTodo(value, id = null) {
    const div = document.createElement("div");
    div.classList.add("border-bottom");
    div.classList.add("border-white-fade-15");
    div.classList.add("p-2");
    div.classList.add("mb-2");
    div.classList.add("text-blue");
    div.classList.add("text-emphasized");
    div.classList.add("h2");
    div.classList.add("text-left");
    const delBtn = document.createElement("button");
    delBtn.classList.add("btn-transparent");
    delBtn.classList.add("btn-mktg");
    delBtn.classList.add("border-0");

    delBtn.innerText = "❌";
    delBtn.addEventListener("click", removeToDo);
    div.innerText = value;

    div.appendChild(delBtn);
    toDoList.appendChild(div);
    if (id === null) {
        id = Date.now();
    } else {
        div.id = id;
    }
    const item = {
        id: id,
        value: value,
    };
    toDo.push(item);
    saveTodo(toDo);
}

function removeToDo(event) {
    const btn = event.target;
    const div = btn.parentNode;
    const id = div.id;
    const value = div.childNodes[0].data;

    toDoList.removeChild(div);
    const item = {
        id: id,
        value: value,
    };

    const cleanToDo = toDo.filter(function (item) {
        return parseInt(item.id) !== parseInt(div.id);
    });
    toDo = cleanToDo;
    saveTodo(toDo);
}

function saveTodo(value) {
    localStorage.setItem(TODOLS, JSON.stringify(value));
}

function inputHandler(event) {
    event.preventDefault();
    const value = toDoInputBox.value;
    getTodo(value);
}

toDoInput.addEventListener("submit", inputHandler);

function loadToDo() {
    const todo = localStorage.getItem(TODOLS);
    if (todo !== null) {
        const parser = JSON.parse(todo);
        parser.forEach(function (todo) {
            getTodo(todo.value, todo.id);
        });
    }
}

export { loadToDo };
