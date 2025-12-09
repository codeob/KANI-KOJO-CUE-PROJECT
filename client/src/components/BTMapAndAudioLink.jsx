// BTMapAndAudioLink.jsx

import mapIcon from "../assets/icons/mapIcon.svg";
import audioLinkBG from "../assets/backgrounds/audioLinkBG.png";
import voiceIDIcon from "../assets/icons/voiceIDIcon.svg";
import arrowNEIcon from "../assets/icons/arrow_ne.svg";
import { useNavigate } from "react-router-dom";
import useLocationStore from "../store/useLocationStore";

export default function BTMapAndAudioLink() {
  const { selectedLocation, clearSelected } = useLocationStore();
  const navigate = useNavigate();

  const handleBack2Map = () => {
    navigate("/map");
    clearSelected();
  };

  return (
    <div className="w-full bg-transparent">
      {/* Always horizontal bar – works on 320px+ */}
      <div className="flex flex-row items-center justify-between gap-3 px-3 sm:px-5 lg:px-8 py-2.5 sm:py-3.5 max-w-screen-2xl mx-auto text-primary-100">

        {/* LEFT: Back to Map */}
        <button
          onClick={handleBack2Map}
          className="flex items-center gap-1.5 sm:gap-2.5 hover:opacity-75 transition-opacity flex-shrink-0 whitespace-nowrap"
        >
          <img
            src={mapIcon}
            alt="Back"
            className="w-5 h-5 xxs:w-6 xxs:h-6 sm:w-8 sm:h-8"
          />
          <span className="rock text-[10px] xxs:text-xs sm:text-base lg:text-lg">
            Back to map
          </span>
        </button>

        {/* CENTER: Credit Text – always visible, scales down smoothly */}
        <p className="font-bold rock text-[5px] xxs:text-[10px] xs:text-xs sm:text-sm lg:text-base text-center opacity-75 leading-tight flex-1 px-2">
          Designed & Built in collaboration with FrayedJacket Creative Agency.
        </p>

        {/* RIGHT: Audio Link Box */}
        <div className="relative flex items-center rounded-xl overflow-hidden shadow-lg flex-shrink-0">
          <img
            src={audioLinkBG}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="relative z-10 flex items-center gap-2 sm:gap-3 px-2.5 sm:px-4 py-2 sm:py-3">
            {/* Voice Icon */}
            <div className="bg-watermark-100/90 backdrop-blur-sm rounded-full p-1.5 sm:p-2">
              <img
                src={voiceIDIcon}
                alt="Play"
                className="w-6 h-6 xxs:w-7 xxs:h-7 sm:w-9 sm:h-9"
              />
            </div>

            {/* Song Title + Link */}
            <div className="min-w-0">
              <p className="font-rock text-watermark-100 text-[10px] xxs:text-xs sm:text-sm lg:text-base font-medium truncate max-w-[140px] xs:max-w-[180px] sm:max-w-none">
                {selectedLocation?.songTitle || "Select a location"}
              </p>

              {selectedLocation?.fullsongUrl && (
                <a
                  href={selectedLocation.fullsongUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 mt-0.5 group"
                >
                  <span className="font-biro text-tertiary-100 font-bold text-[9px] xxs:text-[10px] sm:text-xs lg:text-sm group-hover:underline">
                    Listen to full song
                  </span>
                  <img
                    src={arrowNEIcon}
                    alt="Open"
                    className="w-3.5 h-3.5 xxs:w-4 xxs:h-4 sm:w-5 sm:h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}