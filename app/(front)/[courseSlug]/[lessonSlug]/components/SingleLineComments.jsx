import React from 'react'
import { FiCopy } from "react-icons/fi";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { BsDot } from "react-icons/bs";
import MultilineComments from './MultilineComments';


const SingleLineComments = () => {
  return (
    <div className='flex flex-1 gap-5 flex-col' >

      <h1 className='text-4xl font-bold text-blue-950 font-sans  '>Single-line Comment</h1>
      <p className='font-sans text-xl text-gray-500 '>We use the  <strong>hash(<span className='border rounded text-sm px-1'>#</span>) </strong> symbol to write a single-line comment. For example,</p>

      <div className='flex  flex-1 flex-col bg-zinc-700  justify-end  items-end'>
        <div className='flex shadow-sm p-1 cursor-pointer hover:bg-slate-950 bg-slate-900 justify-center items-center rounded-full h-7 w-7 m-1'>
          <FiCopy className='text-gray-100' />
        </div>
        <div className='flex  w-full text-start flex-col'>
          <p className='text-orange-200 ml-2 '># declare a variable</p>
          <p className='text-gray-100 ml-2'>name = <span className='text-green-400'>"John"</span> </p>


        </div>
        <div className='flex  w-full text-start mt-5 flex-col'>
          <p className='text-orange-200 ml-2 '># print name</p>
          <p className='text-white ml-2'> <span className='text-purple-300'>print</span> (name)     <span className='text-orange-200 ml-5'># John</span></p>
          <hr className='mt-5' />
        </div>

        <div className='p-3  '>
          <button className='border py-1 border-gray-300 text-sm hover:text-teal-200 hover:border-teal-200 rounded  flex justify-center items-center gap-3 px-5 font-sans font-semibold text-gray-100 '>
            Run Code
            <MdKeyboardDoubleArrowRight />
          </button>
        </div>

      </div>
      <div className='flex flex-col gap-4 '>
        <p className='font-sans text-xl text-gray-500 '>In the above example, we have
          used three single-line comments:</p>

        <div className='flex '>
          <BsDot className='text-gray-500 text-2xl' /><p className=' px-2 rounded  text-gray-500 font-mono border'>
            # declare a variable</p>
        </div>
        <div className='flex '>
          <BsDot className='text-gray-500 text-2xl' /><p className=' px-2 rounded  text-gray-500 font-mono border'>
            # print name</p>
        </div>
        <div className='flex '>
          <BsDot className='text-gray-500 text-2xl' /><p className='  px-2 rounded  text-gray-500 font-mono border'>
            # John</p>
        </div>


      </div>

      <p className='font-sans text-xl text-gray-500 '>A <strong>single-line comment </strong>starts with <span className='px-1 border text-lg rounded'>#</span>  and extends up to the end of the line. We can also <br /> use single-line comments alongside the code:</p>
      <div className='flex rounded px-2 py-4 flex-1 flex-col bg-zinc-700   '>
        <p className='text-white ml-2'> <span className='text-purple-300'>print</span> (name)     <span className='text-orange-200 ml-5'># John</span></p>

      </div>

      
      <div className='border flex bg-slate-50 justify-center items-center border-l-4 border-l-blue-600 p-5'>
          <p className="  font-sans text-xl text-gray-500"><strong>Note</strong>:Remember the keyboard shortcut to apply comments. In most text editors, 
          <br /> it's <strong>Ctrl + /</strong> if you are on Windows & <strong>Cmd + /</strong> if you are on a Mac. </p>
        
        </div>
        <hr className='mt-5' />
<MultilineComments/>
    </div>

  )
}

export default SingleLineComments