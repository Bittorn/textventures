// Main script content

const eventHeader = document.getElementById("event-header");
const eventText = document.getElementById("event-text");

try {
    import eventsJS from './assets/test/events.js';

    try {
        eventHeader.innerHTML = eventsJSON.events.name;
    } catch (error) {
        eventHeader.innerHTML = "Event name error";
    }
    try {
        eventText.innerHTML = eventsJSON.events.text;
    } catch (error) {
        eventText.innerHTML = "Event text error";
    }
} catch (error) {
    eventHeader.innerHTML = "Event load error"
    eventText.innerHTML = error.message;
}