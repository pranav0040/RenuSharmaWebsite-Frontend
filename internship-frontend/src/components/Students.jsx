import React, { useState } from 'react';
import studentsData from '../data/data.json';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

const Students = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;

  const totalPages = Math.ceil(studentsData.length / itemsPerPage);
  const paginatedStudents = studentsData.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  const handlePageChange = (index) => {
    setCurrentPage(index);
  };

  return (
    <div className="bg-white py-16 px-4 md:px-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#001f3f] mb-12">
       Our Students
      </h2>

      <div className="flex flex-wrap justify-center gap-8">
        {paginatedStudents.map((student, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl border border-gray-200 p-4 w-full sm:w-[90%] md:w-[48%] lg:w-[30%] xl:w-[25%] shadow-[0_4px_60px_rgba(0,0,0,0.08)] flex flex-col h-[400px]"
          >
            <img
              src={student.profilePhoto}
              alt={student.name}
              className="rounded-xl object-cover w-full h-36 mb-3"
              style={{ objectFit: 'cover' }}
            />
            <div className="flex-1 flex flex-col justify-between">
              <div className="px-1">
                <p className="font-semibold text-base lg:text-lg text-black mb-1">{student.name}</p>
                <p className="text-sm md:text-[14px] text-gray-600 mb-1">{student.jobRole}</p>
                <p className="text-gray-700 text-sm md:text-[14px] mb-3">"{student.viewOfThem}"</p>
              </div>
              <div className="flex justify-between items-center px-1">
                <p className="text-sm text-red-600 font-semibold">{student.title}</p>
                <div className="flex items-center gap-3">
                  <FaInstagram className="text-pink-500 text-sm" />
                  <FaLinkedin className="text-blue-600 text-sm" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Bar with Dots Changes */}
      <div className="flex justify-center items-center mt-10 gap-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            className={`transition-all duration-300 ${
              index === currentPage
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

export default Students;
