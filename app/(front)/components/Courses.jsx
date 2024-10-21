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



const Courses = () => {
  return ( 
    <div className='flex flex-col md:flex-row px-5 md:px-28 mb-16 py-10 gap-5 md:gap-20'>
        <div className='flex flex-col gap-5 mt-8 w-full lg:block md:hidden  md:w-1/3'>
            <h1 className='text-3xl font-bold font-sans text-slate-800'>Choose What to <br />learn</h1>
            <p className='text-gray-600 font-sans text-lg'>Start learning the best <br /> programming languages.</p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 w-full md:w-2/3'>
            <Link href="python-programming" className='border items-center hover:scale-105 transition cursor-pointer rounded py-2 flex shadow-md gap-2 px-5'>
              <FaPython className="text-white text-4xl p-2 bg-blue-500 rounded-full" />
              <h1 className="font-semibold font-sans">Python Programming</h1>
            </Link>
            <Link href="sql" className='border items-center hover:scale-105 transition cursor-pointer rounded py-2 flex shadow-md gap-2 px-5'>
              <FaDatabase className="text-white text-4xl p-2 bg-blue-500 rounded-full" />
              <h1 className="font-semibold font-sans">Learn SQL</h1>
            </Link>
            <Link href="r-programming" className='border items-center hover:scale-105 transition cursor-pointer rounded py-2 flex shadow-md gap-2 px-5'>
              <FaRProject className="text-white text-4xl p-2 bg-blue-500 rounded-full" />
              <h1 className="font-semibold font-sans">R Programming</h1>
            </Link>
            <Link href="html" className='border items-center hover:scale-105 transition cursor-pointer rounded py-2 flex shadow-md gap-2 px-5'>
              <FaHtml5 className="text-white text-4xl p-2 bg-blue-500 rounded-full" />
              <h1 className="font-semibold font-sans">Learn HTML</h1>
            </Link>
            <Link href="javascript" className='border items-center hover:scale-105 transition cursor-pointer rounded py-2 flex shadow-md gap-2 px-5'>
              <IoLogoJavascript className="text-white text-4xl p-2 bg-blue-500 rounded-full" />
              <h1 className="font-semibold font-sans">JavaScript</h1>
            </Link>
            <Link href="java" className='border items-center hover:scale-105 transition cursor-pointer rounded py-2 flex shadow-md gap-2 px-5'>
              <FaJava className="text-white text-4xl p-2 bg-blue-500 rounded-full" />
              <h1 className="font-semibold font-sans">Java Programming</h1>
            </Link>
            <Link href="rust" className='border items-center hover:scale-105 transition cursor-pointer rounded py-2 flex shadow-md gap-2 px-5'>
              <FaRust className="text-white text-4xl p-2 bg-blue-500 rounded-full" />
              <h1 className="font-semibold font-sans">Rust Programming</h1>
            </Link>
            <Link href="go" className='border items-center hover:scale-105 transition cursor-pointer rounded py-2 flex shadow-md gap-2 px-5'>
              <FaGolang className="text-white text-4xl p-2 bg-blue-500 rounded-full" />
              <h1 className="font-semibold font-sans">Go Programming</h1>
            </Link>
            <Link href="cpp" className='border items-center hover:scale-105 transition cursor-pointer rounded py-2 flex shadow-md gap-2 px-5'>
              <TbBrandCpp className="text-white text-4xl p-2 bg-blue-500 rounded-full" />
              <h1 className="font-semibold font-sans">C++ Programming</h1>
            </Link>
            <Link href="c" className='border items-center hover:scale-105 transition cursor-pointer rounded py-2 flex shadow-md gap-2 px-5'>
              <AiOutlineCopyrightCircle className="text-white text-4xl p-2 bg-blue-500 rounded-full" />
              <h1 className="font-semibold font-sans">C Programming</h1>
            </Link>
            <Link href="dsa" className='border items-center hover:scale-105 transition cursor-pointer rounded py-2 flex shadow-md gap-2 px-5'>
              <div className="text-white text-md px-1 py-2 bg-blue-500 font-semibold rounded-full">DSA</div>
              <h1 className="font-semibold font-sans">DS & Algorithms</h1>
            </Link>
            <Link href="swift" className='border items-center hover:scale-105 transition cursor-pointer rounded py-2 flex shadow-md gap-2 px-5'>
              <GrSwift className="text-white text-4xl p-2 bg-blue-500 rounded-full" />
              <h1 className="font-semibold font-sans">Swift Programming</h1>
            </Link>
            <Link href="csharp" className='border items-center hover:scale-105 transition cursor-pointer rounded py-2 flex shadow-md gap-2 px-5'>
              <div className="text-white text-md p-2 bg-blue-500 font-semibold rounded-full">C#</div>
              <h1 className="font-semibold font-sans">C# Programming</h1>
            </Link>
            <Link href="kotlin" className='border items-center hover:scale-105 transition cursor-pointer rounded py-2 flex shadow-md gap-2 px-5'>
              <SiKotlin className="text-white text-4xl p-2 bg-blue-500 rounded-full" />
              <h1 className="font-semibold font-sans">Kotlin Programming</h1>
            </Link>
            <Link href="numpy" className='border items-center hover:scale-105 transition cursor-pointer rounded py-2 flex shadow-md gap-2 px-5'>
              <SiNumpy className="text-white text-4xl p-2 bg-blue-500 rounded-full" />
              <h1 className="font-semibold font-sans">NumPy</h1>
            </Link>
            <div className='border items-center cursor-pointer rounded py-2 flex shadow-md gap-5 px-5'>
              <h1 className="font-sans text-blue-600 hover:text-blue-800">View fewer tutorials</h1>
              <FaArrowUp className="text-blue-600 hover:scale-y-150" />
            </div>
        </div>
    </div>
  )
}

export default Courses
