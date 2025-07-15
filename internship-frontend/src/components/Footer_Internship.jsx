import React from "react";
import {
  FaEnvelope,
  FaInstagram,
  FaTelegram,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import bgImage1 from "../assets/backgroudn_Gradient.webp";
import bgImage2 from "../assets/backgroudn_Gradient_1.webp";
const Footer_Internship = () => {
  return (
    <div className="text-gray-700">
      {/* CTA Section */}
      <div
        className="px-6 md:px-20 py-16 rounded-3xl  mx-4 md:mx-20 shadow-md text-center"
        style={{
          backgroundImage: `url(${bgImage1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Join our Network and unlock your <br /> dream career today
        </h2>
        <p className="text-gray-600 mb-6 max-w-xl mx-auto">
          Unlock your true potential and discover a world of opportunities that
          align with your skills, interests, and aspirations
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-4 max-w-xl mx-auto">
          <div className="flex items-center bg-white px-4 py-4 rounded-full shadow-md w-[80%] md:w-[60%]  ">
            <FaEnvelope className="text-gray-700 mr-3" />
            <input
              type="email"
              placeholder="Your mail address"
              className="w-full outline-none text-sm"
            />
          </div>
          <button
            className="w-[60%] md:w-auto px-5 py-2  bg-blue-600 text-white 
           rounded-full shadow-md
            font-semibold hover:bg-blue-700 transition text-2xl md:text-[16px]"
          >
            Join Us
          </button>
        </div>
      </div>
      <footer
        className="mt-8 px-6 md:px-20 pt-10 pb-10"
        style={{
          backgroundImage: `url(${bgImage2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Column 1 */}
          <div>
            <h3 className="text-2xl font-bold text-blue-700 mb-2">
              Renu sharma Foundation
            </h3>
            <p className="text-sm">
              Head Office: Lorem ispsumorem ipsum lorem ispssum lorem ipsum
            </p>
            <p className="text-sm mt-2">
              <strong>Phone:</strong> +91-111-111-1111
            </p>
            <p className="text-sm">
              <strong>Fax:</strong> 022-2222222
            </p>
            <p className="text-sm">
              <strong>Email:</strong> info@renusharmafoundation.com
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-lg font-bold mb-2">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>lorem ipsum</li>
              <li>Jobs</li>
              <li>Employeer</li>
              <li>Careers</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-lg font-bold mb-2">Others</h4>
            <ul className="space-y-2 text-sm">
              <li>How it works</li>
              <li>Terms and condition</li>
              <li>Privacy Policy</li>
              <li>About Us</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="text-lg font-bold mb-2">About us</h4>
            <ul className="space-y-2 text-sm">
              <li>Milestone</li>
              <li>Web mail</li>
              <li>Board of Directors</li>
              <li>Senior Management</li>
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="mt-10 flex flex-col md:flex-row justify-between items-center border-t pt-6 text-sm text-gray-500">
          <p>©2024 All rights reserved</p>
          <div className="flex space-x-4 mt-4 md:mt-0 text-xl text-gray-600">
            <FaInstagram className="hover:text-blue-500 cursor-pointer" />
            <FaTelegram className="hover:text-blue-500 cursor-pointer" />
            <FaTiktok className="hover:text-blue-500 cursor-pointer" />
            <FaYoutube className="hover:text-blue-500 cursor-pointer" />
          </div>
        </div>
      </footer>{" "}
    </div>
  );
};

export default Footer_Internship;
