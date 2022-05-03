const eventHeader = document.getElementById("event-header").innerHTML;
const eventText = document.getElementById("event-text").innerHTML;
const eventButtons = document.getElementById("event-options")

import eventsJSON from './assets/test/events.js';

eventHeader = eventsJSON.events[0].name;
eventText = eventsJSON.events[0].text;

for (const x of eventsJSON.events[0].options) {
    const btn = document.createElement("button");
    btn.innerHTML = x.text;
    eventButtons.appendChild(btn);
}