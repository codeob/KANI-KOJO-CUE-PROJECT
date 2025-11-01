// src/components/BTSPhotos.jsx

import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import KExpWithCloseBtnHeadingBrown from "./KExpWithCloseBtnHeadingBrown";
import BTMapAndAudioLink from "./BTMapAndAudioLink";
import mapBG from "../assets/backgrounds/Map1_Bkg.png";
import frontPhotoFrame from "../assets/backgrounds/BTS_FrameFront.svg";
import prevBTNIcon from "../assets/icons/arrow_previous.svg";
import nextBTNIcon from "../assets/icons/arrow_next.svg";
import BgAudio from "./BgAudio";
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

  // Orientation check
  const checkOrientation = () => {
    const isSmallScreen = window.innerWidth < 640;
    const isPortrait = window.innerWidth < window.innerHeight;
    setShowLandscapePrompt(isSmallScreen && isPortrait);
  };

  useEffect(() => {
    checkOrientation();
    window.addEventListener("resize", checkOrientation);
    window.addEventListener("orientationchange", checkOrientation);
    return () => {
      window.removeEventListener("resize", checkOrientation);
      window.removeEventListener("orientationchange", checkOrientation);
    };
  }, []);

  const flipTo = (newIndex) => {
    if (isAnimating) return;
    setIsAnimating(true);

    const tl = gsap.timeline({
      onComplete: () => {
        setCurrentIndex(newIndex);
        setIsAnimating(false);
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

  if (!images.length) {
    return (
      <div className="flex items-center justify-center h-screen bg-black text-white">
        No BTS Photos Found.
      </div>
    );
  }

  return (
    <div
      className="h-screen w-full bg-cover bg-center flex flex-col justify-center items-center px-4 relative"
      style={{ backgroundImage: `url(${mapBG})` }}
    >
      {showLandscapePrompt && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-white/90 rounded-lg p-6 max-w-sm w-full text-center">
            <h2 className="text-lg sm:text-xl font-bold text-primary-100 mb-4">
              Please Rotate Your Device
            </h2>
            <p className="text-sm sm:text-base text-primary-100">
              For the best experience viewing BTS photos, please use landscape mode on your mobile
              device.
            </p>
          </div>
        </div>
      )}

      <div className="relative z-10 flex flex-col items-center justify-between h-full w-full p-4 sm:p-6 md:p-8 lg:p-10">
        <div className="w-full">
          <KExpWithCloseBtnHeadingBrown />
        </div>

        <BgAudio />

        {/* Frames + Photo */}
        <div className="relative h-[320px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[590px] w-full max-w-[450px] sm:max-w-[560px] md:max-w-[640px] lg:max-w-[720px] xl:max-w-[1024px] flex justify-center items-center">
          <div className="relative h-full w-full">
            <img
              src={frontPhotoFrame}
              alt="Static back frame"
              className="absolute left-4 top-4 -rotate-5 h-[90%] w-[90%] object-contain"
            />

            <img
              ref={backFrameRef}
              src={frontPhotoFrame}
              alt="Back frame"
              className="absolute left-4 top-4 -rotate-5 h-[90%] w-[90%] object-contain"
            />

            <img
              ref={frontFrameRef}
              src={frontPhotoFrame}
              alt="Front frame"
              className="absolute h-[90%] w-[90%] object-contain"
            />

            {/* Image positioned on top of the frames, responsive sizing and positioning for all screens */}
            <div className="absolute top-[1rem] left-[1rem] h-[60%] w-[54%] sm:top-[1.5rem] sm:left-[10rem] sm:h-[49%] sm:w-[54%] md:top-[2rem] md:left-[2rem] md:h-[60%] md:w-[54%] lg:top-[2.5rem] lg:left-[5rem] lg:h-[60%] lg:w-[54%] xl:top-[3rem] xl:left-[11.6rem] xl:h-[60%] xl:w-[54%] overflow-hidden z-10">
              <img
                ref={imageRef}
                src={images[currentIndex]}
                alt={`Photo ${currentIndex + 1}`}
                className="h-full w-full "
              />
            </div>

            {/* Nav Arrows */}
            <button
              onClick={prevImage}
              disabled={isAnimating}
              className="absolute -left-8 top-1/2 transform -translate-y-1/2 transition-all duration-200 cursor-pointer z-30 disabled:opacity-50"
            >
              <img src={prevBTNIcon} alt="Previous" className="w-8 h-8" />
            </button>

            <button
              onClick={nextImage}
              disabled={isAnimating}
              className="absolute -right-8 top-1/2 transform -translate-y-1/2 transition-all duration-200 cursor-pointer z-30 disabled:opacity-50"
            >
              <img src={nextBTNIcon} alt="Next" className="w-8 h-8" />
            </button>
          </div>
        </div>

        <div className="text-center mt-4 text-primary-100 text-opacity-60">
          <p className="text-xs sm:text-sm md:text-base rock">• Use arrow buttons to navigate •</p>
        </div>

        <div className="w-full">
          <BTMapAndAudioLink />
        </div>
      </div>
    </div>
  );
}
