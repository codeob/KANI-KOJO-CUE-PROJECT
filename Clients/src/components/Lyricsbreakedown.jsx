// import React from "react"
// import { useParams } from "react-router-dom"
// import mapBG from "../assets/backgrounds/Map_BKg.png"
// import KExpWithCloseBtnHeadingBrown from "./KExpWithCloseBtnHeadingBrown"
// import BTMapAndAudioLink from "./BTMapAndAudioLink"
// import Scrollbar_Lyrics from "./Scrollbar_Lyrics"
// import locationPins from "../../locations"

// function Lyricsbreakedown() {
  // const { id } = useParams()
  // const location = locationPins.find((loc) => loc.id === Number(id))

  // if (!location) {
  //   return <p className="text-center text-red-500">Lyrics not found</p>
  // }

  // const lines = location.lyrics.split(". ")

//   return (
//     <div
//       className="relative min-h-screen w-full bg-cover bg-center p-4 sm:p-6 lg:p-10"
//       style={{ backgroundImage: `url(${mapBG})` }}
//     >
//       {/* Header Section */}
//       <div className="w-full">
//         <KExpWithCloseBtnHeadingBrown />
//       </div>

      // {/* Lyrics Section with Scrollbar */}
      // <div className="flex bg-secondy-100 rounded-2xl h-[70vh] max-h-[580px]  w-full max-w-7xl mx-auto shadow-lg overflow-hidden p-7">
      //   <div className="flex-1 flex justify-center items-center mr-14">
      //     <Scrollbar_Lyrics>
      //       <p className="text-base md:text-lg special-elite text-white leading-relaxed text-center">
      //         {lines.map((line, i) => (
      //           <span key={i} className="block mb-2">
      //             {line}
      //           </span>
      //         ))}
      //       </p>
      //     </Scrollbar_Lyrics>
      //   </div>
      // </div>

//       {/* Map and Audio Link */}
//       <div className="mt-8 flex justify-center md:justify-start">
//         <BTMapAndAudioLink />
//       </div>
//     </div>
//   )
// }

// export default Lyricsbreakedown





import React from 'react'
import mapBG from '../assets/backgrounds/Map_Bkg.png'
import KExpWithCloseBtnHeadingBrown from './KExpWithCloseBtnHeadingBrown'
import BTMapAndAudioLink from './BTMapAndAudioLink'
import Scrollbar_Lyrics from './Scrollbar_Lyrics'
import { useParams } from 'react-router-dom'
import locationPins from "../../locations"



export default function Lyricsbreakedown() {
    const { id } = useParams()
  const location = locationPins.find((loc) => loc.id === Number(id))

  if (!location) {
    return <p className="text-center text-red-500">Lyrics not found</p>
  }

  const lines = location.lyrics.split(". ")


  return (
    <div className="h-screen w-full relative overflow-hidden">
      {/* background */}
      <img src={mapBG} alt="Map background image" className="absolute h-full w-full object-cover " />
      <div className="relative z-10 flex flex-col items-center justify-between h-full w-full p-10 -space-y-20 ">
        <div className="w-full">
          <KExpWithCloseBtnHeadingBrown />
        </div>


        {/* Lyrics Section with Scrollbar */}
        <div className="flex bg-secondy-100 rounded-2xl max-h-[580px] max-w-7xl -mt-[3%] mx-auto shadow-lg overflow-hidden ">
          <div className="flex-1 flex items-center py-14 pr-[40px]">
            <Scrollbar_Lyrics>
              <p className="text-[38px] px-30 special-elite text-white leading-relaxed">
                {lines.map((line, i) => (
                  <span key={i} className="block mb-2 .font-biro">
                    {line}
                  </span>
                ))}
              </p>
            </Scrollbar_Lyrics>
          </div>
        </div>
        

        <div className="w-full">
          <BTMapAndAudioLink />
        </div>

      </div>
    </div>
  )
}
