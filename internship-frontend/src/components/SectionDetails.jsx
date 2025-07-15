import React from "react";
 
import Game from "../assets/Game.svg";
import Leaderboard from "../assets/Leaderboard.svg";
import Playground from "../assets/Playground.svg";
import Certificate from "../assets/Certificate.svg";
import Community from "../assets/Community.svg";


const features = [
  {
    icon: Game,
    title: "Gamified Lessons",
    description: (
      <p className="text-[14px] text-gray-800 font-medium mt-2">
        With interactive exercises, <br />
        challenges, and projects, crafted by <br />
        experts and backed by research
      </p>
    ),
  },
  {
    icon: Certificate,
    title: "Certificates",
    description: (
      <p className="text-[14px] text-gray-800 font-medium mt-2">
        Celebrate your accomplishments with <br />
        shareable certificates as you reach <br />
        milestones on your journey
      </p>
    ),
  },
  {
    icon: Leaderboard,
    title: "Leaderboards",
    description: (
      <p className="text-[14px] text-gray-800 font-medium mt-2">
        Compete with fellow and climb <br />
        the ranks as you complete exercises, <br />
        challenges, and projects
      </p>
    ),
  },
  {
    icon: Playground,
    title: "PLayground",
    description: (
      <p className="text-[14px] text-gray-800 font-medium mt-2">
        Unleash your creativity, from trying out <br />
        concepts to prototyping your ideas and <br />
        realizing your projects
      </p>
    ),
  },
  {
    icon: Community,
    title: "Community",
    description: (
      <p className="text-[14px] text-gray-800 font-medium mt-2">
        Connect with the community to get <br />
        guidance, share insights, and collaborate <br />
        with your fellow participants
      </p>
    ),
  },
];
const SectionDetails = () => {
  return (
    <div className="py-16 mt-12 md:mt-16 px-6 md:px-20 text-center">
    {/* for mobile screen */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:hidden gap-10 place-items-center">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={feature.icon} alt={feature.title} className="h-16" />
            <h4 className="mt-4 font-bold text-lg text-gray-800">
              {feature.title}
            </h4>
            {feature.description}
          </div>
        ))}
      </div>
      {/* for big screens */}
      <div className="hidden md:grid grid-cols-3  gap-10 place-items-center">
        {/* first row */}
        {features.slice(0, 3).map((feature, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={feature.icon} alt={feature.title} className="h-16" />
            <h4 className="mt-4 font-bold text-lg text-gray-800">
              {feature.title}
            </h4>
            {feature.description}
          </div>
        ))}
        {/* Second row */}
        <div className=" col-span-3 flex justify-center gap-10">
          {features.slice(3, 5).map((feature, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={feature.icon} alt={feature.title} className="h-16" />
              <h4 className="mt-4 font-bold text-lg text-gray-800">
                {feature.title}
              </h4>
              {feature.description}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionDetails;
