// import React from 'react';
// import { Link } from 'react-router-dom';
// import logo from '../assets/logo.png'; // Adjust the path as necessary

// const TopNavbar = () => {
//   return (
//     <nav className="bg-[#072c50] text-white px-6 py-3 flex items-center justify-between shadow-md">
//       {/* Logo */}
//       <div className="flex items-center gap-2">
//        <img
//              src={logo}
//              alt="Logo"
//              className="h-10 w-10 sm:h-12 sm:w-12"
//            />
//       </div>

//       {/* Navigation Links */}
//       <div className="flex gap-6 text-sm items-center">
//         <Link to="/create-resume" className="hover:underline">Create Resume</Link>
//         <Link to="/training-enrollment" className="font-semibold underline text-white">Training Enrollment</Link>
//         <Link to="/partner" className="hover:underline">Partner with us</Link>
//         <Link to="/contact" className="hover:underline">Contact Us</Link>
//       </div>

//       {/* Register Button */}
//       <Link
//         to="/register"
//         className="flex items-center gap-2 border border-white rounded-full px-4 py-1 text-sm hover:bg-white hover:text-[#072c50] transition"
//       >
//         Register Now
//         <span className="text-white bg-[#072c50] rounded-full p-1 w-5 h-5 flex items-center justify-center">
//           →
//         </span>
//       </Link>
//     </nav>
//   );
// };

// export default TopNavbar;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const TopNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#072c50] text-white shadow-md w-full relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:px-6 relative">

        {/* Logo */}
        <Link to="/" className="flex items-center z-10">
          <img src={logo} alt="Logo" className="h-10 w-10 sm:h-12 sm:w-12" />
        </Link>

        {/* Navigation Links - Centered */}
        <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-6 text-sm items-center">
          <Link to="/create-resume" className="hover:underline">Create Resume</Link>
          <Link to="/training-enrollment" className="underline font-semibold">Training Enrollment</Link>
          <Link to="/partner" className="hover:underline">Partner with us</Link>
          <Link to="/contact" className="hover:underline">Contact Us</Link>
        </div>

        {/* Register Button */}
        <Link
          to="/register"
          className="hidden md:flex items-center gap-2 border border-white rounded-full px-4 py-1 text-sm hover:bg-white hover:text-[#072c50] transition z-10"
        >
          Register Now
          <span className="bg-[#072c50] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
            →
          </span>
        </Link>

        {/* Hamburger Icon (Mobile only) */}
        <div className="md:hidden z-10">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-3 text-sm">
          <Link to="/create-resume" onClick={() => setIsOpen(false)} className="hover:underline">Create Resume</Link>
          <Link to="/training-enrollment" onClick={() => setIsOpen(false)} className="underline font-semibold">Training Enrollment</Link>
          <Link to="/partner" onClick={() => setIsOpen(false)} className="hover:underline">Partner with us</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="hover:underline">Contact Us</Link>
          <Link
            to="/register"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 border border-white rounded-full px-4 py-1 hover:bg-white hover:text-[#072c50] transition"
          >
            Register Now
            <span className="bg-[#072c50] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              →
            </span>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default TopNavbar;


