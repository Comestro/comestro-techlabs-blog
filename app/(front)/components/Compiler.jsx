import { IoMdArrowRoundForward } from "react-icons/io";

const Compiler = () => {
  return (
    <div className='flex bg-white px-24 py-24'>
        <div className='w-7/12'>
            <img src="compiler-image.png" alt="" className=''/>
        </div>
        <div className='flex flex-col gap-8 mt-24 -ml-14'>
          <h1 className='text-blue-950 font-sans font-bold text-3xl'>Practice with our Online Compilers</h1>
          <p className='text-gray-500 text-xl font-sans'>We believe coding should be accessible to all. So we <br /> made our  own compilers for web and mobile. And it's free!</p>
          <div className='grid grid-cols-2 gap-5'>
              <div className='flex flex-col border rounded shadow-lg hover:scale-105 transition cursor-pointer gap-2 px-3 py-2'>
                <h3 className='text-blue-950 font-semibold font-sans'>Python Compiler</h3>
                <div className='flex gap-1 items-center'>
                  <h4 className='text-blue-500 font-semibold font-sans'>Start Coding Python</h4>
                  <IoMdArrowRoundForward className="text-blue-500 text-xl"/>
                </div>
              </div>
              <div className='flex flex-col border rounded shadow-lg hover:scale-105 transition cursor-pointer  gap-2 px-3 py-2'>
                <h3 className='text-blue-950 font-semibold font-sans'>SQL Editor</h3>
                <div className='flex gap-1 items-center'>
                <h4 className='text-blue-500 font-semibold font-sans'>Start Coding SQL</h4>
                <IoMdArrowRoundForward className="text-blue-500 text-xl"/>
                </div>
              </div>
              <div className='flex flex-col border rounded shadow-lg hover:scale-105 transition cursor-pointer  gap-2 px-3 py-2'>
                <h3 className='text-blue-950 font-semibold font-sans'>Python Compiler</h3>
                <div className='flex gap-1 items-center'>
                <h4 className='text-blue-500 font-semibold font-sans'>Start Coding Python</h4>
                <IoMdArrowRoundForward className="text-blue-500 text-xl"/>
                </div>
              </div>
              <div className='flex flex-col border rounded shadow-lg hover:scale-105 transition cursor-pointer  gap-2 px-3 py-2'>
                <h3 className='text-blue-950 font-semibold font-sans'>Python Compiler</h3>
                <div className='flex gap-1 items-center'>
                <h4 className='text-blue-500 font-semibold font-sans'>Start Coding Python</h4>
                <IoMdArrowRoundForward className="text-blue-500 text-xl"/>
                </div>
              </div>
              <div className='flex flex-col border rounded shadow-lg hover:scale-105 transition cursor-pointer  gap-2 px-3 py-2'>
                <h3 className='text-blue-950 font-semibold font-sans'>Python Compiler</h3>
                <div className='flex gap-1 items-center'>
                <h4 className='text-blue-500 font-semibold font-sans'>Start Coding Python</h4>
                <IoMdArrowRoundForward className="text-blue-500 text-xl"/>
                </div>
              </div>
              <div className='flex flex-col border rounded shadow-lg hover:scale-105 transition cursor-pointer  gap-2 px-3 py-2'>
                <h3 className='text-blue-950 font-semibold font-sans'>Python Compiler</h3>
                <div className='flex gap-1 items-center'>
                <h4 className='text-blue-500 font-semibold font-sans'>Start Coding Python</h4>
                <IoMdArrowRoundForward className="text-blue-500 text-xl"/>
                </div>
              </div>
              <div className='flex flex-col border rounded shadow-lg hover:scale-105 transition cursor-pointer  gap-2 px-3 py-2'>
                <h3 className='text-blue-950 font-semibold font-sans'>Python Compiler</h3>
                <div className='flex gap-1 items-center'>
                <h4 className='text-blue-500 font-semibold font-sans'>Start Coding Python</h4>
                <IoMdArrowRoundForward className="text-blue-500 text-xl"/>
                </div>
              </div>
              <div className='flex flex-col border rounded shadow-lg hover:scale-105 transition cursor-pointer  gap-2 px-3 py-2'>
                <h3 className='text-blue-950 font-semibold font-sans'>Python Compiler</h3>
                <div className='flex gap-1 items-center'>
                <h4 className='text-blue-500 font-semibold font-sans'>Start Coding Python</h4>
                <IoMdArrowRoundForward className="text-blue-500 text-xl"/>
                </div>
              </div>
              <div className="flex mt-5 gap-1 items-center cursor-pointer ">
                <h3 className='text-blue-500 font-bold font-sans hover:text-blue-800'>View all Chapters</h3>
                <IoMdArrowRoundForward className="text-blue-500 text-xl hover:text-blue-800"/>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Compiler