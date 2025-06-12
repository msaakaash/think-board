import mongoose from 'mongoose'

export const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to the Database.")
    }catch(error){
        console.error("Error connecting to Database.");
        process.exit(1)
    }
}