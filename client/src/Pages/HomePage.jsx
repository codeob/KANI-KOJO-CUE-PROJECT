import React from 'react'
import Homepage from "../assets/backgrounds/HomepageBkg.png"
import { Link } from 'react-router-dom'
import Playbutton from '../assets/icons/playBtnWBg.svg'
import KaniLogo from '../assets/backgrounds/Kani_Logo.png'

function HomePage() {
    return (
        <div
            className="h-screen w-full bg-cover bg-center flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative"
            style={{ backgroundImage: `url(${Homepage})` }}
        >
            {/* Title */}
             <div className='absolute top-10 sm:top-16 md:top-20 lg:top-24 xl:top-32 2xl:top-40'>
              <img src={KaniLogo} alt="Kani Logo" className='w-[582.31px] sm:w-[582.31px] md:w-[582.31px] lg:w-[582.31px] lg:h-[162px]  md:h-[162px] xl:w-[650px] 2xl:w-[700px]' />
                {/* Subtitle */}
            <p className="special-elite font-normal text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl leading-relaxed text-center text-[#B69F7C] mt-2 sm:mt-3 md:mt-4 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl">
                Step into the journey behind the music
            </p>
             </div>
             {/* Title */}

            {/* Subtitle */}
            {/* Button */}
              <Link to="/welcome" className="mt-[150px] sm:mt-[180px] md:mt-[200px] lg:mt-[230px] xl:mt-[250px] 2xl:mt-[280px]">
                  <img src={Playbutton} alt="" className='w-[80px] sm:w-[100px] md:w-[120px] lg:w-[140px] xl:w-[160px] 2xl:w-[180px]' />
              </Link>
            {/* Button */}

        </div>
    );
}

export default HomePage;