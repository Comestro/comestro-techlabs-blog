
import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import Learn from "../learn_path/Learn";
import { Practices } from "../learn_path/Practices";
// import Link from "next/link";
const Header = () => {
  return (
    <div className="flex flex-1 gap-3 lg:gap-6 px-20  bg-white lg:justify-evenly py-2 justify-start items-center shadow-md">
      {/* <h1 className='font-bold text-2xl text-blue-800 font-sans'>Comestro- <span className='text-red-400'>techlabs</span></h1> */}
      <img
        src="mainLogo2.png"
        alt="logo"
        className="h-10 w-36 hidden  lg:block "
      />
      {/* <IoMenu className="size-8 block lg:hidden" /> */}
      <div className="flex gap-5 font-sans font-semibold ">

        {/* ------------------------------------------------------------------ */}

        {/* <!-- Modal toggle --> */}
        <span><IoMenu className="size-8 block lg:hidden" /> </span>
        <button data-modal-target="static-modal" data-modal-toggle="static-modal" className="block  hover:text-blue-500 cursor-pointer text-gray-500  px-5 py-2.5 text-center " type="button">
          <select className="hover:text-blue-500 text-purple-600 cursor-pointer">
            <option value="Courses">Courses</option>
          </select>
        </button>


        {/* <!-- Main modal --> */}
        <div id="static-modal" data-modal-backdrop="static" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
          <div class="relative mb-24  p-4 w-full max-w-4xl max-h-full">
            {/* <!-- Modal content --> */}
            <div class="relative bg-white h-full rounded-lg shadow dark:bg-gray-700">
              {/* <!-- Modal header --> */}
              <div class="">
                {/* <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                    Static modal
                </h3> */}

              </div>
              {/* <!-- Modal body --> */}
              <div className="flex bg-white  h-96 ">


                <div className="flex flex-col border-r-1 items-center mt-7 h-full w-1/4">
                  <a herf="" className="text-white hover:text-gray-400 bg-blue-500  text-lg hover:bg-blue-200  w-full h-12 text-center">Learning Paths</a>
                  <a href="" className="text-gray-400  text-lg hover:bg-blue-200 w-full h-12 text-center">Practices</a>

                </div>
                <div className="flex flex-row bg-gray-400 h-full w-0.5"></div>
                <div className="  h-full p-5  w-1/3">
                  <div className=" rounded-md  border border-r-4 justify-center h-full p-10">

                    <img src="programiz.png" />
                    <div className="flex flex-col text-gray-500 font-bold text-xl ">
                      <span >Learn Python</span>
                      <span>Interactively</span>
                    </div>
                    <div className="text-white bg-blue-700 text-lg hover:bg-blue-400 mt-8 rounded-md h-11 w-48 font-semibold items-center justify-center text-center">
                      <h2>Try Comestro PRO -</h2>
                    </div>
                  </div>
                </div>
                <div className=" mt-3 h-full w-1/3">
                  <Learn />

                </div>
                <button type="button" class="text-black mt-8  bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="static-modal">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                  </svg>
                  <span class="sr-only">Close modal</span>
                </button>

              </div>

              {/* <!-- Modal footer --> */}

            </div>
          </div>
        </div>
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
