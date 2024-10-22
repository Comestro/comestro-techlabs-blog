import mongoose from "mongoose";

import Chapter from "@/db/models/Chapter";


const LessonSchema = new mongoose.Schema({
  // Lesson
  title: { type: String, required: true },
  chapter: { type: mongoose.Types.ObjectId, required: true, ref:Chapter },
  image: { type: String, required: true },
  description: { type: String, required: true },
});

export default mongoose.models.Lesson || mongoose.model("Lesson",LessonSchema);