import React from 'react'
import Link from 'next/link'
import { FiCopy } from "react-icons/fi";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import SingleLineComments from './SingleLineComments';
const pythonComments = () => {
  return (
    <div className=' flex  py-5  px-5  justify-center items-center flex-col '>
      <div className='flex text-start gap-5 flex-col'>
        <h1 className='text-4xl font-bold text-blue-950 font-sans  '>Python Comments</h1>
        <p className='font-sans text-xl text-gray-500 '>In the previous tutorial, you learned to write your first <Link href='#' className='text-blue-500 hover:text-blue-700'>Python program.</Link>  Now, let's learn <br />
          about Python comments.</p>

        <div className='border flex justify-center items-center border-l-4 border-l-blue-600 p-5'>
          <p className="  font-sans text-xl text-gray-500"><strong>Important!</strong>: We are introducing comments early in this tutorial series because we <br /> will be using them to explain the code in upcoming tutorials. </p>
        </div>

        <p className='font-sans text-xl text-gray-500 '>Comments are hints that we add to our code to make it easier to understand. Python <br /> comments start with <span className='border px-1 rounded text-sm'>#</span>. For example,</p>
        <div className='flex  flex-1 flex-col bg-zinc-700  justify-end  items-end'>
          <div className='flex shadow-sm p-1 cursor-pointer hover:bg-slate-950 bg-slate-900 justify-center items-center rounded-full h-7 w-7 m-1'>
            <FiCopy className='text-gray-100' />
          </div>
          <div className='flex  w-full text-start flex-col'>
            <p className='text-orange-200 ml-2 '># print a number</p>
            <p className='text-white ml-2'> <span className='text-purple-300'>print</span> ( <span className='text-yellow-200'>25</span> )</p>
            <hr className='mt-5' />
          </div>


          <div className='p-3  '>
            <button className='border py-1 border-gray-300 text-sm hover:text-teal-200 hover:border-teal-200 rounded  flex justify-center items-center gap-3 px-5 font-sans font-semibold text-gray-100 '>
              Run Code
              <MdKeyboardDoubleArrowRight />
            </button>
          </div>

        </div>
        
        <p className='font-sans text-xl text-gray-500 '>Here, <span className='border text-sm px-2  rounded'># print a number</span>  is a comment.</p>
        <p className='font-sans text-xl text-gray-500 '>Comments are completely ignored and not executed by code editors.</p>

        <div className='border flex bg-slate-50 justify-center items-center border-l-4 border-l-blue-600 p-5'>
          <p className="  font-sans text-xl text-gray-500"><strong>Important</strong>:The purpose of this tutorial is to help you understand comments, so you <br />
          can ignore other concepts used in the program. We will learn about them in later <br /> tutorials. </p>
        </div>
        <hr className='mt-5' />
        <SingleLineComments/>
      </div>
    </div>
  )
}

export default pythonComments