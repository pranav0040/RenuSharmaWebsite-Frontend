import React, { useState } from "react";

import vector1 from "../assets/Vector1.svg";
import vector2 from "../assets/Vector2.svg";
import vector3 from "../assets/Vector3.svg";
import vector4 from "../assets/Vector4.svg";
import CiscoLogo from "../assets/Cisco.svg";
import ArrowNavigation from "./ArrowNavigation";

const HandsOnProjectSection_Internships = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const projects = [
    {
      title: "Authentication",
      logo: CiscoLogo,
      description:
        "Create authentication technology to give access, Correspond to those stored in a database of authorized users.",
      tools: [vector1, vector2, vector3, vector4],
      bgColor: "#FFF3F3",
    },
    {
      title: "Data Analysis",
      logo: CiscoLogo,
      description:
        "Analyze datasets to identify trends and generate actionable insights for business improvement.",
      tools: [vector1, vector2, vector3, vector4],
      bgColor: "#FFF3F3",
    },
    {
      title: "Data Analysis",
      logo: CiscoLogo,
      description:
        "Analyze datasets to identify trends and generate actionable insights for business improvement.",
      tools: [vector1, vector2, vector3, vector4],
      bgColor: "#FFF3F3",
    },
    {
      title: "Data Analysis",
      logo: CiscoLogo,
      description:
        "Analyze datasets to identify trends and generate actionable insights for business improvement.",
      tools: [vector1, vector2, vector3, vector4],
      bgColor: "#FFF3F3",
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  return (
    <section className="px-6 md:px-20 py-16 ml-36 mr-36 mb-0 bg-white flex flex-col md:flex-row">
      {/* Left Section */}
      <div className="w-full md:w-1/2">
        <div className="text-center md:text-left mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Hands-on Projects
          </h2>
          <p className="text-gray-500 font-medium max-w-xl">
            Find out how our Mentor transformed their careers by giving <br />
            Hands on Projects.
          </p>
        </div>

        {/* Metrics */}
        <div className="flex flex-col md:flex-row gap-4 mb-10">
          <div className="bg-teal-500 text-white px-6 py-2 rounded-lg text-center w-full md:w-[150px] shadow-md">
            <div className="text-2xl font-bold">10+</div>
            <div className="text-lg font-semibold">Projects</div>
          </div>
          <div className="bg-purple-500 text-white px-6 py-2 rounded-lg text-center w-full md:w-[150px] shadow-md">
            <div className="text-2xl font-bold">06+</div>
            <div className="text-lg font-semibold">Domains</div>
          </div>
        </div>

        <ArrowNavigation
          onPrev={handlePrev}
          onNext={handleNext}
          className="hidden md:flex mb-6"
        />
      </div>
      {/* Right Side Project Cards */}
      <div className="w-full md:w-1/2 overflow-hidden relative px-1 py-4">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 90}%)` }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="min-w-[90%] mr-4 bg-white rounded-2xl shadow-md px-8 py-6"
              style={{ backgroundColor: project.bgColor }}
            >
              <h3 className="text-[25px] font-medium text-[#727695] mb-2">
                {project.title}
              </h3>
              <div className="flex items-center gap-6 mb-4">
                <img src={project.logo} alt="Logo" className="h-8" />
              </div>
              <p className="text-[16px] text-[#646464] mb-4 font-[500]">
                {project.description}
              </p>
              <div className="flex items-center gap-3 md:gap-4">
                <p className="font-semibold text-lg text-[#646464]letter-spacing-0.5">
                  Tools:
                </p>
                {project.tools.map((tool, i) => (
                  <img key={i} src={tool} alt={`tool-${i}`} />
                ))}
              </div>
            </div>
          ))}
        </div>
        <ArrowNavigation
          onPrev={handlePrev}
          onNext={handleNext}
          className="md:hidden mt-6 mb-6"
        />
      </div>
    </section>
  );
};

export default HandsOnProjectSection_Internships;
