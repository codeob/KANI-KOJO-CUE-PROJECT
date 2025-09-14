import React from 'react'
import mapBG from '../assets/backgrounds/Map_Bkg.png'
import KExpWithCloseBtnHeadingBrown from './KExpWithCloseBtnHeadingBrown'
import BTMapAndAudioLink from './BTMapAndAudioLink'
import filmFrame from "../assets/backgrounds/FilmReel_Frame.svg"
import youAre from "../video/You_Are_Film_Reel.mp4"


export default function FIlmReel() {
  return (
    <div className="h-screen w-full relative overflow-hidden">
      {/* background */}
      <img src={mapBG} alt="" className="absolute h-full w-full object-cover " />
      <div className="relative z-10 flex flex-col items-center justify-between h-full w-full p-10 -space-y-20 ">
        <div className="w-full">
          <KExpWithCloseBtnHeadingBrown />
        </div>
        <div className="h-full py-5 flex justify-center ">
          <div className="relative h-full max-w-[430px]">
            <img src={filmFrame} alt="Film frame" className='h-full w-full object-contain' />
            <video 
              src={youAre} autoPlay loop muted
              className='absolute top-0 left-0 w-full h-full p-1 ' 
            >
            </video>

          </div>

        </div>
        <div className="w-full">
          <BTMapAndAudioLink />
        </div>

      </div>
    </div>
  )
}
