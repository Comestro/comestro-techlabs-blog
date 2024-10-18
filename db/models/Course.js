import mongoose from "mongoose"

const CourseSchema = new mongoose.Schema({
    // Course
    title:{type:String, required:true},
    image:{type:String, required:true},
    description:{type:String, required:true},
    date_of_creation:{type:Number, required:true},
    author:{type:String, required:true},
    duration:{type:String, required:true},
    status:{type:Boolean, default:false},
})
//delete mongoose.models.Course;
export default mongoose.models.Course || mongoose.model("Course",CourseSchema);