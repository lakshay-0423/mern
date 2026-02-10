const express= require('express');

const app =express();
const PORT = 5000;

app.get('/',(req,res)=>{
    res.send("api running");
})

app.listen(5000,()=>{
    console.log(`Server running on port ${PORT}`);
})