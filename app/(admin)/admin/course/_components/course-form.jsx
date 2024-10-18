"use client"
import Connect from '@/db/Connect'
import { useState } from 'react';


export default function CourseForm({handleInsertForm}) {
  Connect();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [duration,setDuration] = useState("");
  
  const [image,setImage] = useState("");
  return (
    <div className='bg-slate-200  p-10 border-red-300  border flex flex-col w-full '>
      <h2 className='text-2xl font-semibold text-center p-2'>Insert course</h2>
      <form action="" className='flex flex-col gap-1'>
        <div className='mb-3  flex flex-col'>
          <label htmlFor="">Course title</label>
          <input type="" className='px-3 py-2 w-full rounded' name='title'  placeholder='title' value={title} onChange={(e) => setTitle(e.target.value)}/>
        </div>
        <div className='mb-3  flex flex-col'>
          <label htmlFor="">Course Author</label>
          <input type="" className='px-3 py-2 w-full rounded' name='author' placeholder='author'value={author} onChange={(e) => setAuthor(e.target.value)}/>
        </div>
        <div className='mb-3  flex flex-col'>
          <label htmlFor="">Course Description</label>
          <textarea rows="5" className='px-3 py-2 w-full rounded' name='description' placeholder='description' value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
        </div>
       
        <div className='mb-3  flex flex-col'>
          <label htmlFor="">Duration</label>
          <input type="" className='px-3 py-2 w-full rounded' name='duration'  placeholder='duration'value={duration} onChange={(e) => setDuration(e.target.value)}/>
        </div>
        
      
       
        <div className='mb-3  flex flex-col'>
          <label htmlFor="">Course image</label>
          <input type="file" className='px-3 py-2 w-full rounded' name='image' placeholder='image' value={image} onChange={(e) => setImage(e.target.value)}/>
        </div>
       
        <input type="submit" onClick={() =>handleInsertForm(title, author,description,duration,image)} className='px-5 py-2 bg-teal-700 text-white flex self-center rounded' />
      </form>
      
    </div>
  )
}

