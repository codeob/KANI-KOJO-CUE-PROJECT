import React from 'react'
import mapBG from '../assets/backgrounds/Map_BKg.png'
import KExpWithCloseBtnHeadingBrown from './KExpWithCloseBtnHeadingBrown'
import BTMapAndAudioLink from './BTMapAndAudioLink'
import Scrollbar_Lyrics from './Scrollbar_Lyrics'

function Lyricsbreakedown() {
  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center p-4 sm:p-6 lg:p-10"
      style={{ backgroundImage: `url(${mapBG})` }}
    >
      {/* Header Section */}
      <div className="w-full">
        <KExpWithCloseBtnHeadingBrown />
      </div>

      {/* Lyrics Section with Scrollbar */}
      <div className="flex bg-secondy-100 rounded-2xl h-[70vh] max-h-[580px]  w-full max-w-7xl mx-auto shadow-lg overflow-hidden p-7">
        <div className="flex-1 flex justify-center items-center mr-14">
          <Scrollbar_Lyrics>
            <p className="text-base md:text-lg leading-relaxed text-center">
              {[...Array(50)].map((_, i) => (
                <span key={i} className="block mb-2">
                  Line {i + 1}: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </span>
              ))}
            </p>
          </Scrollbar_Lyrics>
        </div>
      </div>

      {/* Map and Audio Link */}
      <div className="mt-8 flex justify-center md:justify-start">
        <BTMapAndAudioLink />
      </div>
    </div>
  )
}

export default Lyricsbreakedown
