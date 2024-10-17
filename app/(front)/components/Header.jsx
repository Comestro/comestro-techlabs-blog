import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
const Header = () => {
  return (
    <div className="flex flex-1 gap-3 lg:gap-6 px-20 bg-white lg:justify-evenly py-2 justify-start items-center shadow-md">
      {/* <h1 className='font-bold text-2xl text-blue-800 font-sans'>Comestro- <span className='text-red-400'>techlabs</span></h1> */}
      <img
        src="mainLogo2.png"
        alt="logo"
        className="h-10 w-36 hidden  lg:block "
      />
      <IoMenu className="size-8 block lg:hidden" />
      <div className="flex gap-5 font-sans font-semibold ">
        <select className="hover:text-blue-500 text-purple-600 cursor-pointer">
          <option value="Courses">Courses</option>
        </select>
        <select className="hover:text-blue-500 cursor-pointer text-gray-500">
          <option value="Courses">Tutorials</option>
        </select>
        <select className="hover:text-blue-500 cursor-pointer text-gray-500">
          <option value="Courses">Examples</option>
        </select>
      </div>
      <div className="flex w-[50%] md:w-[35%] items-center md:gap-2 gap-1  p-1 cursor-pointer">
        <IoSearchOutline className="text-2xl text-gray-500 " />
        <input
          type="text"
          placeholder="Search tutorials & examples..."
          className="w-full outline-none"
        />
      </div>
      <button className="font-semibold text-sm text-blue-500 bg-sky-50 hover:bg-sky-100 border border-blue-500 py-1 md:px-2 px-1 rounded">
        Comestro-techlabs PRO
      </button>
    </div>
  );
};

export default Header;
