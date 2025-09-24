import React, { useState, useRef } from "react";
import { gsap } from "gsap";
import KExpWithCloseBtnHeadingBrown from "./KExpWithCloseBtnHeadingBrown";
import BTMapAndAudioLink from "./BTMapAndAudioLink";
import mapBG from "../assets/backgrounds/Map_Bkg.png";
import frontPhotoFrame from "../assets/backgrounds/BTS_FrameFront.svg";
import prevBTNIcon from "../assets/icons/arrow_previous.svg";
import nextBTNIcon from "../assets/icons/arrow_next.svg";
import "../../locations"

export default function BTSPhotos() {
  const images = location?.images || [
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?auto=format&fit=crop&w=800&q=80",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const frontFrameRef = useRef(null);
  const backFrameRef = useRef(null);
  const imageRef = useRef(null);

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
          x: -40,
          y: -40,
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
    <div className="h-screen w-full relative overflow-hidden">
      {/* background */}
      <img src={mapBG} alt="" className="absolute h-full w-full object-cover" />

      <div className="relative z-10 flex flex-col items-center justify-between h-full w-full p-10">
        {/* Header */}
        <div className="w-full">
          <KExpWithCloseBtnHeadingBrown />
        </div>

        {/* Frames + Photo */}
        <div className="h-full flex justify-center items-center">
          <div className="relative h-[620px] w-[820px] bts-photo-container">
            {/* Static stack frame */}
            <img
              src={frontPhotoFrame}
              alt="Static back frame"
              className="absolute left-10 top-10 -rotate-5 h-[90%] w-[90%] object-contain"
            />

            {/* Animated back frame */}
            <img
              ref={backFrameRef}
              src={frontPhotoFrame}
              alt="Back frame"
              className="absolute left-10 top-10 -rotate-5 h-[90%] w-[90%] object-contain"
            />

            {/* Front Frame */}
            <img
              ref={frontFrameRef}
              src={frontPhotoFrame}
              alt="Front frame"
              className="absolute h-[90%] w-[90%] object-contain"
            />

            {/* Photo inside frame */}
            <div className="relative left-15 top-19 z-20 h-[56%] w-[75.3%]">
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
              className="absolute -left-30 top-1/2 transform -translate-y-1/2 transition-all duration-200 cursor-pointer group z-30 disabled:opacity-50"
            >
              <img src={prevBTNIcon} alt="Previous Image Button" />
            </button>

            <button
              onClick={nextImage}
              disabled={isAnimating}
              className="absolute -right-30 top-1/2 transform -translate-y-1/2 transition-all duration-200 cursor-pointer group z-30 disabled:opacity-50"
            >
              <img src={nextBTNIcon} alt="Next Image Button" />
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="w-full">
          <BTMapAndAudioLink />
        </div>
      </div>
    </div>
  );
}
