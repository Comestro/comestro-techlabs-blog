import mongoose from "mongoose"

const CourseSchema = new mongoose.Schema({
    // Course
    title:{type:String, required:true},
    icon:{type:String, required:true},
    description:{type:String, required:true},
    date_of_creation:{type:String, required:true},
    author:{type:String, required:true},
    duration:{type:String, required:true},
    states:{type:String, required:true},
})

export default mongoose.models.Course || mongoose.model("Course",CourseSchema);