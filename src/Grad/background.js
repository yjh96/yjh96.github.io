"use strict";

const body = document.querySelector("body");

function background() {
    const img = new Image();
    const height = window.innerHeight;
    const width = window.innerWidth;
    img.src = `https://source.unsplash.com/random/${width}x${height}/?nature,winter,landscape `;
    img.classList.add("background");
    img.addEventListener("load", function () {
        body.appendChild(img);
        return "loaded";
    });
}

export = { background };
