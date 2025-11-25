// import { Textfit } from "react-textfit";
// import KExpWithCloseBtnHeadingBrown from "./KExpWithCloseBtnHeadingBrown";
// import BTMapAndAudioLink from "./BTMapAndAudioLink";
// import mapBG from "../assets/backgrounds/Map1_Bkg.png";
// import zigzagFrame1 from "../assets/backgrounds/zigzagFrame1.svg";
// import useTypingEffect from "../hooks/useTypingEffect";
// import BgAudio from "./BgAudio";
// import useLocationStore from "../store/useLocationStore";
// import ScrollbarReflections from "./ScrollbarReflections";

// export default function WrittenReflection() {
//   const { selectedLocation } = useLocationStore();

//   const headingText = selectedLocation?.locationName || "Untitled Location";
//   const paragraphText =
//     selectedLocation?.writtenReflection ||
//     selectedLocation?.writtenRelection ||
//     "No written reflection available for this location.";

//   const animatedHeading = useTypingEffect(headingText, 1000);
//   const animatedParagraph = useTypingEffect(paragraphText, 10000);

//   return (
//     <div
//       style={{ backgroundImage: `url(${mapBG})` }}
//       className="min-h-screen w-full bg-cover bg-center flex flex-col justify-between items-center px-4 sm:px-6 lg:px-10 relative"
//     >
//       {/* Top Section */}
//       <div className="w-full pt-4 sm:pt-6 md:pt-8">
//         <KExpWithCloseBtnHeadingBrown />
//       </div>

//       {/* Background Audio */}
//       <BgAudio />

//       {/* Zigzag Frame + Text */}
//       <div className="flex justify-center items-center flex-1 w-full py-6 sm:py-10 lg:py-14">
//         <div className="relative w-full max-w-[700px] aspect-[4/3]">
//           {/* Zigzag Frame */}
//           <img
//             src={zigzagFrame1}
//             alt="Decorative frame"
//             className="absolute inset-0 h-full w-full object-contain"
//           />

//           {/* Scrollable Text Content */}
//           <div className="absolute left-2 top-3 bottom-2 right-2 inset-0 flex flex-col justify-center items-center p-4 sm:p-8 md:p-12 lg:p-16 text-primary-100 overflow-hidden">
//             <ScrollbarReflections>
//               <Textfit
//                 mode="multi"
//                 forceSingleModeWidth={false}
//                 min={10}
//                 max={36}
//                 className="font-nanum mb-2 sm:mb-4"
//               >
//                 {animatedHeading}
//               </Textfit>

//               <Textfit
//                 mode="multi"
//                 forceSingleModeWidth={false}
//                 min={8}
//                 max={26}
//                 className="font-nanum"
//               >
//                 {animatedParagraph}
//               </Textfit>
//             </ScrollbarReflections>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Buttons */}
//       <div className="w-full pb-4 sm:pb-6 md:pb-8">
//         <BTMapAndAudioLink />
//       </div>
//     </div>
//   );
// }


import { Textfit } from "react-textfit";
import KExpWithCloseBtnHeadingBrown from "./KExpWithCloseBtnHeadingBrown";
import BTMapAndAudioLink from "./BTMapAndAudioLink";
import mapBG from "../assets/backgrounds/Map1_Bkg.png";
import zigzagFrame1 from "../assets/backgrounds/zigzagFrame1.svg";
// Removed useTypingEffect import
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

  // No more typing effect — just use the full text directly
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
                className="font-nanum mb-2 sm:mb-4"
              >
                {headingText}
              </Textfit>

              <Textfit
                mode="multi"
                forceSingleModeWidth={false}
                min={8}
                max={26}
                className="font-nanum"
              >
                {paragraphText}
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