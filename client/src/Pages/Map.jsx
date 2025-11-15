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
    baseScale: 1,
    displayedW: 0,
    displayedH: 0,
    containerW: window.innerWidth,
    containerH: window.innerHeight,
  });

  const [userScale, setUserScale] = useState(1.0);
  const [isPinching, setIsPinching] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

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

  // Get dynamic ZOOM_FACTOR based on container width
  const getZoomFactor = useCallback((containerW) => {
    if (containerW >= 1536) return 3.0;
    if (containerW >= 1280) return 2.7;
    if (containerW >= 1024) return 2.4;
    return 2.1;
  }, []);

  // Zoom function at a specific point (relative to container)
  const doZoom = useCallback((scaleFactor, optPointX, optPointY) => {
    const ii = imageInfoRef.current;
    const ns = naturalSizeRef.current;
    if (!ns.w || !ns.h || !mapContainerRef.current) return;

    const rect = mapContainerRef.current.getBoundingClientRect();
    const pointX = optPointX !== undefined ? optPointX : ii.containerW / 2;
    const pointY = optPointY !== undefined ? optPointY : ii.containerH / 2;
    const currentScale = ii.scale;
    const currentOffsetX = ii.offsetX + panRef.current.x;
    const currentOffsetY = ii.offsetY + panRef.current.y;
    const worldX = (pointX - currentOffsetX) / currentScale;
    const worldY = (pointY - currentOffsetY) / currentScale;

    let newUserScale = userScaleRef.current * scaleFactor;
    newUserScale = Math.max(0.5, Math.min(5, newUserScale));

    const baseRatio = Math.min(ii.containerW / ns.w, ii.containerH / ns.h);
    const ZOOM_FACTOR = getZoomFactor(ii.containerW);
    const newScale = baseRatio * ZOOM_FACTOR * newUserScale;
    const newDisplayedW = ns.w * newScale;
    const newDisplayedH = ns.h * newScale;
    const newOffsetX = (ii.containerW - newDisplayedW) / 2;
    const newOffsetY = (ii.containerH - newDisplayedH) / 2;
    const newPanX = pointX - worldX * newScale - newOffsetX;
    const newPanY = pointY - worldY * newScale - newOffsetY;

    setUserScale(newUserScale);
    setPan({ x: newPanX, y: newPanY });
  }, [getZoomFactor]);

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

    // Dynamic Zoom factor based on screen size for bigger screens
    const ZOOM_FACTOR = getZoomFactor(containerW);
    const baseScale = baseRatio * ZOOM_FACTOR;
    const scale = baseScale * userScale;

    const displayedW = naturalW * scale;
    const displayedH = naturalH * scale;

    // center the zoomed-in image inside the viewport initially
    const offsetX = (containerW - displayedW) / 2;
    const offsetY = (containerH - displayedH) / 2;

    setImageInfo({
      offsetX,
      offsetY,
      scale,
      baseScale,
      displayedW,
      displayedH,
      containerW,
      containerH,
    });

    // Reset pan so initial position is centered (only on mount, not on zoom)
    if (userScale === 1) {
      setPan({ x: 0, y: 0 });
    }
  }, [naturalSize, userScale, getZoomFactor]);

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

  // Check mobile on resize
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Wheel zoom handler (desktop)
  const handleWheel = useCallback((e) => {
    e.preventDefault();
    const rect = mapContainerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const scaleFactor = e.deltaY < 0 ? 1.1 : 0.9;
    doZoom(scaleFactor, mouseX, mouseY);
  }, [doZoom]);

  // Touch handlers for pinch zoom (mobile)
  const handleTouchStart = useCallback((e) => {
    if (e.touches.length === 2 && mapContainerRef.current) {
      setIsPinching(true);
      const rect = mapContainerRef.current.getBoundingClientRect();
      const t0 = e.touches[0];
      const t1 = e.touches[1];
      initialDistRef.current = Math.hypot(t1.clientX - t0.clientX, t1.clientY - t0.clientY);
      initialUserScaleRef.current = userScaleRef.current;
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
    const ZOOM_FACTOR = getZoomFactor(ii.containerW);
    const newScale = baseRatio * ZOOM_FACTOR * newUserScale;
    const newDisplayedW = ns.w * newScale;
    const newDisplayedH = ns.h * newScale;
    const newOffsetX = (ii.containerW - newDisplayedW) / 2;
    const newOffsetY = (ii.containerH - newDisplayedH) / 2;
    const newPanX = mouseX - worldX * newScale - newOffsetX;
    const newPanY = mouseY - worldY * newScale - newOffsetY;

    setUserScale(newUserScale);
    setPan({ x: newPanX, y: newPanY });
  }, [getZoomFactor]);

  const handleTouchEnd = useCallback((e) => {
    if (e.touches.length < 2) {
      setIsPinching(false);
      initialDistRef.current = 0;
    }
  }, []);

  // Attach touch and wheel listeners with proper passive options
  useEffect(() => {
    const el = mapContainerRef.current;
    if (!el) return;

    el.addEventListener('touchstart', handleTouchStart, { passive: true });
    el.addEventListener('touchmove', handleTouchMove, { passive: false });
    el.addEventListener('touchend', handleTouchEnd, { passive: true });
    el.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      el.removeEventListener('touchstart', handleTouchStart);
      el.removeEventListener('touchmove', handleTouchMove);
      el.removeEventListener('touchend', handleTouchEnd);
      el.removeEventListener('wheel', handleWheel);
    };
  }, [handleTouchStart, handleTouchMove, handleTouchEnd, handleWheel]);

  // Zoom buttons handlers
  const handleZoomIn = () => doZoom(1.2);
  const handleZoomOut = () => doZoom(0.833);

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
    const isSmallScreen = Math.min(window.innerWidth, window.innerHeight) < 640;
    const isPortrait = window.innerWidth < window.innerHeight;
    setShowLandscapePrompt(isSmallScreen && isPortrait);
  };

  useEffect(() => {
    const handleResizeOrOrientation = () => {
      // Small delay to ensure dimensions are updated after orientation change
      setTimeout(checkOrientation, 100);
    };

    checkOrientation();
    window.addEventListener("orientationchange", handleResizeOrOrientation);
    window.addEventListener("resize", handleResizeOrOrientation);
    return () => {
      window.removeEventListener("orientationchange", handleResizeOrOrientation);
      window.removeEventListener("resize", handleResizeOrOrientation);
    };
  }, []);

  // Slide logic (reset zoom to original when opening slide)
  useEffect(() => {
    if (selectedLocation) {
      setUserScale(1.0);
      setPan({ x: 0, y: 0 });
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

  // compute pin sizes based on imageInfo.baseScale (fixed size, no userScale)
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
  const pinWidth = `${Math.max(20, pinDimensions.width * imageInfo.baseScale)}px`;
  const pinHeight = `${Math.max(20, pinDimensions.height * imageInfo.baseScale)}px`;

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
        {/* Map container */}
        <div
          ref={mapContainerRef}
          className={`absolute inset-0 overflow-hidden select-none ${
            isDraggingRef.current ? "cursor-grabbing" : "cursor-grab"
          }`}
          style={{ touchAction: "manipulation" }} // Allows pinch-zoom and panning gestures on mobile
          onPointerDown={handlePointerDown}
        >
          {/* Position the image wrapper using offset + pan */}
          <div
            className="absolute"
            style={{
              left: `${imageInfo.offsetX + pan.x}px`,
              top: `${imageInfo.offsetY + pan.y}px`,
              width: `${imageInfo.displayedW}px`,
              height: `${imageInfo.displayedH}px`,
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

        {/* Zoom buttons - only on mobile */}
        {isMobile && (
          <div className="fixed bottom-20 right-4 flex flex-col gap-2 z-10">
            <button
              onClick={handleZoomIn}
              className="w-12 h-12 bg-white/90 rounded-full shadow-lg flex items-center justify-center text-xl font-bold text-gray-800 hover:bg-white transition-colors"
            >
              +
            </button>
            <button
              onClick={handleZoomOut}
              className="w-12 h-12 bg-white/90 rounded-full shadow-lg flex items-center justify-center text-xl font-bold text-gray-800 hover:bg-white transition-colors"
            >
              -
            </button>
          </div>
        )}

        {/* Speaker toggle */}
        <button onClick={togglePlay} className="cursor-pointer fixed bottom-6 left-12 lg:bottom-10">
          <img
            src={playing ? speakerMute : speaker}
            alt={playing ? "Mute" : "Play"}
            className="h-6 w-6 lg:h-10 lg:w-10"
          />
        </button>
      </div>

      {/* Slide overlay - positioned fixed to viewport, unaffected by map scaling/panning */}
      {isSlideVisible && (
        <div className="fixed inset-0 bg-black/55 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 lg:p-8 xl:p-10 pointer-events-auto">
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