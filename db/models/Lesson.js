import mongoose from "mongoose"

const LessonSchema = new mongoose.Schema({
    
    // Lesson
    title:{type:String, required:true},
    image:{type:String, required:true},
    description:{type:String, required:true},
})

export default mongoose.models.Lesson || mongoose.model("Lesson",LessonSchema);