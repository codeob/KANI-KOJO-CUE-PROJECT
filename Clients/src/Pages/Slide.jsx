import KExpWithCloseBtnHeadingCream from '../components/KExpWithCloseBtnHeadingCream';
import subwayloc from '../assets/subwayloc.png';
import grainBG from '../assets/backgrounds/grainBG.png';
import AlbumImg from '../assets/Group19.png';
import btnBorder from "../assets/slideBtn_Frame.png"
import whiteRArrow from '../assets/icons/rArrow_WhiteColor.svg';
import rightarrow from '../assets/icons/rArrow.svg';
import { Link } from 'react-router-dom';
import previousBtn from '../assets/backgrounds/previousBtn_Frame.png'

function Slide({ location, close, isAnimating, onNext, onPrevious }) { 

  if (!location) return null;  

  return (
    <div
      className={` h-screen bg-grainbkg-100 w-full md:w-4/5 lg:w-3/5 transition-transform duration-300 ease-in-out ${isAnimating ? 'translate-x-0' : '-translate-x-full'
        }`}
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        transform: isAnimating ? 'translateX(0)' : 'translateX(-100%)',
      }}
    >
      <img src={grainBG} alt="background" className="absolute inset-0 w-full h-full object-cover" />
      <div className="p-4 sm:p-5 md:p-6 lg:p-8 relative z-50 flex flex-col justify-between h-full ">
        {/* Close button and the experience */}
        <div className='flex flex-col justify-between'>
          <div>
            <KExpWithCloseBtnHeadingCream close={close} />
          </div>
          {/* Location name with subwayloc icon */}
          <div className="flex flex-col justify-between">
            {/* location name and icon container */}
            <div className="flex flex-row items-center gap-2 ">
              <img src={subwayloc} alt="location icon" className="h-8 w-8 mb-4" />
              <h2 className="text-[48px] special-elite text-primary-100">
                {location.locationName}
              </h2>
            </div>
            {/* song details container */}
            <div className="flex flex-col justify-between gap-[40px]">
              <div className="flex flex-col gap-4">
                <h1 className="oswald text-[12px] text-secondy-100 tracking-wide oswald font-bold">
                  The HEART OF THE STORY
                </h1>
                <p className="text-[16px] rock text-primary-100">
                  {location.importance}
                </p>
              </div>
              {/* Album image, title, and artist */}
              <div className="flex flex-row gap-6">
                <img
                  src={AlbumImg}
                  alt="album cover"
                  className=""
                />
                <div className="flex flex-col gap-1.5 justify-between ">
                  <div className="flex flex-col">
                    <h2 className="text-[36px] freckle-face-regular font-normal text-primary-100">
                      {location.songTitle}
                    </h2>
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-[20px] special-elite text-primary-100 tracking-wide">
                      {location.artistName}
                    </h3>
                  </div>
                  {/* Dynamic Buttons */}
                  <div className="flex flex-col gap-[24px]">
                    {location.buttons?.map((btn, index) => (
                      <Link key={index} to={btn.link} >
                        <button className=" group relative flex items-center gap-10 justify-between py-2 px-6 rounded-[10px] w-full cursor-pointer transition-all duration-300  hover:bg-surface-100 focus:bg-secondy-100 outline-none ">
                          <img src={btnBorder} alt="Button Border Frame" className='absolute left-0 w-full h-full flex items-center justify-between' />
                          <div className="flex items-center gap-2 z-10">
                            <img
                              src={btn.icon}
                              alt={`${btn.text} icon`}
                              className="w-8 h-8 transition-colors duration-10 group-hover:brightness-0 group-hover:invert group-focus:invert group-focus:brightness-0 "
                            />
                            <span className="rock text-sm tracking-wider text-secondy-100 transition-colors duration-100 group-hover:text-white group-focus:text-white">
                              {btn.text}
                            </span>

                          </div>
                          {/* Right arrow */}
                          <img
                            src={rightarrow}
                            alt="arrow icon"
                            className="w-8 h-8 transition-colors duration-100 group-hover:brightness-0 group-hover:invert group-focus:invert group-focus:brightness-0"
                          />
                        </button>
                        {/* Left side: icon + text */}
                      </Link>
                    ))}
                  </div>                
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Previous button and Next Buttons */}
        <div className=" relative flex flex-row items-center gap-4">
          <button onClick={onPrevious} type="button" className='group relative transition-all w-[100px] h-[50px] p-0.5 px-1 pt-[3px] duration-300  '>
              <img src={previousBtn} alt=" Button Border Frame" className='absolute left-0 top-0 w-full h-full   ' />
              <div className=" relative cursor-pointer rounded-sm group-hover:bg-secondy-100 flex items-center justify-center  w-full h-full">
              <h4 className='rock text-xs group-hover:text-white text-secondy-100'>Previous</h4>

            </div>
          </button>
          <button onClick={onNext} type="button" className='group relative transition-all  h-[50px] p-0.5 px-1 pt-[3px] duration-300  '>
              <img src={previousBtn} alt=" Button Border Frame" className='absolute left-0 top-0 w-full h-full   ' />
              <div className=" relative cursor-pointer py-2 px-4 rounded-sm group-hover:bg-secondy-100 bg-primary-100 flex items-center justify-center gap-3 w-full h-full">
                <h4 className='rock text-xs text-white '>Next Location</h4>
                <img
                  src={whiteRArrow}
                  alt="arrow icon"
                  className="w-8 h-8 transition-colors duration-100 group-hover:brightness-0  group-hover:invert"
                />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Slide;