const NAMELS = "name";

const nameBox = document.getElementById("JS-name");
const nameInput = document.getElementById("nameInput");
const nameInputForm = document.getElementById("JS-nameInput");

function saveName(name) {
    localStorage.setItem(NAMELS, JSON.stringify(name));
}

function printName(name) {
    nameInputForm.classList.add("hiding");
    nameBox.classList.add("showing");
    nameBox.innerText = `Welcome! ${name}`;
}

function getName(event) {
    event.preventDefault();
    const name = event.target.childNodes[1].value;
    console.log(name);
    saveName(name);
    printName(name);
}

nameInput.addEventListener("submit", getName);

function loadName() {
    const nameDB = localStorage.getItem(NAMELS);
    console.log(nameDB !== null);
    if (nameDB !== null) {
        const parseName = JSON.parse(nameDB);
        printName(parseName);
    } else {
        nameBox.classList.add("hiding");
    }
}

export { loadName };

//인풋 > js-nameinput
//span > js-name
