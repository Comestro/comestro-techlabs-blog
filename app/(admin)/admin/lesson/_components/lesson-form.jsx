import Connect from "@/db/Connect"
import Lesson from "@/db/models/Lesson"
import { redirect } from "next/navigation"
import { join } from "path";
import { writeFile } from "fs/promises";

const LessonForm = () => {

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

    Connect();

    let newdata = await Lesson.create({title:title,description:description,image:image.name})

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
          <label htmlFor="">Video_URL</label>
          <input
            type="file"
            className="px-3 py-2 w-full rounded"
            name="image"
          />
        </div>
        <div className="mb-3  flex flex-col">
          <label htmlFor="">Status</label>
          <input
            type="text"
            className="px-3 py-2 w-full rounded"
            placeholder=""
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