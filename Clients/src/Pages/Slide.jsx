import React from 'react'
import KExpWithCloseBtnHeadingCream from '../components/KExpWithCloseBtnHeadingCream'

function Slide({ location, close, isAnimating }) {
  if(!location) return null;

  return (
    <div className={` bg-white h-screen w-3/5 p-5, transition-transform duration-300 ease-in-out ${
        isAnimating ? 'translate-x-0' : '-translate-x-full'
      }`}
      style={{ position: 'absolute', left: 0, top: 0, transform: isAnimating ? 'translateX(0)' : 'translateX(-100%)' }}
    >
      <div className="w-full">
        <KExpWithCloseBtnHeadingCream open={close} />
      </div>
      <div className="">
        <h2 className="text-xl font-bold">{location.locationName}</h2>
        <p className="text-gray-600">{location.importance}</p>
        <p className="mt-2">🎵 {location.songTitle} — {location.artistName}</p>
      </div>
    </div>
  )
}

export default Slide