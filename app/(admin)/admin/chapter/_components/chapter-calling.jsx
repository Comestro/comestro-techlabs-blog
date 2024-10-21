import Connect from "@/db/Connect";
import Chapter from "@/db/models/Chapter";
import { redirect } from "next/navigation";
import React from "react";

const ChapterCalling = async () => {
  Connect();
  const callingRecords = await Chapter.find().populate("course");

  const handleDlete = async (formData) => {
    "use server";
    let id = formData.get("recordId");
    await Chapter.findByIdAndDelete(id);
    redirect("/admin/chapter");
  };
  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg flex flex-1">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              Chapter Id
            </th>
            <th scope="col" class="px-6 py-3">
              Chapter Name
            </th>
            <th scope="col" class="px-6 py-3">
              Course title
            </th>

            <th scope="col" class="px-6 py-3">
              Description
            </th>
            <th scope="col" class="px-6 py-3">
              Publish
            </th>
           
            <th scope="col" class="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {callingRecords.map((record, index) => {
            return (
              <tr key={index}>
                <td className="border p-3">{index + 1}</td>
                <td className="border p-3">{record.title}</td>
                <td className="border p-3">{record.course?.title}</td>
                <td className="border p-3">{record.description}</td>
                <td className="border p-3">{record.publish}</td>
               
                <td className="border p-3">
                  <form method="post" action={handleDlete}>
                    <input type="hidden" name="recordId" value={record.id} />
                    <input
                      type="submit"
                      className="bg-red-600 text-white px-3 py-2 rounded"
                      value="DELETE"
                    />
                  </form>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ChapterCalling;
