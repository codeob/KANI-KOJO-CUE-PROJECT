import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import KExpWithCloseBtnHeadingBrown from "./KExpWithCloseBtnHeadingBrown";
import mapBG from "../assets/backgrounds/Map_Bkg.png";
import lyricsBG from "../assets/backgrounds/lyricsFrameBackground.png";
import BTMapAndAudioLink from "./BTMapAndAudioLink";
import Scrollbar_Lyrics from "./Scrollbar_Lyrics";
import useLocationStore from "../store/useLocationStore";
import { Textfit } from "react-textfit";
import BgAudio from "./BgAudio";

export default function LyricsContainer() {
  const { id } = useParams();
  const { selectedLocation, setSelectedLocation } = useLocationStore();
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (id) {
      setSelectedLocation(Number(id));
    }
  }, [id, setSelectedLocation]);

  // Trigger window resize after image load to force Textfit recalculation
  useEffect(() => {
    if (imageLoaded) {
      const timer = setTimeout(() => {
        window.dispatchEvent(new Event("resize"));
      }, 100); // Small delay to ensure DOM is ready
      return () => clearTimeout(timer);
    }
  }, [imageLoaded]);

  if (!selectedLocation) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-base sm:text-lg md:text-xl text-gray-600">No lyrics found for this track</p>
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
  };

  const lines = splitIntoLines(selectedLocation.lyrics, 8);
  const chunkSize = 5;
  const chunks = [];
  for (let i = 0; i < lines.length; i += chunkSize) {
    chunks.push(lines.slice(i, i + chunkSize));
  }

  const pattern = [1, 0, 0, 1, 1, 0, 0, 1, 1];

  return (
    <div className="h-screen relative overflow-hidden">
      <img src={mapBG} alt="" className="absolute h-full w-full object-cover" />
      <div className="relative z-10 flex flex-col items-center justify-between h-full w-full p-4 sm:p-6 md:p-8 lg:p-10">
        <div className="w-full">
          <KExpWithCloseBtnHeadingBrown />
        </div>
        <BgAudio />
        <div className="flex w-full py-6 sm:max-w-5xl md:max-w-6xl lg:max-w-7xl xl:max-w-full md:h-[70vh] overflow-hidden">
          <div className="flex-1 flex items-center">
            <Scrollbar_Lyrics>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 sm:gap-x-8 md:gap-x-12 lg:gap-x-20 gap-y-4 sm:gap-y-6 px-4 sm:px-6 md:px-8 lg:px-24">
                {chunks.map((chunk, i) => {
                  const show = pattern[i % pattern.length] === 1;
                  if (!show) return <div key={i} />;
                  return (
                    <div key={i} className="relative w-full">
                      {/* <img
                        src={lyricsBG}
                        alt=""
                        className="w-full h-auto object-contain"
                        onLoad={() => setImageLoaded(true)}
                      /> */}
                      <div className="relative bg-surface-100 py-10 rounded-2xl inset-0 flex flex-col px-2 sm:px-4 md:px-6 lg:px-10  text-[#522a00]">
                        {chunk.map((line, j) => (
                          <Textfit
                            key={j}
                            mode="multi"
                            min={14}
                            max={30}
                            forceSingleModeWidth={false}
                            className="rock leading-7 w-full"
                          >
                            <p className="break-words">{line}</p>
                          </Textfit>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </Scrollbar_Lyrics>
          </div>
        </div>
        <div className="w-full">
          <BTMapAndAudioLink />
        </div>
      </div>
    </div>
  );
}