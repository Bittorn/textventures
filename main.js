// Event stuff
const eventHeader = document.getElementById("event-header").innerHTML;
const eventText = document.getElementById("event-text").innerHTML;
const eventButtons = document.getElementById("event-options")

import eventsJSON from './assets/test/events.js';

function loadEvent(event) {
    eventHeader = eventsJSON.events[event].name;
    eventText = eventsJSON.events[event].text;
    
    for (const x of eventsJSON.events[event].options) {
        const btn = document.createElement("button");
        btn.innerHTML = x.text;
        btn.onclick = loadEvent(x.destination);
        eventButtons.appendChild(btn);
    }
}

document.getElementsByClassName("container").onload = loadEvent(0);