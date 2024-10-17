import Link from "next/link";
import { BiCoinStack } from "react-icons/bi";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { RiCodeSSlashFill } from "react-icons/ri";
import { FaGreaterThan } from "react-icons/fa6";
import { LuUsers } from "react-icons/lu";
import { BsCodeSquare } from "react-icons/bs";
import { FaUpRightFromSquare } from "react-icons/fa6";
import { PiMedal } from "react-icons/pi";

const page = () => {
  return (
    <div>
      <div className=" bg-sky-200  py-5">
        <div className="flex justify-center">
          <div className="border-solid border-2 border-black w-[13vh] h-[15vh] rounded">
            <BiCoinStack className="size-8 ml-4 mt-5 " />
          </div>
        </div>
        <div className="flex justify-center py-4">
          <h1 className="text-3xl font-bold ml-2 ">Learn SQl</h1>
        </div>
        <div className="flex flex-1  gap-5 justify-center">
          <div className="flex border-solid border-2  rounded bg-white">
            <MdOutlinePhoneAndroid className=" mt-1 mr-2" />
            <Link href="" className="mr-2 font-medium">
              TUTORAILS
            </Link>
          </div>
          <div className="flex border-solid  rounded hover:bg-white">
            <Link href="" className="font-medium px-4">
              COURSE
            </Link>
          </div>
          <div className="flex border-solid rounded hover:bg-white ">
            <RiCodeSSlashFill className="mt-1 ml-1" />
            <Link href="" className="px-3 font-medium ">
              SQL EDITOR
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-1 justify-center ">
        <div className="border-solid flex gap-5 my-14 w-[160vh] px-6 py-8 bg-red-100">
          <div>
            <p className="font-bold text-blue-500 text-2xl">Comestro</p>
            <p className="py-3 text-red-600">Recommended Course:</p>
            <p className="text-3xl font-bold mb-5">Learn SQL Basics</p>

            <p className="py-1 text-md font-sans">
              Perfect for beginners serious about building a career in SQL.
            </p>
            <p className="py-1 text-md font-sans">
              Created by the Programiz team with over a decade of experience.
            </p>
            <button className="flex font-semibold bg-blue-500 text-white py-4 px-8 rounded">
              TRY NOW <FaGreaterThan className=" ml-2 mt-1" />
            </button>
          </div>
          <div className="flex flex-1 mt-10 justify-end">
            <div className="flex flex-col gap-2 justify-center px-16 ">
              <p className="flex ">
                <LuUsers className="mt-0.5 mr-1 size-5" />
                Enrollment: 33k
              </p>
              <p className="flex">
                <BsCodeSquare className="mt-0.5 mr-1 size-5" />
                Practice Problems: 65+
              </p>
              <p className="flex">
                <FaUpRightFromSquare className="mt-0.5 mr-1 size-5" />
                Quizzes: 24+
              </p>
              <p className="flex">
                <PiMedal className="mt-0.5 mr-1 size-5" />
                Certifications
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col  mx-16 ">
        <p className="text-3xl px-14 font-bold">Is SQL for you ?</p>
        <p className="flex flex-1">
          Programming mostly deals with data, so choosing SQL is a no-brainer
          due to its extensive use in database systems
        </p>
      </div>
    </div>
  );
};

export default page;
