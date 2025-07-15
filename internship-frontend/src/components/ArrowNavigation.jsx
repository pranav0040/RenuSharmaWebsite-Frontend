import React from 'react'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const ArrowNavigation = ({ onPrev, onNext, className = "" }) => {
  return (
    <div className={`flex justify-center md:justify-start items-center gap-6 ${className}`}>
    <button
      onClick={onPrev}
      className="p-5 md:p-8 rounded-full hover:bg-gray-300 shadow-lg transition cursor-pointer"
    >
      <FaArrowLeft size={20} />
    </button>
    <button
      onClick={onNext}
      className="p-5 md:p-8 rounded-full hover:bg-gray-300 shadow-lg transition cursor-pointer"
    >
      <FaArrowRight size={20} />
    </button>
  </div>
  )
}

export default ArrowNavigation