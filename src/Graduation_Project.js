import { clock } from "./Grad/clock.js";
import { background } from "./Grad/background.js";

const nameForm = document.getElementById("nameInput"),
    nameElement = document.getElementById("JS-name"),
    nameInputElement = document.getElementById("JS-nameInput");

const NAMELS = "NAME";
const toDoLS = "toDo";

let toDoDB = [];
let nameDB = [];

function inputHandler(event) {
    event.preventDefault();
    const value = event.target.childNodes[1].value;
    console.log(event.target.childNodes[1].value);
}

// function background() {
//     const img = new Image();
//     const height = window.innerHeight;
//     const width = window.innerWidth;
//     img.src = `https://source.unsplash.com/random/${width}x${height}/?nature,winter,landscape `;
//     img.classList.add("background");
//     img.addEventListener("load", function () {
//         body.appendChild(img);
//     });
// }

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
