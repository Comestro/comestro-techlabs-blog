import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { PiUsers } from "react-icons/pi";
import { GoCodeSquare } from "react-icons/go";
import { FaRocket } from "react-icons/fa6";
import { PiMedalLight } from "react-icons/pi";
import { SiAzuredataexplorer } from "react-icons/si";




const ProVersion = () => {
    return (
        <div>
            <div className='flex flex-1 flex-col justify-center py-5 px-[4%] '>
                <div className=' flex flex-col  flex-1  bg-blue-500 rounded p-10'>
                    <div className='  h-16 flex text-start items-center'>
                        <h1 className='font-sans text-4xl  font-bold text-white '>Comestro<span className=' rounded-lg border-2 px-1 text-2xl '>PRO</span></h1>
                    </div>
                    <div className='flex flex-1'>
                        <div className='flex flex-col mt-5 gap-5'>

                            <p className='font-sans text-xl  font-semibold text-white'>Our premium learning platform, created with over a decade <br /> of experience and thousands of feedbacks.</p>
                            <p className='font-sans text-xl  font-semibold text-white'>Learn and improve your coding skills like never before.</p>
                            <div className=' bg-white flex justify-center items-center hover:bg-gray-100 cursor-pointer text-blue-950 gap-1 rounded   w-[40%] text-xl font-sans font-semibold p-2 ' >Try Comestro PRO


                            </div>

                        </div>

                        <div className='flex flex-1  justify-center '>
                            <div className='flex flex-1 justify-end px-2  '>
                                <ul className='font-sans text-lg   font-semibold text-start text-white'>

                                    <li className='flex  items-center'>
                                        <GoCodeSquare className='text-2xl mr-2' />
                                        Interactive Courses </li>

                                    <li className='flex mt-3 items-center' >
                                        <PiMedalLight className='text-2xl mr-2' />


                                        Certificates</li>
                                    <li className='flex mt-3 items-center' >
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.3119 2.39453C12.7862 5.67399 12.3445 7.62349 11.1324 8.83554C9.92037 10.0476 7.97087 10.4893 4.69141 11.015C7.97087 11.5407 9.92037 11.9825 11.1324 13.1982C12.3445 14.4102 12.7862 16.3597 13.3119 19.6417C13.8376 16.3597 14.2794 14.4102 15.4914 13.1945C16.7071 11.9825 18.6566 11.5407 21.9386 11.015C18.6566 10.4893 16.7071 10.0476 15.4951 8.83554C14.2794 7.62349 13.8376 5.67399 13.3119 2.39453Z" fill="white"></path>
                                            <path d="M3.61207 3.47266C3.4149 4.70264 3.24922 5.4338 2.79464 5.88839C2.34005 6.34297 1.60889 6.50865 0.378906 6.70582C1.60889 6.90299 2.34005 7.06867 2.79464 7.52462C3.24922 7.9792 3.4149 8.71037 3.61207 9.94131C3.80924 8.71037 3.97492 7.9792 4.4295 7.52325C4.88545 7.06867 5.61662 6.90299 6.84756 6.70582C5.61662 6.50865 4.88545 6.34297 4.43087 5.88839C3.97492 5.4338 3.80924 4.70264 3.61207 3.47266Z" fill="white"></path>
                                            <path d="M6.84254 13.1738C6.64537 14.4038 6.47969 15.135 6.02511 15.5896C5.57052 16.0441 4.83935 16.2098 3.60938 16.407C4.83935 16.6042 5.57052 16.7698 6.02511 17.2258C6.47969 17.6804 6.64537 18.4115 6.84254 19.6425C7.03971 18.4115 7.20538 17.6804 7.65997 17.2244C8.11592 16.7698 8.84709 16.6042 10.078 16.407C8.84709 16.2098 8.11592 16.0441 7.66134 15.5896C7.20538 15.135 7.03971 14.4038 6.84254 13.1738Z" fill="white"></path>
                                        </svg>

                                        AI Help  </li>

                                    <li className='flex mt-3 items-center'>

                                        <SiAzuredataexplorer className='text-2xl mr-2' />
                                        2000+ Challenges
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <h1 className='font-sans text-2xl py-5 font-bold text-blue-950'>Related Tutorials</h1>
                <div className='grid grid-cols-4 gap-5'>
                    <div className='flex flex-col hover:scale-105 transition gap-3 p-5 shadow-xl border-white rounded-lg border-t-4 border-t-blue-500 h-[20vh] border'>
                        <p className='text-sm font-san text-gray-500'>Python Tutorial</p>
                        <p className='font-sans font-bold text-lg text-gray-600'>Python comments</p>
                    </div>

                    <div className='flex flex-col hover:scale-105 transition gap-3 p-5 shadow-xl border-white rounded-lg border-t-4 border-t-blue-500 h-[20vh] border'>
                        <p className='text-sm font-san text-gray-500'>Python Tutorial</p>
                        <p className='font-sans font-bold text-lg text-gray-600'>Your First python Program</p>
                    </div>

                    <div className='flex flex-col hover:scale-105 transition gap-3 p-5 shadow-xl border-white rounded-lg border-t-4 border-t-blue-500 h-[20vh] border'>
                        <p className='text-sm font-san text-gray-500'>Python Tutorial</p>
                        <p className='font-sans font-bold text-lg text-gray-600'>Python Docstrings</p>
                    </div>

                    <div className='flex flex-col hover:scale-105 transition gap-3 p-5 shadow-xl border-white rounded-lg border-t-4 border-t-blue-500 h-[20vh] border'>
                        <p className='text-sm font-san text-gray-500'>Python Tutorial</p>
                        <p className='font-sans font-bold text-lg text-gray-600'>Python pass Statement</p>
                    </div>

                    

                </div>
            </div>

        </div>
    )
}

export default ProVersion