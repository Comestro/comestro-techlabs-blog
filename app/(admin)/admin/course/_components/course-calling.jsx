import Connect from '@/db/Connect'
import Course from '@/db/models/Course';
import React from 'react'

const CourseCalling = async () => {
  Connect();
  const course = await Course.find({});
  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg flex flex-1  ">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              Id
            
            </th>
            <th scope="col" class="px-6 py-3">
             Title
            </th>
            <th scope="col" class="px-6 py-3">
                Description
            </th>
            <th scope="col" class="px-6 py-3">
             Author
            </th>
            <th scope="col" class="px-6 py-3">
               Image
            </th>
            <th scope="col" class="px-6 py-3">
               Duration
            </th>
          </tr>
        </thead>
        <tbody>
          {course.map((cor,i) =>( 
          <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {i+1}
            </th>
            <td class="px-6 py-4">
            {cor.title}
            </td>
            <td class="px-6 py-4">
              {cor.description}
            </td>
            <td class="px-6 py-4">
              {cor.author}
            </td>
            <td class="px-6 py-4">
              {cor.image}
            </td>
            <td class="px-6 py-4">
              {cor.duration}
            </td>
            <td class="px-6 py-4 flex gap-6">
              <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
              <a href="#" class="font-medium text-red-600 dark:text-blue-500 hover:underline">Delete</a>
            </td>
          </tr>

          ))}
          
          
          
          
        </tbody>
      </table>
    </div>



  )
}

export default CourseCalling