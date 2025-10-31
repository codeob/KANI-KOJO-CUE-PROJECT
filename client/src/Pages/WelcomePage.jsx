import { Link } from 'react-router-dom';
import mapimage from "../assets/backgrounds/Map1_Bkg.png";
import grainBG from '../assets/backgrounds/grainBG.png';
import rightarrow from '../assets/icons/rArrow.svg';
import Frame from '../assets/backgrounds/Map.png'
import grayFrame from '../assets/backgrounds/frame_gray_grain.png'
import contineFrame from '../assets/backgrounds/darkBrownFrame.svg';

function WelcomePage() {
  return (
    <div
      className="h-screen w-full bg-cover bg-center flex flex-col justify-center items-center px-4 py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12 relative"
      style={{ backgroundImage: `url(${mapimage})` }}
    >
      
      
      {/* Main Card Container */}
      <div className="relative max-w-4xl w-full mx-auto z-10 p-4 sm:p-5 md:p-6 lg:p-7 rounded-xl"
        style={{ backgroundImage: `url(${grayFrame})` }}
      >
        {/* Card with decorative border effect */}
        <div className="relative rounded-lg overflow-hidden">
          {/* Grain texture overlay */}
          <img src={grainBG} alt="grain background" className="absolute  w-full h-full object-cover opacity-20 z-0" />
          
          {/* Content Container */}
          <div className="relative z-10 p-1 sm:p-2 md:p-3 lg:p-4">
            {/* Title */}
            <div className="text-center mb-2 sm:mb-4">
              <h1 className="text-sm sm:text-sm md:text-xl lg:text-2xl rock text-primary-100 mb-1 leading-tight ">
                WELCOME TO KANI'S JOURNEY
              </h1>
            </div>

            {/* Map/Illustration Container */}
            <img src={Frame} alt="" className="w-full h-auto object-contain " />

            {/* Description Text */}
            <div className="text-center mb-2 sm:mb-4"> 
              <p className="special-elite text-base sm:text-lg md:text-xl lg:text-2xl text-primary-100 leading-relaxed max-w-xl sm:max-w-2xl mx-auto"> 
                Tap the red pins across the town to unlock the memories, moments, and music that shaped Kani's story.
              </p>
            </div>

            {/* Continue Button with same style as Slide component */}
            <div className="flex justify-center">
              <Link to="/map" className="block">
                <button className="group relative flex items-center gap-2 sm:gap-4 justify-between py-2 sm:py-3 px-6 sm:px-8 rounded-[10px] cursor-pointer transition-all duration-300 outline-none min-w-[150px] sm:min-w-[200px]"
                >
                  <img src={contineFrame} alt="Button Border Frame" className='absolute left-0 w-full h-full' />
                  <div className="flex items-center gap-2 sm:gap-3 z-10">
                    <span className="font-biro text-sm sm:text-[24px] tracking-wider text-white transition-colors duration-100 group-hover:text-white group-focus:text-white">
                      Continue
                    </span>
                  </div>
                  {/* Right arrow */}
                  <img
                    src={rightarrow}
                    alt="arrow icon"
                    className="w-5 h-5 sm:w-6 sm:h-6 transition-colors duration-100 group-hover:brightness-0 group-hover:invert group-focus:invert group-focus:brightness-0 z-10" 
                  />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;