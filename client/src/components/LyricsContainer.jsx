import React, { useEffect } from "react";
import { useParams } from "react-router-dom"
import KExpWithCloseBtnHeadingBrown from "./KExpWithCloseBtnHeadingBrown";
import mapBG from "../assets/backgrounds/Map_Bkg.png";
import lyricsBG from "../assets/backgrounds/lyricsFrameBackground.png";
import BTMapAndAudioLink from "./BTMapAndAudioLink";
import Scrollbar_Lyrics from "./Scrollbar_Lyrics";
import useLocationStore from "../store/useLocationStore";


export default function LyricsContainer() {
  const { id } = useParams();
  const { selectedLocation, setSelectedLocation } =useLocationStore()

  useEffect(() => {
    if (id) {
      setSelectedLocation(Number(id))  // making sure its a number
    }
  }, [id, setSelectedLocation])

  if (!selectedLocation) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg text-gray-600">No lyrics found for this track</p>
      </div>
    );
  }

  const splitIntoLines = (text, wordsPerLine = 8) => {
    const words = text.split(" ");
    const lines = [];

    for (let i = 0; i < words.length; i += wordsPerLine) {
      lines.push(words.slice(i, i + wordsPerLine).join(" "));
    }
    return lines;
  }
  
  
  // Split into lines & clean
  const lines = splitIntoLines(selectedLocation.lyrics, 8)
  
  // Group lines into chunks of 5
  const chunkSize = 5;
  const chunks = [];
  for (let i = 0; i < lines.length; i += chunkSize) {
    chunks.push(lines.slice(i, i + chunkSize));
  }
  console.log(chunks);
  
  
  const pattern = [1, 0, 0, 1, 1, 0, 0, 1, 1]; // repeats

  // Now chunks.length = number of frames we actually need

  return (
    <div className="h-screen relative overflow-hidden">
      <img src={mapBG} alt="" className="absolute h-full w-full object-cover" />

      <div className="relative z-10 flex flex-col items-center justify-between h-full w-full p-10">
        {/* Top heading */}
        <div className="w-full">
          <KExpWithCloseBtnHeadingBrown />
        </div>

        {/* Lyrics grid inside scrollbar */}
        <div className="flex rounded-2xl h-[580px]  min-w-7xl -mt-[5%] overflow-hidden ">

          <div className="flex-1 flex  items-center ">
            <Scrollbar_Lyrics>
              <div className="grid grid-cols-2 gap-x-50  pl-10 pr-30">
                {chunks.map((chunk, i) => {
                  const show = pattern[i % pattern.length] === 1;
                  if (!show) return <div key={i} />;

                  return (
                    <div key={i} className="relative py-6">
                      {/* Frame as background */}
                      <img src={lyricsBG} alt="" className="w-full h-auto" />

                      {/* Text overlay */}
                      <div className="absolute inset-0 flex flex-col justify-center items-center px-6 py-4 text-center text-[#522a00] ">
                        {chunk.map((line, j) => (
                          <p key={j} className="rock  " >{line}</p>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
              
            </Scrollbar_Lyrics>
          </div>
        </div>


        {/* Bottom button */}
        <div className="w-full">
          <BTMapAndAudioLink />
        </div>
      </div>
    </div>
  );
}
