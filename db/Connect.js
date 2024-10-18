import mongoose from "mongoose";

export default function Connect () {
    try{
        mongoose.connect(process.env.MONGODB_URL);
        console.log("Connected to MongoDb");
    }
    catch(error){
        console.error("Failed to connect to mongoose:",error);
        
    }
}