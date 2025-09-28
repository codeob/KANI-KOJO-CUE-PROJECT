import KExpWithCloseBtnHeadingBrown from './KExpWithCloseBtnHeadingBrown';
import BTMapAndAudioLink from './BTMapAndAudioLink';
import mapBG from '../assets/backgrounds/Map_Bkg.png';
import zigzagFrame1 from "../assets/backgrounds/zigzagFrame1.png";
import useTypingEffect from '../hooks/useTypingEffect';
import { Textfit } from "react-textfit";

export default function WrittenReflection() {
  const headingText = "A Mother's Love";
  const paragraphText = `In  the heart of Adum, where the red earth meets weathered walls, I came into this world. The year was 1989, and my mother's arms were the first sanctuary I knew. 
  
  OTA 42 wasn't just an address—it was the beginning of everything. The morning light that streamed through those windows, the sound of my mother's laughter echoing through the rooms, the way she held me like I was her entire universe.
  
  Every corner of that house holds a memory, every wall a story. This is where love first found its voice, where dreams took root in red soil and grew toward the sky.`;

  const animatedHeading = useTypingEffect(headingText, 1000);
  const animatedParagraph = useTypingEffect(paragraphText, 10000);

  return (
    <div className="h-screen w-full relative overflow-hidden">
      <img src={mapBG} alt="" className="absolute inset-0 h-full w-full object-cover z-0" />
      <div className="relative z-10 flex flex-col items-center justify-between h-full w-full p-4 sm:p-6 md:p-8 lg:p-10 -space-y-10 sm:-space-y-20">
        <div className="w-full">
          <KExpWithCloseBtnHeadingBrown />
        </div>
        <div className="h-full flex justify-center p-16 sm:p-16 md:p-16 lg:p-10"> 
          <div className="relative left-0 h-full w-full max-w-6xl sm:max-w-2xl lg:max-w-4xl  ">
            <img src={zigzagFrame1} alt="Film frame" className='h-full w-full ' />
            <div className="absolute inset-0 z-10 p-6 sm:p-10 md:p-12 lg:p-20 text-primary-100">
              <Textfit mode="multi" forceSingleModeWidth={false} max={36} className="jim-nightshade">
                {animatedHeading}
              </Textfit>
              <Textfit mode="multi" forceSingleModeWidth={false} max={24} className="island-moments whitespace-pre-wrap">
                {animatedParagraph}
              </Textfit>
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