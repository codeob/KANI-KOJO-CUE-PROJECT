import React from 'react'
import Homepage from "../assets/homePage.jpg"
import { Link } from 'react-router-dom'
import btn from '../assets/icons/button.svg'

function HomePage() {
    return (
        <div
            className="h-screen w-full bg-cover bg-center flex flex-col justify-center items-center px-4"
            style={{ backgroundImage: `url(${Homepage})` }}
        >
            {/* Title */}
            <h1 className="rock font-bold text-transparent bg-gradient-to-r from-[#FF8600] to-[#995000] bg-clip-text 
                          text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-center">
                KANI
            </h1>

            {/* Subtitle */}
            <p className="special-elite font-normal text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed 
                          text-center text-[#B69F7C] mt-4 max-w-2xl">
                Step into the journey behind the music
            </p>

            {/* Button */}
            <div className="pt-12 w-full flex justify-center">
                <Link to="/map" className="block w-full max-w-xs sm:max-w-md">
                    <button
                        className="relative w-full flex justify-center items-center hover:cursor-pointer"
                        aria-label="Enter the experience"
                    >
                        {/* Button background */}
                        <img
                            src={btn}
                            alt=""
                            className="w-full h-auto object-contain"
                        />
                        {/* Button text */}
                        <span className="special-elite absolute text-base sm:text-lg md:text-xl lg:text-2xl text-white font-bold">
                            Enter the experience
                        </span>
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default HomePage
