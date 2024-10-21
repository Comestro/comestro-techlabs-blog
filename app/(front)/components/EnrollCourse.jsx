"use client";
import { FaCircle } from "react-icons/fa";
import { IoMdArrowRoundForward } from "react-icons/io";
import { useState, useEffect } from "react";
import { Covers } from "./Covers";

const EnrollCourse = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === Covers.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [Covers.length]);

  return (
    <div className="bg-gray-50 p-4 md:p-12 lg:p-28 flex flex-col gap-8 lg:gap-16">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-28">
        <div className="w-full lg:w-6/12 flex flex-col gap-10">
          <h1 className="text-blue-950 font-bold text-2xl md:text-3xl lg:text-4xl font-sans">
            Land your first job with <br /> our learning paths!
          </h1>
          <div className="flex flex-col gap-4">
            {["Interactive and Highly Intuitive Lessons", "Save Time, Save Money", "Build Projects, Get Certified"].map((text, index) => (
              <div key={index} className="flex gap-3 items-center">
                <FaCircle className="text-gray-400 text-lg" />
                <p className="text-lg text-gray-700 font-sans font-semibold">{text}</p>
              </div>
            ))}
          </div>
          <button className="bg-blue-600 hover:bg-blue-900 transition w-full text-white px-3 py-2 rounded text-lg font-bold font-sans md:w-fit lg:w-fit">
            Join for FREE
          </button>
        </div>
        <img src={Covers[currentImageIndex]} alt="cover" className="w-full h-auto border-8 rounded-3xl border-black" />
      </div>
      <div className="flex flex-col md:flex-row p-2 gap-5">
        <div className="flex flex-col lg:block hidden w-full md:w-3/12 gap-5">
          <h2 className="text-blue-950 font-bold text-2xl md:text-3xl font-sans">Enroll now <br /> for FREE</h2>
          <p className="font-sans text-lg">Try our courses for <br /> FREE now! Start from <br /> our most popular <br /> courses.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 w-full">
          {[
            { title: "Interactive Python Course", imgSrc: "pythonCourse.png" },
            { title: "Interactive C Course", imgSrc: "c-programming.png" },
            { title: "Interactive Java Course", imgSrc: "java.png" },
            { title: "Interactive C++ Course", imgSrc: "cpp.png" },
          ].map((course, index) => (
            <div key={index} className="bg-white px-3 pt-4 rounded shadow-lg hover:scale-105 transition border gap-3 flex flex-col">
              <h2 className="font-bold text-lg text-blue-950">{course.title}</h2>
              <img src={course.imgSrc} alt={course.title} className="w-full h-auto" />
            </div>
          ))}
          <div className="bg-white px-3 pt-4 rounded shadow-lg hover:scale-105 transition border gap-3 flex flex-col justify-center items-center">
            <h2 className="font-bold text-lg text-blue-500">View all <br />courses</h2>
            <IoMdArrowRoundForward className="text-xl text-blue-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrollCourse;
