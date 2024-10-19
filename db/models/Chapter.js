import mongoose from "mongoose"

const ChapterSchema = new mongoose.Schema({

    // Chapter
    title:{type:String, required:true},
    description:{type:String, required:true},
    publish:{type:String, required:true},
    states:{type:String, required:true},

})

export default mongoose.models.Chapter || mongoose.model("Chapter",ChapterSchema);