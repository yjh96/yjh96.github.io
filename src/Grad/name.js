const NAMELS = "name";

const nameBox = document.getElementById("JS-name");
const nameInput = document.getElementById("JS-nameInput");

function getName(event) {
    event.preventDefault();
}

function saveName() {}

function loadName() {
    const nameDB = localStorage.getItem(NAMELS);
    if (nameDB !== null) {
        const parseName = JSON.parse(nameDB);
    }
}
