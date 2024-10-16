import { FaPython } from "react-icons/fa";

const Courses = () => {
  return (
    <div className='flex px-28 py-10 gap-20'>
        <div className='flex flex-col gap-5'>
            <h1 className='text-3xl font-bold font-sans text-slate-800'>Choose What to <br />learn</h1>
            <p className='text-gray-600 font-sans text-lg'>Start learning the best <br /> programming languages.</p>
        </div>
        <div className='grid grid-cols-3 gap-5'>
            <div className='border flex p-2'>
            <FaPython className="text-blue-500" />
            <h1>python-programming</h1>
            </div>
            <div className='border '>python</div>
            <div className='border '>python</div>
            <div className='border '>python</div>
            <div className='border '>python</div>
            <div className='border '>python</div>

        </div>
    </div>
  )
}

export default Courses