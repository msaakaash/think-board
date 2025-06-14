import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import swaggerDocs from './docs/swagger.js';
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
connectDB();

app.use(express.json())

app.use("/api/v1/notes",notesRoutes);

swaggerDocs(app);

app.listen(PORT,()=>{
    console.log(`Server started running on http://localhost:${PORT}`);
    
})