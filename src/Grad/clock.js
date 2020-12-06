const clockElement = document.getElementById("JS-clock");

const dayList = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

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

export { clock };
