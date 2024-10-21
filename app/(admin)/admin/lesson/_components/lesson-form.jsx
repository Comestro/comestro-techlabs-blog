
import Lesson from "@/db/models/Lesson"
import { redirect } from "next/navigation"
import { join } from "path";
import { writeFile } from "fs/promises";
import Connect from "@/db/Connect";
import Chapter from "@/db/models/Chapter";

const LessonForm = async () => {
  const chapter= await Chapter.find({});

  //Server Action
  const handleInsertLesson =async (formData) => {
    "use server"

    //image work
    let image = formData.get("image");
    let bytes = await image.arrayBuffer();
    let buffer = Buffer.from(bytes);
    let path = join("./public", "lesson-img", image.name);
    await writeFile(path, buffer);

    let title = formData.get("title")
    let description = formData.get("description")
    let chapter = formData.get("chapter")

    Connect();

    let newdata = await Lesson.create({
      title:title,
      description:description,
      image:image.name,
      chapter:chapter,
    })

    redirect("/admin/lesson")
  }

  return (
     <div className="bg-slate-200  p-10 border-red-300  border flex flex-col w-full ">
      <h2 className="text-2xl font-semibold text-center p-2">Insert Lesson</h2>
      <form action={handleInsertLesson} className="flex flex-col gap-1">
        <div className="mb-3  flex flex-col">
          <label htmlFor="title">Lesson title</label>
          <input
            type="text"
            className="px-3 py-2 w-full rounded"
            placeholder="title"
            name="title"
          />
        </div>
        
        <div className="mb-3  flex flex-col">
          <label htmlFor="description">Lesson Description</label>
          <textarea
            rows="5"
            className="px-3 py-2 w-full rounded"
            placeholder="description"
            name="description"
          ></textarea>
        </div>

        <div className="mb-3  flex flex-col">
          <label htmlFor="course">Chapter Title</label>
          <select id="cchapter" name="chapter" className="px-3 py-2 w-full rounded">
            <option value="" disabled="true">
              Select Chapter
            </option>
            {chapter.map((char, i) => (
              <option key={i} value={char._id}>
                {char.title}
              </option>
            ))}
          </select>
        </div>
       

        <div className="mb-3  flex flex-col">
          <label htmlFor="">Video_URL</label>
          <input
            type="file"
            className="px-3 py-2 w-full rounded"
            name="image"
          />
        </div>
        
        <input
          type="submit"
          className="px-5 py-2 bg-teal-700 text-white flex self-center rounded"
        />
      </form>
    </div>
  )
}

export default LessonForm