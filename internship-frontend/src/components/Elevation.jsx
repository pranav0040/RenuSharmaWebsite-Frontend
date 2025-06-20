import React from 'react';
import heroImage from '../assets/image10.png'; // replace with your actual image
import icon1 from '../assets/online-test1.png';
import icon2 from '../assets/exam1.png';
import icon3 from '../assets/certification1.png';
import secImg1 from '../assets/imageCursor.png';
import secImg2 from '../assets/imageNotebook.png';
import Faq from './Faq';
import Testimonial from './Testimonial';
import Mentors from './Mentors';
const Elevation = () => {
    return (
        <div className="w-full bg-[#EFFAFE]   min-h-screen overflow-hidden ">
            {/* Top Header */}
            {/* <div className="text-white py-10 px-4 md:px-3 xl:px-30 bg-[#2C355E]">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 flex-wrap">
                    {[{ img: icon1, text: 'Innovative Learning' }, { img: icon2, text: 'Expert Mentors' }, { img: icon3, text: 'Career Growth' }].map((item, index) => (
                        <div key={index} className="flex items-center gap-3 w-full sm:w-auto">
                            <div className="w-20 h-20 xl:w-25 xl:h-25 bg-[#faf8f835] rounded-2xl flex items-center justify-center">
                                <img src={item.img} alt={item.text} className="w-12 h-12 object-contain" />
                            </div>
                            <p className="text-base md:text-lg xl:text-2xl font-medium whitespace-nowrap">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div> */}

            {/* Hero Section */}
            <div className=" text-[#001f3f] px-4 md:px-12 py-8 flex-grow ">
                <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row items-center gap-12 h-full">
                <h1 className="lg:hidden text-2xl md:text-6xl xl:text-5xl font-bold leading-snug">
                            <span className="text-[#001f3f]">Elevated</span> <span className="text-[#88A4DD]">Educational</span>
                            <br /> <span className="text-[#001f3f]">Experience</span>
                        </h1>
                    <div className="w-full lg:w-1/2 flex justify-center items-center">
                        <img src={heroImage} alt="Hero" className="w-full max-w-lg lg:max-w-xl object-contain" />
                    </div>
                    <div className="flex flex-col  justify-center  text-center md:text-left w-full lg:w-1/2 h-full mt-4 md:mt-12 lg:mt-0">
                        <h1 className="hidden lg:block text-3xl md:text-4xl xl:text-5xl font-bold leading-snug">
                            <span className="text-[#001f3f]">Elevated</span> <span className="text-[#88A4DD]">Educational</span>
                            <br /> <span className="text-[#001f3f]">Experience</span>
                        </h1>

                        {/* Info Sections */}
                        <div className="mt-20 space-y-6">
                            {[{ img: secImg1, heading: 'Easily Accessible', subtext: 'Anytime, Anywhere Learning Access' }, { img: secImg2, heading: 'Fun learning experience', subtext: 'Interactive Learning to Boost Engagement' }].map((section, idx) => (
                                <div key={idx} className="flex flex-col sm:flex-row items-center gap-3 ml-0 sm:ml-[-20px] md:ml-[-30px] lg:ml-[-10px] xl:ml-0">
                                    <img src={section.img} alt="Section" className="w-24 h-24 lg:w-28 lg:h-28 object-contain" />
                                    <div className="flex flex-col text-center sm:text-left lg:gap-4">
                                        <p className="text-xl md:text-3xl lg:text-2xl font-semibold text-black">{section.heading}</p>
                                        <p className="text-base lg:text-lg  text-[#000000] whitespace-nowrap">{section.subtext}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* mentors View */}
            <Mentors />
            <Testimonial/>
          <Faq/>
        </div>
    );
};

export default Elevation;
