// import React, { useState, useRef } from "react";
// import { gsap } from "gsap";
// import KExpWithCloseBtnHeadingBrown from "./KExpWithCloseBtnHeadingBrown";
// import BTMapAndAudioLink from "./BTMapAndAudioLink";
// import mapBG from "../assets/backgrounds/Map_Bkg.png";
// import frontPhotoFrame from "../assets/backgrounds/BTS_FrameFront.png";
// import prevBTNIcon from "../assets/icons/arrow_previous.svg";
// import nextBTNIcon from "../assets/icons/arrow_next.svg";
// import "../../locations"

// export default function BTSPhotos() {
//   const images = location?.images || [
//     "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
//     "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80",
//     "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?auto=format&fit=crop&w=800&q=80",
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);

//   const frontFrameRef = useRef(null);
//   const backFrameRef = useRef(null);
//   const imageRef = useRef(null);

//   const flipTo = (newIndex) => {
//     if (isAnimating) return;
//     setIsAnimating(true);

//     const tl = gsap.timeline({
//       onComplete: () => {
//         setCurrentIndex(newIndex);
//         setIsAnimating(false);

//         // reset back frame silently (ready for next cycle)
//         gsap.set(backFrameRef.current, {
//           x: 0,
//           y: 0,
//           rotate: -5,
//           opacity: 1,
//         });
//       },
//     });

//     tl.to(imageRef.current, {
//       opacity: 0,
//       duration: 0.4,
//       ease: "power2.out",
//       onComplete: () => {
//         imageRef.current.src = images[newIndex];
//       },
//     })
//       // Flip front frame
//       .to(frontFrameRef.current, {
//         rotateX: -180,
//         duration: 0.8,
//         ease: "power2.inOut",
//         transformOrigin: "bottom center",
//       })
//       // Move back frame into place while flip happens
//       .to(
//         backFrameRef.current,
//         {
//           x: -40,
//           y: -40,
//           rotate: 0,
//           duration: 0.8,
//           ease: "power2.inOut",
//         },
//         "<"
//       )
//       // Reset front frame instantly
//       .set(frontFrameRef.current, { rotateX: 0 })
//       // Fade new image in
//       .to(imageRef.current, {
//         opacity: 1,
//         duration: 0.4,
//         ease: "power2.in",
//       })
//       // Hide back frame (so reset is invisible)
//       .to(backFrameRef.current, {
//         opacity: 0,
//         duration: 0.3,
//         ease: "power1.inOut",
//       });
//   };

//   const nextImage = () => {
//     flipTo((currentIndex + 1) % images.length);
//   };

//   const prevImage = () => {
//     flipTo((currentIndex - 1 + images.length) % images.length);
//   };

//   return (
//     <div className="h-screen w-full relative overflow-hidden">
//       {/* background */}
//       <img src={mapBG} alt="" className="absolute h-full w-full object-cover" />

//       <div className="relative z-10 flex flex-col items-center justify-between h-full w-full p-4 sm:p-6 md:p-8 lg:p-10">
//         {/* Header */}
//         <div className="w-full">
//           <KExpWithCloseBtnHeadingBrown />
//         </div>

//         {/* Frames + Photo */}
//         <div className="relative left-0 h-[320px] sm:max-h-[450px] md:max-h-[500px] w-[450px] max-w-4xl sm:max-w-5xl md:max-w-6xl lg:max-w-7xl flex justify-center items-center ">
//           <div className="relative h-full w-[820px]  bts-photo-container">
//             {/* Static stack frame */}
//             <img
//               src={frontPhotoFrame}
//               alt="Static back frame"
//               className="absolute left-7 top-10 -rotate-5 h-[90%] w-[90%] object-contain"
//             />

//             {/* Animated back frame */}
//             <img
//               ref={backFrameRef}
//               src={frontPhotoFrame}
//               alt="Back frame"
//               className="absolute left-7 top-10 -rotate-5 h-[90%] w-[90%] object-contain"
//             />

