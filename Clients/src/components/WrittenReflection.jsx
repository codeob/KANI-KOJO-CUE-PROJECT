import React from 'react'
import KExpWithCloseBtnHeadingBrown from './KExpWithCloseBtnHeadingBrown'
import BTMapAndAudioLink from './BTMapAndAudioLink'
import mapBG from '../assets/backgrounds/Map1_Bkg.png'
// import zigzagFrame from "../assets/backgrounds/zigzag_reflection_frame.png"
import zigzagFrame1 from "../assets/backgrounds/zigzagFrame1.png"
import useTypingEffect from '../hooks/useTypingEffect'


export default function WrittenReflection() {
  const headingText = "A Mother's Love";

  const paragraphText = `Inn the heart of Adum, where the red earth meets weathered walls, I came into this world. The year was 1989, and my mother's arms were the first sanctuary I knew. 
  
  OTA 42 wasn't just an address—it was the beginning of everything. The morning light that streamed through those windows, the sound of my mother's laughter echoing through the rooms, the way she held me like I was her entire universe.
  
  Every corner of that house holds a memory, every wall a story. This is where love first found its voice, where dreams took root in red soil and grew toward the sky.`;

  // Animating heading and paragraph
  const animatedHeading = useTypingEffect(headingText, 1000); // 1s for heading
  const animatedParagraph = useTypingEffect(paragraphText, 10000); // 10s for paragraph


  return (
    <div className="h-screen w-full relative overflow-hidden ">
      {/* background */}
      <img src={mapBG} alt="" className="absolute inset-0 h-full w-full object-cover z-0 " />
      <div className="relative z-10 flex flex-col items-center justify-between h-full w-full p-10 -space-y-20 ">
        <div className="w-full">
          <KExpWithCloseBtnHeadingBrown />
        </div>
        <div className=" h-full flex justify-center p-10  ">
          <div className="relative left-0 h-full w-full ">
            <img src={zigzagFrame1} alt="Film frame" className='h-full w-full  ' />
            <div className="absolute inset-0 z-10 p-20 text-primary-100 ">
              <h3 className='jim-nightshade text-[32px] ' >{animatedHeading}</h3>
              <p className='island-moments text-[28px] whitespace-pre-wrap'  >{animatedParagraph}</p>
            </div>
          </div>          
        </div>
        <div className="w-full">
          <BTMapAndAudioLink />
        </div>

      </div>
    </div>
  )
}
