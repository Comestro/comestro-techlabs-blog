import React from 'react'
import { FiCopy } from "react-icons/fi";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { BsDot } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import { TbBrandFacebook } from "react-icons/tb";
import { CiTwitter } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { LiaLinkedinIn } from "react-icons/lia";
import { BsEmojiGrin } from "react-icons/bs";
import {BsEmojiFrown} from "react-icons/bs";

const MultilineComments = () => {
    return (
        <div className='flex flex-1 gap-5 flex-col'>
            <h1 className='text-4xl font-bold text-blue-950 font-sans  '>Multiline Comments</h1>
            <p className='font-sans text-xl text-gray-500 '>Unlike languages such as C++ and Java, Python doesn't have a dedicated method to <br />
                write multi-line comments.</p>
            <p className='font-sans text-xl text-gray-500 '>However, we can achieve the same effect by using the hash ( <span className='border text-sm px-1 rounded'>#</span> ) symbol at the beginning <br /> of each line.</p>
            <p className='font-sans text-xl text-gray-500 '>Let's look at an example.</p>

            <div className='flex  flex-1 flex-col bg-zinc-700  justify-end  items-end'>
                <div className='flex shadow-sm p-1 cursor-pointer hover:bg-slate-950 bg-slate-900 justify-center items-center rounded-full h-7 w-7 m-1'>
                    <FiCopy className='text-gray-100' />
                </div>

                <div className='flex  w-full text-start flex-col'>
                    <p className='text-orange-200 ml-3 '># This is an example of a multiline comment</p>
                    <p className='text-orange-200 ml-3 '># created using multiple single-line commenced</p>
                    <p className='text-orange-200 ml-3 '># The code prints the text Hello World</p>
                    <p className='text-gray-100 ml-3 '> <span className='text-purple-500'>print</span> ( <span className='text-green-300'>"Hello, World!"</span> ) </p>

                    <hr className='mt-5' />
                </div>



                <div className='p-3  '>
                    <button className='border py-1 border-gray-300 text-sm hover:text-teal-200 hover:border-teal-200 rounded  flex justify-center items-center gap-3 px-5 font-sans font-semibold text-gray-100 '>
                        Run Code
                        <MdKeyboardDoubleArrowRight />
                    </button>
                </div>

            </div>
            <p className='font-sans text-xl text-gray-500 '>We can also use multiline strings as comments like:</p>
            <div className='flex  flex-1 flex-col bg-zinc-700  justify-end  items-end'>
                <div className='flex shadow-sm p-1 cursor-pointer hover:bg-slate-950 bg-slate-900 justify-center items-center rounded-full h-7 w-7 m-1'>
                    <FiCopy className='text-gray-100' />
                </div>

                <div className='flex  w-full text-start flex-col'>
                    <p className='text-orange-200 ml-3 '>'''This is an example </p>
                    <p className='text-orange-200 ml-3 '>of multiline comment'''</p>
                    <p className='text-gray-100 ml-3 '> <span className='text-purple-500'>print</span> ( <span className='text-green-300'>"Hello, World!"</span> ) </p>

                    <hr className='mt-5' />
                </div>



                <div className='p-3  '>
                    <button className='border py-1 border-gray-300 text-sm hover:text-teal-200 hover:border-teal-200 rounded  flex justify-center items-center gap-3 px-5 font-sans font-semibold text-gray-100 '>
                        Run Code
                        <MdKeyboardDoubleArrowRight />
                    </button>
                </div>
            </div>
            <strong className='font-sans text-xl text-gray-500 '>Output</strong>
            <div className='flex  flex-1 flex-col rounded bg-zinc-700  p-4 '>
            <p className='text-gray-300  font-sans '>Hello World</p>
            </div>

            <div className='border flex bg-slate-50 justify-center items-center border-l-4 border-l-blue-600 p-5'>
          <p className="  font-sans text-xl text-gray-500"><strong>Note</strong>:Remember you will learn about these programming concepts in upcoming <br /> tutorials. For now. you can just focus on the usage of comments. </p>
        
        </div>
        <hr className='mt-5' />

       <div className='flex flex-1 gap-5 flex-col py-5'>
       <h1 className='text-3xl font-bold text-blue-950 font-sans   '>Prevent Executing Code Using Comments</h1>
        <p className="  font-sans text-xl text-gray-500">Comments are valuable when debugging code.</p>

        <p className="  font-sans text-xl text-gray-500">If we encounter an error while running a program, instead of removing code segments, we <br />
         can comment them out to prevent execution. For example, </p>
       
         <div className='flex  flex-1 flex-col bg-zinc-700  justify-end  items-end'>
                <div className='flex shadow-sm p-1 cursor-pointer hover:bg-slate-950 bg-slate-900 justify-center items-center rounded-full h-7 w-7 m-1'>
                    <FiCopy className='text-gray-100' />
                </div>

                <div className='flex  w-full text-start flex-col'>
                    <p className='text-gray-200 ml-3 '>number1 =  <span className='text-orange-200'>10</span> </p>
                    <p className='text-gray-200 ml-3 '>number1 =  <span className='text-orange-200'>10</span> </p>
                    <p className='text-gray-200 ml-3 py-3 '>sum = number1 + number2 </p>
                    <p className='text-gray-100 ml-3 '> <span className='text-purple-500'>print</span> ( <span className='text-green-300'>"The sum is:"</span> , sum ) </p>
                    <p className='text-orange-200 ml-3 '># print('The product is:', product)</p>
                    <hr className='mt-5' />
                </div>



                <div className='p-3  '>
                    <button className='border py-1 border-gray-300 text-sm hover:text-teal-200 hover:border-teal-200 rounded  flex justify-center items-center gap-3 px-5 font-sans font-semibold text-gray-100 '>
                        Run Code
                        <MdKeyboardDoubleArrowRight />
                    </button>
                </div>

            </div>
            <strong className='font-sans text-xl text-gray-500 '>Output</strong>
            <div className='flex  flex-1 flex-col rounded bg-zinc-700  p-4 '>
            <p className='text-gray-300  font-sans '>The sum is 25</p>
            </div>

            <p className="  font-sans text-xl text-gray-500">Here, the code runs without any errors.</p>
            <p className="  font-sans text-xl text-gray-500">We have resolved the error using a comment. Now if you need to calculate the <span className='px-1  border text-lg font-sans rounded'>product </span>  in <br /> the near future, you can uncomment it.</p>
           
            <div className='border flex bg-slate-50 justify-center items-center border-l-4 border-l-blue-600 p-5'>
          <p className="  font-sans text-xl text-gray-500"><strong>Note</strong>:This approach comes in handy while working with large files. Instead of <br />
           deleting any line, we can use comments and identify which one is causing an error. </p>
        
        </div>
        <hr className='mt-5' /> 

       </div>
       <div className='flex flex-1 gap-5 flex-col py-5'>
       <h1 className='text-4xl font-bold text-blue-950 font-sans   '>Why Use Comments?</h1>
       <p className="  font-sans text-xl text-gray-500">We should use comments:</p>
       <div className='flex '>
          <BsDot className='text-gray-500 text-2xl' /><p className='   font-sans text-xl text-gray-500 '>
          For future references, as comments make our code readable.</p>
        </div>
        <div className='flex '>
          <BsDot className='text-gray-500 text-2xl' /><p className=' font-sans text-xl text-gray-500'>
          For debugging.</p>
        </div>
        <div className='flex '>
          <BsDot className='text-gray-500 text-2xl' /><p className='  font-sans text-xl text-gray-500'>
          For code collaboration, as comments help peer developers to understand each other's <br /> code.</p>
        </div>
         
        <div className='border flex flex-col gap-3 bg-slate-50 justify-center items-center border-l-4 border-l-blue-600 p-5'>
          <p className="  font-sans text-xl text-gray-500"><strong>Note</strong>: Comments are not and should not be used as a substitute to explain poorly <br />
           written code. Always try to write clean, understandable code, and then use <br />
            comments as an addition. </p>
            <p className="  font-sans text-xl text-gray-500">In most cases, always use comments to explain 'why' rather than 'how' and you are <br /> good to go. </p>
        
        
        </div>

        <p className="  font-sans text-xl text-gray-500">Next, we will start learning fundamental concepts of Python programming.</p>
        
        <hr className='mt-5' /> 
       </div>
       <div class="programiz-youtube-wrapper lite-youtube">
        <h2 className='text-3xl mb-10 font-bold text-blue-950 font-sans '>Video: Comments in Python</h2>

        <div class="programiz-youtube__container">
        <iframe width="760" height="415" src="https://www.youtube.com/embed/4eDIEc4Cwis?si=s8oKThjSvTpgaFsD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    </div>
    <hr className='mt-5' /> 
    <div className='flex felx-1 gap-32 justify-between'>
        <div className='flex flex-[0.8] text-right flex-col p-5 cursor-pointer rounded hover:border'>
        
                    <div className=" text-gray-700  font-sans font-bold">Previous Tutorial:</div>
                    <div className="font-sans text-lg text-blue-700 font-bold">Your First Python Program</div>
                
        </div>
        <div className='flex flex-1 text-right hover:bg-blue-800 cursor-pointer  bg-blue-600 justify-between items-center gap-5 p-5   rounded border  '>
        <div className="flex flex-1 flex-col">
                    <div className="text-gray-300  font-sans font-bold">Next Tutorial:</div>
                    <div className="font-sans text-lg text-white font-bold">Python Variables and Literals</div>
                </div>
                <FaArrowRight className='text-xl text-white' />

            </div>  
    </div>
    <div className='flex flex-1 p-5  items-center justify-center bg-slate-50 rounded border'>
        <div className='flex flex-1 flex-col gap-1 '>
            <p className='font-sans text-gray-500 font-medium'>Share on:</p>
            <ul className='flex gap-3 text-blue-600 '>
                <li className=' flex justify-center border-blue-600 hover:border-teal-400 hover:text-teal-400 cursor-pointer items-center text-blue-600 w-9 h-9 rounded-full border-2'><TbBrandFacebook  /></li>
                <li className=' flex justify-center border-blue-600 hover:border-teal-400 hover:text-teal-400 cursor-pointer items-center w-9 h-9 rounded-full border-2'>< CiTwitter /></li>
                <li className=' flex justify-center border-blue-600 hover:border-teal-400 hover:text-teal-400 cursor-pointer items-center w-9 h-9 rounded-full border-2'><FaWhatsapp /></li>
                <li className=' flex justify-center border-blue-600 hover:border-teal-400 hover:text-teal-400 cursor-pointer items-center w-9 h-9 rounded-full border-2'><LiaLinkedinIn />
                </li>
            </ul>
        </div>
        <div className='flex flex-[0.5]  flex-col gap-2  '>
            <p className='font-sans  text-gray-500 font-medium'>Did you find this article helpful?</p>
            <div className='flex  w-[80%] border-2 border-purple-500 justify-between  divide-x-4 divide-solid divide-purple-500  '>
                <div className=' flex p-2 w-16 h-16  itmes-center justify-center   '>
                <img src="/sademoji1 (2).png" alt="" className='ml-2'  />
                </div>
                <div className='flex  w-[50%] justify-end items-center px-5  '>
               <img src="/sademoji1 (1).png" alt="" className=' w-12 h-12 ' />
                </div>
            </div>

        </div>

    </div>
        </div>
    )
}

export default MultilineComments