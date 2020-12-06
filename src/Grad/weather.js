const WEATHER = "weather";

function getGeoSuccess(position) {
    console.log(positioin);
}

function getGeoError() {
    console.log("can't access");
}

function askWeather() {
    navigator.geolocation.getCurrentPosition(getGeoSuccess, getGeoError);
}

function loadWeather() {
    const loadedWeather = localStorage.getItem(WEATHER);
    if (loadedWeather !== null) {
        askWeather();
    } else {
    }
}

export { loadWeather };
