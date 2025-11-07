// BTMapAndAudioLink.jsx

import mapIcon from "../assets/icons/mapIcon.svg";
import audioLinkBG from "../assets/backgrounds/audioLinkBG.png";
import voiceIDIcon from "../assets/icons/voiceIDIcon.svg";
import arrowNEIcon from "../assets/icons/arrow_ne.svg";
import { Link, useNavigate } from "react-router-dom";
import useLocationStore from "../store/useLocationStore";

export default function BTMapAndAudioLink({ onBack }) {
  const { selectedLocation, clearSelected } = useLocationStore();
  const navigate = useNavigate();

  const handleBack2Map = () => {
    navigate('/map'); 
    clearSelected();
  };

  return (
    <div className="flex justify-between w-full ">
      {/* ✅ Back to Map button */}
      <button onClick={handleBack2Map} className="flex items-center gap-2 sm:gap-3 cursor-pointer">
        <img src={mapIcon} alt="Return to map" className="w-6 h-6 sm:w-8 sm:h-8" /> 
        <p className="rock text-primary-100 text-[10px] sm:text-base md:text-lg">Back to map</p>
      </button>

      {/* ✅ Audio Link Box */}
      <div className="relative h-fit max-w-fit flex items-center px-3 sm:px-4 md:px-5 py-2 sm:py-3 gap-2 sm:gap-3"> 
        <img src={audioLinkBG} alt="Audio link background" className="absolute inset-0 h-full w-full" />

        {/* Voice Icon */}
        <div className="flex relative bg-watermark-100 h-full rounded-full">
          <img src={voiceIDIcon} alt="Voice ID icon" className="w-6 h-6 sm:w-8 sm:h-8" /> 
        </div>

        {/* Song Title + Full Song Link */}
        <div className="flex flex-col relative mr-2">

          {/* ✅ Show Song Title */}
          <p className="rock text-watermark-100 text-xs sm:text-sm md:text-base"> 
            {selectedLocation ? selectedLocation.songTitle : ""}
          </p>

          {/* ✅ If fullsongUrl exists, show the Listen to Full Song link */}
          {selectedLocation?.fullsongUrl && (
            <a 
              href={selectedLocation.fullsongUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <div className="flex items-center gap-1 sm:gap-2"> 
                <p className="text-tertiary-100 font-semibold font-biro text-xs sm:text-sm md:text-base"> 
                  Listen to full song
                </p>
                <img src={arrowNEIcon} alt="arrow icon" className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
            </a>
          )}

        </div>
      </div>
    </div>
  );
}
