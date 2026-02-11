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

app.post("/students", (req, res) => {
    const { name, age } = req.body;
    const newStudent = {
        id: Date.now(),
        name,
        age
    };

    students.push(newStudent);
    res.status(201).json(students);
});

app.put("/students/:id", (req, res) => {
    const id = Number(req.params.id);
    const { name, age } = req.body;

    const student = students.find(s => s.id === id);
    if (!student) {
        return res.status(404).json({ msg: "Student not found" });
    }
    student.name = name || student.name;
    student.age = age || student.age;

    res.json(students);
});

app.delete("/students/:id", (req, res) => {
    const id = Number(req.params.id);

    const student = students.find(s => s.id === id);
    if (!student) {
        return res.status(404).json({ msg: "Student not found" });
    }

    students = students.filter(s => s.id !== id);

    res.json({msg : `deleted student with id ${id}`});
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
