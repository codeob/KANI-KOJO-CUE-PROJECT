import React from 'react'
import KExpWithCloseBtnHeadingCream from '../components/KExpWithCloseBtnHeadingCream'
import subwayloc from "../assets/subwayloc.png"
import grainBG from '../assets/backgrounds/grainBG.png'
import Aluming from '../assets/Group19.png'

function Slide({ location, close, isAnimating }) {
  if (!location) return null;

  return (
    <div className={`bg-grainbkg-100 h-screen w-3/5 transition-transform duration-300 ease-in-out ${isAnimating ? 'translate-x-0' : '-translate-x-full'
      }`}
      style={{ position: 'absolute', left: 0, top: 0, transform: isAnimating ? 'translateX(0)' : 'translateX(-100%)' }}
    >
      <img src={grainBG} alt="" className='absolute left-0' />
      <div className='p-4 md:p-5 lg:p-6 xl:p-8 relative z-50'>
        {/* close  button and the experience  */}
        <div className="">
          <KExpWithCloseBtnHeadingCream close={close} />
        </div>
        <div className="">
          {/*location name with the subwayloc icons   */}
          <div className=' flex flex-row  gap-2'>
            <img src={subwayloc} alt="" className='h-[32px] w-[32px]' />
            <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold special-elite text-primary-100">{location.locationName}</h2>
          </div>
          <div className='pt-9 flex flex-col gap-4'>
            <h1 className='oswald font-black text-secondy-100 tracking-wide'>The HEART OF THE STORY</h1>
            <p className=" text-sm md:text-base lg:text-lg e rock text-primary-100">{location.importance}</p>
          </div>
          {/*the album image, tilte of the album and the   */} 
          <div className='flex flex-row gap-5 pt-6'>
            <img src={Aluming} alt="" className='w-[348px] h-[348px]' />
            <div className='flex flex-col gap-1.5'>
              <h1 className='text-[32px] freckle-face-regular text-primary-100'>{location.songTitle}</h1>
               <h1 className='special-elite text-[20px] text-primary-100'>{location.artistName}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slide