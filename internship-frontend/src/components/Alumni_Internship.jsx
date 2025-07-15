import React, { useEffect, useRef, useState } from "react";

export default function AlumniCarousel() {
  const [alumni, setAlumni] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    fetch("/data/alumniData.json")
      .then((res) => res.json())
      .then((data) => setAlumni(data));
  }, []);

  useEffect(() => {
    if (alumni.length === 0) return;
    intervalRef.current = setInterval(() => {
      const nextIndex = (currentIndex + 1) % alumni.length;
      scrollToCard(nextIndex);
    }, 4000);
    return () => clearInterval(intervalRef.current);
  }, [currentIndex, alumni.length]);

  const scrollToCard = (index) => {
    if (scrollRef.current) {
      const width = scrollRef.current.clientWidth;
      scrollRef.current.scrollTo({ left: index * width, behavior: "smooth" });
      setCurrentIndex(index);
    }
  };

  return (
    <div className="w-full px-4 py-10 max-w-7xl mx-auto">
      <h2 className="text-center text-sm sm:text-2xl font-bold mb-1 text-[#1B99D4]">Our Alumni Placed</h2>
      <p className="text-center text-2xl font-bold mb-10 ">
        Explore Our Alumni & Connect With Them
      </p>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto snap-x scroll-smooth gap-4 sm:gap-6 pb-4 no-scrollbar"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {alumni.map((alum, index) => (
          <div
            key={index}
            className="relative flex-shrink-0 snap-center w-full sm:w-[320px] bg-white rounded-2xl border shadow-md p-5 pt-10"
          >
            {/* Hike badge */}
            <div className="absolute top-4 right-4 bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-md flex items-center gap-1">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5 10l4 4L15 7"></path>
              </svg>
              +{alum.hike} Hike
            </div>

            {/* Avatar */}
            <div className="flex justify-start mb-3">
              <img
                src={alum.image || "/default-avatar.png"}
                alt={alum.name}
                className="w-12 h-12 rounded-full object-cover border"
              />
            </div>

            <div className="text-base font-bold">{alum.name}</div>
            <div className="text-sm text-gray-600 mb-2">{alum.role}</div>
            <p className="text-sm text-gray-800 mb-3">{alum.description}</p>

            {/* Companies */}
            <div className="flex flex-wrap gap-1 text-sm font-semibold text-gray-800 mb-2">
              {alum.companies.map((comp, i) => (
                <span key={i}>
                  {comp}
                  {i < alum.companies.length - 1 ? " → " : ""}
                </span>
              ))}
            </div>

            {/* LinkedIn Review */}
            <a
              href={alum.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-500 underline flex items-center gap-1"
            >
              <img src="/linkedin.svg" alt="LinkedIn" className="w-4 h-4" />
              Read full review
            </a>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-12 gap-3">
        {alumni.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToCard(index)}
            className={`h-2 w-2 rounded-full transition-all ${
              currentIndex === index ? "bg-[#1B99D4] w-4" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>

      {/* Connect Now Button */}
      <div className="text-center mt-12">
        <button className="bg-[#1B99D4] hover:bg-[#1b8dd4] text-white font-semibold px-6 py-4 rounded-md shadow">
          CONNECT NOW →
        </button>
      </div>
    </div>
  );
}

