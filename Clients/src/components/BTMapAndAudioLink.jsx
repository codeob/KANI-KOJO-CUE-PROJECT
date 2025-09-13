import mapIcon from "../assets/icons/mapIcon.svg" 
import audioLinkBG from "../assets/backgrounds/audioLinkBG.png"
import voiceIDIcon from "../assets/icons/voiceIDIcon.svg"
import arrowNEIcon from "../assets/icons/arrow_ne.svg"
import { Link } from "react-router-dom"
import useLocationStore from "../store/useLocationStore"


export default function BTMapAndAudioLink() {
  const { selectedLocation } = useLocationStore()

  return (
    // note: to use this componenent, create a div where even you call it and add w-full to get it to flex
    <div className='flex justify-between w-full'>
      <Link to="/map">
        <button className='flex justify-between items-center cursor-pointer'>
          <img src={mapIcon} alt="Return to map" className=""  />
          <p className="rock ">Back to map</p>
        </button>
      </Link>
      
      <div className="relative h-fit max-w-fit flex items-center px-5 py-3 gap-2 ">
        <img src={audioLinkBG} alt="Audio link background" className="absolute left-0 right-0 h-full w-full " />
        <div className="flex relative bg-[#AFA692] h-full  rounded-full ">
          <img src={voiceIDIcon} alt="Voice ID icon" className="relative left-0 " />
        </div>
        <div className="flex flex-col relative mr-2">
          <p className="rock text-sm text-[#AFA692] " >{selectedLocation ? selectedLocation.songTitle : "" }</p>
          <Link to="#" className="cursor-pointer">
          <div className="flex items-center space-x-2">
            <p className=" text-[#b07010] font-semibold nunito-small text-sm ">
              Listen to full song
            </p>
              <img src={arrowNEIcon} alt="arrow icon" className="" />
          </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
