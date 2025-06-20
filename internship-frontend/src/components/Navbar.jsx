import { Link } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 w-full shadow-md backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between relative">
        {/* Title or Logo */}
        {/* <div className="hidden md:block text-center w-full absolute left-1/2 transform -translate-x-1/2 text-lg font-semibold">
          RENU SHARMA FOUNDATION
        </div> */}

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-6 text-md font-medium justify-center mx-auto">
           <Link to="/" className="px-3 py-2 rounded-full transition duration-200 ease-in-out hover:bg-[#1c2a4e] hover:text-white">Home</Link>
          {['Internships', 'About', 'Courses', 'Events', 'Services'].map((item, idx) => (
            <Link
              key={idx}
              to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="px-3 py-2 rounded-full transition duration-200 ease-in-out hover:bg-[#1c2a4e] hover:text-white "
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Sign in / Sign up */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/login"
            className="border border-[#1c2a4e] text-[#1c2a4e] rounded-full px-5 py-2 text-sm hover:bg-[#1c2a4e] hover:text-white transition whitespace-nowrap"
          >
            Sign in
          </Link>
          <Link
            to="/signup"
            className="bg-[#1c2a4e] text-white rounded-full px-5 py-2 text-sm hover:bg-[#1c2a4e]/90 transition whitespace-nowrap"
          >
            Sign up
          </Link>
        </div>


        {/* Hamburger Button (Mobile) */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile Navigation Dropdown */}
        {isOpen && (
          <div className="md:hidden absolute right-4 top-14 w-60 bg-white border rounded-lg shadow-lg p-4 flex flex-col gap-3 text-sm font-medium z-50">
            {/* Taking care of the home route */}
             <Link to="/" className="hover:bg-[#1c2a4e] hover:text-white px-3 py-2 rounded-md transition">Home</Link>
            {['Internships', 'About', 'Courses', 'Events', 'Services'].map((item, idx) => (
              <Link
                key={idx}
                to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="hover:bg-[#1c2a4e] hover:text-white px-3 py-2 rounded-md transition"
              >
                {item}
              </Link>
            ))}
            <hr className="my-2" />
            <Link
              to="/signin"
              className="border border-[#1c2a4e] hover:text-white rounded-md px-4 py-2 text-center hover:bg-[#1c2a4e]"
            >
              Sign in
            </Link> 
            <Link
              to="/signup"
              className="bg-[#1c2a4e] text-white rounded-md px-4 py-2 text-center hover:bg-[#1c2a4e]/90"
            >
              Sign up
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
