
const HeroSection = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:px-28 px-5 pt-24 mt-[6rem]">
      <div className="flex flex-col gap-7 lg:w-6/12">
        <h1 className="font-bold font-sans lg:font-extrabold lg:text-4xl text-3xl text-blue-950">
          Learn programming <br />
          for free
        </h1>
        <p className="text-gray-600 font-sans lg:text-xl text-lg">
          Learn to program with our beginner-friendly tutorials <br />
          and examples.{" "}
          <span className="text-blue-700">
            Read tutorials, try examples, write <br /> code
          </span>{" "}
          and learn to program.
        </p>
        <h2 className="font-semibold text-slate-600 lg:mt-10 lg:text-xl font-sans">
          Get the latest tutorials and updates
        </h2>
        <div className="flex border rounded w-full lg:w-fit">
          <input
            type="text"
            placeholder="Enter your email address"
            className="px-3 w-full outline-none focus:outline-none text-gray-400 py-2 font-sans text-lg"
          />
          <button className="bg-blue-600 text-white h-fit p-3 font-semibold ml-2 lg:ml-5 cursor-pointer hover:bg-blue-800 rounded-r">
            Subscribe
          </button>
        </div>
      </div>
      <div className="lg:w-6/12 mt-10 lg:mt-0">
        <img
          src="heroImage.png"
          alt="hero image"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default HeroSection;

