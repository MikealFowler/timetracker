const axios = require('axios');
let destination = 'http://localhost:4000/' 


// Send a POST request
function submitUser(){
    let newUser = { "username": document.getElementById("userName").value, "password": document.getElementById("newPassword").value };
    axios.post(destination, newUser)
        .then(response => {
            console.log('User created:', response.data);
        })
        .catch(error => {
            console.error('Error creating user:', error);
        });
};

//send a get request for all users
async function getUsers() {
    try{
        document.getElementById("allUsers").innerHTML = "";
        const dataCont = document.getElementById("allUsers");
        const response = await axios.get(destination);
        console.log('users fetched:', response.data);
        response.data.forEach(user => {
            const element = document.createElement('div');
            element.textContent = `ID: ${user.id} Name: ${user.username} Password: ${user.password}`;
            dataCont.appendChild(element);
        });
    } catch (error) {
        console.error('error fetching users', error.response ? error.response.data : error.message);
    }    
}

async function deleteUsers() {
    const id = document.getElementById("deleteUser").value; // Fetch ID from input
    try{
        await axios.delete(`${destination}${id}`);
        console.log("User has been deleted");
    } catch (error) {
        console.error('Error deleting users:', error.response ? error.response.data : error.message)
    }   
}

async function loginUsers() {
    // Get the input values
    const userName = document.getElementById("username").value;
    const userPassword = document.getElementById("password").value;
    try {
        // Send a POST request to your API with the username and password
        const response = await axios.post(destination, {
            username: userName,
            password: userPassword
        });
        if (response.data.success) {
            console.log("it works")
            window.location.href = '../html/index.html';
        } else {
            alert('Invalid username or password.');
            console.log("did not work")
        }
    } catch (error) {
        console.error('Error during authentication:', error.response ? error.response.data : error.message);
        alert('An error occurred during authentication.');
        console.log("Even worse")
    }
}

// Attach  to the global window object
window.submitUser = submitUser;
window.getUsers = getUsers;
window.deleteUsers = deleteUsers;
window.loginUsers = loginUsers;


