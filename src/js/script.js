const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;

const users = [
    { id: 1, name: "Mikeal", password: "mrperfect" },
    { id: 2, name: "von", password: "oblock" },
    { id: 3, name: "Nathan", password: "natesanoodle" },
    { id: 4, name: "Ibrahim", password: "teacherman" },
    { id: 4, name: "Elias", password: "busyboy" },
    { id: 5, name: "Duane", password: "djdee" },
    { id: 6, name: "Malaki", password: "cowpoke" },

];

app.use(express.json());

app.get("/", (req, res) => {
    res.json(users);
});
app.get("/:id", (req, res) => {
    // const user = users.find(u => u.id === parseInt(req.params.id));
    let user = null;
    for (let i = 0; i < users.length; i++) {
        
        if (users[i].id === parseInt(req.params.id)) {
            user = users[i];
            break;
        }
    }

    if (user) {
        res.json(user);
    } else {
        res.status(404).send("User not found");
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

