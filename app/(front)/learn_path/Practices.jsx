import React from 'react'

export const Practices = () => {
  return (
    <>
    <div className=' flex flex-1 flex-col gap-5  '>
      
     <h1 className='flex  font-bold text-black mr-72 text-2xl items-center '>Courses</h1>
     <div className='flex flex-col gap-10'>
      <div>
       <h2 className='text-gray-500 text-lg font-semibold bg-slate-200 rounded-lg hover:text-slate-400 hover:bg-slate-300  p-1 h-10'> Interective SQL COurses</h2>
      </div>
      <div>
       <h2 className='text-gray-500 text-lg font-semibold bg-slate-200 rounded-lg hover:text-slate-400 hover:bg-slate-300  p-1 h-10'> Interective C COurses</h2>
      </div>
      <div>
       <h2 className='text-gray-500 text-lg font-semibold bg-slate-200 rounded-lg hover:text-slate-400 hover:bg-slate-300  p-1 h-10'> Interective JAVA COurses</h2>
      </div>
      <div>
        <a href='' className='text-blue-600 font-medium hover:text-blue-400'>View All Courses-</a>
      </div>
    </div>
    </div>
    
    </>
  )
}
