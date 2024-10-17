import mongoose from "mongoose"

const LessonSchema = new mongoose.Schema({
    
    // Lesson
    lesson_title:{type:String, required:true},
    lesson_date_of_publish:{type:String, required:true},
    lesson_vedio_url:{type:String, required:true},
    lesson_state:{type:String, required:true},
})

export default mongoose.Lesson_models.Lesson || mongoose.model("Lesson",LessonSchema);