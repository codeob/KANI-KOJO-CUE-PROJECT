import mapBG from '../assets/backgrounds/Map_Bkg.png';
import mapimage from "../assets/backgrounds/Map1_Bkg.png";
import KExpWithCloseBtnHeadingBrown from './KExpWithCloseBtnHeadingBrown';
import BTMapAndAudioLink from './BTMapAndAudioLink';
import Scrollbar_Lyrics from './Scrollbar_Lyrics';
import { useParams } from 'react-router-dom';
import locationPins from "../../locations";

export default function Lyricsbreakedown() {
  const { id } = useParams();
  const location = locationPins.find((loc) => loc.id === Number(id));

  if (!location) {
    return <p className="text-center text-base sm:text-lg md:text-xl text-red-500">Lyrics not found</p>;
  }

  const lines = location.lyrics.split(". ");

  return (
    <div className="h-screen w-full relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${mapimage})` }}
    >
      <div className="relative z-10 flex flex-col items-center justify-between h-full w-full p-4 sm:p-6 md:p-8 lg:p-10 -space-y-10 sm:-space-y-20"> 
        <div className="w-full">
          <KExpWithCloseBtnHeadingBrown />
        </div>
        <div className="flex bg-secondy-100 rounded-2xl max-h-[400px] sm:max-h-[450px] md:max-h-[500px] w-full max-w-4xl sm:max-w-5xl md:max-w-6xl -mt-[3%] mx-auto shadow-lg overflow-hidden"> 
          <div className="flex-1 flex items-center py-8 sm:py-10 md:py-12 lg:py-14 pr-8 sm:pr-10 md:pr-12 lg:pr-[40px]">
            <Scrollbar_Lyrics>
              <p className="text-[1.2rem] sm:text-[1.45rem] md:text-[1.75rem] lg:text-[2.0rem] px-10 sm:px-20 md:px-25 lg:px-30 special-elite text-white leading-relaxed"> 
                {lines.map((line, i) => (
                  <span key={i} className="block mb-1 sm:mb-2">
                    {line}
                  </span>
                ))}
              </p>
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