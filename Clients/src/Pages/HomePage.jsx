import React from 'react'
import Homepage from "../assets/HomepageBkg.png"
import { Link } from 'react-router-dom'
import Playbutton from '../assets/icons/playBtnWBg.svg'

function HomePage() {
    return (
        <div
            className="h-screen w-full bg-cover bg-center flex flex-col justify-center items-center px-4"
            style={{ backgroundImage: `url(${Homepage})` }}
        >
            {/* Title */}
            <h1 className="  text-transparent bg-gradient-to-r from-[#FF8600] to-[#995000] bg-clip-text 
                          text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-center font-sansSerif font-bold tracking-wider">
                KANI
            </h1>
             {/* Title */}
            {/* Subtitle */}
            <p className="special-elite font-normal text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed 
                          text-center text-[#B69F7C] mt-4 max-w-2xl">
                Step into the journey behind the music
            </p>
            {/* Subtitle */}
            {/* Button */}
              <Link to="/welcome" className="mt-8">
                  <img src={Playbutton} alt="" />
              </Link>
            {/* Button */}

        </div>
    )
}

export default HomePage
