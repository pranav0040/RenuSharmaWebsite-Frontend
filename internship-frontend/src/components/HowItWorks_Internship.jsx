import men_internship from '../assets/men_internship.png';
import women_internship from '../assets/women_internship.png';
import person1 from '../assets/person1.png';
import person2 from '../assets/person2.png';
import person3 from '../assets/person3.png';


const HowItWorksSection = () => {
    return (
        <section className="bg-[#f9fbff] px-4 sm:px-8 lg:px-20 py-16">
            <div className="max-w-screen-lg mx-auto flex flex-col lg:flex-row items-start gap-y-12 gap-x-12 relative">

                {/* LEFT: Steps */}
                <div className="flex-1 space-y-10 relative z-10">
                    <h2 className="text-5xl sm:text-4xl font-bold text-[#0a2c54] mb-4">How It Works</h2>

                    {/* Step 1 */}
                    <div className="relative flex items-center gap-6">
                        <h1 className="text-6xl sm:text-7xl text-gray-200 font-bold w-[80px] text-left">01</h1>
                        <div className="bg-white rounded-2xl shadow-md p-5 flex items-start gap-4 max-w-[390px] w-full">
                            <div className="bg-[#e6efff] p-2 rounded-full">
                                <img src="/icons/signup.png" alt="signup" className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-[#0a2c54]">Sign Up and create Account</h3>
                                <p className="text-sm text-gray-600">Fill out your details and showcase your skills.</p>
                            </div>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="relative flex items-center justify-end gap-6">
                        <div className="bg-white rounded-2xl shadow-md p-5 flex items-start gap-4 max-w-[460px] w-full">
                            <div className="bg-[#fff4dc] p-2 rounded-full">
                                <img src="/icons/upload.png" alt="upload" className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-[#0a2c54]">Upload Your Portfolio</h3>
                                <p className="text-sm text-gray-600">Add your skills and technology.</p>
                            </div>
                        </div>
                        <h1 className="text-6xl sm:text-7xl text-gray-200 font-bold w-[80px] text-right">02</h1>
                    </div>

                    {/* Step 3 */}
                    <div className="relative flex items-center gap-6">
                        <h1 className="text-6xl sm:text-7xl text-gray-200 font-bold w-[80px] text-left">03</h1>
                        <div className="bg-white rounded-2xl shadow-md p-5 flex items-start gap-4 max-w-[460px] w-full">
                            <div className="bg-[#f3e7ff] p-2 rounded-full">
                                <img src="/icons/explore.png" alt="explore" className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-[#0a2c54]">Explore your task</h3>
                                <p className="text-sm text-gray-600">Discover your talent push your limits.</p>
                            </div>
                        </div>
                    </div>

                </div>



                {/* RIGHT: Visuals */}
                <div className="flex-1 flex flex-col items-center relative gap-4">
                    <div className="flex gap-4">
                        {/* Left - Man */}
                        <div className="relative flex flex-col items-center">
                            <img
                                src={men_internship}
                                alt="Working Man"
                                className="h-[260px] w-[200px] object-cover rounded-2xl"
                            />

                            {/* Badge */}
                            <div className="mt-4 bg-white shadow-xl px-5 py-3 rounded-full flex items-center gap-4">
                                <div className="flex -space-x-2">
                                    <img src={person1} alt="user1" className="w-8 h-8 rounded-full border-2 border-white" />
                                    <img src={person2} alt="user2" className="w-8 h-8 rounded-full border-2 border-white" />
                                    <img src={person3} alt="user3" className="w-8 h-8 rounded-full border-2 border-white" />
                                </div>
                                <div className="text-base text-[#0a2c54] font-semibold leading-5">
                                    10K+ <span className="block text-sm text-gray-500 font-normal">Students</span>
                                </div>
                            </div>
                        </div>

                        {/* Woman  */}
                        <img
                            src={women_internship}
                            alt="Working Woman"
                            className="h-[320px] w-[220px] object-cover rounded-2xl"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default HowItWorksSection;

// Note: The above code is a React component that renders a "How It Works" section for an internship program.