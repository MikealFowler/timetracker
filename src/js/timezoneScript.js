var moment = require('moment-timezone');
const axios = require('axios').default;
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

function updateTime() {
        let newTimeElement = document.getElementById('timezoneSelect').value;
        let currentTimeElement = document.getElementById('currentTimezone');
        if (newTimeElement === "Halifax") {
            let halifax = moment.tz("America/Halifax");
            currentTimeElement.textContent = "Halifax " + halifax.format("HH:mm:ss");
        } else if (newTimeElement === "Toronto") {
            let toronto = moment.tz("America/Toronto");
            currentTimeElement.textContent = "Toronto " + toronto.format("HH:mm:ss");
        } else if (newTimeElement === "Winnipeg") {
            let winnipeg = moment.tz('America/Winnipeg');
            currentTimeElement.textContent = "Winnipeg " + winnipeg.format("HH:mm:ss");
        } else if (newTimeElement === "Edmonton") {
            let edmonton = moment.tz("America/Edmonton");
            currentTimeElement.textContent = "Edmonton " + edmonton.format("HH:mm:ss");
        } else if (newTimeElement === "Fort Nelson") {
            let fortNelson = moment.tz('America/Fort_Nelson');
            currentTimeElement.textContent = "Fort Nelson " + fortNelson.format("HH:mm:ss");
        }
}
async function getProtectedEndpoint() {
    let baseURL = 'http://localhost:4000/'
    let uri = `${baseURL}protected`;
    // get token from our local Storage
    let token = localStorage.getItem("token");
    // create headers
    const headers = {Authorization: `Bearer ${token}`};

    // make an API call
    const response = await axios.get(uri, {headers} );


    const message = response.data.message;
    alert(`${message}`);
};

document.getElementById("protected").addEventListener('click', getProtectedEndpoint);
document.getElementById("timezoneSelect").addEventListener('change', updateTime);

//run update every second
setInterval(updateTime, 1000);