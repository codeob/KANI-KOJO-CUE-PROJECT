import mapBG from '../assets/backgrounds/Map_Bkg.png'
import BTMapAndAudioLink from './BTMapAndAudioLink'
import KExpWithCloseBtnHeadingBrown from './KExpWithCloseBtnHeadingBrown'
import leftFrame from "../assets/imageDisplayFrames/displayImage_Inactive_Left.png"
import rightFrame from "../assets/imageDisplayFrames/displayImage_Inactive_Right.png"
import middleFrame from "../assets/imageDisplayFrames/displayImage_Active.png"
import prevBTNIcon from "../assets/icons/arrow_previous.svg"
import nextBTNIcon from "../assets/icons/arrow_next.svg"



export default function ImagePreviewComponent() {
  return (
    <div className='h-screen relative overflow-hidden '>
      <img src={mapBG} alt="" className="absolute h-full w-full object-cover " />
            <div className="relative z-10 flex flex-col items-center justify-between h-full w-full p-10">
              <div className="w-full">
                <KExpWithCloseBtnHeadingBrown />
              </div>
              <div className="flex flex-col items-center">
                <div className="relative left-0 px-[42px] py-[52px] flex-1 flex items-center justify-center -space-x-15 ">
                  <img src={leftFrame} alt="Left Inactive Frame" className='h-[388px] w-[350px] scale-88' />
                  <img src={middleFrame} alt="Left Inactive Frame" className='h-[388px] w-[350px] z-10 -translate-y-10 ' />
                  <img src={rightFrame} alt="Left Inactive Frame" className='h-[389px] w-[350px] scale-88' />




                </div>
                <div className="flex gap-[56px] -mb-20">
                  <button className='cursor-pointer '>
                    <img src={prevBTNIcon} alt="previous button" className='' />
                  </button>
                  <button className='cursor-pointer '>
                    <img src={nextBTNIcon} alt="next button" className='' />
                  </button>
                </div>
              </div>
              <div className="w-full">
                <BTMapAndAudioLink />
              </div>      
            </div>
    </div>
  )
}
