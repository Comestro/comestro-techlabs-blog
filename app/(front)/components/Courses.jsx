import { FaPython } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { FaRProject } from "react-icons/fa";


const Courses = () => {
  return (
    <div className='flex px-28 h-[40vh] justify-center py-10 gap-20'>
        <div className='flex flex-col justify-center gap-5'>
            <h1 className='text-3xl font-bold font-sans text-slate-800'>Choose What to <br />learn</h1>
            <p className='text-gray-600 font-sans text-lg'>Start learning the best <br /> programming languages.</p>
        </div>
        <div className='grid grid-cols-3  gap-5'>
            <div className='border items-center  rounded py-1 flex shadow gap-2 px-5 '>
              <FaPython className="text-white text-5xl p-1 bg-blue-500 rounded-full" />
              <h1 className="font-semibold font-sans">python-programming</h1>
            </div>
            <div className='border items-center rounded py-1 flex shadow gap-2 px-5 '>
              <FaDatabase  className="text-white text-5xl p-1 bg-blue-500 rounded-full" />
              <h1 className="font-semibold font-sans">Learn SQL</h1>
            </div>
            <div className='border items-center rounded py-1 flex shadow gap-2 px-5 '>
              <FaRProject className="text-white text-5xl p-1 bg-blue-500 rounded-full" />
              <h1 className="font-semibold font-sans">R-programming</h1>
            </div>
            <div className='border items-center rounded py-1 flex shadow gap-2 px-5 '>
              <FaPython className="text-white text-5xl p-1 bg-blue-500 rounded-full" />
              <h1 className="font-semibold font-sans">Learn HTML</h1>
            </div>
            <div className='border items-center rounded py-1 flex shadow gap-2 px-5 '>
              <FaPython className="text-white text-5xl p-1 bg-blue-500 rounded-full" />
              <h1 className="font-semibold font-sans">Javascript</h1>
            </div>
            <div className='border items-center rounded py-1 flex shadow gap-2 px-5 '>
              <FaPython className="text-white text-5xl p-1 bg-blue-500 rounded-full" />
              <h1 className="font-semibold font-sans">Java programming</h1>
            </div>
            <div className='border items-center rounded py-1 flex shadow gap-2 px-5 '>
              <FaPython className="text-white text-5xl p-1 bg-blue-500 rounded-full" />
              <h1 className="font-semibold font-sans">Learn HTML</h1>
            </div>
            <div className='border items-center rounded py-1 flex shadow gap-2 px-5 '>
              <FaPython className="text-white text-5xl p-1 bg-blue-500 rounded-full" />
              <h1 className="font-semibold font-sans">Javascript</h1>
            </div>
            <div className='border items-center rounded py-1 flex shadow gap-2 px-5 '>
              <FaPython className="text-white text-5xl p-1 bg-blue-500 rounded-full" />
              <h1 className="font-semibold font-sans">Java programming</h1>
            </div>
        </div>
    </div>
  )
}

export default Courses