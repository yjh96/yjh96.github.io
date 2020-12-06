import { clock } from "./Grad/clock.js";
import { background } from "./Grad/background.js";
import { loadWeather } from "./Grad/weather.js";
import { loadName } from "./Grad/name.js";
import { loadToDo } from "./Grad/todo.js";

function init() {
    clock();
    background();
    loadWeather();
    loadName();
    loadToDo();
    setInterval(clock, 1000);
}

init();
