import logo from '../assets/logo.png'; // Put logo image in /assets

const TopHeader = () => {
  return (
    <div className="w-full bg-[#1c2a4e] py-2 shadow-sm overflow-hidden">
  <div className="w-full max-w-7xl mx-auto px-4 flex flex-col sm:flex-row sm:justify-center items-center gap-2 sm:gap-4">
    <img
      src={logo}
      alt="Logo"
      className="h-10 w-10 sm:h-12 sm:w-12"
    />
    <span className="text-white text-lg sm:text-2xl font-sans font-bold tracking-wide text-center sm:text-left">
      RENU SHARMA FOUNDATION
    </span>
  </div>
</div>

  );
};

export default TopHeader;
