import React from "react";
import time from "../assets/time.svg";
import SectionDetails from "./SectionDetails";
import data from "../data/data.json"; 



const WhyUsInternship = () => {
  const features = data.features;
  return (
    <div className="bg-[#F8FBFB] py-4 px-4 md:px-20 text-center min-h-screen">
      <h3 className="text-sky-500 font-bold uppercase text-sm tracking-wider ">
        Related Programs
      </h3>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-12">
        Why Join this Program ?
      </h2>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:p-0">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-[0_0_20px_rgba(0,0,0,0.1)] hover:shadow-lg transition-all duration-300"
          >
            <div className="flex justify-center mb-4">
              <div className="bg-blue-500 rounded-full ">
                <img src={time} alt="" />
              </div>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              {item.title}
            </h3>
            <p className="text-zinc-500 font-semibold text-md">{item.description}</p>
          </div>
        ))}
      </div>
      <SectionDetails />
    </div>
  );
};
export default WhyUsInternship;
