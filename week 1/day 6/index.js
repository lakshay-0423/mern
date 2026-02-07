const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'students.json');

function readStudents() {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
}

function writeStudents(data) {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

const action = process.argv[2];
const name = process.argv[3];
const age = process.argv[4];

if (action === 'add') {
    const students = readStudents();

    const newStudent = {
        id: Date.now(),
        name: name,
        age: age
    }

    students.push(newStudent);
    writeStudents(students);
    console.log("student added");
}

if (action === 'view') {
    const students = readStudents();
    console.log(students);
}