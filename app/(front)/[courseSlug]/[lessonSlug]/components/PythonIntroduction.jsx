import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import PythonTutorial from './PythonTutorial';

const pythonIntroduction = () => {
  return (
    <div className='flex flex-1  py-10 flex-col gap-10   px-[5%] justify-end items-end'>
      < div className='flex   flex-col border rounded w-[75%] justify-between  border-gray-300 bg-white '>
                        <div className='flex px-5 items-center justify-between gap-2 text-blue-950 py-4'>
                           
                            <h1 className='font-sans font-semibold  '>Pyhton Introduction</h1>
                            <IoIosArrowForward className='text-xl text-gray-400' />
                        </div>
                        <hr />

                        <div className='flex px-5 items-center justify-between gap-2 text-blue-950 py-4'>
                           
                            <h1 className='font-sans font-semibold  '>Pyhton Fundamentals</h1>
                            <IoIosArrowForward className='text-xl text-gray-400' />


                        </div>
                        <hr />


                        <div className='flex px-5 items-center justify-between gap-2 text-blue-950 py-4'>
                           
                            <h1 className='font-sans font-semibold  '>Pyhton  Flow Control</h1>
                            <IoIosArrowForward className='text-xl text-gray-400' />


                        </div>
                        <hr />


                        <div className='flex px-5 items-center justify-between gap-2 text-blue-950 py-4'>
                           
                           <h1 className='font-sans font-semibold  '>Pyhton Data Types</h1>
                           <IoIosArrowForward className='text-xl text-gray-400' />


                       </div>
                       <hr />


                       <div className='flex px-5 items-center justify-between gap-2 text-blue-950 py-4'>
                           
                           <h1 className='font-sans font-semibold  '>Pyhton Function</h1>
                           <IoIosArrowForward className='text-xl text-gray-400' />


                       </div>
                       <hr />


                       <div className='flex px-5 items-center justify-between gap-2 text-blue-950 py-4'>
                           
                           <h1 className='font-sans font-semibold  '>Pyhton Files</h1>
                           <IoIosArrowForward className='text-xl text-gray-400' />


                       </div>
                       <hr />


                       <div className='flex px-5 items-center justify-between gap-2 text-blue-950 py-4'>
                           
                           <h1 className='font-sans font-semibold  '>Pyhton Exception Handling</h1>
                           <IoIosArrowForward className='text-xl text-gray-400' />


                       </div>
                       <hr />


                       <div className='flex px-5 items-center justify-between gap-2 text-blue-950 py-4'>
                           
                           <h1 className='font-sans font-semibold  '>Pyhton Object and Class</h1>
                           <IoIosArrowForward className='text-xl text-gray-400' />


                       </div>
                       <hr />


                       <div className='flex px-5 items-center justify-between gap-2 text-blue-950 py-4'>
                           
                           <h1 className='font-sans font-semibold  '>Pyhton Advance Topics</h1>
                           <IoIosArrowForward className='text-xl text-gray-400' />


                       </div>
                       <hr />


                       <div className='flex px-5 items-center justify-between gap-2 text-blue-950 py-4'>
                           
                           <h1 className='font-sans font-semibold  '>Pyhton Data and Time</h1>
                           <IoIosArrowForward className='text-xl text-gray-400' />


                       </div>
                       <hr />


                       <div className='flex px-5 items-center justify-between gap-2 text-blue-950 py-4'>
                           
                           <h1 className='font-sans font-medium  '>Pyhton Additionl Topic</h1>
                           <IoIosArrowForward className='text-xl text-gray-400' />


                       </div>
                       <hr />



                    </div>

                    <PythonTutorial/>

                    <div className='w-[75%]'>
                      <img src="/premiumCoding.png" alt="" />

                    </div>
                    
    </div>
  )
}

export default pythonIntroduction