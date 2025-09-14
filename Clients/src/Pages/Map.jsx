import React, { useEffect, useState, useRef } from "react";
import useLocationStore from "../store/useLocationStore"
import mapimg from "../assets/backgrounds/mapimg.jpg";
import locPin from "../assets/pin.png";
import Slide from "./Slide";
import locationPins from "../../locations";

function Map() {
  const { selectedLocation, setSelectedLocation, clearSelected} = useLocationStore()
  const [isSlideVisible, setIsSlideVisible ] = useState(false)
  const [ isAnimating, setIsAnimating ] = useState(false)
  const [scale, setScale] = useState(1)
  const mapRef = useRef(null)

  const calculateScale = () => {
    if (mapRef.current && mapRef.current.complete) {
      const img = mapRef.current;
      const scaleX = window.innerWidth / img.naturalWidth;
      const scaleY = window.innerHeight / img.naturalHeight;
      setScale(Math.min(scaleX, scaleY, 1)); // Cap at 1 to avoid upscaling
    }
  };

  useEffect(() => {
    calculateScale();
    window.addEventListener('resize', calculateScale);
    return () => window.removeEventListener('resize', calculateScale);
  }, []);

  // Handle opening slide animation
  useEffect(() => {
    if (selectedLocation) {
      setIsSlideVisible(true)
      setTimeout(() => setIsAnimating(true), 10)  // small delay b4 animation to ensure element is mounted
    }
  }, [selectedLocation] )

  //handle closing animation
  const handleClose = () =>{
    setIsAnimating(false);
    // wait for animation to complete before hiding
    setTimeout(() => {
      setIsSlideVisible(false)
      clearSelected();
    }, 300)
  }

  const pinBaseWidth = 20; // px, equivalent to Tailwind w-5 (1.25rem ≈ 20px)
  const pinBaseHeight = 32; // px, equivalent to Tailwind h-8 (2rem ≈ 32px)
  // Apply responsive scaling adjustments based on breakpoints (approximate)
  // On larger screens, slightly increase base for better visibility/touch targets
  const getPinDimensions = () => {
    if (window.innerWidth >= 1536) return { width: pinBaseWidth * 1.6, height: pinBaseHeight * 1.6 }; // 2xl
    if (window.innerWidth >= 1280) return { width: pinBaseWidth * 1.4, height: pinBaseHeight * 1.4 }; // xl
    if (window.innerWidth >= 1024) return { width: pinBaseWidth * 1.2, height: pinBaseHeight * 1.2 }; // lg
    if (window.innerWidth >= 768) return { width: pinBaseWidth * 1.0, height: pinBaseHeight * 1.0 }; // md
    return { width: pinBaseWidth * 0.8, height: pinBaseHeight * 0.8 }; // below md
  };

  const pinDimensions = getPinDimensions();
  const pinWidth = `${pinDimensions.width * scale}px`;
  const pinHeight = `${pinDimensions.height * scale}px`;

  return (
    <div className="h-screen flex justify-center items-center overflow-hidden relative">
      {/* Container that keeps image responsive */}
      <div className="relative flex-shrink-0 max-w-full max-h-screen">
        {/* Map image */}
        <img
          ref={mapRef}
          src={mapimg}
          alt="Map"
          className="max-w-full max-h-screen object-contain w-auto h-auto"
          onLoad={calculateScale}
        />

        {/* Location pins (scale with map), render from location.js data, coords top and left can be edited in location.js file */}
        {locationPins.map((loc) => (
          <img 
            key={loc.id}
            src={locPin}
            alt={loc.locationName}
            className="absolute cursor-pointer transition-all duration-200 hover:scale-110"
            style={{ 
              top: loc.coords.top, 
              left: loc.coords.left,
              width: pinWidth,
              height: pinHeight,
              minWidth: `${pinDimensions.width * 0.5 * scale}px`, // Minimum size for very small screens
              minHeight: `${pinDimensions.height * 0.5 * scale}px`
            }}
            onClick={()=> setSelectedLocation(loc.id)}
          />
        ))}
      </div>

      {/* Overlay / Slide Info base on selected pin - now fixed for full viewport coverage with responsive padding */}
      {isSlideVisible && (
        <div className="fixed inset-0 bg-black/55 z-50 flex items-center justify-center p-2 md:p-4 lg:p-6 xl:p-8 2xl:p-10">
          <Slide location={selectedLocation} close={handleClose} isAnimating={isAnimating} />
        </div>
      )}
    </div>
  );
}

export default Map;