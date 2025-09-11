import React from 'react'
import Homepage from "../assets/HomePage.jpg"
import { Link } from 'react-router-dom'

function HomePage() {
    return (
        <div className="h-screen w-full bg-cover bg-center flex justify-center items-center flex-col"
            style={{ backgroundImage: `url(${Homepage})` }}>
            <h1 className='rock text-[5rem] font-bold bg-gradient-to-r from-[#FF8600]  to-[#995000] bg-clip-text text-transparent'>
                KANI
            </h1>
            <p className='special-elite  font-special-elite font-normal text-[32px] leading-[150%] tracking-[0%] text-center text-[#B69F7C]'>
                Step into the journey behind the music
            </p>
            <div className='pt-[3rem]'>
                <button className=' special-elite p-4 rounded-2xl bg-[#522A00] text-[32px] text-[#ffff] cursor-pointer'>
               <Link to='/map'>Enter the experience</Link>
                </button>
            </div>
        </div>
    )
}

export default HomePage