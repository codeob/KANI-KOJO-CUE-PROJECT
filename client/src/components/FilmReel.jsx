import mapBG from '../assets/backgrounds/Map_Bkg.png';
import KExpWithCloseBtnHeadingBrown from './KExpWithCloseBtnHeadingBrown';
import BTMapAndAudioLink from './BTMapAndAudioLink';
import filmFrame from "../assets/backgrounds/FilmReel_Frame.svg";
import mapimage from "../assets/backgrounds/Map1_Bkg.png";

export default function FilmReel({ videoUrl }) {
  return (
    <div className="h-screen w-full relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${mapimage})` }}
    >
      <div className="relative z-10 flex flex-col items-center justify-between h-full w-full p-4 sm:p-6 md:p-8 lg:p-10 -space-y-10 sm:-space-y-20">
        <div className="w-full">
          <KExpWithCloseBtnHeadingBrown />
        </div>
        <div className=" min-h-[320px] lg:h-full py-4 sm:py-5 flex justify-center">
          <div className="relative h-full max-w-[350px] sm:max-w-[400px] md:max-w-[430px] w-full">
            <img src={filmFrame} alt="Film frame" className='h-full w-full object-contain' />
            <video 
              src={videoUrl} 
              autoPlay 
              loop 
              playsInline
              preload='auto'
              className='absolute top-0 left-0 w-full h-full p-0.5' 
            />
          </div>

        </div>
        <div className="w-full">
          <BTMapAndAudioLink />
        </div>
      </div>
    </div>
  );
}


// // code below uses youtube embeded link to play video 
// import mapBG from '../assets/backgrounds/Map_Bkg.png';
// import KExpWithCloseBtnHeadingBrown from './KExpWithCloseBtnHeadingBrown';
// import BTMapAndAudioLink from './BTMapAndAudioLink';
// import filmFrame from "../assets/backgrounds/FilmReel_Frame.svg";

// export default function FilmReel({ videoUrl }) {
//   // Extract video ID whether it’s a shorts or normal YouTube link
//   const getYouTubeId = (url) => {
//     const regex = /(?:youtube\.com\/(?:shorts\/|watch\?v=)|youtu\.be\/)([^&?/]+)/;
//     const match = url.match(regex);
//     return match ? match[1] : null;
//   };

//   const videoId = getYouTubeId(videoUrl);
//   const embedUrl = videoId
//     ? `https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1&rel=0`
//     : null;

//   return (
//     <div className="h-screen w-full relative overflow-hidden">
//       <img
//         src={mapBG}
//         alt="Map background image"
//         className="absolute h-full w-full object-cover"
//       />

//       <div className="relative z-10 flex flex-col items-center justify-between h-full w-full p-4 sm:p-6 md:p-8 lg:p-10 -space-y-10 sm:-space-y-20">
//         {/* Header */}
//         <div className="w-full">
//           <KExpWithCloseBtnHeadingBrown />
//         </div>

//         {/* Film Reel */}
//         <div className="h-[580px] lg:h-full py-4 sm:py-5 flex justify-center">
//           <div className="relative h-full max-w-[350px] sm:max-w-[400px] md:max-w-[430px] w-full">
//             <img
//               src={filmFrame}
//               alt="Film frame"
//               className="h-full w-full object-contain"
//             />
//             {embedUrl && (
//               <iframe
//                 src={embedUrl}
//                 title="YouTube video player"
//                 frameBorder="0"
//                 allow="autoplay; encrypted-media; picture-in-picture"
//                 allowFullScreen
//                 className="absolute top-0 left-0 w-full h-full p-1"
//               ></iframe>
//             )}
//           </div>
//         </div>

//         {/* Footer */}
//         <div className="w-full">
//           <BTMapAndAudioLink />
//         </div>
//       </div>
//     </div>
//   );
// }
