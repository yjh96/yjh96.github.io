const GEO = "geo";

// const tempBox = document.getElementById("JS-temp");
// const maxBox = document.getElementById("JS-maxT");
// const minBox = document.getElementById("JS-minT");
// const feelBox = document.getElementById("JS-feel");
const weatherBox = document.getElementById("weather");

const API_KEY = "752a3dace70582b74967222a95fc1483";

function getWeather(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=kr&units=metric`;
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            const temp = json.main.temp;
            const feels_temp = json.main.feels_like;
            const minTemp = json.main.temp_min;
            const maxTemp = json.main.temp_max;
            // tempBox.innerText = `${temp}`;
            // maxBox.innerText = `${maxTemp}`;
            // minBox.innerText = `${minTemp}`;
            // feelBox.innerText = `${feels_temp}`;
            weatherBox.innerText = `현재온도 : ${temp}도 | 체감온도 : ${feels_temp}도 \n\n 최저 온도 : ${minTemp}도 | 최고 온도 : ${maxTemp}도`;
        });
}

function saveGeo(detailObj) {
    localStorage.setItem(GEO, JSON.stringify(detailObj));
}

function getGeoSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const detaioObj = {
        latitude,
        longitude,
    };
    saveGeo(detaioObj);
    getWeather(latitude, longitude);
}

function getGeoError() {
    console.log("can't access");
}

function askGeo() {
    navigator.geolocation.getCurrentPosition(getGeoSuccess, getGeoError);
}

function loadWeather() {
    const loadedGeo = localStorage.getItem(GEO);
    if (loadedGeo === null) {
        askGeo();
    } else {
        const parseGEO = JSON.parse(loadedGeo);
        getWeather(parseGEO.latitude, parseGEO.longitude);
    }
}

export { loadWeather };
