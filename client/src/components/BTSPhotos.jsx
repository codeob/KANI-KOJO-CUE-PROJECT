
// correct almost perfect dont delete now
import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import KExpWithCloseBtnHeadingBrown from "./KExpWithCloseBtnHeadingBrown";
import BTMapAndAudioLink from "./BTMapAndAudioLink";
import mapBG from "../assets/backgrounds/Map1_Bkg.png";
import frontPhotoFrame from "../assets/backgrounds/polaroidFrame.svg";
import backPhotoFrame from "../assets/backgrounds/BTS_FrameFront.svg";
import prevBTNIcon from "../assets/icons/arrow_previous.svg";
import nextBTNIcon from "../assets/icons/arrow_next.svg";
import BgAudio from "./BgAudio";
import { detectTransparentArea } from "../utils/detectInnerTransparentArea"; // Updated import (back to black)
import useLocationStore from "../store/useLocationStore";
import locationPins from "../../locations";

export default function BTSPhotos() {
  const { selectedLocation } = useLocationStore();
  const location = locationPins.find((loc) => loc.id === selectedLocation?.id) || selectedLocation;
  const images = location?.image || [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showLandscapePrompt, setShowLandscapePrompt] = useState(false);

  const frontFrameRef = useRef(null);
  const backFrameRef = useRef(null);
  const imageRef = useRef(null);
  const photoContainerRef = useRef(null); // Ref to photo container

  // Check for small screens and portrait orientation
  const checkOrientation = () => {
    const isSmallScreen = window.innerWidth < 640;
    const isPortrait = window.innerWidth < window.innerHeight;
    setShowLandscapePrompt(isSmallScreen && isPortrait);
  };

  // Unified handler: Position photo container to match black section
const positionPhotoContainer = async () => {
  const frontFrame = frontFrameRef.current;
  const container = photoContainerRef.current;
  if (!frontFrame || !container) return;
  const targetW = frontFrame.offsetWidth;
  const targetH = frontFrame.offsetHeight;
  if (targetW <= 0 || targetH <= 0) return;
  const result = await detectTransparentArea(frontPhotoFrame, targetW, targetH);
  if (result) {
    container.style.position = "absolute";  // Always absolute for precise overlay
    container.style.left = `${result.leftPx}px`;
    container.style.top = `${result.topPx}px`;
    container.style.width = `${result.widthPx}px`;
    container.style.height = `${result.heightPx}px`;
    container.style.transform = "";
  } else {
    container.style.position = "absolute";
    container.style.left = "0";
    container.style.top = "0";
    container.style.width = "100%";
    container.style.height = "100%";
  }
  container.style.overflow = "hidden";
};


  // Initial positioning after mount (wait for layout)
  useEffect(() => {
    const timer = requestAnimationFrame(() => {
      positionPhotoContainer();
    });
    return () => cancelAnimationFrame(timer);
  }, []);

  // Load handler for front frame
  useEffect(() => {
    const frontFrame = frontFrameRef.current;
    if (!frontFrame) return;

    const handleLoad = () => {
      requestAnimationFrame(() => positionPhotoContainer());
    };

    if (frontFrame.complete) {
      handleLoad();
    } else {
      frontFrame.addEventListener("load", handleLoad);
      return () => frontFrame.removeEventListener("load", handleLoad);
    }
  }, []);

  // Resize + Orientation handlers
  useEffect(() => {
    checkOrientation();
    const handleResizeOrOrientation = () => {
      checkOrientation();
      positionPhotoContainer(); // Reposition on change
    };

    window.addEventListener("resize", handleResizeOrOrientation);
    window.addEventListener("orientationchange", handleResizeOrOrientation);
    return () => {
      window.removeEventListener("resize", handleResizeOrOrientation);
      window.removeEventListener("orientationchange", handleResizeOrOrientation);
    };
  }, []);

  const flipTo = (newIndex) => {
    if (isAnimating) return;
    setIsAnimating(true);

    const tl = gsap.timeline({
      onComplete: () => {
        setCurrentIndex(newIndex);
        setIsAnimating(false);
        gsap.set(backFrameRef.current, { x: 0, y: 0, rotate: -5, opacity: 1 });
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
      .to(frontFrameRef.current, {
        rotateX: -180,
        duration: 0.8,
        ease: "power2.inOut",
        transformOrigin: "bottom center",
      })
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
      .set(frontFrameRef.current, { rotateX: 0 })
      .to(imageRef.current, {
        opacity: 1,
        duration: 0.4,
        ease: "power2.in",
      })
      .to(backFrameRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: "power1.inOut",
      });
  };

  const nextImage = () => flipTo((currentIndex + 1) % images.length);
  const prevImage = () => flipTo((currentIndex - 1 + images.length) % images.length);

  return (
    <div className="h-screen w-full bg-cover bg-center overflow-hidden relative"
      style={{ backgroundImage: `url(${mapBG})` }}    
    >      
      {showLandscapePrompt && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-white/90 rounded-lg p-6 max-w-sm w-full text-center">
            <h2 className="text-lg sm:text-xl font-bold text-primary-100 mb-4">Please Rotate Your Device</h2>
            <p className="text-sm sm:text-base text-primary-100">For the best experience viewing BTS photos, please use landscape mode on your mobile device.</p>
          </div>
        </div>
      )}
      <div className="relative z-10 flex flex-col items-center justify-between h-full w-full p-4 sm:p-6 md:p-8 lg:p-10">
        <div className="w-full">
          <KExpWithCloseBtnHeadingBrown />

          {/* Background Audio */}
          <BgAudio />          
        </div>
        <div className="relative h-[320px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[590px] w-full max-w-[450px] sm:max-w-[560px] md:max-w-[640px] lg:max-w-[720px] xl:max-w-[1024px]  max-[935px]:landscape:max-w-[260px] flex justify-center items-center">            <button
              onClick={prevImage}
              disabled={isAnimating}
              className="absolute -left-8 sm:-left-10 md:-left-12 lg:-left-14 top-1/2 transform -translate-y-1/2 transition-all duration-200 cursor-pointer group z-30 disabled:opacity-50" 
            >
              <img src={prevBTNIcon} alt="Previous Image Button" className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
            <div className="relative h-full w-full bts-photo-container lg:left-8 xl:left-15 ">
              {/* Static back frame */}
              <img
                src={backPhotoFrame}
                alt="Static back frame"
                className="absolute left-4 sm:left-5 md:-left-4 top-4 sm:top-5 md:top-6 -rotate-5 h-[90%] w-[90%] object-contain" 
              />

              {/* Animated back frame */}
              <img
                ref={backFrameRef}
                src={backPhotoFrame}
                alt="Back frame"
                className="absolute left-4 sm:left-5 md:-left-4 top-4 sm:top-5 md:top-6 -rotate-5 h-[90%] w-[90%] object-contain"
              />

              {/* Photo inside frame (BEFORE FRONT: covers black exactly, behind border) */}
              <div ref={photoContainerRef} className="absolute overflow-hidden">
                <img
                  ref={imageRef}
                  src={images[currentIndex]}
                  alt={`Photo ${currentIndex + 1}`}
                  className="w-full h-full xs:p-2 p-3  lg:p-8  "
                />
              </div>

              {/* Front Frame (on top, border only visible around photo) */}
              <img
                ref={frontFrameRef}
                src={frontPhotoFrame}
                alt="Front frame"
                className="absolute  h-[90%] max-w-[90%] object-contain"
              />


            </div>
            <button
              onClick={nextImage}
              disabled={isAnimating}
              className="absolute -right-8 sm:-right-10 md:-right-6 lg:-right-10 xl:right-8 top-1/2 transform -translate-y-1/2 transition-all duration-200 cursor-pointer group z-30 disabled:opacity-50" 
            >
              <img src={nextBTNIcon} alt="Next Image Button" className="w-6 h-6 sm:w-8 sm:h-8" /> 
            </button>

        </div>
        {/* <div className="relative h-[320px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[590px] w-full max-w-[450px] sm:max-w-[560px] md:max-w-[640px] lg:max-w-[720px] xl:max-w-[1024px] flex justify-center items-center"> 
          <div className="relative h-full w-full bts-photo-container">
            <img
              src={backPhotoFrame}
              alt="Static back frame"
              className="absolute left-4 sm:left-5 md:left-6 top-4 sm:top-5 md:top-6 -rotate-5 h-[90%] w-[90%] object-contain" 
            />

            <img
              ref={backFrameRef}
              src={backPhotoFrame}
              alt="Back frame"
              className="absolute left-4 sm:left-5 md:left-6 top-4 sm:top-5 md:top-6 -rotate-5 h-[90%] w-[90%] object-contain"
            />

            <div ref={photoContainerRef} className="absolute overflow-hidden">
              <img
                ref={imageRef}
                src={images[currentIndex]}
                alt={`Photo ${currentIndex + 1}`}
                className="w-full h-full p-4 lg:p-8 "
              />
            </div>

            <img
              ref={frontFrameRef}
              src={frontPhotoFrame}
              alt="Front frame"
              className="absolute  h-[90%] max-w-[90%] object-contain"
            />


          </div>
        </div> */}
        <div className="text-center mt-4 sm:mt-6 md:mt-8 text-primary-100 text-opacity-60">
          <p className="text-xs sm:text-sm md:text-base rock ">
            • Use arrow buttons to navigate •
          </p>
        </div>

        <div className="w-full">
          <BTMapAndAudioLink />
        </div>
      </div>
    </div>
  );
}





// import React, { useState, useRef, useEffect } from "react";
// import { gsap } from "gsap";
// import KExpWithCloseBtnHeadingBrown from "./KExpWithCloseBtnHeadingBrown";
// import BTMapAndAudioLink from "./BTMapAndAudioLink";
// import mapBG from "../assets/backgrounds/Map_Bkg.png";
// import frontPhotoFrame from "../assets/backgrounds/polaroidFrame.svg";
// import backPhotoFrame from "../assets/backgrounds/BTS_FrameFront.svg";
// import prevBTNIcon from "../assets/icons/arrow_previous.svg";
// import nextBTNIcon from "../assets/icons/arrow_next.svg";
// import { detectTransparentArea } from "../utils/detectInnerTransparentArea";
// import useLocationStore from "../store/useLocationStore";
// import locationPins from "../../locations";

// export default function BTSPhotos() {
//   const { selectedLocation } = useLocationStore();
//   const location =
//     locationPins.find((loc) => loc.id === selectedLocation?.id) ||
//     selectedLocation;
//   const images = location?.image || [];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const [showLandscapePrompt, setShowLandscapePrompt] = useState(false);
//   const [isLandscape, setIsLandscape] = useState(
//     window.innerWidth > window.innerHeight
//   );

//   const frontFrameRef = useRef(null);
//   const backFrameRef = useRef(null);
//   const imageRef = useRef(null);
//   const photoContainerRef = useRef(null);

//   // ✅ Orientation + resize check
//   const checkOrientation = () => {
//     const landscape = window.innerWidth > window.innerHeight;
//     setIsLandscape(landscape);
//     const isSmallScreen = window.innerWidth < 640;
//     const isPortrait = !landscape;
//     setShowLandscapePrompt(isSmallScreen && isPortrait);
//   };

//   // ✅ Reposition image container based on transparent cutout
//   const positionPhotoContainer = async () => {
//     const frontFrame = frontFrameRef.current;
//     const container = photoContainerRef.current;
//     if (!frontFrame || !container) return;

//     const targetW = frontFrame.offsetWidth;
//     const targetH = frontFrame.offsetHeight;
//     if (targetW <= 0 || targetH <= 0) return;

//     const result = await detectTransparentArea(frontPhotoFrame, targetW, targetH);

//     if (result) {
//       if (isLandscape) {
//         container.style.position = "static";
//         container.style.left = "";
//         container.style.top = "";
//         container.style.transform = "";
//         container.style.width = `${result.widthPx}px`;
//         container.style.height = `${result.heightPx}px`;
//       } else {
//         container.style.position = "absolute";
//         container.style.left = `${result.leftPx}px`;
//         container.style.top = `${result.topPx}px`;
//         container.style.width = `${result.widthPx}px`;
//         container.style.height = `${result.heightPx}px`;
//         container.style.transform = "";
//       }
//     } else {
//       if (isLandscape) {
//         container.style.position = "static";
//         container.style.left = "";
//         container.style.top = "";
//         container.style.width = "100%";
//         container.style.height = "100%";
//       } else {
//         container.style.position = "absolute";
//         container.style.left = "0";
//         container.style.top = "0";
//         container.style.width = "100%";
//         container.style.height = "100%";
//       }
//     }
//     container.style.overflow = "hidden";
//   };

//   // ✅ Initial positioning after mount
//   useEffect(() => {
//     const timer = requestAnimationFrame(() => {
//       positionPhotoContainer();
//     });
//     return () => cancelAnimationFrame(timer);
//   }, []);

//   // ✅ Ensure correct layout when front frame loads
//   useEffect(() => {
//     const frontFrame = frontFrameRef.current;
//     if (!frontFrame) return;

//     const handleLoad = () => requestAnimationFrame(() => positionPhotoContainer());
//     if (frontFrame.complete) {
//       handleLoad();
//     } else {
//       frontFrame.addEventListener("load", handleLoad);
//       return () => frontFrame.removeEventListener("load", handleLoad);
//     }
//   }, []);

//   // ✅ Watch orientation / resize
//   useEffect(() => {
//     checkOrientation();
//     const handleResizeOrOrientation = () => {
//       checkOrientation();
//       positionPhotoContainer();
//     };
//     window.addEventListener("resize", handleResizeOrOrientation);
//     window.addEventListener("orientationchange", handleResizeOrOrientation);
//     return () => {
//       window.removeEventListener("resize", handleResizeOrOrientation);
//       window.removeEventListener("orientationchange", handleResizeOrOrientation);
//     };
//   }, []);

//   // ✅ Flip animation
//   const flipTo = (newIndex) => {
//     if (isAnimating || !images.length) return;
//     setIsAnimating(true);

//     const tl = gsap.timeline({
//       onComplete: () => {
//         setCurrentIndex(newIndex);
//         setIsAnimating(false);
//         gsap.set(imageRef.current, { opacity: 1 });
//         gsap.set(backFrameRef.current, { x: 0, y: 0, rotate: -5, opacity: 0 });
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
//       .to(frontFrameRef.current, {
//         rotateX: -180,
//         duration: 0.8,
//         ease: "power2.inOut",
//         transformOrigin: "bottom center",
//       })
//       .to(
//         backFrameRef.current,
//         {
//           x: window.innerWidth > 760 ? -25 : -20,
//           y: window.innerWidth > 760 ? -24 : -21,
//           rotate: 0,
//           duration: 0.8,
//           ease: "power2.inOut",
//         },
//         "<"
//       )
//       .set(frontFrameRef.current, { rotateX: 0 })
//       .to(imageRef.current, {
//         opacity: 1,
//         duration: 0.4,
//         ease: "power2.in",
//       })
//       .to(backFrameRef.current, {
//         opacity: 0,
//         duration: 0.3,
//         ease: "power1.inOut",
//       });
//   };

//   // ✅ Prevent image from disappearing after mount
//   useEffect(() => {
//     if (imageRef.current) gsap.set(imageRef.current, { opacity: 1 });
//     if (backFrameRef.current) gsap.set(backFrameRef.current, { opacity: 0 });
//     if (frontFrameRef.current) gsap.set(frontFrameRef.current, { rotateX: 0 });
//   }, []);

//   const nextImage = () => flipTo((currentIndex + 1) % images.length);
//   const prevImage = () => flipTo((currentIndex - 1 + images.length) % images.length);

//   return (
//     <div className="h-screen w-full relative overflow-hidden">
//       <img src={mapBG} alt="" className="absolute h-full w-full object-cover z-0" />

//       {/* Prompt for rotation */}
//       {showLandscapePrompt && (
//         <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
//           <div className="bg-white/90 rounded-lg p-6 max-w-sm w-full text-center">
//             <h2 className="text-lg sm:text-xl font-bold text-primary-100 mb-4">
//               Please Rotate Your Device
//             </h2>
//             <p className="text-sm sm:text-base text-primary-100">
//               For the best experience viewing BTS photos, please use landscape mode on your mobile device.
//             </p>
//           </div>
//         </div>
//       )}

//       <div className="relative z-10 flex flex-col items-center justify-between h-full w-full p-4 sm:p-6 md:p-8 lg:p-10">
//         <div className="w-full">
//           <KExpWithCloseBtnHeadingBrown />
//         </div>

//         {/* ======================= MAIN PHOTO STACK ======================= */}
//         <div className="relative h-[320px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[590px] w-full max-w-[450px] sm:max-w-[560px] md:max-w-[640px] lg:max-w-[720px] xl:max-w-[1024px] flex justify-center items-center">
//           {/* Previous Button */}
//           <button
//             onClick={prevImage}
//             disabled={isAnimating}
//             className="absolute -left-8 sm:-left-10 md:-left-12 lg:-left-14 top-1/2 transform -translate-y-1/2 transition-all duration-200 cursor-pointer group z-30 disabled:opacity-50"
//           >
//             <img src={prevBTNIcon} alt="Previous Image" className="w-6 h-6 sm:w-8 sm:h-8" />
//           </button>

//           {/* Centered photo frames */}
//           <div className="relative h-full w-full flex items-center justify-center">
//             {/* Static back frame (bottom) */}
//             <img
//               src={backPhotoFrame}
//               alt="Static back frame"
//               className="absolute z-10 left-4 sm:left-5 md:left-6 top-4 sm:top-5 md:top-6 -rotate-5 h-[90%] w-[90%] object-contain"
//             />

//             {/* Animated back frame (middle) */}
//             <img
//               ref={backFrameRef}
//               src={backPhotoFrame}
//               alt="Back frame"
//               className="absolute z-10 left-4 sm:left-5 md:left-6 top-4 sm:top-5 md:top-6 -rotate-5 h-[90%] w-[90%] object-contain"
//             />

//             {/* Photo (middle layer) */}
//             <div ref={photoContainerRef} className="relative z-20 overflow-hidden">
//               <img
//                 ref={imageRef}
//                 src={images[currentIndex]}
//                 alt={`Photo ${currentIndex + 1}`}
//                 className="w-full h-full p-4 lg:p-8 transition-opacity duration-300 ease-in-out"
//               />
//             </div>

//             {/* Front frame (top layer) */}
//             <img
//               ref={frontFrameRef}
//               src={frontPhotoFrame}
//               alt="Front frame"
//               className="absolute z-30 h-[90%] max-w-[90%] object-contain"
//             />
//           </div>

//           {/* Next Button */}
//           <button
//             onClick={nextImage}
//             disabled={isAnimating}
//             className="absolute -right-8 sm:-right-10 md:-right-12 lg:-right-10 xl:right-8 top-1/2 transform -translate-y-1/2 transition-all duration-200 cursor-pointer group z-30 disabled:opacity-50"
//           >
//             <img src={nextBTNIcon} alt="Next Image" className="w-6 h-6 sm:w-8 sm:h-8" />
//           </button>
//         </div>
//         {/* ======================= END PHOTO STACK ======================= */}

//         <div className="text-center mt-4 sm:mt-6 md:mt-8 text-primary-100 text-opacity-60">
//           <p className="text-xs sm:text-sm md:text-base rock">
//             • Use arrow buttons to navigate •
//           </p>
//         </div>

//         <div className="w-full">
//           <BTMapAndAudioLink />
//         </div>
//       </div>
//     </div>
//   );
// }
