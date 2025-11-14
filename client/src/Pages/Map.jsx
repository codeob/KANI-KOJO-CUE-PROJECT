
import React, { useEffect, useState, useRef, useCallback } from "react";
import useLocationStore from "../store/useLocationStore";
import grainBG from "../assets/backgrounds/grainBG.png";
import mapDay from "../assets/mapDay.png";
import mapNight from "../assets/mapNight.png";
import locPin from "../assets/icons/locationPin.svg";
import speaker from "../assets/icons/speaker.svg";
import speakerMute from "../assets/icons/speakerMute.svg";
import Slide from "./Slide";
import locationPins from "../../locations";

function Map() {
  const { selectedLocation, setSelectedLocation, clearSelected } = useLocationStore();
  const [isSlideVisible, setIsSlideVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showLandscapePrompt, setShowLandscapePrompt] = useState(false);

  // image metadata & layout
  const [naturalSize, setNaturalSize] = useState({ w: 0, h: 0 });
  const [imageInfo, setImageInfo] = useState({
    offsetX: 0,
    offsetY: 0,
    scale: 1,
    displayedW: 0,
    displayedH: 0,
    containerW: window.innerWidth,
    containerH: window.innerHeight,
  });

  const [userScale, setUserScale] = useState(1.0);
  const [isPinching, setIsPinching] = useState(false);

  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);

  // panning state
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const isDraggingRef = useRef(false);
  const dragOffset = useRef({ x: 0, y: 0 });

  // Refs for real-time access during gestures
  const userScaleRef = useRef(1.0);
  const panRef = useRef({ x: 0, y: 0 });
  const imageInfoRef = useRef({});
  const naturalSizeRef = useRef({ w: 0, h: 0 });
  const initialDistRef = useRef(0);
  const initialUserScaleRef = useRef(1.0);

  useEffect(() => { userScaleRef.current = userScale; }, [userScale]);
  useEffect(() => { panRef.current = pan; }, [pan]);
  useEffect(() => { imageInfoRef.current = imageInfo; }, [imageInfo]);
  useEffect(() => { naturalSizeRef.current = naturalSize; }, [naturalSize]);

  const mapContainerRef = useRef(null);
  const now = new Date();
  const hours = now.getHours();

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play();
      setPlaying(true);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const tryPlay = async () => {
      try {
        await audio.play();
        setPlaying(true);
      } catch {
        // Autoplay likely blocked; wait for user interaction
      }
    };
    tryPlay();

    const handleUserInteraction = () => {
      audio.muted = false;
      document.removeEventListener("click", handleUserInteraction);
    };
    document.addEventListener("click", handleUserInteraction);
    return () => {
      audio.pause();
      audio.currentTime = 0;
      document.removeEventListener("click", handleUserInteraction);
    };
  }, []);

  // Called once the image loads to get natural dimensions
  const onImageLoad = (e) => {
    const img = e.target;
    const w = img.naturalWidth;
    const h = img.naturalHeight;
    setNaturalSize({ w, h });
  };

  // compute image info (displayed width/height, offsets) using naturalSize
  const computeImageInfo = useCallback(() => {
    const { w: naturalW, h: naturalH } = naturalSize;
    const containerW = window.innerWidth;
    const containerH = window.innerHeight;

    if (!naturalW || !naturalH) {
      // Nothing to compute yet
      setImageInfo((prev) => ({ ...prev, containerW, containerH }));
      return;
    }

    // base ratio to fit whole image
    const baseRatio = Math.min(containerW / naturalW, containerH / naturalH);

    // Zoom factor - adjust this to taste (1.5 to 2.2 are common)
    const ZOOM_FACTOR = 1.8;
    const scale = baseRatio * ZOOM_FACTOR * userScale;

    const displayedW = naturalW * scale;
    const displayedH = naturalH * scale;

    // center the zoomed-in image inside the viewport initially
    const offsetX = (containerW - displayedW) / 2;
    const offsetY = (containerH - displayedH) / 2;

    setImageInfo({
      offsetX,
      offsetY,
      scale,
      displayedW,
      displayedH,
      containerW,
      containerH,
    });

    // Reset pan so initial position is centered (only on mount, not on zoom)
    if (userScale === 1) {
      setPan({ x: 0, y: 0 });
    }
  }, [naturalSize, userScale]);

  // Attach resizing and orientation handlers
  useEffect(() => {
    computeImageInfo();
    const onResize = () => computeImageInfo();
    const onOrientation = () => computeImageInfo();

    window.addEventListener("resize", onResize);
    window.addEventListener("orientationchange", onOrientation);
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onOrientation);
    };
  }, [computeImageInfo]);

  // Wheel zoom handler (desktop)
  const handleWheel = useCallback((e) => {
    e.preventDefault();
    const ii = imageInfoRef.current;
    const ns = naturalSizeRef.current;
    if (!ns.w || !ns.h || !mapContainerRef.current) return;

    const rect = mapContainerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const currentScale = ii.scale;
    const currentOffsetX = ii.offsetX + panRef.current.x;
    const currentOffsetY = ii.offsetY + panRef.current.y;
    const worldX = (mouseX - currentOffsetX) / currentScale;
    const worldY = (mouseY - currentOffsetY) / currentScale;

    const scaleFactor = e.deltaY < 0 ? 1.1 : 0.9;
    let newUserScale = userScaleRef.current * scaleFactor;
    newUserScale = Math.max(0.5, Math.min(5, newUserScale));

    const baseRatio = Math.min(ii.containerW / ns.w, ii.containerH / ns.h);
    const ZOOM_FACTOR = 1.8;
    const newScale = baseRatio * ZOOM_FACTOR * newUserScale;
    const newDisplayedW = ns.w * newScale;
    const newDisplayedH = ns.h * newScale;
    const newOffsetX = (ii.containerW - newDisplayedW) / 2;
    const newOffsetY = (ii.containerH - newDisplayedH) / 2;
    const newPanX = mouseX - worldX * newScale - newOffsetX;
    const newPanY = mouseY - worldY * newScale - newOffsetY;

    setUserScale(newUserScale);
    setPan({ x: newPanX, y: newPanY });
  }, []);

  // Touch handlers for pinch zoom (mobile)
  const handleTouchStart = useCallback((e) => {
    if (e.touches.length === 2 && mapContainerRef.current) {
      setIsPinching(true);
      const rect = mapContainerRef.current.getBoundingClientRect();
      const t0 = e.touches[0];
      const t1 = e.touches[1];
      initialDistRef.current = Math.hypot(t1.clientX - t0.clientX, t1.clientY - t0.clientY);
      initialUserScaleRef.current = userScaleRef.current;
      e.preventDefault();
    }
  }, []);

  const handleTouchMove = useCallback((e) => {
    if (e.touches.length !== 2 || !mapContainerRef.current) return;
    e.preventDefault();

    const rect = mapContainerRef.current.getBoundingClientRect();
    const t0 = e.touches[0];
    const t1 = e.touches[1];
    const mouseX = ((t0.clientX + t1.clientX) / 2) - rect.left;
    const mouseY = ((t0.clientY + t1.clientY) / 2) - rect.top;
    const dist = Math.hypot(t1.clientX - t0.clientX, t1.clientY - t0.clientY);
    const initialDist = initialDistRef.current;
    if (initialDist <= 0) return;

    const scaleFactor = dist / initialDist;
    let newUserScale = initialUserScaleRef.current * scaleFactor;
    newUserScale = Math.max(0.5, Math.min(5, newUserScale));

    if (Math.abs(newUserScale - userScaleRef.current) < 0.005) return;

    const ii = imageInfoRef.current;
    const ns = naturalSizeRef.current;
    const currentScale = ii.scale;
    const currentOffsetX = ii.offsetX + panRef.current.x;
    const currentOffsetY = ii.offsetY + panRef.current.y;
    const worldX = (mouseX - currentOffsetX) / currentScale;
    const worldY = (mouseY - currentOffsetY) / currentScale;

    const baseRatio = Math.min(ii.containerW / ns.w, ii.containerH / ns.h);
    const ZOOM_FACTOR = 1.8;
    const newScale = baseRatio * ZOOM_FACTOR * newUserScale;
    const newDisplayedW = ns.w * newScale;
    const newDisplayedH = ns.h * newScale;
    const newOffsetX = (ii.containerW - newDisplayedW) / 2;
    const newOffsetY = (ii.containerH - newDisplayedH) / 2;
    const newPanX = mouseX - worldX * newScale - newOffsetX;
    const newPanY = mouseY - worldY * newScale - newOffsetY;

    setUserScale(newUserScale);
    setPan({ x: newPanX, y: newPanY });
  }, [isPinching]);

  const handleTouchEnd = useCallback((e) => {
    if (e.touches.length < 2) {
      setIsPinching(false);
      initialDistRef.current = 0;
    }
  }, []);

  // pointer handlers - attach move/up to window for robust dragging
  const handlePointerDown = (e) => {
    // ignore clicks on pins
    if (e.target.closest && e.target.closest(".location-pin")) return;
    if (isPinching) return;
    if (e.pointerType === "mouse" && e.button !== 0) return;
    e.preventDefault();
    isDraggingRef.current = true;
    dragOffset.current = { x: e.clientX - pan.x, y: e.clientY - pan.y };

    // ensure we capture pointer move/up outside the container too
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
  };

  const handlePointerMove = (e) => {
    if (!isDraggingRef.current || isPinching) return;
    e.preventDefault();
    const nextX = e.clientX - dragOffset.current.x;
    const nextY = e.clientY - dragOffset.current.y;
    setPan({ x: nextX, y: nextY });
  };

  const handlePointerUp = (e) => {
    isDraggingRef.current = false;
    window.removeEventListener("pointermove", handlePointerMove);
    window.removeEventListener("pointerup", handlePointerUp);
  };

  // show rotate prompt on small portrait devices
  const checkOrientation = () => {
    const isSmallScreen = window.innerWidth < 640;
    const isPortrait = window.innerWidth < window.innerHeight;
    setShowLandscapePrompt(isSmallScreen && isPortrait);
  };

  useEffect(() => {
    checkOrientation();
    window.addEventListener("orientationchange", checkOrientation);
    return () => window.removeEventListener("orientationchange", checkOrientation);
  }, []);

  // Slide logic (unchanged)
  useEffect(() => {
    if (selectedLocation) {
      setIsSlideVisible(true);
      setTimeout(() => setIsAnimating(true), 10);
    }
  }, [selectedLocation]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedLocation) return;
      if (e.key === "ArrowRight") handleNext(selectedLocation.id);
      else if (e.key === "ArrowLeft") handlePrevious(selectedLocation.id);
      else if (e.key === "Escape") handleClose();
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

  // compute pin sizes based on imageInfo.scale
  const pinBaseWidth = 220;
  const pinBaseHeight = 270;
  const getPinDimensions = () => {
    if (window.innerWidth >= 1536) return { width: pinBaseWidth * 1.6, height: pinBaseHeight * 1.6 };
    if (window.innerWidth >= 1280) return { width: pinBaseWidth * 1.4, height: pinBaseHeight * 1.4 };
    if (window.innerWidth >= 1024) return { width: pinBaseWidth * 1.3, height: pinBaseHeight * 1.3 };
    if (window.innerWidth >= 768) return { width: pinBaseWidth * 1.1, height: pinBaseHeight * 1.1 };
    return { width: pinBaseWidth * 0.8, height: pinBaseHeight * 1 };
  };
  const pinDimensions = getPinDimensions();
  const pinWidth = `${Math.max(20, pinDimensions.width * imageInfo.scale)}px`;
  const pinHeight = `${Math.max(20, pinDimensions.height * imageInfo.scale)}px`;

  // whenever natural size changes, recompute image info
  useEffect(() => {
    computeImageInfo();
  }, [naturalSize, computeImageInfo]);

  // fetch audio URL
  const song1 =
    "https://firebasestorage.googleapis.com/v0/b/kanialbum.firebasestorage.app/o/Inst%20Clip%202.wav?alt=media&token=10316723-b997-4e1d-9a84-c90e8f077d72";

  return (
    <div className="h-screen w-full flex justify-center items-center overflow-hidden relative">
      <audio ref={audioRef} src={song1} loop preload="auto" />

      {showLandscapePrompt && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-white/90 rounded-lg p-6 max-w-sm w-full text-center">
            <h2 className="text-lg sm:text-xl font-bold text-primary-100 mb-4">
              Please Rotate Your Device
            </h2>
            <p className="text-sm sm:text-base text-primary-100">
              For best experience, use landscape mode or view on a larger screen.
            </p>
          </div>
        </div>
      )}

      <div
        className={`relative w-full h-full ${
          hours > 5 && hours < 18 ? "bg-[rgba(196,170,141,0.9)]" : "bg-[rgb(15,15,15)]"
        }`}
        style={{ backgroundImage: `url(${grainBG})` }}
      >
        {/* <h2
          className={`fixed left-5 top-5 lg:left-13 lg:top-13 text-center text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] rock leading-tight ${
            hours > 5 && hours < 18 ? "text-primary-100" : "text-textLight-100"
          }`}
        >
          Explore the Kani
          <br />
          <span className="lowercase">journey</span>
        </h2> */}

        {/* Map container */}
        <div
          ref={mapContainerRef}
          className={`absolute inset-0 overflow-hidden select-none ${
            isDraggingRef.current ? "cursor-grabbing" : "cursor-grab"
          }`}
          onPointerDown={handlePointerDown}
          onWheel={handleWheel}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Position the image wrapper using offset + pan */}
          <div
            className="absolute"
            style={{
              left: `${imageInfo.offsetX + pan.x}px`,
              top: `${imageInfo.offsetY + pan.y}px`,
              width: `${imageInfo.displayedW}px`,
              height: `${imageInfo.displayedH}px`,
              touchAction: "none", // prevent default touch gestures that conflict
            }}
          >
            <img
              src={hours > 5 && hours < 18 ? mapDay : mapNight}
              alt="Map"
              onLoad={onImageLoad}
              className="block w-full h-full pointer-events-none select-none"
              style={{ display: "block", userSelect: "none" }}
            />

            {/* pins placed relative to natural image coordinates scaled by imageInfo.scale */}
            {locationPins.map((loc) => {
              const topPercent = parseFloat(loc.coords.top.replace("%", ""));
              const leftPercent = parseFloat(loc.coords.left.replace("%", ""));

              // compute pixel position within the displayed (zoomed) image box
              const x = (leftPercent / 100) * imageInfo.displayedW;
              const y = (topPercent / 100) * imageInfo.displayedH;

              return (
                <img
                  key={loc.id}
                  src={locPin}
                  alt={loc.locationName}
                  className="absolute location-pin cursor-pointer transition-transform duration-200 hover:scale-110"
                  style={{
                    left: `${x}px`,
                    top: `${y}px`,
                    width: pinWidth,
                    height: pinHeight,
                    transform: "translate(-50%, -100%)",
                    // ensure pins are above the map
                    zIndex: 2,
                  }}
                  onClick={(ev) => {
                    ev.stopPropagation();
                    setSelectedLocation(loc.id);
                  }}
                />
              );
            })}
          </div>
        </div>

        {/* Speaker toggle */}
        <button onClick={togglePlay} className="cursor-pointer fixed bottom-6 left-12 lg:bottom-10">
          <img
            src={playing ? speakerMute : speaker}
            alt={playing ? "Mute" : "Play"}
            className="h-6 w-6 lg:h-10 lg:w-10"
          />
        </button>
      </div>

      {/* Slide overlay */}
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
