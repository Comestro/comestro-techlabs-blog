import mongoose from "mongoose";

export const Connect = () => {
    try{
        const client = mongoose.connect("mongodb://localhost:27017/Record");
    }
    catch(error){
        console.error("Failed to connect to mongoose:",error);
        return <h1>Failed to connect to mongoose</h1>;
    }
}