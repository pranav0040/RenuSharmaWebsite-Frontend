import { FaStar, FaRegUserCircle } from "react-icons/fa";

function Testimonial() {
  return (
    <div className="flex justify-center flex-col items-center bg-[#f1f1f1]">
      <h2 className="text-[45px] font-semibold max-md:text-[34px]">
        Testimonial
      </h2>

      <div className="flex m-[92px] gap-[28px] max-md:flex-col max-md:m-[20px]">
        {/* Card 1 */}
        <div className="bg-white text-black hover:bg-black hover:text-white p-[22px] group transition-colors duration-300">
          <div>
            <p className="text-lg font-medium text-black group-hover:text-white transition-colors duration-300">
              “Complete account of the system and expound the actual Contrary to
              popular belief, Lorem Ipsum is not simply random text. It has
              roots”
            </p>
          </div>
          <div className="mt-6 flex justify-between items-center space-x-6">
            <div className="flex gap-4">
              <div className="text-5xl">
                <FaRegUserCircle />
              </div>
              <div className="flex flex-col items-center">
                <div className="font-medium not-italic">Bonnie Green</div>
                <div className="text-sm not-italic text-gray-500 group-hover:text-gray-300">
                  CTO at Flowbite
                </div>
              </div>
            </div>
            <div className="flex text-lg text-[#e3a008]">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white text-black hover:bg-black hover:text-white p-[22px] group transition-colors duration-300">
          <div>
            <p className="text-lg font-medium text-black group-hover:text-white transition-colors duration-300">
              “Teachings of the great explore of truth, the master-builder of
              human happiness. No one rejects, dislikes, or avoids pleasure
              itself.”
            </p>
          </div>
          <div className="mt-6 flex justify-between items-center space-x-6">
            <div className="flex gap-4">
              <div className="text-5xl">
                <FaRegUserCircle />
              </div>
              <div className="flex flex-col items-center">
                <div className="font-medium not-italic">Bonnie Green</div>
                <div className="text-sm not-italic text-gray-500 group-hover:text-gray-300">
                  CTO at Flowbite
                </div>
              </div>
            </div>
            <div className="flex text-lg text-[#e3a008]">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white text-black hover:bg-black hover:text-white p-[22px] group transition-colors duration-300">
          <div>
            <p className="text-lg font-medium text-black group-hover:text-white transition-colors duration-300">
              “There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form.”
            </p>
          </div>
          <div className="mt-6 flex justify-between items-center space-x-6">
            <div className="flex gap-4">
              <div className="text-5xl">
                <FaRegUserCircle />
              </div>
              <div className="flex flex-col items-center">
                <div className="font-medium not-italic">Bonnie Green</div>
                <div className="text-sm not-italic text-gray-500 group-hover:text-gray-300">
                  CTO at Flowbite
                </div>
              </div>
            </div>
            <div className="flex text-lg text-[#e3a008]">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
        </div>
      </div>

      {/* Pagination Buttons */}
      <div className="flex gap-4 mb-12">
        <button className="h-4 w-12 bg-[#4d2c5e] rounded-4xl"></button>
        <button className="h-4 w-[15px] bg-gray-400 rounded-4xl"></button>
        <button className="h-4 w-[15px] bg-gray-400 rounded-4xl"></button>
        <button className="h-4 w-[15px] bg-gray-400 rounded-4xl"></button>
      </div>
    </div>
  );
}

export default Testimonial;
