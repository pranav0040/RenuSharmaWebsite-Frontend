import { FaSearch } from 'react-icons/fa';
import collageImage from '../assets/collage.png'; 

function Hero() {
  return (
    <section className="bg-[#f0f8ff] pt-15 pb-15 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Text Content */}
        <div className="md:w-1/2 space-y-6 flex justify-end">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            Empowering <span className="text-blue-600 py-2">Students</span><br />
            Shaping <span className="text-blue-600">Futures</span>
          </h1>
          <p className="text-gray-700 max-w-md py-6 mb-20">
            Renu Sharma Foundation is a global training provider based across the UK that specialises in accredited and bespoke training courses...
          </p>

          {/* Search Bar */}
          <div className="flex items-center w-full max-w-md rounded-full overflow-hidden shadow-lg bg-white border py-2">
            <div className="px-4 text-gray-400">
              <FaSearch />
            </div>
            <input
              type="text"
              placeholder="Search for Courses..."
              className="flex-grow px-2 py-2 text-sm focus:outline-none"
            />
            <button className="bg-[#1c2a4e] text-white px-5 py-2 text-sm font-medium rounded-2xl hover:bg-[#16203b] transition">
              Continue
            </button>
          </div>
          </div>
        </div>

        {/* Image */}
        <div className="md:w-1/2 flex justify-end ml-auto">
          <img
            src={collageImage}
            alt="Collage"
            className="w-[280px] md:w-[400px] lg:w-[418px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
