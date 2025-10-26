import React, { useEffect, useState, useRef } from "react";
import useLocationStore from "../store/useLocationStore";
import mapDay from "../assets/mapDay.png";
import mapNight from "../assets/mapNight.png";
import locPin from "../assets/icons/locationPin.svg";
import Slide from "./Slide";
import locationPins from "../../locations";

function Map() {
  const { selectedLocation, setSelectedLocation, clearSelected } = useLocationStore();
  const [isSlideVisible, setIsSlideVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [scale, setScale] = useState(1);
  const [showLandscapePrompt, setShowLandscapePrompt] = useState(false);
  const [imageInfo, setImageInfo] = useState({ offsetX: 0, offsetY: 0, scale: 1 });
  const mapRef = useRef(null);

  const now = new Date();
  const hours = now.getHours();

  // Calculate scaling ratio and offsets so pins align perfectly
  const updateImageInfo = () => {
    if (!mapRef.current || !mapRef.current.complete) return;
    const img = mapRef.current;

    const naturalWidth = img.naturalWidth;
    const naturalHeight = img.naturalHeight;
    const containerWidth = window.innerWidth;
    const containerHeight = window.innerHeight;

    const ratio = Math.min(containerWidth / naturalWidth, containerHeight / naturalHeight);

    const displayedWidth = naturalWidth * ratio;
    const displayedHeight = naturalHeight * ratio;

    const offsetX = (containerWidth - displayedWidth) / 2;
    const offsetY = (containerHeight - displayedHeight) / 2;

    setImageInfo({ offsetX, offsetY, scale: ratio });
    setScale(ratio);
  };

  // Check device orientation for prompt
  const checkOrientation = () => {
    const isSmallScreen = window.innerWidth < 640;
    const isPortrait = window.innerWidth < window.innerHeight;
    setShowLandscapePrompt(isSmallScreen && isPortrait);
  };

  useEffect(() => {
    updateImageInfo();
    checkOrientation();
    window.addEventListener("resize", updateImageInfo);
    window.addEventListener("resize", checkOrientation);
    window.addEventListener("orientationchange", checkOrientation);
    return () => {
      window.removeEventListener("resize", updateImageInfo);
      window.removeEventListener("resize", checkOrientation);
      window.removeEventListener("orientationchange", checkOrientation);
    };
  }, []);

  // Handle opening slide animation
  useEffect(() => {
    if (selectedLocation) {
      setIsSlideVisible(true);
      setTimeout(() => setIsAnimating(true), 10);
    }
  }, [selectedLocation]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedLocation) return;
      if (e.key === "ArrowRight") {
        handleNext(selectedLocation.id);
      } else if (e.key === "ArrowLeft") {
        handlePrevious(selectedLocation.id);
      } else if (e.key === "Escape") {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedLocation]);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsSlideVisible(false);
      clearSelected();
    }, 300);
  };

  const handleNext = (currentId) => {
    const currentIndex = locationPins.findIndex((loc) => loc.id === currentId);
    if (currentIndex !== -1) {
      const nextIndex = (currentIndex + 1) % locationPins.length;
      setSelectedLocation(locationPins[nextIndex].id);
    }
  };

  const handlePrevious = (currentId) => {
    const currentIndex = locationPins.findIndex((loc) => loc.id === currentId);
    if (currentIndex !== -1) {
      const prevIndex = (currentIndex - 1 + locationPins.length) % locationPins.length;
      setSelectedLocation(locationPins[prevIndex].id);
    }
  };

  const pinBaseWidth = 220;
  const pinBaseHeight = 270;

  const getPinDimensions = () => {
    if (window.innerWidth >= 1536) return { width: pinBaseWidth * 1.6, height: pinBaseHeight * 1.6 };
    if (window.innerWidth >= 1280) return { width: pinBaseWidth * 1.4, height: pinBaseHeight * 1.4 };
    if (window.innerWidth >= 1024) return { width: pinBaseWidth * 1.2, height: pinBaseHeight * 1.2 };
    if (window.innerWidth >= 768) return { width: pinBaseWidth * 1.0, height: pinBaseHeight * 1.0 };
    return { width: pinBaseWidth * 0.8, height: pinBaseHeight * 0.8 };
  };

  const pinDimensions = getPinDimensions();
  const pinWidth = `${pinDimensions.width * scale}px`;
  const pinHeight = `${pinDimensions.height * scale}px`;

  return (
    <div className="h-screen w-full flex justify-center items-center overflow-hidden relative">
      {showLandscapePrompt && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-white/90 rounded-lg p-6 max-w-sm w-full text-center">
            <h2 className="text-lg sm:text-xl font-bold text-primary-100 mb-4">Please Rotate Your Device</h2>
            <p className="text-sm sm:text-base text-primary-100">
              For the best experience with the interactive map, please use landscape mode on your mobile device.
            </p>
          </div>
        </div>
      )}

      {/* Map container */}
      <div className="relative flex-shrink-0 max-w-full max-h-screen w-full h-full">
        {hours > 5 && hours < 18 ? (
          <img
            ref={mapRef}
            src={mapDay}
            alt="Map"
            className="max-w-full max-h-screen object-contain w-full h-full"
            onLoad={updateImageInfo}
          />
        ) : (
          <img
            ref={mapRef}
            src={mapNight}
            alt="Map"
            className="max-w-full max-h-screen object-contain w-full h-full bg-[#0f0f0f]"
            onLoad={updateImageInfo}
          />
        )}

        {/* Location pins — now precisely aligned */}
        {locationPins.map((loc) => {
          const topPercent = parseFloat(loc.coords.top.replace("%", ""));
          const leftPercent = parseFloat(loc.coords.left.replace("%", ""));

          const img = mapRef.current;
          const naturalWidth = img?.naturalWidth || 0;
          const naturalHeight = img?.naturalHeight || 0;

          const topPx = imageInfo.offsetY + (topPercent / 100) * naturalHeight * imageInfo.scale;
          const leftPx = imageInfo.offsetX + (leftPercent / 100) * naturalWidth * imageInfo.scale;

          return (
            <img
              key={loc.id}
              src={locPin}
              alt={loc.locationName}
              className="absolute cursor-pointer transition-all duration-200 hover:scale-120"
              style={{
                top: `${topPx}px`,
                left: `${leftPx}px`,
                width: pinWidth,
                height: pinHeight,
                minWidth: `${pinDimensions.width * 0.5 * scale}px`,
                minHeight: `${pinDimensions.height * 0.5 * scale}px`,
                transform: "translate(-50%, -100%)",
              }}
              onClick={() => setSelectedLocation(loc.id)}
            />
          );
        })}
      </div>

      {/* Overlay / Slide Info */}
      {isSlideVisible && (
        <div className="fixed inset-0 bg-black/55 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 lg:p-8 xl:p-10">
          <Slide
            location={selectedLocation}
            close={handleClose}
            isAnimating={isAnimating}
            onNext={() => handleNext(selectedLocation?.id)}
            onPrevious={() => handlePrevious(selectedLocation?.id)}
          />
        </div>
      )}
    </div>
  );
}

export default Map;
