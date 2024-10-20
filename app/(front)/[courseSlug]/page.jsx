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
import ComPro from '../components/ComPro';
import Header from '../components/Header';
import Footer from '../components/Footer';






const page = () => {
    return (
        <div>
            <ComPro />
            <Header />
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
                <div className=' flex flex-col  flex-1  bg-red-100  p-10 rounded'>
                    <div className='w-48  h-14 flex justify-center items-center'>
                        <img src="/mainLogo2.png" alt="" className='object-cover w-full' />
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
                <div className=" flex flex-col text-xl font-normal  font-sans  ml-24   text-blue-950 gap-3  text-start  ">
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

            <div className='flex flex-1 h-[auto]  bg-gray-50 justify-center items-center mt-5 py-10 '>
                <div className='flex flex-col text-start gap-5    '>
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
                <div className=" flex flex-col text-lg font-sans ml-10 font-normal   text-blue-950 gap-3  text-start  ">
                    <h1 className='font-sans font-bold text-3xl text-blue-950 '>Is Python for you?</h1>
                    <p >Whether Python is the right choice depends on what you want to accomplish <br /> and your career goals.</p>
                    <h1 className='font-sans font-bold text-3xl text-blue-950 '>Python from Learning Perspective</h1>
                    <p>If you are new to programming and prefer simplicity, Python is probably the right <br /> choice for you.</p>
                </div>

            </div>
            <div className='flex flex-1  flex-col justify-center items-center py-5'>
                <div className=' w-[45%] flex flex-col text-start '><h1 className='py-3 font-sans text-start font-medium text-lg text-blue-950'>Let's see an example.</h1>
                    <div className='flex flex-1 p-6 divide-x-4 bg-blue-50 divide-dashed rounded  border border-gray-300 '>
                        <div className='flex flex-col flex-1 px-5 '>
                            <h1 className='font-sans font-bold text-blue-950 text-4xl'>main.py</h1>
                            <code className='text-lg py-8   text-blue-950'>
                                x = <span className="text-orange-200">5</span> <br />
                                y = <span className="text-orange-200">10</span><br />
                                <span class="text-purple-400">print</span>(x + y)
                            </code>
                        </div>

                        <div className='flex flex-1 flex-col px-5'>
                            <h1 className='font-sans font-bold text-blue-950 text-4xl'>main.c</h1>
                            <code className=' py-8  text-lg text-blue-950'>
                                <span className='text-blue-500'>#include</span> <span className='text-green-300'>&lt;stdio.h&gt;</span><br /><br />
                                <p><span className='text-purple-400'>int</span> <span className='text-blue-500'>main</span>() </p> <br />
                                <p>    <span className='text-purple-400'>int</span> x =<span className='text-orange-200'> 5</span>, y = <span className='text-orange-200'> 10</span>;</p>
                                <p>   <span className='text-orange-300'>printf</span>(<span className='text-green-300'>"%d"</span> , x + y);</p><br />
                                <p>    <span className='text-purple-400'>return</span> <span className='text-orange-200'> 0</span>;</p><br />
                                <span></span>
                            </code>
                        </div>
                    </div>
                </div>

            </div>

            <div className="flex flex-1 flex-col items-center  justify-center mb-20    ">
                <div className=" flex flex-col text-xl font-normal  font-sans  ml-24   text-blue-950 gap-3  text-start  ">

                    <p >Here, both programs in C and Python perform the same task. However, the Python <br />
                        code is much easier to understand, even if you have never been a programmer <br /> before.</p>
                    <p >That being said, there are some advantages to learning languages like C as your
                        <br /> first language. For example, C is much closer to the hardware and allows you to
                        <br /> work with computer memory directly, thus providing you with a deeper <br />
                        understanding of how your code actually works.</p>
                    <p>On the other hand, Python's clear, English-like syntax allows you to concentrate on <br />
                        problem-solving and building logic without being concerned about unnecessary <br />
                        complexities.</p>
                    <p>So, it's up to you whether you want to quickly get started with programming or <br /> really take your time to understand the nitty-gritty parts of programming.</p>
                    <p className='py-2 font-bold text-2xl text-blue-950'>Python as a Career Choice</p>
                    <p>Python is a widely used programming language for creating real-world <br />
                        applications. It is extensively used in:</p>
                    <ul>
                        <li className='flex  items-center'><BsDot className='text-blue-950 text-2xl' />
                            Data Science</li>
                        <li className='flex items-center'><BsDot className='text-blue-950 text-2xl' />
                            Artificial Intelligence</li>
                        <li className='flex itmes-center'><BsDot className='text-blue-950 text-2xl' />
                            Automation</li>
                        <li className='flex items-center'><BsDot className='text-blue-950 text-2xl' />
                            Backend Development</li>
                    </ul>

                    <p>Thus, learning Python offers significant advantages for your career opportunities.</p>
                    <p>However, there are certain fields where Python doesn't excel. For example, if you <br />
                        are interested in frontend development, game development, or mobile app <br />
                        development, then Python is not the best choice.</p>
                    <p>In these cases, alternatives such as JavaScript for frontend development, Kotlin, <br />
                        Swift, or Dart for mobile app development, and C++ for game development will be <br />
                        more suitable.</p>
                    <p>Therefore, your career choices can guide you in selecting which programming <br />
                        language to learn.</p>
                </div>
            </div>

            <div className="flex flex-1 flex-col items-center  justify-center bg-slate-50 py-14   ">
                <div className=" flex flex-col text-xl font-normal  font-sans  ml-24   text-blue-950 gap-3  text-start  ">
                    <h1 className='font-sans font-bold text-4xl text-blue-950 '>Best Way to Learn Python</h1>
                    <p >There is no right or wrong way to learn Python. It all depends on your learning style <br />
                        and pace.</p>

                    <p >In this section, we have included the best Python learning resources tailored to <br />
                        your learning preferences, be it text-based, video-based, or interactive courses.</p>

                    <h1 className='font-sans font-bold text-2xl text-blue-950 '>Text-based Tutorial</h1>

                    <div className='flex gap-1  py-4 px-3 rounded  border border-l-4 border-l-blue-500 font-medium'>
                        <p className='font-sans text-xl font-normal text-gray-500'> <strong>Best:</strong> if you are committed to learning Python but do not want to spend on it</p>
                    </div>
                    <p>If you want to learn Python for free with a well-organized, step-by-step tutorial, <br />
                        you can use our free Python tutorials.</p>

                    <p>Our tutorials will guide you through Python one step at a time, using practical <br />
                        examples to strengthen your foundation.</p>
                    <h1 className='font-sans font-bold text-2xl text-blue-950 '>Interactive Course</h1>
                    <div className='flex gap-1  py-4 px-3 rounded  border border-l-4 border-l-blue-500 font-medium'>
                        <p className='font-sans text-xl font-normal text-gray-500'> <strong>Best:</strong>if you want hands-on learning, get your progress tracked, and <br /> maintain a learning streak</p>
                    </div>
                    <p>Learning to code is tough. It requires dedication and consistency, and you need to <br /> write tons of code yourself.</p>
                    <p>While videos and tutorials provide you with a step-by-step guide, they lack hands- <br /> on experience and structure.</p>
                    <p>Recognizing all these challenges, Programiz offers a premium Learn Python <br /> Course that allows you to gain hands-on learning experience by solving <br /> challenges, building real-world projects, and tracking your progress.</p>
                    <h1 className='font-sans font-bold text-2xl text-blue-950 '>Online Video</h1>

                    <div className='flex gap-1 rounded  py-4 px-3  border border-l-4 border-l-blue-500 font-medium'>
                        <p className='font-sans text-xl font-normal text-gray-500'> <strong>Best:</strong> if you are an audio-visual learner and learn by watching others code <br /> and following along</p>


                    </div>

                    <p>If you're more of a visual learner, we have created a comprehensive Python course <br />
                        for beginners that will guide you on your Python journey.</p>

                    <p>Addit ionally, there's a popular <span className='text-blue-600 cursor-pointer hover:text-blue-900'>Python playlist</span>  by Corey Schafer available on <br />
                        YouTube to further guide you on your Python journey.</p>

                    <p>If you're looking for a structured university course at zero cost, visit <span className='text-blue-600 cursor-pointer hover:text-blue-900'>Python Course <br /> - University of Helsinki.</span>  </p>
                    <h1 className='font-sans font-bold text-2xl text-blue-950 '>Mobile App</h1>

                    <div className='flex gap-1 rounded  py-4 px-3  border border-l-4 border-l-blue-500 font-medium'>
                        <p className='font-sans text-xl font-normal text-gray-500'> <strong>Best:</strong> if you are a casual and hobby learner who wants to learn Python on <br /> the go</p>
                    </div>

                    <p>While it's possible to learn Python from mobile apps, it's not the ideal way because <br /> writing code can be challenging. Additionally, it's difficult to build real-world <br /> projects with multiple files on mobile devices.</p>
                    <p>Nevertheless, you can use these apps to try things out.</p>
                    <ul className='text-blue-600 '>
                        <li className='flex  items-center'><BsDot className='text-blue-950 text-2xl' />
                            Learn Python</li>
                        <li className='flex items-center'><BsDot className='text-blue-950 text-2xl' />
                            Sololearn</li>
                    </ul>
                    <div className='flex rounded  gap-4 itmes-center justify-center py-4 px-3 flex-col border border-l-4 border-l-blue-500 font-medium'>


                    <p className='font-sans text-xl font-normal text-gray-500'> <strong>Important:</strong>You cannot learn to code without developing the habit of writing <br /> code yourself. Therefore, whatever method you choose, always write code.</p>



                        <p className='font-sans text-xl  font-normal  text-gray-500'>While writing code, you will encounter errors. Don't worry about them, try to <br />
                            understand them and find solutions. Remember, programming is all about <br /> solving problems, and errors are part of the process.</p>


                    </div>
                </div>
            </div>

            <div className='flex flex-1 justify-center items-center py-10 '>
                <div className='flex flex-col text-start gap-5 ml-20'>
                    <h1 className='font-sans font-bold text-3xl text-blue-950 '>How to Run Python?</h1>
                    <h1 className='font-sans font-bold text-xl text-blue-950 '>1. Run Python in your browser.</h1>
                    <p className='font-sans text-xl  font-normal  text-blue-950'>We have created an <span className='text-blue-600 cursor-pointer hover:text-blue-900'>online editor</span>  to run Python directly in your browser. You don't <br />
                        have to go through a tedious installation process. It's completely free, and you can <br />
                        start coding directly.</p>
                    <div className='flex flex-col p-5 w-full h-[60vh] border rounded gap-4 bg-slate-100'>
                        <div className='flex h-[80%] '>
                            <img src="/compiler.png" alt="" className=' object-fit w-full' />

                        </div>

                        <div className=' bg-blue-600 flex justify-center items-center hover:bg-blue-800 cursor-pointer  gap-1 rounded   w-[33%] text-lg font-sans font- p-2 font-medium text-white' >Run Python Online
                            <IoIosArrowForward className='' />

                        </div>

                    </div>

                    <h1 className='font-sans font-bold text-xl text-blue-950 '>2. Install Python on Your computer.</h1>
                    <p className='font-sans text-xl  font-normal  text-blue-950'>Once you start writing complex programs and creating projects, you should <br />

                        definitely install Python on your computer. This is especially necessary when you <br /> are working with projects that involve multiple files and folders.</p>
                    <p className='font-sans text-xl  font-normal  text-blue-950'>To install Python on your device, you can use this guide.</p>
                    <div className='flex flex-1 border rounded  '>
                        <div className='flex flex-[0.9] rounded h-[35vh] '>
                            <img src="/learn-python.png" alt="" className='object-cover w-full' />
                        </div>
                        <div className='flex flex-col gap-5 flex-1 h-[35vh]  p-5'>
                            <h1 className='font-sans font-bold text-2xl text-blue-950 '>Getting Started with Python</h1>
                            <p className='font-sans text-xl  font-normal  text-blue-950'>Learn how you can install and use <br />Python on your own computer.</p>
                            <div className=' bg-blue-600 flex justify-center items-center hover:bg-blue-800 cursor-pointer  gap-1 rounded    text-lg font-sans font- p-2 font-medium text-white' >Learn more
                                <IoIosArrowForward className='' />

                            </div>
                        </div>

                    </div>

                </div>

            </div>

            <Footer />
        </div>
    )
}

export default page