import React from 'react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import workImg from '../assets/work-illustration.png';

const LetsWorkSection = () => {
  return (
    <section className="bg-[#edf7fd] flex items-center min-h-[786px] px-6 md:py-20">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between md:gap-4">

        {/* Left Content */}
        <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">Let’s work</h2>
          <h3 className="text-xl md:text-2xl font-semibold text-blue-700">
            Together to create wounders with us.
          </h3>
          <p className="text-gray-700">
            At the Renu Sharma Foundation, we believe that compassion can heal and education can empower.
            Together, we’re building a world where every life matters and every dream has a chance.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-6">
            <div className="bg-white shadow-md px-6 py-4 rounded-lg text-center">
              <p className="text-blue-700 text-2xl font-bold">
                <CountUp end={20} duration={2.5} />+
              </p>
              <p className="text-sm text-gray-600">Year of experience</p>
            </div>
            <div className="bg-white shadow-md px-6 py-4 rounded-lg text-center">
              <p className="text-blue-700 text-2xl font-bold">
                <CountUp end={16000} duration={1.5} separator="," />+
              </p>
              <p className="text-sm text-gray-600">Project Success</p>
            </div>
            <div className="bg-white shadow-md px-6 py-4 rounded-lg text-center">
              <p className="text-blue-700 text-2xl font-bold">
                <CountUp end={88} duration={2.5} />%
              </p>
              <p className="text-sm text-gray-600">Satisfied rate</p>
            </div>
          </div>

          {/* Button */}
          {/* <button className="mt-6 px-6 py-2 bg-white text-black border border-gray-300 rounded-full hover:bg-blue-50 transition">
            Start Project →
          </button> */}


          <Link to="/courses">
            <button className="mt-12 px-6 py-2 bg-white text-black border border-gray-300 rounded-full hover:bg-blue-50 transition">
              Start Project →
            </button>
          </Link>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-end md:pl-4">
          <img
            src={workImg}
            alt="Work Illustration"
            className="max-w-sm w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default LetsWorkSection;
