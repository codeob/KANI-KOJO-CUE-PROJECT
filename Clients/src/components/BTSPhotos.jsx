import React from 'react'
import KExpWithCloseBtnHeadingBrown from './KExpWithCloseBtnHeadingBrown'
import BTMapAndAudioLink from './BTMapAndAudioLink'
import mapBG from '../assets/backgrounds/Map_Bkg.png'
import backPhotoFrame from "../assets/backgrounds/BTS_FrameBack.svg"
import frontPhotoFrame from "../assets/backgrounds/BTS_FrameFront.svg"


export default function BTSPhotos() {
  return (
    <div className="h-screen w-full relative overflow-hidden">
      {/* background */}
      <img src={mapBG} alt="" className="absolute h-full w-full object-cover " />
      <div className="relative z-10 flex flex-col items-center justify-between h-full w-full p-10  ">
        <div className="w-full">
          <KExpWithCloseBtnHeadingBrown />
        </div>
        <div className="h-full flex justify-center ">
          <div className="relative left-0 h-full w-full ">
            <img src={backPhotoFrame} alt="Film frame" className='absolute left-9 top-9 h-[90%] w-[90%] object-contain' />
            <img src={frontPhotoFrame} alt="Film frame" className='relative h-[90%] w-[90%]  object-contain' />

          </div>          
        </div>
        <div className="w-full">
          <BTMapAndAudioLink />
        </div>

      </div>
    </div>
  )
}
