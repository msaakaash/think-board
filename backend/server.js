const express = require("express");

const app = express();

app.get("/api/v1/notes",(req,res)=>{
    res.send("Your notes..")
})

app.listen(5001,()=>{
    console.log("Server started running..");
    
})