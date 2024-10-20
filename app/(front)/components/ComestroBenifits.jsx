import { TbStars } from "react-icons/tb";
import { FaCode } from "react-icons/fa6";
import { MdContentPasteGo } from "react-icons/md";

const ComestroBenefits = () => {
  return (
    <div className='flex flex-col bg-gray-100 py-24 gap-10 px-4 md:px-24 justify-center items-center'>
      <h1 className='text-3xl md:text-4xl text-blue-900 font-sans font-bold text-center'>Why Comestro-techlabs?</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
        
        {/* Benefit 1 */}
        <div className='flex gap-4 p-6 border rounded-lg shadow-lg hover:shadow-xl transition duration-300 bg-white'>
          <div>
            <TbStars className="text-5xl text-blue-500" />
          </div>
          <div className="flex flex-col md:pl-4 ">
            <h2 className='text-2xl font-sans font-semibold'>Programming made easy</h2>
            <p className='text-gray-600 font-sans'>We focus on simplicity. Programming tutorials and examples written in simple, understandable language for beginners.</p>
          </div>
        </div>

        {/* Benefit 2 */}
        <div className='flex gap-4 p-6 border rounded-lg shadow-lg hover:shadow-xl transition duration-300 bg-white'>
          <div>
            <MdContentPasteGo className="text-5xl text-blue-500" />
          </div>
          <div className="flex flex-col">
            <h2 className='text-2xl font-sans font-semibold'>Content You Can Trust</h2>
            <p className='text-gray-600 font-sans'>A dedicated group of experts continually working to create programming resources that are accurate and easier to understand.</p>
          </div>
        </div>

        {/* Benefit 3 */}
        <div className='flex gap-4 p-6 border rounded-lg shadow-lg hover:shadow-xl transition duration-300 bg-white'>
          <div>
            <FaCode className="text-5xl text-blue-500" />
          </div>
          <div className="flex flex-col">
            <h2 className='text-2xl font-sans font-semibold'>Learn by Doing</h2>
            <p className='text-gray-600 font-sans'>The only way to learn to program is by writing code. We provide a lot of complete examples so that you can run and edit code on your own.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComestroBenefits;
