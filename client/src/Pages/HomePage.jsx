import React from 'react'
import Homepage from "../assets/backgrounds/HomepageBkg.png"
import { Link } from 'react-router-dom'
import Playbutton from '../assets/icons/playBtnWBg.svg'
import KaniLogo from '../assets/backgrounds/Kani_Logo.png'

function HomePage() {
    return (
        <div
            className="min-h-screen w-full bg-cover bg-center flex flex-col justify-center items-center px-4 py-5 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 "
            style={{ backgroundImage: `url(${Homepage})` }}
        >
            {/* Title */}
             <div className='flex flex-1 flex-col justify-center items-center'>
              <img src={KaniLogo} alt="Kani Logo" className='w-[250px] h-auto sm:w-[350px] md:w-[450px] lg:w-[550px] xl:w-[650px] 2xl:w-[700px]' />
                {/* Subtitle */}
            <p className="special-elite font-normal text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl leading-relaxed text-center text-[#B69F7C] mt-2 sm:mt-3 md:mt-4 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl">
                Step into the journey behind the music
            </p>
            {/* Button */}
              <Link to="/welcome" className="mt-8 sm:mt-10 md:mt-12 lg:mt-16 xl:mt-20 2xl:mt-24">
                  <img src={Playbutton} alt="" className='w-[80px] sm:w-[100px] md:w-[120px] lg:w-[140px] xl:w-[160px] 2xl:w-[180px]' />
              </Link>
            {/* Button */}
             </div>
             {/* Title */}
               
               {/*  */}
               <div className=''>
                 <h1 className='text-[#B69F7C] font-semibold text-xl '>
                    Designed & Built in collaboration with FrayedJacket Creative Agency.
                 </h1>
               </div>
        </div>
    );
}

export default HomePage;