import express from "express";
import notesRoutes from "./routes/notesRoutes.js";


const app = express();

app.use("/api/v1/notes",notesRoutes);

app.get("/api/v1/notes",(req,res)=>{
    res.send("Your notes..")
})

app.listen(5001,()=>{
    console.log("Server started running..");
    
})