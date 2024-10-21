import Connect from '@/db/Connect';
import Lesson from '@/db/models/Lesson';
import { redirect } from 'next/navigation';
import React from 'react'

const LessonCalling = async () => {
  Connect();
  const lesson = await Lesson.find({});
  const handleDelete = async (formData) => {
    "use server"
    let id = formData.get("lessId");
    await Course.findByIdAndDelete(id)
    redirect("/admin/course")
  }
  return (
    <div className='flex flex-col flex-1 gap-3'>
    <div className='self-end flex bg-slate-600 px-3 py-2 text-white'>
     <a
        href="/admin/lesson/lesson-create"
        class="font-semibold">
        add new lesson
      </a> 
     </div>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg flex flex-1">
     
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              Lesson Id
            </th>
            <th scope="col" class="px-6 py-3">
              Lesson title
            </th>
            <th scope="col" class="px-6 py-3">
              Description
            </th>
            <th scope="col" class="px-6 py-3">
              URL
            </th>
            <th scope="col" class="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
        {lesson.map((less,i) =>( 
          <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {less.title}
            </th>
            <td class="px-6 py-4">{less.description}</td>
            <td class="px-6 py-4">{less.image}</td>
            <td class="px-6 py-4 flex gap-4">
              <a
                href="#"
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Edit
              </a>
              <a
                href="#"
                class="font-medium text-red-600 dark:text-blue-500 hover:underline"
              >
                Delete
              </a>
            </td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default LessonCalling