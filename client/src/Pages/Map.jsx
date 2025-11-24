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
import ZoomIn from "../assets/icons/ZoomIn.svg";
import ZoomOut from "../assets/icons/ZoomOut.svg";
import webtoast from "../assets/icons/webtoast.svg";
import mobiletoast from "../assets/icons/mobiletoast.svg";
import calendar from "../assets/icons/calendardate.svg";
import shopbag from "../assets/icons/shoppingbag.svg"

function Map() {
  const { selectedLocation, setSelectedLocation, clearSelected } =
    useLocationStore();
  const [isSlideVisible, setIsSlideVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showLandscapePrompt, setShowLandscapePrompt] = useState(false);

  // Toast state
  const [showToast, setShowToast] = useState(false);

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
  const getIsMobile = () => {
    const coarse =
      typeof window !== "undefined" && window.matchMedia
        ? window.matchMedia("(pointer: coarse)").matches
        : false;
    const smallViewport =
      Math.max(window.innerWidth, window.innerHeight) <= 1024;
    return coarse || smallViewport;
  };
  const [isMobile, setIsMobile] = useState(getIsMobile());
  const [isLandscape, setIsLandscape] = useState(
    (typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(orientation: landscape)").matches) ||
      window.innerWidth > window.innerHeight
  );

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

  useEffect(() => {
    userScaleRef.current = userScale;
  }, [userScale]);
  useEffect(() => {
    panRef.current = pan;
  }, [pan]);
  useEffect(() => {
    imageInfoRef.current = imageInfo;
  }, [imageInfo]);
  useEffect(() => {
    naturalSizeRef.current = naturalSize;
  }, [naturalSize]);

  const mapContainerRef = useRef(null);
  const now = new Date();
  const hours = now.getHours();

  // Toast effect - show on mount for 4 seconds
  useEffect(() => {
    setShowToast(true);
    const timer = setTimeout(() => {
      setShowToast(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

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

  // Get dynamic ZOOM_FACTOR based on container width and mobile status
  const getZoomFactor = useCallback((containerW) => {
    if (isMobile) return 1.0; // Static full view on small screens
    if (containerW >= 1536) return 3.0;
    if (containerW >= 1280) return 2.7;
    if (containerW >= 1024) return 2.4;
    return 2.1;
  }, [isMobile]);

  // Zoom function at a specific point (relative to container)
  const doZoom = useCallback(
    (scaleFactor, optPointX, optPointY) => {
      if (isMobile) return; // Disable zoom on mobile
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
    },
    [getZoomFactor]
  );

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

  // Attach resizing and orientation handlers (debounced to avoid thrashing)
  useEffect(() => {
    let rafId = 0;
    let lastW = window.innerWidth;
    let lastH = window.innerHeight;

    const scheduleCompute = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const w = window.innerWidth;
        const h = window.innerHeight;
        // Only recompute if container size actually changed
        if (w !== lastW || h !== lastH) {
          lastW = w;
          lastH = h;
          computeImageInfo();
        }
      });
    };

    // initial compute
    scheduleCompute();

    const onResizeOrOrientation = () => {
      scheduleCompute();
    };

    window.addEventListener("resize", onResizeOrOrientation);
    window.addEventListener("orientationchange", onResizeOrOrientation);
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResizeOrOrientation);
      window.removeEventListener("orientationchange", onResizeOrOrientation);
    };
  }, [computeImageInfo]);

  // Check mobile on resize/orientation (debounced and guarded)
  useEffect(() => {
    let tId = 0;

    const applyMobile = () => {
      const next = getIsMobile();
      setIsMobile((prev) => (prev !== next ? next : prev));
    };

    const handler = () => {
      if (tId) clearTimeout(tId);
      tId = setTimeout(applyMobile, 200);
    };

    // initial
    handler();

    window.addEventListener("resize", handler);
    window.addEventListener("orientationchange", handler);
    return () => {
      if (tId) clearTimeout(tId);
      window.removeEventListener("resize", handler);
      window.removeEventListener("orientationchange", handler);
    };
  }, []);

  // Wheel zoom handler (desktop)
  const handleWheel = useCallback(
    (e) => {
      if (isMobile) return; // Disable on mobile
      e.preventDefault();
      const rect = mapContainerRef.current.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      const scaleFactor = e.deltaY < 0 ? 1.1 : 0.9;
      doZoom(scaleFactor, mouseX, mouseY);
    },
    [doZoom, isMobile]
  );

  // Touch handlers for pinch zoom (mobile)
  const handleTouchStart = useCallback((e) => {
    if (isMobile) return; // Disable on mobile
    if (e.touches.length === 2 && mapContainerRef.current) {
      setIsPinching(true);
      const rect = mapContainerRef.current.getBoundingClientRect();
      const t0 = e.touches[0];
      const t1 = e.touches[1];
      initialDistRef.current = Math.hypot(
        t1.clientX - t0.clientX,
        t1.clientY - t0.clientY
      );
      initialUserScaleRef.current = userScaleRef.current;
    }
  }, [isMobile]);

  const handleTouchMove = useCallback(
    (e) => {
      if (isMobile) return; // Disable on mobile
      if (e.touches.length !== 2 || !mapContainerRef.current) return;
      e.preventDefault();

      const rect = mapContainerRef.current.getBoundingClientRect();
      const t0 = e.touches[0];
      const t1 = e.touches[1];
      const mouseX = (t0.clientX + t1.clientX) / 2 - rect.left;
      const mouseY = (t0.clientY + t1.clientY) / 2 - rect.top;
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
    },
    [getZoomFactor, isMobile]
  );

  const handleTouchEnd = useCallback((e) => {
    if (isMobile) return; // Disable on mobile
    if (e.touches.length < 2) {
      setIsPinching(false);
      initialDistRef.current = 0;
    }
  }, [isMobile]);

  // Attach touch and wheel listeners with proper passive options
  useEffect(() => {
    const el = mapContainerRef.current;
    if (!el) return;

    el.addEventListener("touchstart", handleTouchStart, { passive: true });
    el.addEventListener("touchmove", handleTouchMove, { passive: false });
    el.addEventListener("touchend", handleTouchEnd, { passive: true });
    el.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      el.removeEventListener("touchstart", handleTouchStart);
      el.removeEventListener("touchmove", handleTouchMove);
      el.removeEventListener("touchend", handleTouchEnd);
      el.removeEventListener("wheel", handleWheel);
    };
  }, [handleTouchStart, handleTouchMove, handleTouchEnd, handleWheel]);

  // Zoom buttons handlers
  const handleZoomIn = () => doZoom(1.2);
  const handleZoomOut = () => doZoom(0.833);

  // pointer handlers - attach move/up to window for robust dragging
  const handlePointerDown = (e) => {
    if (isMobile) return; // Disable panning on mobile
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
    const mql =
      typeof window !== "undefined" && window.matchMedia
        ? window.matchMedia("(orientation: landscape)")
        : null;
    const landscape = mql
      ? mql.matches
      : window.innerWidth > window.innerHeight;
    setShowLandscapePrompt(isSmallScreen && !landscape);
    setIsLandscape(landscape);
  };

  useEffect(() => {
    let tId = 0;
    const debounced = () => {
      if (tId) clearTimeout(tId);
      tId = setTimeout(() => {
        checkOrientation();
      }, 200);
    };

    // initial
    debounced();

    window.addEventListener("orientationchange", debounced);
    window.addEventListener("resize", debounced);
    return () => {
      if (tId) clearTimeout(tId);
      window.removeEventListener("orientationchange", debounced);
      window.removeEventListener("resize", debounced);
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
      const prevIndex =
        (currentIndex - 1 + locationPins.length) % locationPins.length;
      setSelectedLocation(locationPins[prevIndex].id);
    }
  };

  // compute pin sizes based on imageInfo.baseScale (fixed size, no userScale)
  const pinBaseWidth = 220;
  const pinBaseHeight = 270;
  const getPinDimensions = () => {
    if (window.innerWidth >= 1536)
      return { width: pinBaseWidth * 1.6, height: pinBaseHeight * 1.6 };
    if (window.innerWidth >= 1280)
      return { width: pinBaseWidth * 1.4, height: pinBaseHeight * 1.4 };
    if (window.innerWidth >= 1024)
      return { width: pinBaseWidth * 1.3, height: pinBaseHeight * 1.3 };
    if (window.innerWidth >= 768)
      return { width: pinBaseWidth * 1.1, height: pinBaseHeight * 1.1 };
    return { width: pinBaseWidth * 0.8, height: pinBaseHeight * 1 };
  };
  const pinDimensions = getPinDimensions();
  const pinWidth = `${Math.max(
    20,
    pinDimensions.width * imageInfo.baseScale
  )}px`;
  const pinHeight = `${Math.max(
    20,
    pinDimensions.height * imageInfo.baseScale
  )}px`;

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

      {showToast && (
        <div className="fixed left-12 top-10 z-50">
          <img
            src={isMobile ? mobiletoast : webtoast}
            alt="Toast Notification"
            className="w-auto h-auto max-w-sm max-h-32 object-contain"
          />
        </div>
      )}

      {showLandscapePrompt && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-white/90 rounded-lg p-6 max-w-sm w-full text-center">
            <h2 className="text-lg sm:text-xl font-bold text-primary-100 mb-4">
              Please Rotate Your Device
            </h2>
            <p className="text-sm sm:text-base text-primary-100">
              For best experience, use landscape mode or view on a larger
              screen.
            </p>
          </div>
        </div>
      )}
      {/* get ticket and buy Merch */}
      <div className="fixed z-50 bg-primary-100 rounded-xl flex items-center justify-between gap-6 px-4 py-2 
                      left-1/2 -translate-x-1/2 bottom-6
                      w-[90%] max-w-[26rem]
                      sm:bottom-8 sm:w-[26rem]
                      md:bottom-10 md:max-w-[28rem]
                      lg:bottom-12">
        <a href="https://formybrotherslive.hustlesasa.shop/" target="_blank" rel="noopener noreferrer" className="cursor-pointer flex-1">
          <button className="flex flex-row items-center gap-2 text-white underline">
            <img src={calendar} alt="Calendar icon" className="h-5 w-5 sm:h-6 sm:w-6" />
            <span className="text-sm sm:text-base">Get Tickets</span>
          </button>
        </a>
        <div className="mx-2 h-6 w-px bg-white/70 hidden sm:block" />
        <a href="https://ripeorganic.world/" target="_blank" rel="noopener noreferrer" className="cursor-pointer flex-1 text-right sm:text-left">
          <button className="flex flex-row items-center gap-2 text-white underline justify-end sm:justify-start">
            <img src={shopbag} alt="Shopping bag icon" className="h-5 w-5 sm:h-6 sm:w-6" />
            <span className="text-sm sm:text-base">Buy Merch</span>
          </button>
        </a>
      </div>
      {/* get ticket and buy Merch */}
      <div
        className={`relative w-full h-full ${
          hours > 5 && hours < 18
            ? "bg-[rgba(196,170,141,0.9)]"
            : "bg-[rgb(15,15,15)]"
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

        {/* Zoom buttons - only on non-mobile and landscape */}
        {!isMobile && isLandscape && (
          <div
            className="fixed right-4 flex flex-col gap-2 z-40"
            style={{
              bottom: "calc(env(safe-area-inset-bottom, 0px) + 2rem)",
              right: "calc(env(safe-area-inset-right, 0px) + 1rem)",
              pointerEvents: "auto",
            }}
          >
            <button onClick={handleZoomIn} className="w-12 h-12">
              <img src={ZoomIn} alt="" className="w-12 h-12" />
            </button>
            <button onClick={handleZoomOut}>
              <img src={ZoomOut} alt="" className="w-12 h-12 " />
            </button>
          </div>
        )}

        {/* Speaker toggle */}
        <button
          onClick={togglePlay}
          className="cursor-pointer fixed bottom-6 left-12 lg:bottom-10 z-50"
        >
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