import React from "react";

const HeroSection = () => {
  return (
    <div className="text-center">
      <div className="flex flex-col gap-5 my-10">
        <span className="px-4 py-2 mx-auto rounded-full bg-gray-100 text-[#fc2b2be0] font-medium">
          Discover New Job Opportunities
        </span>
        <h1 className="text-5xl font-bold">
          Search, Apply &<br />
          Get Your <span className="text-[#6A38C2]">Dream Job</span>
        </h1>
        <p className="text-gray-600">
          Explore thousands of openings, connect with top employers, and take
          the next big step in your career — all in one place.
        </p>
        <div className="flex w-[90%] sm:w-[60%] md:w-[40%] mx-auto items-center bg-gray-100 border border-gray-300 rounded-full px-4 py-2 shadow-sm">
          <input
            type="text"
            placeholder="Search for jobs"
            className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-500 px-2"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
