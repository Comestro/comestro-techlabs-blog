import { FaCircle } from "react-icons/fa";

const EnrollCourse = () => {
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
      <img src="crousel2.png" alt="crousel2" className="border-8 border-black rounded-2xl"/>
      </div>
      <div className="flex gap-5">
        <div className="flex flex-col gap-5">
            <h2 className="text-blue-950 font-bold text-3xl font-sans">Enroll now <br /> for FREE</h2>
        </div>
      </div>
    </div>
  );
};

export default EnrollCourse;
