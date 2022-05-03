// Event stuff
let eventHeader = document.getElementById("event-header");
let eventText = document.getElementById("event-text");
let eventButtons = document.getElementById("event-options")

import eventsJSON from './assets/test/events.js';

function loadEvent(event) {
    eventButtons.innerHTML = "";
    
    console.log("container loaded");
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

window.onload = () => loadEvent(0);