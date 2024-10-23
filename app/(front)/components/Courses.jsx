import { FaPython } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { FaRProject } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaJava } from "react-icons/fa";
import { FaRust } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { TbBrandCpp } from "react-icons/tb";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { GrSwift } from "react-icons/gr";
import { SiKotlin } from "react-icons/si";
import { SiNumpy } from "react-icons/si";
import { FaArrowUp } from "react-icons/fa";
import Link from "next/link";
import Connect from "@/db/Connect";
import Course from "@/db/models/Course";
import Image from "next/image";

const CourseItem = ({id, title,image}) =>{
  return(
     <Link href={id?`/${id}` : "/"} className='border items-center hover:scale-105 transition cursor-pointer rounded py-2 flex shadow-md gap-2 px-5'>
              <img src={`/course-img/${image}`} width="100px"  className="text-white text-4xl p-2 bg-blue-500 rounded-full" />
              <h1 className="font-semibold font-sans">{title}</h1>
            </Link>
  )
}



const Courses =  async () => {
  Connect();
  const course = await Course.find({});
  return ( 
    <div className='flex flex-col md:flex-row px-5 md:px-28 mb-16 py-10 gap-5 md:gap-20'>
        <div className='flex flex-col gap-5 mt-8 w-full lg:block md:hidden  md:w-1/3'>
            <h1 className='text-3xl font-bold font-sans text-slate-800'>Choose What to <br />learn</h1>
            <p className='text-gray-600 font-sans text-lg'>Start learning the best <br /> programming languages.</p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 w-full md:w-2/3'>
            {course.map((cor,i) =><CourseItem key ={i} id={cor._id} title={cor.title} image={cor.image} /> )}
    
           

            
            <div className='border items-center cursor-pointer rounded py-2 flex shadow-md gap-5 px-5'>
              <h1 className="font-sans text-blue-600 hover:text-blue-800">View fewer tutorials</h1>
              <FaArrowUp className="text-blue-600 hover:scale-y-150" />
            </div>
        </div>
    </div>
  )
}

export default Courses
