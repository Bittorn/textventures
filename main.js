// Event stuff
let eventHeader = document.getElementById("event-header").innerHTML;
let eventText = document.getElementById("event-text").innerHTML;
let eventButtons = document.getElementById("event-options")

import eventsJSON from './assets/test/events.js';

function loadEvent(event) {
    console.log("container loaded");
    eventHeader = eventsJSON.events[event].name;
    eventText = eventsJSON.events[event].text;
    
    for (const x of eventsJSON.events[event].options) {
        const btn = document.createElement("button");
        btn.innerHTML = x.text;
        btn.onclick = () => loadEvent(x.destination);
        eventButtons.appendChild(btn);
    }
}

console.log(eventsJSON);
console.log(eventsJSON.events);
console.log(eventsJSON.events[0]);
console.log(eventsJSON.events[0].name);
document.getElementsByClassName("container").onload = loadEvent(0);