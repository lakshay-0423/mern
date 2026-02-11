# MERN Stack Learning Journey 🚀

This repository documents my **day-by-day progress** in learning the MERN stack, with a focus on becoming **placement-ready** and building **real-world, deployable projects**.

---

# 🗓 Week 1 – JavaScript & Node.js Basics

## ✅ Day 1 – JavaScript Basics

### Topics Covered
- Variables (`let`, `const`)
- Data Types
- Operators
- Conditional Statements
- Basic Logic

### Programs
- Sum of two numbers  
- Swap two variables  
- Even/Odd checker  
- Simple calculator  
- Average of array elements  

### Learning Outcome
- Understood core JavaScript syntax  
- Practiced arithmetic and conditional logic  
- Gained confidence writing basic JS programs  

---

## ✅ Day 2 – Loops & Functions

### Topics Covered
- `for` and `while` loops
- Functions and function calls
- Arrays and iteration
- Problem-solving using loops

### Programs
- Print numbers from 1 to 50  
- Sum of array elements  
- Find maximum element in an array  
- Factorial using function and loop  
- Reverse a string  

### Learning Outcome
- Improved logical thinking  
- Understood function structure and reusability  
- Strengthened array manipulation skills  

---

## ✅ Day 3 – Objects & Arrays

### Topics Covered
- JavaScript objects
- Arrays of objects
- Nested objects
- Iteration and filtering

### Programs
- Created a student object (`name`, `age`, `marks`)  
- Accessed and updated object properties  
- Created array of student objects  
- Filtered students with marks greater than 50  
- Worked with nested object data  

### Learning Outcome
- Understood structured data representation  
- Learned real-world data modeling  
- Improved object handling skills  

---

## ✅ Day 4 – ES6 Modern JavaScript

### Topics Covered
- Arrow functions
- Object and array destructuring
- Spread and rest operators
- Template literals

### Programs
- Refactored previous code using arrow functions  
- Applied destructuring in objects and arrays  
- Used template literals for cleaner output  
- Used spread/rest operators for array manipulation  

### Learning Outcome
- Wrote cleaner and modern JavaScript  
- Improved readability and maintainability  

---

## ✅ Day 5 – Node.js Basics

### Topics Covered
- Node.js runtime environment
- npm basics
- Running JavaScript outside the browser
- Creating a basic HTTP server

### Implementation
- Setup Node.js and npm  
- Created basic Node.js script  
- Built a simple HTTP server  
- Sent “Hello World” response  

### Learning Outcome
- Understood server-side JavaScript  
- Built first backend server using Node.js  

---

## ✅ Day 6 – Node.js CLI + JSON File CRUD

### Topics Covered
- Node.js `fs` module  
- JSON file handling  
- Command-line arguments (`process.argv`)  
- Backend CRUD logic without frameworks  

### Implementation
Built a CLI-based CRUD application:
- Add student  
- Update student  
- Delete student  
- View all students  

### Learning Outcome
- Understood backend logic deeply  
- Learned file-based persistence  
- Practiced building structured backend systems  

---

### Day 7 – Refactoring & Code Structure
- Separated routes into `/routes`
- Moved database logic into `/models`
- Implemented controller pattern
- Cleaned code and removed duplication
- Improved folder structure

---

# 🗓 Week 2 – Backend Development with Express.js

## ✅ Day 8 – Express.js Fundamentals

### Goal
Understand routing, request/response handling, and middleware basics.

### Topics Covered
- Introduction to Express.js
- Setting up an Express server
- Routing with `GET` requests
- Understanding `req` and `res`
- Sending JSON responses

### Project Structure

```
week1/
├── server.js
└── package.json
```

### API Routes
- `GET /` → Returns `"API running"`
- `GET /api/users` → Returns dummy JSON data

### Example Response

```json
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com"
  }
]
```

### Learning Outcome
- Understood how Express simplifies backend development  
- Learned how APIs are structured  
- Built first Express-based backend server  

---

## ✅ Day 9 – REST APIs (CRUD with Express)

### Goal
Think like a backend developer by implementing full CRUD operations.

### Topics Covered
- REST API architecture
- HTTP methods (GET, POST, PUT, DELETE)
- Route parameters (`:id`)
- JSON request/response handling
- API testing using Postman

### Implementation
Built an in-memory CRUD API using an array (no database yet).

### CRUD Endpoints
- `GET /students` → Fetch all students  
- `POST /students` → Add a new student  
- `PUT /students/:id` → Update student  
- `DELETE /students/:id` → Delete student  

### Tools Used
- Express.js  
- Postman  

### Learning Outcome
- Understood REST principles  
- Learned how real backend APIs are structured  
- Practiced route parameters and data handling  
- Prepared foundation for MongoDB integration  

---

# 🛠 Tech Stack

- JavaScript (ES6)
- Node.js
- Express.js
- Postman
- VS Code
- Git & GitHub

---

# 📈 Progress Tracker

- [x] Week 1 – Day 1  
- [x] Week 1 – Day 2  
- [x] Week 1 – Day 3  
- [x] Week 1 – Day 4  
- [x] Week 1 – Day 5  
- [x] Week 1 – Day 6  
- [x] Week 1 – Day 7
- [x] Week 2 – Day 8  
- [x] Week 2 – Day 9  

---

# 🎯 Goal

- Become placement-ready using the MERN stack  
- Build and deploy real-world full-stack applications  
- Maintain consistent daily progress with clean GitHub commits  
- Develop strong backend + frontend integration skills  
