import React from "react";
import hike from "../assets/hikeArrow.svg";
import placement from "../assets/placements.svg";  
import live from "../assets/Live.svg";

const NextCohortSection_Internship = () => {
  return (
    <div className="bg-white px-6 md:px-20 pt-4 pb-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
        Next Cohort Details
      </h2>
      <div className=" border-2 border-gray-300 rounded-xl shadow-sm overflow-hidden w-full max-w-4xl mx-auto">
        {/* Left Date */}
        <div className="w-full flex flex-col md:flex-row items-center  justify-between gap-2 md:gap-4   px-6 py-4  border-b-2 border-sky-300  border-dashed  ">
          <div className="text-center flex gap-1.5">
            <div className="text-3xl font-bold text-black leading-tight">
              19
            </div>
            <div className="text-xs font-semibold tracking-widest text-gray-800 uppercase">
              Jun
            </div>
          </div>
          <div className="text-sm md:text-[22px] font-semibold text-gray-800">
            Weekend Batch <span className="text-gray-500">[Sat - Sun]</span>
          </div>
          {/* Enroll Button */}
          <button className="mt-4 md:mt-0 bg-[#1B99D4] hover:bg-sky-800 text-white text-sm md:text-lg font-semibold px-5 py-2 rounded-sm cursor-pointer">
            Enroll Now
          </button>
        </div>

        {/* Bottom Detail Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 px-6 py-4 text-sm md:text-lg text-gray-600">
          <div>
            <div className="font-semibold text-black">Batch</div>
            <div className="text-gray-500">Evening</div>
          </div>
          <div>
            <div className="font-semibold text-black">Time</div>
            <div className="text-gray-500">09:00 pm - 11:00 pm</div>
          </div>
          <div>
            <div className="font-semibold text-black">Seat</div>
            <div className="text-gray-500">Available</div>
          </div>
          <div>
            <div className="font-semibold text-black">Venue</div>
            <div className="text-gray-500">Youtube Live</div>
          </div>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl md:mx-20 mx-2 ">
        {/* Salary Hike */}
        <div className="flex   gap-6 items-center justify-center">
          <div className="bg-gray-100 rounded-full  ">
            <img src={hike} alt="hike" />
          </div>
          <div>
            <div className="text-3xl font-bold text-green-600">126%</div>
            <div className="text-sm font-medium text-gray-500 ">
              170% Average Salary Hike
            </div>
          </div>
        </div>

        {/* Job Placements */}
        <div className="flex gap-6 items-center justify-center">
          <div className="bg-gray-100 rounded-full">
            <img src={placement} alt="placements" />
          </div>
          <div>
            <div className="text-3xl font-bold text-yellow-600">100+</div>
            <div className="text-sm font-medium text-gray-500">Job Placements</div>
          </div>
        </div>

        {/* Live Sessions */}
        <div className="flex gap-6 justify-center items-center">
          <div className="bg-gray-100  rounded-full ">
            <img src={live} alt="live" />
          </div>
          <div>
            <div className="text-3xl font-bold text-red-600">Live</div>
            <div className="text-sm font-medium text-gray-500">Interactive Sessions</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextCohortSection_Internship;
