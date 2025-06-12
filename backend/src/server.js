import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
connectDB();
app.use("/api/v1/notes",notesRoutes);

app.get("/api/v1/notes",(req,res)=>{
    res.send("Your notes..")
})

app.listen(PORT,()=>{
    console.log(`Server started running on http://localhost:${PORT}`);
    
})