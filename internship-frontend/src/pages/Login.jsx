import React, { useState } from 'react';
import logo from '../assets/renusharma-logo.png';
import image1 from '../assets/Untitledvideo2.png';
import image2 from '../assets/Untitledvideo1.png';
import hexagons from '../assets/hexagon.png';
import { useNavigate } from 'react-router-dom';
import { FiEye, FiEyeOff } from 'react-icons/fi';


const Login = () => {

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);


  return (
    <div className="min-h-screen overflow-hidden flex flex-col md:flex-row items-start">
      {/* Left Section */}
      <div className="w-full  md:w-1/2 bg-[#fff] flex flex-col  items-center ml-8  md:p-6 rounded-bl-2xl rounded-br-2xl">
        {/* Logo */}
        <div className="w-full ">
          <img src={logo} alt="Logo" className="h-25 " /> {/* Replace with your logo path */}
        </div>

        {/* Welcome Heading */}
        <div className="relative">
          <h2 className="text-xl md:text-2xl font-semibold relative mt-10 right-30 xl:right-80 bottom-8">
            Welcome To
          </h2>
        </div>

        {/* Title and Paragraph (aligned with form) */}
        <div className="mb-8 mr-10 mt-[-20px] text-gray-800">
          <h1 className="text-xl  lg:text-2xl xl:text-3xl font-bold mt-2 xl:mr-80">Renu Sharma Foundation!</h1>
          <p className="text-xs md:text-sm font-serif mt-4">
            Login into your account to browse the site
          </p>
        </div>


        {/* Login Form */}
        <form className="w-full lg:ml-20 space-y-6">
          <div>
            <label className="block text-sm mb-1 text-gray-700 font-bold">Email</label>
            <input
              required
              type="email"
              placeholder="Email"
              className="w-[80%] md:w-[90%] lg:w-[80%] h-12 px-4 border border-gray-500 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 "
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-gray-700 font-bold">Password</label>
            <input
              required
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-[80%] md:w-[90%] lg:w-[80%] h-12 px-4 border border-gray-500 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="text-gray-600 hover:text-gray-800 absolute ml-[-5vh] mt-3"
            >
              {showPassword ? (
                <FiEyeOff className="w-5 h-5 cursor-pointer" />
              ) : (
                <FiEye className="w-5 h-5 cursor-pointer" />
              )}
            </button>

          </div>

          <div className="flex font-bold  justify-between items-center text-[12px] md:text-sm text-gray-600 w-[80%] md:w-[90%] lg:w-[80%]">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="cursor-pointer mr-2 h-4 w-4 rounded-sm"
              />
              Remember me
            </label>
            <button type="button" className="text-blue-600 hover:underline cursor-pointer font-medium">
              Forgot your password?
            </button>
          </div>

          <button
            type="submit"
            className="w-[80%] md:w-[90%] lg:w-[80%] h-12 bg-[#121c37] text-white rounded-full cursor-pointer hover:bg-[#202d4e] transition"
          >
            Login
          </button>

          <div className="text-center mr-16 lg:mr-[12vh] items-center font-bold text-[12px] md:text-sm mt-2 ">
            Don't have an account?{' '}
            <button
              type="button"
              onClick={() => {
                navigate('/signup');
              }}
              className="text-blue-600 cursor-pointer font-medium hover:underline"
            >
              Create one
            </button>
          </div>
        </form>

      </div>

      {/* Right Section */}
      <div className="w-1/2 h-screen bg-gray-100 hidden md:block rounded-br-2xl overflow-hidden rounded-tr-2xl">
        <div className="flex flex-col  h-full relative md:ml-[-4px] lg:ml-[-25px] ">
          <img
            src={image1}
            alt="Top Landscape"
            className="w-full absolute top-[-5px] h-[72%] "
          />
          <img
            src={image2}
            alt="Bottom Landscape"
            className="w-full absolute bottom-[-7px] h-[68%]  "
          />
          <img
            src={hexagons}
            alt="hexagons"
            className='w-full absolute md:left-8 lg:left-14 h-[95%] lg:h-[99%]' />
        </div>
      </div>
    </div>
  );
};

export default Login;
