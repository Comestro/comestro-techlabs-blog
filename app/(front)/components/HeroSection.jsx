import React from "react";

const HeroSection = () => {
  return (
    <div className="flex px-28 pt-24 mt-[6rem]">
      <div className="flex flex-col gap-7 w-6/12">
        <h1 className="font-extrabold font-sans text-4xl text-blue-950">
          Learn programming <br />
          for free
        </h1>
        <p className="text-xl text-gray-600 font-sans ">
          Learn to program with our beginner-friendly tutorials <br /> and
          examples.{" "}
          <span className="text-blue-700">
            Read tutorials, try examples, write <br /> code
          </span>{" "}
          and learn to program.
        </p>
        <h2 className="font-semibold text-slate-600 mt-10 text-xl font-sans">Get the latest tutorials and updates</h2>
        <div className="flex  border rounded w-fit">
            <input type="text" placeholder="Enter your email address" className="px-3 w-full outline-none focus:outline-none text-gray-400 py-2 font-sans text-lg" />
            <button className="bg-blue-600 text-white h-fit p-3 font-semibold ml-10 cursor-pointer hover:bg-blue-800 rounded-r">Subscribe</button>
        </div> 
      </div>
      <div className="w-6/12">
        <img src="heroImage.png" alt="hero image" />
      </div>
    </div>
  );
};

export default HeroSection;
