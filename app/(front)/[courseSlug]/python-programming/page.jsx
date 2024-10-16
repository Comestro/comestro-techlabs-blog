import React from 'react'
import { RiBookLine } from "react-icons/ri";
import { TfiAlignLeft } from "react-icons/tfi";
import { LuBox } from "react-icons/lu";
import { TbCodeCircle2 } from "react-icons/tb";
import { IoIosArrowForward } from "react-icons/io";
import { PiUsers } from "react-icons/pi";
import { GoCodeSquare } from "react-icons/go";
import { FaRocket } from "react-icons/fa6";
import { PiMedalLight } from "react-icons/pi";
import { BsDot } from "react-icons/bs";






const page = () => {
    return (
        <div>
            <div className='flex flex-1 h-[40vh] bg-blue-200 justify-center'>
                <div className=' flex   flex-col justify-center items-center gap-3 '>
                    <div className='border border-gray-700 rounded h-14 w-14 '>
                        <img alt="Python-Logo" className="w-14   " src="/python-logo.svg" title="Python" />
                    </div>
                    <h1 className='font-sans text-3xl font-bold text-gray-700'>Learn Python Programming</h1>
                    <div className='flex mt-8 '>
                        <div className='flex justify-center items-center bg-slate-100 px-2 py-1 rounded gap-1 font-sans font-medium text-gray-700'>
                            <RiBookLine />
                            <p>TUTORIALS</p>
                        </div>

                        <div className='flex justify-center items-center text-sm hover:bg-slate-100 px-2 py-1 rounded gap-1 font-sans font-medium text-gray-600'>
                            <img src="/pro-logo.svg" alt="" className='w-6' />
                            <p >COURSES</p>
                        </div>

                        <div className='flex justify-center items-center text-sm hover:bg-slate-100 px-2 py-1 rounded gap-1 font-sans font-medium text-gray-600'>
                            <TfiAlignLeft />
                            <p>EXAMPLES</p>
                        </div>

                        <div className='flex justify-center items-center text-sm hover:bg-slate-100 px-2 py-1 rounded gap-1 font-sans font-medium text-gray-600'>
                            <LuBox />
                            <p>REFERENCES</p>
                        </div>

                        <div className='flex justify-center items-center text-sm hover:bg-slate-100 px-2 py-1 rounded gap-1 font-sans font-medium text-gray-600'>
                            <TbCodeCircle2 />

                            <p>ONLINE COMPILER</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-1 justify-center py-14 px-[14%] '>
                <div className=' flex flex-col  flex-1  bg-red-100 h-[55vh] py-5 px-10'>
                    <div className='w-48  h-14 flex justify-center items-center'>
                        <img src="/programize-logo.svg" alt="" className='object-cover w-full' />
                    </div>
                    <div className='flex flex-1'>
                        <div className='flex flex-col mt-8 gap-3'>
                            <p className='font-sans font-semibold text-red-400'>Recommended Course:</p>
                            <h1 className='font-sans font-bold text-3xl text-blue-950 '>Master Python Programming</h1>
                            <p className='font-sans  font-normal text-blue-950'>Perfect for beginners serious about building a career in Python.</p>
                            <p className='font-sans  font-normal text-blue-950'>Created by the Programiz team with over a decade of experience.</p>
                            <div className=' bg-blue-600 flex justify-center items-center hover:bg-blue-800 cursor-pointer  gap-1 rounded   w-[30%] text-2xl font-sans font-semibold p-2 text-white' >Try Now
                                <IoIosArrowForward className='mt-2' />

                            </div>

                        </div>

                        <div className='flex flex-1  justify-center '>
                            <div className='flex flex-1 justify-end px-2 mt-8 '>
                                <ul className='font-sans text-lg  font-semibold text-start text-blue-950'>

                                    <li className='flex  items-center'>
                                        <PiUsers className='text-2xl mr-2' />
                                        Enrollment: 317k </li>

                                    <li className='flex mt-3 items-center' >
                                        <GoCodeSquare className='text-2xl mr-2' />


                                        Practice Problems: 239+  </li>
                                    <li className='flex mt-3 items-center' >
                                        <FaRocket className='text-2xl mr-2' />

                                        Projects: 5+    </li>

                                    <li className='flex mt-3 items-center'>
                                        <PiMedalLight className='text-2xl mr-2' />

                                        Certifications
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-1 flex-col items-center  justify-center    ">
                <div className=" flex flex-col text-xl font-sans  font-normal   text-blue-950 gap-3  text-start  ">
                    <p >Python is one of the top programming languages in the world, widely used in fields <br /> such as AI, machine learning, data science, and web development.</p>

                    <p >The simple and English-like syntax of Python makes it a go-to language for <br /> beginners who want to get into coding quickly.</p>

                    <p>Because Python is used in multiple fields, there is a high demand for Python <br /> developers, with competitive base salaries.</p>

                    <p className='font-medium'>In this guide, we will cover:</p>

                    <ul className='text-blue-600 '>
                        <li className='flex  items-center'><BsDot className='text-blue-950 text-2xl' />
                            Beginner's Guide to Python</li>
                        <li className='flex items-center'><BsDot className='text-blue-950 text-2xl' />
                            Is Python for you?</li>
                        <li className='flex itmes-center'><BsDot className='text-blue-950 text-2xl' />
                            Best Way to Learn Python</li>
                        <li className='flex items-center'><BsDot className='text-blue-950 text-2xl' />
                            How to Run Python?</li>
                    </ul>

                    <p>If you are simply looking to learn Python step-by-step, you can follow our free <br /> tutorials in the next section.</p>            </div>
            </div>

            <div className='flex flex-1 h-[auto] bg-gray-50 justify-center items-center mt-5 py-10 '>
                <div className='flex flex-col text-start gap-5   mr-24 '>
                    <h1 className='font-sans font-bold text-3xl text-blue-950 '>Beginner's Guide to Python</h1>
                    <p className='font-sans font-normal text-xl text-blue-950'>These tutorials will provide you with a solid foundation in Python and <br /> prepare you for your career goals.</p>

                    <div className='flex  px-5 flex-col border rounded border-gray-300 bg-white '>
                        <div className='flex items-center  gap-2 text-blue-950 py-4'>
                            <IoIosArrowForward className='text-xl' />
                            <h1 className='font-sans font-semibold text-lg '>Introduction</h1>


                        </div>
                        <hr />

                        <div className='flex items-center  gap-2 text-blue-950 py-4'>
                            <IoIosArrowForward className='text-xl' />
                            <h1 className='font-sans font-semibold text-lg '>Python Fundamentals</h1>


                        </div>
                        <hr />

                        <div className='flex items-center  gap-2 text-blue-950 py-4'>
                            <IoIosArrowForward className='text-xl' />
                            <h1 className='font-sans font-semibold text-lg '>Python Flow Control</h1>


                        </div>
                        <hr />

                        <div className='flex items-center  gap-2 text-blue-950 py-4'>
                            <IoIosArrowForward className='text-xl' />
                            <h1 className='font-sans font-semibold text-lg '>Python Data Types</h1>


                        </div>
                        <hr />

                        <div className='flex items-center  gap-2 text-blue-950 py-4'>
                            <IoIosArrowForward className='text-xl' />
                            <h1 className='font-sans font-semibold text-lg '>Python Function</h1>


                        </div>
                        <hr />

                        <div className='flex items-center  gap-2 text-blue-950 py-4'>
                            <IoIosArrowForward className='text-xl' />
                            <h1 className='font-sans font-semibold text-lg '>Python Files</h1>


                        </div>
                        <hr />

                        <div className='flex items-center  gap-2 text-blue-950 py-4'>
                            <IoIosArrowForward className='text-xl' />
                            <h1 className='font-sans font-semibold text-lg '>Python Exception Handling </h1>


                        </div>
                        <hr />

                        <div className='flex items-center  gap-2 text-blue-950 py-4'>
                            <IoIosArrowForward className='text-xl' />
                            <h1 className='font-sans font-semibold text-lg '>Python Object and Class</h1>


                        </div>
                        <hr />

                        <div className='flex items-center  gap-2 text-blue-950 py-4'>
                            <IoIosArrowForward className='text-xl' />
                            <h1 className='font-sans font-semibold text-lg '>Python Advance Topics </h1>


                        </div>
                        <hr />

                        <div className='flex items-center  gap-2 text-blue-950 py-4'>
                            <IoIosArrowForward className='text-xl' />
                            <h1 className='font-sans font-semibold text-lg '>Python Data and Time</h1>


                        </div>
                        <hr />

                        <div className='flex items-center  gap-2 text-blue-950 py-4'>
                            <IoIosArrowForward className='text-xl' />
                            <h1 className='font-sans font-semibold text-lg '>Additionl Topic</h1>


                        </div>
                        <hr />


                    </div>

                </div>

            </div>

            <div className="flex flex-1 flex-col items-center  justify-center    ">
            <div className=" flex flex-col text-xl font-sans  font-normal   text-blue-950 gap-3  text-start  ">
            <h1 className='font-sans font-bold text-3xl text-blue-950 '>Is Python for you?</h1>
            <p >Whether Python is the right choice depends on what you want to accomplish <br /> and your career goals.</p>
            <h1 className='font-sans font-bold text-3xl text-blue-950 '>Python from Learning Perspective</h1>
            <p>If you are new to programming and prefer simplicity, Python is probably the right <br /> choice for you.</p>
            </div>
           
            </div>
        </div>
    )
}

export default page