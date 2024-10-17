import React from "react";

const ChapterForm = () => {
  return (
    <div className="bg-slate-200  p-10 border-red-300  border flex flex-col w-full ">
      <h2 className="text-2xl font-semibold text-center p-2">Insert Chapter</h2>
      <form action="" className="flex flex-col gap-1">
        <div className="mb-3  flex flex-col">
          <label htmlFor="">Chapter title</label>
          <input
            type=""
            className="px-3 py-2 w-full rounded"
            placeholder="title"
          />
        </div>
        
        <div className="mb-3  flex flex-col">
          <label htmlFor="">Chapter Description</label>
          <textarea
            rows="5"
            className="px-3 py-2 w-full rounded"
            placeholder="description"
          ></textarea>
        </div>
       

        <div className="mb-3  flex flex-col">
          <label htmlFor="">Date of Publish</label>
          <input
            type="text"
            className="px-3 py-2 w-full rounded"
            placeholder="date of publish"
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
  );
};

export default ChapterForm;
