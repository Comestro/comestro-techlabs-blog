import { TbStars } from "react-icons/tb";
import { FaCode } from "react-icons/fa6";
import { MdContentPasteGo } from "react-icons/md";


const ComestroBenifits = () => {
  return (
    <div className='flex flex-col bg-gray-100 py-24 gap-10 px-24 justify-center items-center'>
        <h1 className='text-3xl text-blue-900 font-sans font-bold'>Why Comestro-techlabs?</h1>
        <div className='grid grid-cols-3 gap-12'>
       
            <div className='flex gap-3'>
                <div className=" ">
                    <TbStars className="text-5xl font-thin" />
                </div>
                <div className="flex gap-5 pt-2 flex-col">
                    <h2 className='text-2xl font-sans font-semibold'>Programming made easy</h2>
                    <p className='text-gray-600 font-sans font-semibold'>We focus on simplicity.  Programming<br /> tutorials and examples written in <br />simple, understandable language<br /> for beginners.</p>
                </div>
            </div>
            <div className='flex gap-3'>
                <div className=" ">
                    <MdContentPasteGo  s className="text-5xl font-thin" />
                </div>
                <div className="flex gap-5 pt-2 flex-col">
                    <h2 className='text-2xl font-sans font-semibold'>Content You Can Trusty</h2>
                    <p className='text-gray-600 font-sans font-semibold'>A dedicated group of experts continually <br /> working to create programming<br /> resources that is accurate and<br /> easier to understand.
                    </p>
                </div>
            </div>
            <div className='flex gap-3'>
                <div className=" ">
                    <FaCode  className="text-5xl font-thin" />
                </div>
                <div className="flex gap-5 pt-2 flex-col">
                    <h2 className='text-2xl font-sans font-semibold'>Learn by Doing</h2>
                    <p className='text-gray-600 font-sans font-semibold'>The only way to learn to program is by <br />writing code. We provide a lot<br /> of complete examples so that run<br /> and edit code on your own.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ComestroBenifits