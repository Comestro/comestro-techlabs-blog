// import React from 'react'
// import { ReviewData } from './ReviewData'

// const Review = () => {
//   return (
//     <div className='bg-slate-50 px-28 py-24 justify-center items-center flex flex-col gap-5'>
//         <h1 className='text-blue-900 font-bold text-3xl font-sans'>Review Our Learners</h1>
//         <div className='grid grid-cols-4 gap-5'>
//         {ReviewData.map((course, index) => (
//             <div key={index} className="bg-white w-fit px-5 py-4 items gap-5 rounded shadow-lg hover:shadow-xl flex flex-col">
//                <div className='flex gap-1  items-center'>
//                 <img src={course.imgSrc} alt={course.name} className="size-16 object-cover rounded-full" />
//                 <div className='flex flex-col'>
//                     <h2 className="font-bold text-lg text-blue-950">{course.name}</h2>
//                     <h3 className='text-sm'>{course.role}</h3>
//                 </div>
//                </div>
//                <div>
//                 <p className='text-gray-600'>{course.description}</p>
//                </div>
//             </div>
//           ))}
//         </div>
//         <button className='px-3 py-2 border-2 rounded w-fit border-blue-800  cursor-pointer text-lg font-bold text-blue-600'>See All</button>
//     </div>
//   )
// }

// export default Review

import React from 'react'
import { ReviewData } from './ReviewData'

const Review = () => {
  return (
    <div className='bg-slate-50 px-4 py-12 md:px-28 md:py-24 flex flex-col items-center gap-5'>
        <h1 className='text-blue-900 font-bold text-3xl font-sans text-center'>Review Our Learners</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5'>
        {ReviewData.map((course, index) => (
            <div key={index} className="bg-white w-full px-5 py-4 flex flex-col gap-5 rounded shadow-lg hover:shadow-xl">
               <div className='flex gap-2 items-center'>
                <img src={course.imgSrc} alt={course.name} className="h-16 w-16 object-cover rounded-full" />
                <div className='flex flex-col'>
                    <h2 className="font-bold text-lg text-blue-950">{course.name}</h2>
                    <h3 className='text-sm'>{course.role}</h3>
                </div>
               </div>
               <div>
                <p className='text-gray-600'>{course.description}</p>
               </div>
            </div>
          ))}
        </div>
        <button className='px-4 py-2 border-2 rounded w-fit border-blue-800 cursor-pointer text-lg font-bold text-blue-600'>See All</button>
    </div>
  )
}

export default Review;
