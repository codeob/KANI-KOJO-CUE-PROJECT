import BTMapAndAudioLink from "./BTMapAndAudioLink";
import mapBG from "../assets/backgrounds/Map_Bkg.png";
import mapIcon from "../assets/icons/mapIcon.svg" 
import KExpWithCloseBtnHeadingBrown from "./KExpWithCloseBtnHeadingBrown";
import { Link } from "react-router-dom";

export default function NotFound() {


  return (
    <div className="h-screen w-full relative">
      {/* background */}
      <img
        src={mapBG}
        alt="Background Image"
        className="absolute inset-0 h-full w-full object-cover z-0"
      />
      <div className="relative z-10 flex flex-col items-center justify-between h-full w-full p-10">
        <div className="w-full">
          <KExpWithCloseBtnHeadingBrown />
        </div>
        <div className="special-elite  h-[400px] w-[700px] flex justify-center items-center rounded-3xl bg-surface-100">
          <p className="text-3xl text-secondy-100">Sorry page not found</p> 
        </div>
        <div className="w-full">
          <Link to="/map">
            <button className='flex justify-between items-center cursor-pointer'>
              <img src={mapIcon} alt="Return to map" className=""  />
              <p className="rock ">Back to map</p>
            </button>
          </Link>        
      </div>
      </div>
    </div>
  );
}