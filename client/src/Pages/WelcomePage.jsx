import { Link } from 'react-router-dom';
import mapimage from "../assets/backgrounds/Map1_Bkg.png";
import grainBG from '../assets/backgrounds/grainBG.png';
import rightarrow from '../assets/icons/rArrow.svg';
import Frame from '../assets/backgrounds/Map.png';
import grayFrame from '../assets/backgrounds/frame_gray_grain.png';
import contineFrame from '../assets/backgrounds/darkBrownFrame.svg';

function WelcomePage() {
  return (
    <div
      className="relative flex items-center justify-center min-h-screen w-full bg-cover bg-center overflow-hidden px-4"
      style={{
        backgroundImage: `url(${mapimage})`,
      }}
    >
      {/* Optional overlay for contrast */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Center Container */}
      <div
        className="relative flex flex-col items-center justify-center w-full max-w-3xl sm:max-w-4xl rounded-2xl overflow-hidden p-4 sm:p-6 md:p-8 z-10 text-center transition-all duration-300 ease-in-out"
        style={{
          backgroundImage: `url(${grayFrame})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Grain overlay */}
        <img
          src={grainBG}
          alt="grain background"
          className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
        />

        {/* Inner content */}
        <div className="relative z-10 flex flex-col items-center justify-center space-y-4 sm:space-y-6 md:space-y-8 w-full max-w-full">
          {/* Title */}
          <h1 className="text-primary-100 text-lg sm:text-2xl md:text-3xl lg:text-4xl rock leading-tight">
            WELCOME TO KANI'S JOURNEY
          </h1>

          {/* Image */}
          <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl flex justify-center">
            <img
              src={Frame}
              alt="Map Illustration"
              className="w-full h-auto object-contain max-h-[50vh] sm:max-h-[60vh] md:max-h-[70vh]"
            />
          </div>

          {/* Description */}
          <p className="special-elite text-sm sm:text-base md:text-lg lg:text-xl text-primary-100 leading-relaxed max-w-lg sm:max-w-2xl mx-auto px-2">
            Tap the red pins across the town to unlock the memories, moments, and music that shaped Kani's story.
          </p>

          {/* Continue Button */}
          <Link to="/map" className="relative inline-block">
            <button
              className="group relative flex items-center justify-center gap-3 sm:gap-4 py-2 sm:py-3 px-6 sm:px-8 rounded-xl cursor-pointer transition-all duration-300 outline-none min-w-[160px] sm:min-w-[200px] md:min-w-[240px]"
            >
              {/* Frame border */}
              <img
                src={contineFrame}
                alt="Button Frame"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              />
              <div className="flex items-center gap-2 sm:gap-3 z-10">
                <span className="font-biro text-base sm:text-lg md:text-xl text-white tracking-wide group-hover:text-white">
                  Continue
                </span>
                <img
                  src={rightarrow}
                  alt="arrow icon"
                  className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:translate-x-1"
                />
              </div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
