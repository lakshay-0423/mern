require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");

const app = express();

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Atlas Connected ✅"))
.catch(err => console.log(err));

app.listen(process.env.PORT, () => {
    console.log("Server running on port 3000");
});
