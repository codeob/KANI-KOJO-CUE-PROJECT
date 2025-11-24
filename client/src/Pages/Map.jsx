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
import shopbag from "../assets/icons/shoppingbag.svg";

function Map() {
  const { selectedLocation, setSelectedLocation, clearSelected } = useLocationStore();
  const [isSlideVisible, setIsSlideVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showLandscapePrompt, setShowLandscapePrompt] = useState(false);
  const [showToast, setShowToast] = useState(false);

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
  const [pan, setPan] = useState({ x: 0, y: 0 });

  // Detect mobile (touch + small screen)
  const getIsMobile = () =>
    (typeof window !== "undefined" &&
      window.matchMedia("(pointer: coarse)").matches) ||
    Math.max(window.innerWidth, window.innerHeight) <= 1024;

  const [isMobile, setIsMobile] = useState(getIsMobile());
  const [isLandscape, setIsLandscape] = useState(window.innerWidth > window.innerHeight);

  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);
  const mapContainerRef = useRef(null);

  // Gesture refs
  const isDraggingRef = useRef(false);
  const dragStartRef = useRef({ x: 0, y: 0 });
  const panStartRef = useRef({ x: 0, y: 0 });
  const userScaleRef = useRef(1.0);
  const panRef = useRef({ x: 0, y: 0 });
  const imageInfoRef = useRef(imageInfo);
  const naturalSizeRef = useRef(naturalSize);

  const now = new Date();
  const hours = now.getHours();

  // Sync refs
  useEffect(() => { userScaleRef.current = userScale; }, [userScale]);
  useEffect(() => { panRef.current = pan; }, [pan]);
  useEffect(() => { imageInfoRef.current = imageInfo; }, [imageInfo]);
  useEffect(() => { naturalSizeRef.current = naturalSize; }, [naturalSize]);

  // Toast
  useEffect(() => {
    setShowToast(true);
    const t = setTimeout(() => setShowToast(false), 4000);
    return () => clearTimeout(t);
  }, []);

  // Audio
  const togglePlay = () => {
    if (!audioRef.current) return;
    playing ? audioRef.current.pause() : audioRef.current.play();
    setPlaying(!playing);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.play().catch(() => {});
  }, []);

  // Load natural size
  const onImageLoad = (e) => {
    const { naturalWidth: w, naturalHeight: h } = e.target;
    setNaturalSize({ w, h });
  };

  // Always fit map fully on mobile, zoomable on desktop
  const getZoomFactor = useCallback((w) => {
    if (isMobile) return 1.2; // Slightly increased for mobile
    if (w >= 1536) return 3.0;
    if (w >= 1280) return 2.7;
    if (w >= 1024) return 2.4;
    return 2.1;
  }, [isMobile]);

  // Compute layout
  const computeImageInfo = useCallback(() => {
    const containerW = window.innerWidth;
    const containerH = window.innerHeight;
    const { w: nw, h: nh } = naturalSize;

    if (!nw || !nh) {
      setImageInfo(prev => ({ ...prev, containerW, containerH }));
      return;
    }

    const fitRatio = Math.min(containerW / nw, containerH / nh);
    const zoomFactor = getZoomFactor(containerW);
    const baseScale = isMobile ? fitRatio * zoomFactor : fitRatio * zoomFactor;
    const scale = baseScale * userScale;

    const displayedW = nw * scale;
    const displayedH = nh * scale;
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

    // Reset pan on resize if on mobile (keep map centered)
    if (isMobile) {
      setPan({ x: 0, y: 0 });
    }
  }, [naturalSize, userScale, isMobile, getZoomFactor]);

  // Resize handler
  useEffect(() => {
    const handler = () => {
      setIsMobile(getIsMobile());
      setIsLandscape(window.innerWidth > window.innerHeight);
      computeImageInfo();
    };
    handler();
    window.addEventListener("resize", handler);
    window.addEventListener("orientationchange", handler);
    return () => {
      window.removeEventListener("resize", handler);
      window.removeEventListener("orientationchange", handler);
    };
  }, [computeImageInfo]);

  // Recompute when image loads
  useEffect(() => {
    if (naturalSize.w > 0) computeImageInfo();
  }, [naturalSize, computeImageInfo]);

  // === DRAG HANDLING (Works on mobile & desktop) ===
  const startDrag = (clientX, clientY) => {
    isDraggingRef.current = true;
    dragStartRef.current = { x: clientX, y: clientY };
    panStartRef.current = { ...panRef.current };
  };

  const onDragMove = (clientX, clientY) => {
    if (!isDraggingRef.current) return;
    const dx = clientX - dragStartRef.current.x;
    const dy = clientY - dragStartRef.current.y;
    setPan({
      x: panStartRef.current.x + dx,
      y: panStartRef.current.y + dy,
    });
  };

  const endDrag = () => {
    isDraggingRef.current = false;
  };

  // Mouse
  const handleMouseDown = (e) => {
    if (e.target.closest(".location-pin")) return;
    startDrag(e.clientX, e.clientY);
  };

  // Touch
  const handleTouchStart = (e) => {
    if (e.touches.length !== 1) return;
    if (e.target.closest(".location-pin")) return;
    const t = e.touches[0];
    startDrag(t.clientX, t.clientY);
  };

  const handleTouchMove = (e) => {
    if (e.touches.length !== 1) return;
    const t = e.touches[0];
    onDragMove(t.clientX, t.clientY);
  };

  // Global move/end listeners
  useEffect(() => {
    const move = (e) => onDragMove(e.clientX, e.clientY);
    const up = () => endDrag();

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", up);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", up);
    };
  }, []);

  // Zoom only on desktop
  const doZoom = (factor, pointX, pointY) => {
    if (isMobile) return;
    // ... (your existing doZoom logic if you want to keep desktop zoom)
    const ii = imageInfoRef.current;
    const ns = naturalSizeRef.current;
    if (!ns.w || !ns.h || !mapContainerRef.current) return;

    const rect = mapContainerRef.current.getBoundingClientRect();
    const px = pointX ?? ii.containerW / 2;
    const py = pointY ?? ii.containerH / 2;
    const currentScale = ii.scale;
    const currentOffsetX = ii.offsetX + panRef.current.x;
    const currentOffsetY = ii.offsetY + panRef.current.y;
    const worldX = (px - currentOffsetX) / currentScale;
    const worldY = (py - currentOffsetY) / currentScale;

    let newUserScale = userScaleRef.current * factor;
    newUserScale = Math.max(0.5, Math.min(5, newUserScale));

    const baseRatio = Math.min(ii.containerW / ns.w, ii.containerH / ns.h);
    const ZOOM_FACTOR = getZoomFactor(ii.containerW);
    const newScale = baseRatio * ZOOM_FACTOR * newUserScale;
    const newDisplayedW = ns.w * newScale;
    const newDisplayedH = ns.h * newScale;
    const newOffsetX = (ii.containerW - newDisplayedW) / 2;
    const newOffsetY = (ii.containerH - newDisplayedH) / 2;
    const newPanX = px - worldX * newScale - newOffsetX;
    const newPanY = py - worldY * newScale - newOffsetY;

    setUserScale(newUserScale);
    setPan({ x: newPanX, y: newPanY });
  };

  // Pin sizing - increased base sizes
  const getPinSize = () => {
    const scale = imageInfo.baseScale || 1;
    const baseWidth = 250; // Increased from 220
    const baseHeight = 300; // Increased from 270
    return {
      width: `${baseWidth * scale}px`,
      height: `${baseHeight * scale}px`,
    };
  };
  const { width: pinWidth, height: pinHeight } = getPinSize();

  // Landscape prompt
  useEffect(() => {
    const check = () => {
      const smallPortrait = window.innerWidth < 640 && window.innerHeight > window.innerWidth;
      setShowLandscapePrompt(smallPortrait);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Slide handlers (simplified)
  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsSlideVisible(false);
      clearSelected();
    }, 300);
  };

  const handleNext = (currentId) => {
    const idx = locationPins.findIndex((loc) => loc.id === currentId);
    if (idx !== -1) setSelectedLocation(locationPins[(idx + 1) % locationPins.length].id);
  };

  const handlePrevious = (currentId) => {
    const idx = locationPins.findIndex((loc) => loc.id === currentId);
    if (idx !== -1) setSelectedLocation(locationPins[(idx - 1 + locationPins.length) % locationPins.length].id);
  };

  useEffect(() => {
    if (selectedLocation) {
      setUserScale(1.0);
      setPan({ x: 0, y: 0 });
      setIsSlideVisible(true);
      setTimeout(() => setIsAnimating(true), 10);
    }
  }, [selectedLocation]);

  return (
    <div className="h-screen w-full overflow-hidden relative">
      <audio ref={audioRef} src="https://firebasestorage.googleapis.com/v0/b/kanialbum.firebasestorage.app/o/Inst%20Clip%202.wav?alt=media&token=10316723-b997-4e1d-9a84-c90e8f077d72" loop />

      {/* Toast */}
      {showToast && (
        <div className="fixed left-4 top-8 z-50">
          <img src={isMobile ? mobiletoast : webtoast} alt="Welcome" className="max-w-xs" />
        </div>
      )}

      {/* Rotate Prompt */}
      {showLandscapePrompt && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-8 text-white text-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Rotate Your Device</h2>
            <p>For the best experience, please use landscape mode</p>
          </div>
        </div>
      )}

      {/* Tickets & Merch */}
      <div className="fixed z-50 bg-primary-100 rounded-xl flex items-center justify-center gap-6 px-6 py-3 bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-md">
        <a href="https://formybrotherslive.hustlesasa.shop/" target="_blank" rel="noopener" className="flex items-center gap-2 text-white">
          <img src={calendar} className="w-6 h-6" /> <span>Get Tickets</span>
        </a>
        <span className="hidden sm:block w-px h-8 bg-white/50" />
        <a href="https://ripeorganic.world/" target="_blank" rel="noopener" className="flex items-center gap-2 text-white">
          <img src={shopbag} className="w-6 h-6" /> <span>Merch</span>
        </a>
      </div>

      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${grainBG})`,
          backgroundColor: hours >= 6 && hours < 18 ? "rgba(196,170,141,0.9)" : "#0f0f0f",
        }}
      />

      {/* Map Container */}
      <div
        ref={mapContainerRef}
        className="absolute inset-0 select-none"
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        style={{ touchAction: "none", cursor: isDraggingRef.current ? "grabbing" : "grab" }}
      >
        <div
          className="absolute"
          style={{
            left: `${imageInfo.offsetX + pan.x}px`,
            top: `${imageInfo.offsetY + pan.y}px`,
            width: `${imageInfo.displayedW}px`,
            height: `${imageInfo.displayedH}px`,
            transition: isDraggingRef.current ? "none" : "transform 0.3s ease-out",
          }}
        >
          <img
            src={hours >= 6 && hours < 18 ? mapDay : mapNight}
            alt="Map"
            onLoad={onImageLoad}
            className="w-full h-full object-contain select-none pointer-events-none"
          />

          {/* Pins */}
          {locationPins.map((loc) => {
            const left = (parseFloat(loc.coords.left) / 100) * imageInfo.displayedW;
            const top = (parseFloat(loc.coords.top) / 100) * imageInfo.displayedH;

            return (
              <img
                key={loc.id}
                src={locPin}
                alt={loc.locationName}
                className="absolute location-pin cursor-pointer hover:scale-110 transition-transform"
                style={{
                  left,
                  top,
                  width: pinWidth,
                  height: pinHeight,
                  transform: "translate(-50%, -100%)",
                  pointerEvents: "auto",
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedLocation(loc.id);
                  setUserScale(1);
                  setPan({ x: 0, y: 0 });
                  setIsSlideVisible(true);
                  setTimeout(() => setIsAnimating(true), 50);
                }}
              />
            );
          })}
        </div>
      </div>

      {/* Desktop Zoom Buttons */}
      {!isMobile && (
        <div className="fixed right-6 bottom-24 flex flex-col gap-3 z-40">
          <button onClick={() => doZoom(1.2)} className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
            <img src={ZoomIn} alt="+" />
          </button>
          <button onClick={() => doZoom(0.83)} className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
            <img src={ZoomOut} alt="-" />
          </button>
        </div>
      )}

      {/* Speaker */}
      <button onClick={togglePlay} className="fixed left-6 bottom-6 z-50">
        <img src={playing ? speakerMute : speaker} className="w-10 h-10" />
      </button>

      {/* Slide */}
      {isSlideVisible && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
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