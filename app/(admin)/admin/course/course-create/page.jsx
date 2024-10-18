import React from 'react'
import CourseForm from '../_components/course-form'
import { Connect } from '@/db/Connect'
import Course from '@/db/models/Course'
import { redirect } from 'next/navigation'


const page = () => {

  const handleInsertForm = async ()=>{
    "use serve"
    Connect();
    let data = await Course.create({title,description,image,author,duration})
    redirect('/admin/course')

  }
  return (
    <div className='flex items-center justify-center mt-5 flex-col px-10 '>
        
        <CourseForm handleInsertForm={handleInsertForm}/>

    </div>
  )
}

export default page