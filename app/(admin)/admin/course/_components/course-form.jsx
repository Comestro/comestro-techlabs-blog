import Connect from "@/db/Connect";
import Course from "@/db/models/Course";
import { redirect } from "next/navigation";
import { join } from "path";
import { writeFile } from "fs/promises";


const CourseForm = () => {
  const handleInsertCourse = async (FormData) =>{
    "use server";

    //image work
    let image = FormData.get("image");
    let bytes = await image.arrayBuffer();
    let buffer = Buffer.from(bytes);
    let path = join("./public", "course-img", image.name);
    await writeFile(path, buffer);

    let data = {
      title: FormData.get("title"),
      description: FormData.get("description"),
      author: FormData.get("author"),
      duration: FormData.get("duration"),
      image:image.name
    };
    Connect();
    let created = await Course.create(data);
    redirect("/admin/course");
  }
  return (
    <div className="bg-slate-200  p-10 border-red-300  border flex flex-col w-full">
      <h2 className="text-2xl font-semibold text-center p-2">Insert Course</h2>
      <form action={handleInsertCourse} className="flex flex-col gap-1">
        <div className="mb-3  flex flex-col">
          <label htmlFor="">Course title</label>
          <input
            type=""
            className="px-3 py-2 w-full rounded"
            placeholder="title"
            name="title"
          />
        </div>

        <div className="mb-3  flex flex-col">
          <label htmlFor="">Course Description</label>
          <textarea
            rows="5"
            className="px-3 py-2 w-full rounded"
            placeholder="description"
            name="description"
          ></textarea>
        </div>
        <div className="mb-3  flex flex-col">
          <label htmlFor="">Author</label>
          <input
            type="text"
            className="px-3 py-2 w-full rounded"
            placeholder=""
            name="author"
          />
        </div>
        <div className="mb-3  flex flex-col">
          <label htmlFor="">Duration</label>
          <input
            type="text"
            className="px-3 py-2 w-full rounded"
            placeholder=""
            name="duration"
          />
        </div>
       <div className="mb-3  flex flex-col">
          <label htmlFor="">Image</label>
          <input
            type="file"
            className="px-3 py-2 w-full rounded"
            placeholder=""
            name="image"
          />
        </div>

        <input
          type="submit"
          className="px-5 py-2 bg-teal-700 text-white flex self-center rounded"
        />
      </form>
    </div>
  );
};

export default CourseForm;
