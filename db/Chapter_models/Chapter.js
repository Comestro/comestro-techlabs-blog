import mongoose from "mongoose"

const ChapterSchema = new mongoose.Schema({

    // Chapter
    chapter_title:{type:String, required:true},
    chapter_description:{type:String, required:true},
    chapter_date_of_publish:{type:String, required:true},
    chapter_states:{type:String, required:true},

})

export default mongoose.Chapter_models.Chapter || mongoose.model("Chapter",ChapterSchema);