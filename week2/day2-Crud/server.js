const express = require("express");

const app = express();
const PORT = 5000;

app.use(express.json());

let students = [
    {
        id: 1,
        name: "Lakshay",
        age: 21
    },
    {
        id: 2,
        name: "Aman",
        age: 22
    }
];

app.get("/students", (req, res) => {
  res.json(students);
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
