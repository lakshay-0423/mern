const express = require('express');

const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
    res.send("api running");
})

app.get('/api/users', (req, res) => {
    res.json([
        { id: 1, name: "Lakshay" },
        { id: 2, name: "Aman" },
        { id: 3, name: "Riya" }
    ])
})

app.listen(5000, () => {
    console.log(`Server running on port ${PORT}`);
})