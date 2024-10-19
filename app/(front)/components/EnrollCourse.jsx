"use client"
import { FaCircle } from "react-icons/fa";
import { IoMdArrowRoundForward } from "react-icons/io";
import { useState , useEffect } from "react";
import { Covers } from "./Covers";


const EnrollCourse = () => {

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(()=>{
    const interval =setInterval(()=>{
      setCurrentImageIndex((prevIndex)=>
        prevIndex === Covers.length - 1 ? 0 : prevIndex + 1
      );
    },4000);
    return ()=>
      clearInterval(interval);
  },[Covers.length])

  return (
    <div className="bg-gray-50 p-28 flex flex-col gap-16">
      <div className="flex gap-28">
      <div className="w-6/12 flex flex-col gap-10">
        <h1 className="text-blue-950 font-bold text-4xl font-sans">
          Land your first job with <br /> our learning paths!
        </h1>
        <div className="flex flex-col gap-4">
            <div className="flex gap-3 items-center">
                <FaCircle className="text-gray-400 text-lg" />
                <p className="text-lg text-gray-700 font-sans font-semibold"> Interactive and Highly Intuitive Lessons</p>
            </div>
            <div className="flex gap-3 items-center">
                <FaCircle className="text-gray-400 text-lg" />
                <p className="text-lg text-gray-700 font-sans font-semibold"> Save Time, Save Money</p>
            </div>
            <div className="flex gap-3 items-center">
                <FaCircle className="text-gray-400 text-lg" />
                <p className="text-lg text-gray-700 font-sans font-semibold"> Build Projects, Get Certified</p>
            </div>
        </div>
        <button className="bg-blue-600 hover:bg-blue-900 transition text-white px-3 py-2 rounded text-lg font-bold font-sans w-fit">Join for FREE</button>
      </div>
      <img src={Covers[currentImageIndex]} alt="cover2" className=' border-8 rounded-3xl border-black' />
      </div>
      <div className="flex  p-2 gap-5">
        <div className="flex flex-col w-3/12 gap-5">
            <h2 className="text-blue-950 font-bold text-3xl font-sans">Enroll now <br /> for FREE</h2>
            <p className="font-sans text-lg ">Try our courses for <br /> FREE now! Start from <br /> our  most popular <br /> courses.</p>
        </div>
        <div className="grid grid-cols-5  gap-5">
            <div className="bg-white px-3 pt-4 rounded shadow-lg hover:scale-105 transition border gap-3 flex flex-col">
              <h2 className=" font-bold text-lg text-blue-950">Interactive <br />python course</h2>
              <img src="pythonCourse.png" alt="" />
            </div>
            <div className="bg-white px-3 pt-4 rounded shadow-lg hover:scale-105 transition border gap-3 flex flex-col">
              <h2 className=" font-bold text-lg text-blue-950">Interactive <br />C Course</h2>
              <img src="c-programming.png" alt="" />
            </div>
            <div className="bg-white px-3 pt-4 rounded shadow-lg hover:scale-105 transition border gap-3 flex flex-col">
              <h2 className=" font-bold text-lg text-blue-950">Interactive <br />Java course</h2>
              <img src="java.png" alt="" />
            </div>
            <div className="bg-white px-3 pt-4 rounded shadow-lg hover:scale-105 transition border gap-3 flex flex-col">
              <h2 className=" font-bold text-lg text-blue-950">Interactive <br />C++ course</h2>
              <img src="cpp.png" alt="" />
            </div>
            <div className="bg-white px-3 pt-4 rounded shadow-lg hover:scale-105 transition border gap-3 justify-center items-center flex flex-col">
              <h2 className=" font-bold text-lg text-blue-500">View all <br />courses</h2>
              <IoMdArrowRoundForward className="text-xl text-blue-500" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default EnrollCourse;
