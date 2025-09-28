import { Link } from 'react-router-dom';
import mapBg from '../assets/backgrounds/mapimg.jpg';
import grainBG from '../assets/backgrounds/grainBG.png';
import btnBorder from "../assets/slideBtn_Frame.png";
import rightarrow from '../assets/icons/rArrow.svg';

function WelcomePage() {
  return (
    <div
      className="h-screen w-full bg-cover bg-center flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 relative"
      style={{ backgroundImage: `url(${mapBg})` }}
    >
      <div className="absolute inset-0 bg-black/60 z-0"></div>
      
      {/* Main Card Container */}
      <div className="relative max-w-4xl w-full mx-auto z-10 sm:max-w-5xl lg:max-w-6xl">
        {/* Card with decorative border effect */}
        <div className="relative bg-white/90 backdrop-blur-sm rounded-lg shadow-xl border-4 border-blue-400 overflow-hidden">
          {/* Grain texture overlay */}
          <img src={grainBG} alt="grain background" className="absolute inset-0 w-full h-full object-cover opacity-20 z-0" />
          
          {/* Content Container */}
          <div className="relative z-10 p-4 sm:p-8 md:p-10 lg:p-12">
            {/* Title */}
            <div className="text-center mb-6 sm:mb-8">
              <h1 className="text-[1.75rem] sm:text-[2rem] md:text-[2.25rem] lg:text-[2.5rem] rock text-primary-100 mb-2 leading-tight">
                WELCOME TO KANI'S JOURNEY
              </h1>
            </div>

            {/* Map/Illustration Container */}
            <div className="relative bg-gray-100 rounded-lg p-4 sm:p-6 mb-6 sm:mb-8 min-h-[200px] sm:min-h-[250px] md:min-h-[300px] flex items-center justify-center border-2 border-gray-200">
              {/* This would be your actual map component/image */}
              <div className="w-full h-full bg-gradient-to-br rounded flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <div className="text-2xl sm:text-3xl md:text-4xl mb-2"></div> 
                  <p className="text-xs sm:text-sm"></p> 
                </div>
              </div>
            </div>

            {/* Description Text */}
            <div className="text-center mb-6 sm:mb-8"> 
              <p className="special-elite text-base sm:text-lg md:text-xl lg:text-2xl text-primary-100 leading-relaxed max-w-xl sm:max-w-2xl mx-auto"> 
                Tap the red pins across the town to unlock the memories, moments, and music that shaped Kani's story.
              </p>
            </div>

            {/* Continue Button with same style as Slide component */}
            <div className="flex justify-center">
              <Link to="/map" className="block">
                <button className="group relative flex items-center gap-2 sm:gap-4 justify-between py-2 sm:py-3 px-6 sm:px-8 rounded-[10px] cursor-pointer transition-all duration-300 hover:bg-surface-100 focus:bg-secondy-100 outline-none min-w-[150px] sm:min-w-[200px]">
                  <img src={btnBorder} alt="Button Border Frame" className='absolute left-0 w-full h-full' />
                  <div className="flex items-center gap-2 sm:gap-3 z-10">
                    <span className="rock text-sm sm:text-base font-bold tracking-wider text-secondy-100 transition-colors duration-100 group-hover:text-white group-focus:text-white">
                      CONTINUE
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