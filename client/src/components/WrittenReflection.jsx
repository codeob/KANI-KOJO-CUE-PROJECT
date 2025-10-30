import { Textfit } from "react-textfit";
import KExpWithCloseBtnHeadingBrown from './KExpWithCloseBtnHeadingBrown'
import BTMapAndAudioLink from './BTMapAndAudioLink'
import mapBG from '../assets/backgrounds/Map1_Bkg.png'
import zigzagFrame1 from "../assets/backgrounds/zigzagFrame1.svg"
import useTypingEffect from '../hooks/useTypingEffect'
import BgAudio from "./BgAudio";
import useLocationStore from "../store/useLocationStore";
import ScrollbarReflections from "./ScrollbarReflections";

export default function WrittenReflection() {
  const { selectedLocation } = useLocationStore();

  const headingText = selectedLocation?.locationName || "Untitled Location";
  const paragraphText =
    selectedLocation?.WrittenReflection ||
    selectedLocation?.WrittenRelection ||
    "No written reflection available for this location.";

  const animatedHeading = useTypingEffect(headingText, 1000);
  const animatedParagraph = useTypingEffect(paragraphText, 10000);

  return (
    <div className="h-screen w-full relative overflow-hidden">
      <img src={mapBG} alt="" className="absolute inset-0 h-full w-full object-cover z-0" />
      <div className="relative z-10 flex flex-col items-center justify-between h-full w-full p-4 sm:p-6 md:p-8 lg:p-10 -space-y-10 sm:-space-y-20">
        <div className="w-full">
          <KExpWithCloseBtnHeadingBrown />
        </div>

        <BgAudio />

        <div className="h-full flex justify-center p-16 sm:p-16 md:p-16 lg:p-14">
          <div className="flex">
            <div className="relative left-0 h-full w-full max-w-6xl sm:max-w-2xl lg:max-w-4xl">
              <img src={zigzagFrame1} alt="Film frame" className="h-full w-full overflow-hidden" />

              {/* ✅ Wrap text inside Scrollbar_Lyrics */}
              <div className="absolute inset-0 z-10 mx-20 my-40 sm:my-32 md:my-24 lg:my-18 text-primary-100">
                <ScrollbarReflections>
                  <Textfit
                    mode="multi"
                    forceSingleModeWidth={false}
                    max={40}
                    className="jim-nightshade"
                  >
                    {animatedHeading}
                  </Textfit>
                  <Textfit
                    mode="multi"
                    forceSingleModeWidth={false}
                    max={36}
                    className="island-moments whitespace-pre-wrap"
                  >
                    {animatedParagraph}
                  </Textfit>
                </ScrollbarReflections>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full">
          <BTMapAndAudioLink />
        </div>
      </div>
    </div>
  );
}
