import React from 'react';
import KExpWithCloseBtnHeadingCream from '../components/KExpWithCloseBtnHeadingCream';
import subwayloc from '../assets/subwayloc.png';
import grainBG from '../assets/backgrounds/grainBG.png';
import Aluming from '../assets/Group19.png';
import { Link } from 'react-router-dom';

function Slide({ location, close, isAnimating }) {
  if (!location) return null;

  return (
    <div
      className={`bg-grainbkg-100  w-[872px] h-[900px] transition-transform duration-300 ease-in-out ${isAnimating ? 'translate-x-0' : '-translate-x-full'
        }`}
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        transform: isAnimating ? 'translateX(0)' : 'translateX(-100%)',
      }}
    >
      <img src={grainBG} alt="background" className="absolute inset-0 w-full h-full object-cover" />
      <div className="p-4 sm:p-5 md:p-6 lg:p-8 relative z-50">
        {/* Close button and the experience */}
        <div>
          <KExpWithCloseBtnHeadingCream close={close} />
        </div>
        <div>
          {/* Location name with subwayloc icon */}
          <div className="flex flex-row items-center gap-2">
            <img src={subwayloc} alt="location icon" className="h-[32px] w-[32px]" />
            <h2 className="text-[48px] font-bold special-elite text-primary-100">
              {location.locationName}
            </h2>
          </div>
          <div className="pt-6 sm:pt-9 flex flex-col gap-4">
            <h1 className="oswald text-[12px] text-secondy-100 tracking-wide">
              The HEART OF THE STORY
            </h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg rock text-primary-100">
              {location.importance}
            </p>
          </div>
          {/* Album image, title, and artist */}
          <div className="flex flex-row gap-3 sm:gap-5 pt-4 sm:pt-6 flex-wrap">
            <img
              src={Aluming}
              alt="album cover"
              className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[348px] lg:h-[348px]"
            />
            <div className="flex flex-col gap-1.5">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] freckle-face-regular text-primary-100">
                {location.songTitle}
              </h1>
              <h1 className="text-base sm:text-lg md:text-xl lg:text-[20px] special-elite text-primary-100">
                {location.artistName}
              </h1>
              {/* Dynamic Buttons */}
              <div className="mt-4 sm:mt-6 flex flex-col gap-2 sm:gap-3">
                {location.buttons?.map((btn, index) => (
                  <a
                    key={index}
                    href={btn.link}
                    className={`flex items-center justify-between px-3 py-2 sm:px-4 sm:py-3 rounded-md font-handwriting transition-all duration-300 hover:scale-105 hover:shadow-lg w-full sm:w-64 md:w-72 lg:w-80 ${btn.style} ${btn.position}`}
                  >
                    {/* Left side: icon + text */}
                    <span className="flex items-center gap-2 sm:gap-3">
                      <img
                        src={btn.icon}
                        alt={`${btn.text} icon`}
                        className={`object-contain ${btn.iconSize}`}
                        style={{ filter: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="colorFilter"><feColorMatrix type="matrix" values="0 0 0 0 ${parseInt(btn.iconColor.slice(1, 3), 16) / 255} 0 0 0 0 ${parseInt(btn.iconColor.slice(3, 5), 16) / 255} 0 0 0 0 ${parseInt(btn.iconColor.slice(5, 7), 16) / 255} 0 0 0 1 0"/></filter></svg>#colorFilter')` }}
                      />
                      <span className={`font-semibold tracking-wider ${btn.textSize}`}>
                        {btn.text}
                      </span>
                    </span>
                    {/* Right arrow */}
                    <img
                      src={btn.arrow}
                      alt="arrow icon"
                      className={`object-contain ${btn.iconSize}`}
                      style={{ filter: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="colorFilter"><feColorMatrix type="matrix" values="0 0 0 0 ${parseInt(btn.arrowColor.slice(1, 3), 16) / 255} 0 0 0 0 ${parseInt(btn.arrowColor.slice(3, 5), 16) / 255} 0 0 0 0 ${parseInt(btn.arrowColor.slice(5, 7), 16) / 255} 0 0 0 1 0"/></filter></svg>#colorFilter')` }}
                    />
                  </a>
                ))}
              </div>


              {/* Previous button and Next Buttons */}
             
            </div>
             <div className="mt-4 flex flex-row  gap-4">
               {location.prevButton && (
                <Link>
                  <button type="button" className='border-2 border-[#955f26] p-3 rounded-lg rock transition-all duration-300 hover:scale-105 hover:shadow-lg'>
                 <h1 className='text-3xl'>{location.prevButton.text}</h1>
                </button>
                </Link>
               )}
               {location.nextButton && (
              <Link to=''>
                   <button type="button" className='bg- p-3 rounded-lg rock bg-[#522A00] text-[#E1DDD4] transition-all duration-300 hover:scale-105 hover:shadow-lg'>
                  <div className='flex  items-center gap-2'>
                    <h1 className='text-3xl'>{location.nextButton.text}</h1>
                    <img src={location.nextButton.arrow} className='' alt="" />
                  </div>
                </button>
              </Link>
               )}
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slide;