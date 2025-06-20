import React, { useState } from 'react';
import mentorsData from '../data/data.json';

const Mentors = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 3;

    const totalPages = Math.ceil(mentorsData.length / itemsPerPage);
    const paginatedMentors = mentorsData.slice(
        currentPage * itemsPerPage,
        currentPage * itemsPerPage + itemsPerPage
    );

    const handlePageChange = (index) => {
        setCurrentPage(index);
    };

    return (
        <div className="bg-white py-16 px-4 md:px-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#001f3f] mb-12">
                Hear From Our Mentors
            </h2>

            <div className="flex flex-wrap justify-center gap-8">
                {paginatedMentors.map((mentor, idx) => (
                    <div
                        key={idx}
                        className=" bg-white  rounded-2xl p-8 w-full sm:w-[90%] md:w-[48%]  lg:w-[30%] xl:w-[25%] flex flex-col justify-between shadow-[0_8px_30px_rgba(0,0,0,0.15)]"
                    >
                        <p className="text-gray-700 text-base mb-4">"{mentor.viewOfThem}"</p>

                        <div className="flex justify-start items-end mt-auto">
                            <div className="flex items-center gap-4 ">
                                <img
                                    src={mentor.profilePhoto}
                                    alt={mentor.name}
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <div>
                                    <p className="font-semibold text-sm lg:text-lg text-black">{mentor.name}</p>
                                    <p className="text-sm text-gray-600">{mentor.jobRole}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination Bar with Dots */}
            {/* Pagination Bar with Dots */}
            <div className="flex justify-center items-center mt-10 gap-2">
                {Array.from({ length: totalPages }).map((_, index) => (
                    <button
                        key={index}
                        className={`transition-all duration-300 ${index === currentPage
                                ? 'w-6 h-2 rounded-full bg-[#001f3f]'
                                : 'w-3 h-3 rounded-full bg-gray-300'
                            }`}
                        onClick={() => handlePageChange(index)}
                    />
                )).slice(
                    Math.max(0, Math.min(currentPage, totalPages - 3)),
                    Math.max(3, Math.min(currentPage + 3, totalPages))
                )}
            </div>
        </div>
    );
};

export default Mentors;
