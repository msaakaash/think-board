import Note from "../models/Note.js"

export async function getAllNotes(req,res){
    try{
        const notes = await Note.find().sort({createdAt:-1});
        res.status(200).json(notes);
    }catch(error){
        console.log("Error in getting all the notes.");
        res.status(500).json({message:"Internal Server Error"})
    }
};


export async function getNoteById(req,res){
    try{
        const note = await Note.findById(req.params.id);
        if(!note) return res.status(404).json({message:"Note not found."})
        res.status(200).json(note);
    }catch(error){
        console.log("Error in getting the note by id.");
        res.status(500).json({message:"Internal Server Error"})
    }
};


export async function createNote(req,res){
    try{
        const { title,content } = req.body
        const note = new Note({
            title:title,
            content:content
        })
        const savedNote = await note.save()
        res.status(201).json(savedNote)
    }catch(error){
        console.log("Error in getting all the notes.");
        res.status(500).json({message:"Internal Server Error"})
    }
};

export async function updateNote(req,res){
    try {
        const {title,content} = req.body
        const updatedNote = await Note.findByIdAndUpdate(req.params.id,{title,content},{new:true});
        if(!updatedNote) return res.status(404).json({message:"Note not found."})
        res.status(200).json(updatedNote)
    } catch (error) {
        console.log("Error in updating the note.");
        res.status(500).json({message:"Internal Server Error"})
    }
};

export async function deleteNote(req,res){
    try {
        const deleteNote = await Note.findByIdAndDelete(req.params.id)
        if(!deleteNote) return res.status(404).json({message:"Note not found."})
        res.status(200).json({message:"Note deleted successfully."})
        
    } catch (error) {
        console.log("Error in deleting the note.");
        res.status(500).json({message:"Internal Server Error"})
    }
}

