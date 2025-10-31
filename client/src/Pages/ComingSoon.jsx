import mapimage from "../assets/backgrounds/Map1_Bkg.png";
import btn from '../assets/icons/button.svg'
import { Link } from 'react-router-dom';
export default function ComingSoon() {
  return (
            <div
                className="h-screen w-full bg-cover relative flex justify-center items-center px-4 sm:px-6 lg:px-8"
                style={{ backgroundImage: `url(${mapimage})` }}
            >
                <div className="flex flex-col items-center text-center">
                    {/* 404 Heading */}
                    <div>
                        <h1 className="special-elite text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] font-bold leading-none text-white">
                            Coming soon
                        </h1>
                    </div>
    
                    {/* Button Section */}
                    <div className="pt-8 sm:pt-10 md:pt-12 w-full flex justify-center"> 
                        <Link to="/map" className="block w-full max-w-[200px] sm:max-w-xs md:max-w-sm lg:max-w-md">
                            <button
                                className="relative w-full flex justify-center items-center hover:cursor-pointer"
                                aria-label="Go back home"
                            >
                                {/* Button background image */}
                                <img 
                                    src={btn} 
                                    alt="" 
                                    className="w-full h-auto object-contain"
                                />
                                {/* Overlay text */}
                                <span className="absolute text-white font-bold text-sm sm:text-base md:text-lg lg:text-xl special-elite">
                                    Let’s go back
                                </span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
    )
}
