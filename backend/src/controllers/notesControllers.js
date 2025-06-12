import Note from "../models/Note.js"

export async function getAllNotes(req,res){
    try{
        const notes = await Note.find();
        res.status(200).json(notes);
    }catch(error){
        console.log("Error in getting all the notes.");
        res.status(500).json({message:"Internal Server Error"})
    }
};

export function createNote(req,res){
    res.status(201).json({message:"Note created Successfully."})
};

export function updateNote(req,res){
    res.status(200).json({message:"Note updated Successfully."})
};

export function deleteNote(req,res){
    res.status(200).json({message:"Note deleted Successfully."})
}