//             {/* Front Frame */}
//             <img
//               ref={frontFrameRef}
//               src={frontPhotoFrame}
//               alt="Front frame"
//               className="absolute h-[90%] w-[90%] object-contain"
//             />

//             {/* Photo inside frame */}
//             <div className="relative left-15 top-19 z-20 h-[56%] w-[75.3%]">
//               <img
//                 ref={imageRef}
//                 src={images[currentIndex]}
//                 alt={`Photo ${currentIndex + 1}`}
//                 className="h-full w-full object-cover"
//               />
//             </div>

//             {/* Navigation Arrows */}
//             <button
//               onClick={prevImage}
//               disabled={isAnimating}
//               className="absolute -left-10 top-1/2 transform -translate-y-1/2 transition-all duration-200 cursor-pointer group z-30 disabled:opacity-50"
//             >
//               <img src={prevBTNIcon} alt="Previous Image Button" />
//             </button>

//             <button
//               onClick={nextImage}
//               disabled={isAnimating}
//               className="absolute -right-10 top-1/2 transform -translate-y-1/2 transition-all duration-200 cursor-pointer group z-30 disabled:opacity-50"
//             >
//               <img src={nextBTNIcon} alt="Next Image Button" />
//             </button>
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



import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import KExpWithCloseBtnHeadingBrown from "./KExpWithCloseBtnHeadingBrown";
import BTMapAndAudioLink from "./BTMapAndAudioLink";
import mapBG from "../assets/backgrounds/Map1_Bkg.png";
import frontPhotoFrame from "../assets/backgrounds/BTS_FrameFront.svg";
import prevBTNIcon from "../assets/icons/arrow_previous.svg";
import nextBTNIcon from "../assets/icons/arrow_next.svg";
import "../../locations";
import BgAudio from "./BgAudio";

