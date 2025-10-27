import mapBG from '../assets/backgrounds/Map1_Bkg.png'
import btn from '../assets/icons/button.svg'
import { Link } from 'react-router-dom'

export default function ErrorPage() {
    return (
        <div
            className="h-screen w-screen bg-cover relative flex justify-center items-center px-4"
            style={{ backgroundImage: `url(${mapBG})` }}
        >
            <div className="flex flex-col items-center text-center">
                {/* 404 Heading */}
                <div>
                    <h1 className="special-elite text-[120px] sm:text-[180px] md:text-[224px] font-bold leading-none text-white">
                        404
                    </h1>
                    <p className="special-elite text-lg sm:text-2xl md:text-3xl -mt-4 text-center text-[#522A00]">
                        Sorry, page not found
                    </p>
                </div>

                {/* Button Section */}
                <div className="pt-12 w-full flex justify-center">
                    <Link to="/" className="block w-full max-w-xs sm:max-w-md">
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
                            <span className="absolute text-white font-bold text-base sm:text-lg md:text-xl special-elite">
                                Take me home
                            </span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
