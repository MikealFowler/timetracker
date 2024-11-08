const axios = require('axios');
let destination = 'http://localhost:4000/' 


// Send a POST request
function submitUser(){
    let newUser = { "name": document.getElementById("userName").value, "password": document.getElementById("newPassword").value };
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
        const response = await axios.get(destination);
        console.log('users fetched:', response.data);
        document.getElementById("allUsers").innerText = response.data
    } catch (error) {
        console.error('error fetching users', error.response ? error.response.data : error.message);
    }
    
}

// Attach  to the global window object

window.submitUser = submitUser;
window.getUsers = getUsers;


