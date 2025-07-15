import React from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';

const HeroSection = () => {
    return (
        <section className="bg-gradient-to-b from-[#d8e8ff] to-white text-center py-16 px-4 sm:px-6 lg:px-8 ">
            {/* Badge */}
            <div
                className="inline-flex items-start gap-2 bg-white/20 backdrop-blur-md px-6 py-3 font-[Manrope] rounded-xl border border-white/30 text-[#0a2c54] shadow-sm mb-20"
                style={{ fontSize: '32px', fontWeight: '400' }}
            >
                <FaCloudUploadAlt className="text-[#0a2c54] text-2xl relative top-3" />
                <span>
                    No.#1 Internship Platform for Show casing you Skill on <br />
                    real projects
                </span>
            </div>


            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0a2c54] mb-4 mt-4 font-[Roboto] ">
                Showcase Your Mastery. <br />
                Get Connected
            </h1>

            {/* Subheading */}
            <p className="text-sm sm:text-base text-gray-700 mb-8">
                Create your profile, showcase your skills,<br />
                and let Your Skill grow.
            </p>

            {/* Search bar */}
            <div className="flex justify-center items-center gap-2 max-w-md mx-auto bg-white border border-gray-300 rounded-full px-4 py-2 shadow-md">
                <input
                    type="text"
                    placeholder="e.g. UX Designer Internship"
                    className="flex-1 bg-transparent outline-none text-sm sm:text-base text-gray-700 placeholder:text-gray-400 font-medium"
                />
                <button className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition">
                    Search
                </button>
            </div>
        </section>
    );
};

export default HeroSection;
