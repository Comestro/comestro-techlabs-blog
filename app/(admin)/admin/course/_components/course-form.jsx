
import React from 'react'

const CourseForm = () => {
  return (
    <div className='bg-slate-200  p-10 border-red-300  border flex flex-col w-full '>
      <h2 className='text-2xl font-semibold text-center p-2'>Insert course</h2>
      <form action="" className='flex flex-col gap-1'>
        <div className='mb-3  flex flex-col'>
          <label htmlFor="">Course title</label>
          <input type="" className='px-3 py-2 w-full rounded'  placeholder='title'/>
        </div>
        <div className='mb-3  flex flex-col'>
          <label htmlFor="">Course Author</label>
          <input type="" className='px-3 py-2 w-full rounded'  placeholder='author'/>
        </div>
        <div className='mb-3  flex flex-col'>
          <label htmlFor="">Course Description</label>
          <textarea rows="5" className='px-3 py-2 w-full rounded'  placeholder='description'></textarea>
        </div>
        <div className='flex gap-5 flex-1'>
        <div className='mb-3  flex flex-col'>
          <label htmlFor="">Duration</label>
          <input type="" className='px-3 py-2 w-full rounded'  placeholder='duration'/>
        </div>
        <div className='mb-3  flex flex-col'>
          <label htmlFor="">Date of creation</label>
          <input type="" className='px-3 py-2 w-full rounded'  placeholder='date of creation'/>
        </div>
        </div>
       

        <div className='mb-3  flex flex-col'>
          <label htmlFor="">Course image</label>
          <input type="file" className='px-3 py-2 w-full rounded'  placeholder='image'/>
        </div>
       
        <input type="submit" className='px-5 py-2 bg-teal-700 text-white flex self-center rounded' />
      </form>
      
    </div>
  )
}

export default CourseForm