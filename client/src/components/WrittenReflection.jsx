// import { Textfit } from "react-textfit";
// import KExpWithCloseBtnHeadingBrown from './KExpWithCloseBtnHeadingBrown'
// import BTMapAndAudioLink from './BTMapAndAudioLink'
// import mapBG from '../assets/backgrounds/Map1_Bkg.png'
// import zigzagFrame1 from "../assets/backgrounds/zigzagFrame1.svg"
// import useTypingEffect from '../hooks/useTypingEffect'
// import BgAudio from "./BgAudio";
// import useLocationStore from "../store/useLocationStore";
// import ScrollbarReflections from "./ScrollbarReflections";

// export default function WrittenReflection() {
//   const { selectedLocation } = useLocationStore();

//   const headingText = selectedLocation?.locationName || "Untitled Location";
//   const paragraphText =
//     selectedLocation?.WrittenReflection ||
//     selectedLocation?.WrittenRelection ||
//     "No written reflection available for this location.";

//   const animatedHeading = useTypingEffect(headingText, 1000);
//   const animatedParagraph = useTypingEffect(paragraphText, 10000);

//   return (
//     // <div className="h-screen w-full relative overflow-hidden">
//     //   <img src={mapBG} alt="" className="absolute inset-0 h-full w-full object-cover z-0" />
//     //   <div className="relative z-10 flex flex-col items-center justify-between h-full w-full p-4 sm:p-6 md:p-8 lg:p-10 -space-y-10 sm:-space-y-20">
//     //     <div className="w-full">
//     //       <KExpWithCloseBtnHeadingBrown />
//     //     </div>

//     //     <BgAudio />

//         // <div className="h-full flex justify-center p-16 sm:p-16 md:p-16 lg:p-14">
//         //   <div className="flex">
//         //     <div className="relative left-0 h-full w-full max-w-6xl sm:max-w-2xl lg:max-w-4xl">
//         //       <div className="" 
//         //         style={{ backgroundImage: `url(${zigzagFrame1})` }}
//         //       >

//         //       </div>
//         //       {/* <img src={zigzagFrame1} alt="Film frame" className=" h-full w-full overflow-hidden" /> */}

//         //       {/* ✅ Wrap text inside Scrollbar_Lyrics */}
//         //       <div className="absolute top-2 w-full inset-0 z-10  text-primary-100">
//         //         <ScrollbarReflections>
//         //           <Textfit
//         //             mode="multi"
//         //             forceSingleModeWidth={false}
//         //             max={40}
//         //             min={10}
//         //             className="jim-nightshade"
//         //           >
//         //             {animatedHeading}
//         //           </Textfit>
//         //           <Textfit
//         //             mode="multi"
//         //             forceSingleModeWidth={false}
//         //             max={36}
//         //             min={8}
//         //             className="island-moments whitespace-pre-wrap"
//         //           >
//         //             {animatedParagraph}
//         //           </Textfit>
//         //         </ScrollbarReflections>
//         //       </div>
//         //     </div>
//         //   </div>
//         // </div>

//     //     <div className="w-full">
//     //       <BTMapAndAudioLink />
//     //     </div>
//     //   </div>
//     // </div>


//         <div style={{ backgroundImage: `url(${mapBG})` }}
//           className="min-h-screen w-full bg-cover bg-center flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16"
//         >
        
//           <div className="absolute z-10 flex flex-col items-center justify-between flex-1 h-full w-full p-2 sm-4 lg:p-10">
//             <div className="w-full">
//               <KExpWithCloseBtnHeadingBrown />
//             </div>
//             <BgAudio />

//             <div className="h-full flex justify-center p-16 sm:p-16 md:p-16 lg:p-14">
//               <div className="flex">
//                 <div className="relative left-0 h-full w-full max-w-6xl sm:max-w-2xl lg:max-w-4xl">
//                 <img src={zigzagFrame1} alt="" className="relative h-full w-full max-w-6xl sm:max-w-2xl lg:max-w-4xl " />

//                   {/* ✅ Wrap text inside Scrollbar_Lyrics */}
//                   <div className="absolute top-2 w-full inset-0 z-10  text-primary-100">
//                     <ScrollbarReflections>
//                       <Textfit
//                         mode="multi"
//                         forceSingleModeWidth={false}
//                         max={40}
//                         min={10}
//                         className="jim-nightshade"
//                       >
//                         {animatedHeading}
//                       </Textfit>
//                       <Textfit
//                         mode="multi"
//                         forceSingleModeWidth={false}
//                         max={36}
//                         min={8}
//                         className="island-moments whitespace-pre-wrap"
//                       >
//                         {animatedParagraph}
//                       </Textfit>
//                     </ScrollbarReflections>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="w-full">
//               <BTMapAndAudioLink />
//             </div>
//           </div>
//         </div>
//   );
// }


import { Textfit } from "react-textfit";
import KExpWithCloseBtnHeadingBrown from "./KExpWithCloseBtnHeadingBrown";
import BTMapAndAudioLink from "./BTMapAndAudioLink";
import mapBG from "../assets/backgrounds/Map1_Bkg.png";
import zigzagFrame1 from "../assets/backgrounds/zigzagFrame1.svg";
import useTypingEffect from "../hooks/useTypingEffect";
import BgAudio from "./BgAudio";
import useLocationStore from "../store/useLocationStore";
import ScrollbarReflections from "./ScrollbarReflections";

export default function WrittenReflection() {
  const { selectedLocation } = useLocationStore();

  const headingText = selectedLocation?.locationName || "Untitled Location";
  const paragraphText =
    selectedLocation?.writtenReflection ||
    selectedLocation?.writtenRelection ||
    "No written reflection available for this location.";

  const animatedHeading = useTypingEffect(headingText, 1000);
  const animatedParagraph = useTypingEffect(paragraphText, 10000);

  return (
    <div
      style={{ backgroundImage: `url(${mapBG})` }}
      className="min-h-screen w-full bg-cover bg-center flex flex-col justify-between items-center px-4 sm:px-6 lg:px-10 relative"
    >
      {/* Top Section */}
      <div className="w-full pt-4 sm:pt-6 md:pt-8">
        <KExpWithCloseBtnHeadingBrown />
      </div>

      {/* Background Audio */}
      <BgAudio />

      {/* Zigzag Frame + Text */}
      <div className="flex justify-center items-center flex-1 w-full py-6 sm:py-10 lg:py-14">
        <div className="relative w-full max-w-[700px] aspect-[4/3]">
          {/* Zigzag Frame */}
          <img
            src={zigzagFrame1}
            alt="Decorative frame"
            className="absolute inset-0 h-full w-full object-contain"
          />

          {/* Scrollable Text Content */}
          <div className="absolute left-2 top-3 bottom-2 right-2 inset-0 flex flex-col justify-center items-center p-4 sm:p-8 md:p-12 lg:p-16 text-primary-100 overflow-hidden">
            <ScrollbarReflections>
              <Textfit
                mode="multi"
                forceSingleModeWidth={false}
                min={10}
                max={36}
                className="font-futura  mb-2 sm:mb-4"
              >
                {animatedHeading}
              </Textfit>

              <Textfit
                mode="multi"
                forceSingleModeWidth={false}
                min={8}
                max={26}
                className="font-futura  whitespace-pre-wrap leading-relaxed "
              >
                {animatedParagraph}
              </Textfit>
            </ScrollbarReflections>
          </div>
        </div>
      </div>

      {/* Bottom Buttons */}
      <div className="w-full pb-4 sm:pb-6 md:pb-8">
        <BTMapAndAudioLink />
      </div>
    </div>
  );
}

