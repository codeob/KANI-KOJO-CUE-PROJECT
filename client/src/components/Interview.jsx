import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import KExpWithCloseBtnHeadingBrown from "./KExpWithCloseBtnHeadingBrown";
import mapBG from "../assets/backgrounds/Map1_Bkg.png";
import interviewBG from "../assets/backgrounds/interviewBackground.png";
import BTMapAndAudioLink from "./BTMapAndAudioLink";
import Scrollbar_Lyrics from "./Scrollbar_Lyrics";
import useLocationStore from "../store/useLocationStore";
import { Textfit } from "react-textfit";
import BgAudio from "./BgAudio";

export default function Interview() {
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
        <p className="text-base sm:text-lg md:text-xl text-gray-600">No interview found for this location</p>
      </div>
    );
  }

  const interview = selectedLocation.interview || [];
  const num_turns = interview.length;

  if (num_turns === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-base sm:text-lg md:text-xl text-gray-600">No interview content available</p>
      </div>
    );
  }

  // Generate visible positions dynamically based on the stepped pattern
  const visible_positions = [0];
  let current_pos = 0;
  for (let i = 1; i < num_turns; i++) {
    const delta = (i % 2 === 1) ? 3 : 1;
    current_pos += delta;
    visible_positions.push(current_pos);
  }

  const total_slots = visible_positions[num_turns - 1] + 1;

  // Create slots array with interview turns placed at visible positions, null elsewhere
  const slots = Array.from({ length: total_slots }, (_, slot_idx) => {
    const visible_idx = visible_positions.indexOf(slot_idx);
    return visible_idx !== -1 ? interview[visible_idx] : null;
  });

  return (
    <div className="h-screen w-full bg-cover bg-center flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative"
         style={{ backgroundImage: `url(${mapBG})` }}>
      <div className="relative z-10 flex flex-col items-center justify-between h-full w-full p-4 sm:p-6 md:p-8 lg:p-10">
        <div className="w-full">
          <KExpWithCloseBtnHeadingBrown />
        </div>
        <BgAudio />
        <div className="flex w-full py-6 sm:max-w-5xl md:max-w-6xl lg:max-w-7xl xl:max-w-full md:h-[70vh] overflow-hidden ">
          <div className="flex-1 flex items-center">
            <Scrollbar_Lyrics>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 sm:gap-x-8 md:gap-x-12 lg:gap-x-20 gap-y-4 sm:gap-y-6 px-4 sm:px-6 md:px-8 lg:px-24">
                {slots.map((slot, i) => {
                  if (!slot) {
                    return <div key={i} />;
                  }
                  return (
                    <div key={i} className="relative h-full bg-cover  "
                      style={{ backgroundImage: `url(${interviewBG})` }}
                    >
                      {/* <img
                        src={interviewBG}
                        alt=""
                        className="w-full h-auto object-contain"
                        onLoad={() => setImageLoaded(true)}
                      /> */}
                      <div className="relative py-10 rounded-2xl inset-0 flex flex-col px-2 sm:px-4 md:px-6 lg:px-10 text-primary-100">
                        <Textfit
                          mode="multi"
                          max={40}
                          forceSingleModeWidth={false}
                          className="font-futura leading-7 w-full"
                        >
                          <p className="break-words whitespace-pre-line">{slot.text}</p>
                        </Textfit>
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