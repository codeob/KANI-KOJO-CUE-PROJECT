import KExpWithCloseBtnHeadingCream from '../components/KExpWithCloseBtnHeadingCream';
import subwayloc from '../assets/icons/subway_location_Icon.svg';
import grainBG from '../assets/backgrounds/grainBG.png';
import AlbumImg from '../assets/favicon.jpg';
import btnBorder from "../assets/slideBtn_Frame.png";
import whiteRArrow from '../assets/icons/rArrow_WhiteColor.svg';
import rightarrow from '../assets/icons/rArrow.svg';
import { Link } from 'react-router-dom';
import previousBtn from '../assets/backgrounds/previousBtn_Frame.png';


function Slide({ location, close, isAnimating, onNext, onPrevious }) { 
  if (!location) return null;  

  return (
    <div className="fixed inset-0 z-40" onClick={close}>
      <div
        className={`fixed inset-y-0 left-0 bg-grainbkg-100 w-full sm:w-11/12 md:w-4/5 lg:w-3/5 max-w-5xl transition-transform duration-300 ease-in-out ${
          isAnimating ? 'translate-x-0' : '-translate-x-full'
        } overflow-y-auto`}
        style={{ backgroundImage: `url(${grainBG})` }}
        onClick={(e) => e.stopPropagation()}
      >
      <div className="p-3 sm:p-4 md:p-6 lg:p-8 relative z-30 flex flex-col min-h-full justify-between "> 
        {/* Close button and the experience */}
        <div className='flex flex-col justify-between'>
          <div>
            <KExpWithCloseBtnHeadingCream close={close} />
          </div>
          {/* Location name with subwayloc icon */}
          <div className="flex flex-col justify-between">
            {/* location name and icon container */}
            <div className="flex flex-row items-center gap-2">
              <img src={subwayloc} alt="location icon" className="h-6 w-6 sm:h-8 sm:w-8 mb-3 sm:mb-4" />
              <h2 className="text-[0.8rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] special-elite text-primary-100 ">
                {location.locationName}
              </h2>
            </div>
            {/* song details container */}
            <div className="flex flex-col justify-between gap-6 sm:gap-8 md:gap-10"> 
              <div className="flex flex-col gap-3 sm:gap-4"> 
                <h1 className="oswald text-[0.65rem] sm:text-[0.75rem] md:text-[0.875rem] text-secondy-100 tracking-wide font-bold font-futura"> 
                  THE HEART OF THE STORY
                </h1>
                <p className="text-[0.875rem] sm:text-[1rem] md:text-[1.125rem]  text-primary-100 font-biro"> 
                  {location.importance}
                </p>
              </div>
              {/* Album image, title, and artist */}
              <div className="flex flex-row gap-4 sm:gap-6"> 
                <img
                  src={AlbumImg}
                  alt="album cover"
                  className="w-24 sm:w-48 md:w-52 lg:w-70 xl:w-90"
                />
                <div className="flex flex-col gap-1 sm:gap-1.5 justify-between"> 
                  <div className="flex flex-col">
                    <h2 className="text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] lg:text-[2.25rem] freckle-face-regular font-normal text-primary-100 "> 
                      {location.songTitle}
                    </h2>
                    <h3 className="text-[0.875rem] sm:text-[1rem] md:text-[1.125rem] lg:text-[1.25rem] special-elite text-primary-100 tracking-wide"> 
                      {location.artistName}
                    </h3>
                  </div>
                  {/* Dynamic Buttons */}
                  <div className="flex flex-col gap-4 sm:gap-6"> 
                    {location.buttons?.map((btn, index) => (
                      <Link key={index} to={btn.link}>
                        <button className="group relative flex items-center gap-6 sm:gap-8 md:gap-10 justify-between py-2 px-4 sm:px-6 rounded-[10px] w-full cursor-pointer transition-all duration-300 hover:bg-surface-100 focus:bg-secondy-100 outline-none">
                          <img src={btnBorder} alt="Button Border Frame" className='absolute left-0 w-full h-full flex items-center justify-between' />
                          <div className="flex items-center gap-2 z-10">
                            <img
                              src={btn.icon}
                              alt={`${btn.text} icon`}
                              className="w-6 h-6 sm:w-8 sm:h-8 transition-colors duration-100 group-hover:brightness-0 group-hover:invert group-focus:invert group-focus:brightness-0" 
                            />
                            <span className="rock text-[0.75rem] sm:text-[0.875rem] md:text-[1rem] tracking-wider text-secondy-100 transition-colors duration-100 group-hover:text-white group-focus:text-white font-biro"> 
                              {btn.text}
                            </span>
                          </div>
                          {/* Right arrow */}
                          <img
                            src={rightarrow}
                            alt="arrow icon"
                            className="w-6 h-6 sm:w-8 sm:h-8 transition-colors duration-100 group-hover:brightness-0 group-hover:invert group-focus:invert group-focus:brightness-0" 
                          />
                        </button>
                      </Link>
                    ))}
                  </div>                
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Previous button and Next Buttons */}
        <div className="sticky bottom-0 z-50 bg-grainbkg-100 py-4 flex flex-row items-center gap-2 sm:gap-4"
          style={{ backgroundImage: `url(${grainBG})` }}
        >
          <button onClick={onPrevious} type="button" className='group relative transition-all w-[80px] sm:w-[100px] h-[40px] sm:h-[50px] p-0.5 px-1 pt-[3px] duration-300'>
            <img src={previousBtn} alt="Button Border Frame" className='absolute left-0 top-0 w-full h-full' />
            <div className="relative cursor-pointer rounded-sm group-hover:bg-secondy-100 flex items-center justify-center w-full h-full">
              <h4 className='rock text-[0.625rem] sm:text-[0.75rem] md:text-[1rem] xl:text-[1.4rem] group-hover:text-white text-secondy-100 font-rough '>Previous</h4>
            </div>
          </button>
          <button onClick={onNext} type="button" className='group relative transition-all h-[40px] sm:h-[50px] p-0.5 px-1 pt-[3px] duration-300'> 
            <img src={previousBtn} alt="Button Border Frame" className='absolute left-0 top-0 w-full h-full' />
            <div className="relative cursor-pointer py-2 px-4 rounded-sm group-hover:bg-secondy-100 bg-primary-100 flex items-center justify-center gap-2 sm:gap-3 w-full h-full"> 
              <h4 className='rock text-[0.625rem] sm:text-[0.75rem] md:text-[1rem] xl:text-[1.4rem] text-white font-rough '>Next Location</h4>
              <img
                src={whiteRArrow}
                alt="arrow icon"
                className="w-4 h-4 transition-colors duration-100 group-hover:brightness-0 group-hover:invert" 
              />
            </div>
          </button>
        </div>
      </div>
    </div>
   </div>
 );
}

export default Slide;