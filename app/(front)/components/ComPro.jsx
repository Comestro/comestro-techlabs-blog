import React from "react";

const ComPro = () => {
  return (
    <div className="flex bg-red-100 items-center lg:px-28 md:px-auto lg:justify-start md:justify-center px-5 gap-2 shrink  py-2">
      <h2 className="flex shrink-0 px-2 py-2 lg:py-0 md:py-1 bg-pink-400 items-center justify-center text-white font-bold rounded font-sans">
        30% off
      </h2>
      <p className="font-sans text-sm ">
        Learn to code solving problems with our <b>hands-on-coding</b> course.{" "}
        <span className="text-blue-600 cursor-pointer font-semibold">
          Try Comestro-techlabs PRO today
        </span>
      </p>
    </div>
  );
};

export default ComPro;
