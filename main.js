// Event stuff
let eventHeader = document.getElementById("event-header");
let eventText = document.getElementById("event-text");
let eventButtons = document.getElementById("event-options")

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

import eventsJSON from './assets/test/events.js';

function loadEvent(event) {
    eventButtons.innerHTML = "";

    eventHeader.innerHTML = eventsJSON.events[event].name;
    eventText.innerHTML = eventsJSON.events[event].text;
    
    for (const x of eventsJSON.events[event].options) {
        const btn = document.createElement("button");
        btn.innerHTML = x.text;
        btn.onclick = () => loadEvent(x.destination);
        btn.classList.add("btn");
        eventButtons.appendChild(btn);
    }
}

window.addEventListener("load", () => {
    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext("2d");

    ctx.strokeRect(100, 100, 200, 200);

    loadEvent(0);
})