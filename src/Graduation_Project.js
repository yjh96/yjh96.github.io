const body = document.querySelector("body"),
    clockElement = document.getElementById("JS-clock"),
    backgroundElement = document.getElementById("JS-background"),
    nameForm = document.getElementById("nameInput"),
    nameElement = document.getElementById("JS-name"),
    nameInputElement = document.getElementById("JS-nameInput");

const dayList = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const NAMELS = "NAME";
const toDoLS = "toDo";

let toDoDB = [];
let nameDB = [];

function inputHandler(event) {
    event.preventDefault();
    const value = event.target.childNodes[1].value;
    console.log(event.target.childNodes[1].value);
}

function clock() {
    const now = new Date(),
        year = now.getFullYear(),
        month = now.getMonth(),
        date = now.getDate(),
        day = now.getDay(),
        hour = now.getHours(),
        min = now.getMinutes(),
        sec = now.getSeconds();
    clockElement.innerText = `${year} - ${month} - ${date} (${dayList[day]})
     ${hour > 9 ? hour : "0" + hour} : ${min > 9 ? min : "0" + min} : ${
        sec > 9 ? sec : "0" + sec
    }`;
}

function background() {
    const img = new Image();
    const height = window.innerHeight;
    const width = window.innerWidth;
    img.src = `https://source.unsplash.com/random/${width}x${height}/?nature,winter `;
    img.classList.add("background");
    img.addEventListener("load", function () {
        body.appendChild(img);
    });
}

function todoList() {}

nameForm.addEventListener("submit", inputHandler);

function saveName(input) {}

function name() {
    const userName = localStorage.getItem(NAMELS);
    if (userName !== "") {
        nameElement.innerText = userName;
    }
}

function weather() {}

function init() {
    clock();
    background();
    setInterval(clock, 1000);
}

init();
