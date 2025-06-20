import React from 'react';
import { Link } from 'react-router-dom';

import learnIcon from '../assets/learn.png';
import careerIcon from '../assets/career.png';
import certificateIcon from '../assets/certificate.png';

const EarnACertificate = () => {
  // Define the items with their icons, titles, and links
  const items = [
    {
      icon: learnIcon,
      title: "Learn The Latest Skills",
      link: "/skills",
    },
    {
      icon: careerIcon,
      title: "Get Ready For a Career",
      link: "/career",
    },
    {
      icon: certificateIcon,
      title: "Earn a Certificate",
      link: "/certificate",
    },
  ];

  return (
    <section className="bg-[#1c2a4e] py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
        {items.map((item, index) => (
          <Link
            to={item.link}
            key={index}
            className="flex items-center gap-4 hover:scale-105 transition-transform duration-300"
          >
            {/* Faded white square */}
            <div className="bg-white/40 backdrop-blur p-4 rounded-lg shadow-lg w-20 h-20 flex items-center justify-center">
              <img
                src={item.icon}
                alt={item.title}
                className="w-10 h-10 object-contain"
              />
            </div>

            {/* Text */}
            <h4 className="text-white text-lg font-semibold">{item.title}</h4>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default EarnACertificate;
