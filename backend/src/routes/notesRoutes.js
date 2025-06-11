import express from "express";

const router = express.Router();

import { getAllNotes,createNote,updateNote,deleteNote } from '../controllers/notesControllers.js';

router.get("/",getAllNotes);

router.post("/",createNote);

router.put("/:id",updateNote);

router.delete("/:id",deleteNote);

export default router
