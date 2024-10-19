
import Connect from "@/db/Connect";
import Chapter from "@/db/models/Chapter";
import { redirect } from "next/navigation";
import React from "react";

const ChapterForm = () => {
  //server action
  const handleInsert = async (formData) => {
    "use server";
    let title = formData.get("title");
    let description = formData.get("description");
    let publish = formData.get("publish");
    let states = formData.get("states");

    await Connect();

    let newdata = await Chapter.create({
      title: title,
      description: description,
      publish: publish,
      states: states,
    })

    redirect("/admin/chapter");
  }
  return (
    <div className="bg-slate-200  p-10 border-red-300  border flex flex-col w-full ">
      <h2 className="text-2xl font-semibold text-center p-2">Insert Chapter</h2>
      <form action={handleInsert} method='post' className="flex flex-col gap-1">
        <div className="mb-3  flex flex-col">
          <label htmlFor="title">Chapter title</label>
          <input
            type="text" id="title" name="title"
            className="px-3 py-2 w-full rounded"
            placeholder="title"
          />
        </div>

        <div className="mb-3  flex flex-col">
          <label htmlFor="description">Chapter Description</label>

          <textarea
            rows="5"
            className="px-3 py-2 w-full rounded"
            id="description"
            placeholder="Chapter_description"
            name="description"
          ></textarea>
        </div>


        <div className="mb-3  flex flex-col">
          <label htmlFor="publish">Date of Publish</label>
          <input
            type="date" id="publish" name="publish"
            className="px-3 py-2 w-full rounded"
            placeholder="date of publish"
          />
        </div>
        <div className="mb-3  flex flex-col">
          <label htmlFor="states">Status</label>
          <input
            type="text" id="states" name="states"
            className="px-3 py-2 w-full rounded"
            placeholder=""
          />
        </div>

        <input
          type="submit"
          className="px-5 py-2 bg-teal-700 text-white flex self-center rounded" value="submit"
        />
      </form>
    </div>
  );
};

export default ChapterForm;
