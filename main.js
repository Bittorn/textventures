const eventHeader = document.getElementById("event-header");
const eventText = document.getElementById("event-text");

import eventsJS from './assets/test/events.js';

try {
    eventHeader.innerHTML = eventsJSON.events.name;
} catch (error) {
    eventHeader.innerHTML = error.message;
}

try {
    eventText.innerHTML = eventsJSON.events.text;
} catch (error) {
    eventText.innerHTML = error.message;
}