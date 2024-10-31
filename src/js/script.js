var moment = require('moment-timezone');
moment.tz.guess();

var edmonton = moment.tz("America/Edmonton");
var toronto = moment.tz("America/Toronto");
var halifax = moment.tz("America/Halifax");
var fortNelson = moment.tz('America/Fort_Nelson');
var winnipeg = moment.tz('America/Winnipeg');

//Print off to my console so I know each time zone is working
console.log("Halifax: " + halifax.format());
console.log("Toronto: " + toronto.format());
console.log("Winnipeg: " + winnipeg.format());
console.log("Edmonton: " + edmonton.format());
console.log("Fort Nelson: " + fortNelson.format());

//Starting time
function updateTime() {
    const currentTimeElement = document.getElementById('currentTimezone');
    const now = new Date();
    currentTimeElement.textContent = "Halifax " + now.toLocaleTimeString();
}

//How I Change the time zone

function changeTime() {
    const newTimeElement = document.getElementById('timezoneSelect');
    const currentTimeElement = document.getElementById('currentTimezone');
    if (currentTimeElement.textContent = "Halifax " + halifax) {
        currentTimeElement.textContent = "Halifax " + halifax;
    } else if (newTimeElement === "Toronto") {
        "Toronto " + toronto;
        currentTimeElement.textContent = "Toronto " + toronto;
    } else if (newTimeElement === "Winnipeg") {
        "Winnipeg " + winnipeg;
        currentTimeElement.textContent = "Winnipeg " + winnipeg;
    } else if (newTimeElement === "Edmonton") {
        "Edmonton " + edmonton;
        currentTimeElement.textContent = "Edmonton " + edmonton;
    } else if (newTimeElement === "Fort Nelson") {
        "Fort Nelson " + fortNelson;
        currentTimeElement.textContent = "Fort Nelson " + fortNelson;
    }

}

//run each command and update every second
setInterval(updateTime, 1000);
updateTime();


