import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
const Header = () => {
  return (
    <div className="flex flex-1 gap-3 lg:gap-6 px-20  bg-white lg:justify-evenly py-2 justify-start items-center shadow-md">
      {/* <h1 className='font-bold text-2xl text-blue-800 font-sans'>Comestro- <span className='text-red-400'>techlabs</span></h1> */}
      <img
        src="mainLogo2.png"
        alt="logo"
        className="h-10 w-36 hidden  lg:block "
      />
      <IoMenu className="size-8 block lg:hidden" />
      <div className="flex gap-5 font-sans font-semibold ">
        {/* <select className="hover:text-blue-500 text-purple-600 cursor-pointer">
          <option value="Courses">Courses</option>
        </select> */}
    {/* ------------------------------------------------------------------ */}

{/* <!-- Modal toggle --> */}
{/* <span><IoMenu className="size-8 block lg:hidden" /> </span> */}
<button data-modal-target="static-modal" data-modal-toggle="static-modal" className="block  hover:text-blue-500 cursor-pointer text-gray-500  px-5 py-2.5 text-center " type="button">
  Courses
 
</button>


{/* <!-- Main modal --> */}
<div id="static-modal" data-modal-backdrop="static" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative   p-4 mb-32 w-full max-w-4xl max-h-full">
        {/* <!-- Modal content --> */}
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/* <!-- Modal header --> */}
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                    Static modal
                </h3>
                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="static-modal">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            {/* <!-- Modal body --> */}
            <div class="p-4 md:p-5 space-y-4">
                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                </p>
                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                </p>
            </div>
            {/* <!-- Modal footer --> */}
            <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button data-modal-hide="static-modal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
                <button data-modal-hide="static-modal" type="button" class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Decline</button>
            </div>
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