export default function BTSPhotos() {
  const images = location?.images || [
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?auto=format&fit=crop&w=800&q=80",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showLandscapePrompt, setShowLandscapePrompt] = useState(false); // changed: state for landscape prompt

  const frontFrameRef = useRef(null);
  const backFrameRef = useRef(null);
  const imageRef = useRef(null);

  // changed: Check for small screens and portrait orientation
  const checkOrientation = () => {
    const isSmallScreen = window.innerWidth < 640; // 640px threshold
    const isPortrait = window.innerWidth < window.innerHeight;
    setShowLandscapePrompt(isSmallScreen && isPortrait);
  };

  useEffect(() => {
    checkOrientation();
    window.addEventListener('resize', checkOrientation);
    window.addEventListener('orientationchange', checkOrientation);
    return () => {
      window.removeEventListener('resize', checkOrientation);
      window.removeEventListener('orientationchange', checkOrientation);
    };
  }, []);

  const flipTo = (newIndex) => {
    if (isAnimating) return;
    setIsAnimating(true);

    const tl = gsap.timeline({
      onComplete: () => {
        setCurrentIndex(newIndex);
        setIsAnimating(false);

        // reset back frame silently (ready for next cycle)
        gsap.set(backFrameRef.current, {
          x: 0,
          y: 0,
          rotate: -5,
          opacity: 1,
        });
      },
    });

    tl.to(imageRef.current, {
      opacity: 0,
      duration: 0.4,
      ease: "power2.out",
      onComplete: () => {
        imageRef.current.src = images[newIndex];
      },
    })
      // Flip front frame
      .to(frontFrameRef.current, {
        rotateX: -180,
        duration: 0.8,
        ease: "power2.inOut",
        transformOrigin: "bottom center",
      })
      // Move back frame into place while flip happens
      .to(
        backFrameRef.current,
        {
          x: window.innerWidth > 760 ? -25 : -20,
          y: window.innerWidth > 760 ? -24 : -21,
          rotate: 0,
          duration: 0.8,
          ease: "power2.inOut",
        },
        "<"
      )
      // Reset front frame instantly
      .set(frontFrameRef.current, { rotateX: 0 })
      // Fade new image in
      .to(imageRef.current, {
        opacity: 1,
        duration: 0.4,
        ease: "power2.in",
      })
      // Hide back frame (so reset is invisible)
      .to(backFrameRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: "power1.inOut",
      });
  };

  const nextImage = () => {
    flipTo((currentIndex + 1) % images.length);
  };

  const prevImage = () => {
    flipTo((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="h-screen w-full bg-cover bg-center flex flex-col justify-center items-center px-4 relative"
          style={{ backgroundImage: `url(${ mapBG})` }}>
      {/* background */}
      {/* changed: Landscape prompt for small screens */}
      {showLandscapePrompt && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-white/90 rounded-lg p-6 max-w-sm w-full text-center">
            <h2 className="text-lg sm:text-xl font-bold text-primary-100 mb-4">Please Rotate Your Device</h2>
            <p className="text-sm sm:text-base text-primary-100">For the best experience viewing BTS photos, please use landscape mode on your mobile device.</p>
          </div>
        </div>
      )}
      <div className="relative z-10 flex flex-col items-center justify-between h-full w-full p-4 sm:p-6 md:p-8 lg:p-10">
        {/* Header */}
        <div className="w-full">
          <KExpWithCloseBtnHeadingBrown />
        </div>
         <BgAudio />
        {/* Frames + Photo */}
        <div className="relative h-[320px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[590px] w-full max-w-[450px] sm:max-w-[560px] md:max-w-[640px] lg:max-w-[720px] xl:max-w-[1024px] flex justify-center items-center"> 
          <div className="relative h-full w-full bts-photo-container">
            {/* Static stack frame */}
            <img
              src={frontPhotoFrame}
              alt="Static back frame"
              className="absolute left-4 sm:left-5 md:left-6 top-4 sm:top-5 md:top-6 -rotate-5 h-[90%] w-[90%] object-contain" 
            />

            {/* Animated back frame */}
            <img
              ref={backFrameRef}
              src={frontPhotoFrame}
              alt="Back frame"
              className="absolute left-4 sm:left-5 md:left-6 top-4 sm:top-5 md:top-6 -rotate-5 h-[90%] w-[90%] object-contain"
            />

            {/* Front Frame */}
            <img
              ref={frontFrameRef}
              src={frontPhotoFrame}
              alt="Front frame"
              className="absolute h-[90%] w-[90%] object-contain"
            />

            {/* Photo inside frame */}
            <div className="absolute left-8 top-8.5 h-[59%] w-[76%] sm:left-10 sm:top-10.5 sm:h-[59%] sm:w-[75.5%] md:left-11.5 md:top-11.5 md:h-[60%] md:w-[75.5%] lg:left-14 lg:top-13 lg:h-[59.5%] lg:w-[74.5%] xl:left-36 xl:top-15 xl:h-[59.5%] xl:w-[61.8%] overflow-hidden">
              <img
                ref={imageRef}
                src={images[currentIndex]}
                alt={`Photo ${currentIndex + 1}`}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              disabled={isAnimating}
              className="absolute -left-8 sm:-left-10 md:-left-12 lg:-left-14 top-1/2 transform -translate-y-1/2 transition-all duration-200 cursor-pointer group z-30 disabled:opacity-50" 
            >
              <img src={prevBTNIcon} alt="Previous Image Button" className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>

            <button
              onClick={nextImage}
              disabled={isAnimating}
              className="absolute -right-8 sm:-right-10 md:-right-12 lg:-right-10 xl:right-8 top-1/2 transform -translate-y-1/2 transition-all duration-200 cursor-pointer group z-30 disabled:opacity-50" 
            >
              <img src={nextBTNIcon} alt="Next Image Button" className="w-6 h-6 sm:w-8 sm:h-8" /> 
            </button>
          </div>
          
        </div>
        <div className="text-center mt-4 sm:mt-6 md:mt-8 text-primary-100 text-opacity-60">
          <p className="text-xs sm:text-sm md:text-base rock ">
            • Use arrow buttons to navigate •
          </p>
        </div>

        {/* Footer */}
        <div className="w-full">
          <BTMapAndAudioLink />
        </div>
      </div>
    </div>
  );
}