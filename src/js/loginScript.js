const axios = require('axios').default;
let baseURL = 'http://localhost:4000/'


// Send a POST request to login
async function submitUser() {
    const userName = document.getElementById("username").value;
    const userPassword = document.getElementById("password").value;
    try {
        // makes a json with username and password 
        const response = await axios.post(`${baseURL}login`, {
            username: userName,
            password: userPassword
        });
        if (response.status == 200) {
            // this line is what redirects my code to the timezone if the password and username are correct
            window.location.assign("http://127.0.0.1:5500/src/html/timezonePage.html");
            token = response.data.token;
            // add the token to the local storage
            localStorage.setItem("token", token);
            alert('Correct password');
        } else {
            alert('Invalid username or password.');
        }
    } catch (error) {
        console.error('Error during authentication:', error.response ? error.response.data : error.message);
        alert('An error occurred during authentication.');
        console.log("Even worse")
    }
};
// this line is what makes the function run when I click the login button on html
document.getElementById("loginButton").addEventListener('click', submitUser)