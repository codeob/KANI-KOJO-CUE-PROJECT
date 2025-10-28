import mapimage from "../assets/backgrounds/Map1_Bkg.png";
import btn from '../assets/icons/button.svg'
import { Link } from 'react-router-dom';
export default function ComingSoon() {
  return (
    <div className="h-screen w-full bg-cover bg-center flex flex-col justify-center items-center px-4 relative"  style={{ backgroundImage: `url(${mapimage})` }}>
         <h1 className="text-[128px] special-elite text-textLight-100">coming soon</h1>
         <div>
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
                            <span className="absolute text-white font-bold text-sm sm:text-base md:text-lg lg:text-xl special-elit">
                                Let’s go back
                            </span>
                        </button>
                    </Link>
                </div>
         </div>
    </div>
  )
}
