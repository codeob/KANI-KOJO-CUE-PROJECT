// import mapIcon from "../assets/icons/mapIcon.svg" 
// import audioLinkBG from "../assets/backgrounds/audioLinkBG.png"
// import voiceIDIcon from "../assets/icons/voiceIDIcon.svg"
// import arrowNEIcon from "../assets/icons/arrow_ne.svg"
// import { Link, useNavigate } from "react-router-dom"
// import useLocationStore from "../store/useLocationStore"



// export default function BTMapAndAudioLink({onBack}) {
//   const { selectedLocation, clearSelected } = useLocationStore()
//   const navigate = useNavigate()

//   const handleBack2Map = (e) => {
//     navigate('/map');
//     clearSelected();
//   }

//   return (
//     // note: to use this componenent, create a div where even you call it and add w-full to get it to flex
//     <div className='flex justify-between w-full'>
      
//       <button onClick={handleBack2Map} className='flex justify-between items-center cursor-pointer'>
//         <img src={mapIcon} alt="Return to map" className=""  />
//         <p className="rock text-primary-100 ">Back to map</p>
//       </button>
      
//       <div className="relative h-fit max-w-fit flex items-center px-5 py-3 gap-2 ">
//         <img src={audioLinkBG} alt="Audio link background" className="absolute left-0 right-0 h-full w-full " />
//         <div className="flex relative bg-[#AFA692] h-full  rounded-full ">
//           <img src={voiceIDIcon} alt="Voice ID icon" className="relative left-0 " />
//         </div>
//         <div className="flex flex-col relative mr-2">
//           <p className="rock text-sm text-[#AFA692] " >{selectedLocation ? selectedLocation.songTitle : "" }</p>
//           <Link to="#" className="cursor-pointer">
//           <div className="flex items-center space-x-2">
//             <p className=" text-[#b07010] font-semibold nunito-small text-sm ">
//               Listen to full song
//             </p>
//               <img src={arrowNEIcon} alt="arrow icon" className="" />
//           </div>
//           </Link>
//         </div>
//       </div>
//     </div>
//   )
// }



import mapIcon from "../assets/icons/mapIcon.svg";
import audioLinkBG from "../assets/backgrounds/audioLinkBG.png";
import voiceIDIcon from "../assets/icons/voiceIDIcon.svg";
import arrowNEIcon from "../assets/icons/arrow_ne.svg";
import { Link, useNavigate } from "react-router-dom";
import useLocationStore from "../store/useLocationStore";

export default function BTMapAndAudioLink({ onBack }) {
  const { selectedLocation, clearSelected } = useLocationStore();
  const navigate = useNavigate();

  const handleBack2Map = (e) => {
    navigate('/map');
    clearSelected();
  };

  return (
    <div className="flex justify-between w-full px-4 sm:px-6 md:px-8 lg:px-10">
      <button onClick={handleBack2Map} className="flex items-center gap-2 sm:gap-3 cursor-pointer">
        <img src={mapIcon} alt="Return to map" className="w-6 h-6 sm:w-8 sm:h-8" /> 
        <p className="rock text-primary-100 text-sm sm:text-base md:text-lg">Back to map</p>
      </button>

      <div className="relative h-fit max-w-fit flex items-center px-3 sm:px-4 md:px-5 py-2 sm:py-3 gap-2 sm:gap-3"> 
        <img src={audioLinkBG} alt="Audio link background" className="absolute inset-0 h-full w-full " />
        <div className="flex relative bg-[#AFA692] h-full rounded-full">
          <img src={voiceIDIcon} alt="Voice ID icon" className="w-6 h-6 sm:w-8 sm:h-8" /> 
        </div>
        <div className="flex flex-col relative mr-2">
          <p className="rock text-[#AFA692] text-xs sm:text-sm md:text-base"> 
            {selectedLocation ? selectedLocation.songTitle : ""}
          </p>
          <Link to="#" className="cursor-pointer">
            <div className="flex items-center gap-1 sm:gap-2"> 
              <p className="text-[#b07010] font-semibold nunito-small text-xs sm:text-sm md:text-base"> 
                Listen to full song
              </p>
              <img src={arrowNEIcon} alt="arrow icon" className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}