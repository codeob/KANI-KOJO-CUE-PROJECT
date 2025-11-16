// import React, { useEffect, useState, useRef } from "react";
// import useLocationStore from "../store/useLocationStore";
// import grainBG from "../assets/backgrounds/grainBG.png";
// import mapDay from "../assets/mapDay.png";
// import mapNight from "../assets/mapNight.png";
// import locPin from "../assets/icons/locationPin.svg";
// import speaker from "../assets/icons/speaker.svg";
// import speakerMute from "../assets/icons/speakerMute.svg";
// import Slide from "./Slide";
// import locationPins from "../../locations";
// function Map() {
//   const { selectedLocation, setSelectedLocation, clearSelected } = useLocationStore();
//   const [isSlideVisible, setIsSlideVisible] = useState(false);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const [scale, setScale] = useState(1);
//   const [showLandscapePrompt, setShowLandscapePrompt] = useState(false);
//   const [imageInfo, setImageInfo] = useState({ offsetX: 0, offsetY: 0, scale: 1 });
//   const [playing, setPlaying] = useState(false);
//   const mapRef = useRef(null);
//   const audioRef = useRef(null); // ✅ Create a ref for audio
//   const now = new Date();
//   const hours = now.getHours();
//   const togglePlay = () => {
//     const audio = audioRef.current;
//     if (!audio) return;
//     if (playing) {
//       audio.pause();
//       setPlaying(false);
//     } else {
//       audio.play();
//       setPlaying(true);
//     }
//   };
//   useEffect(() => {
//     const audio = audioRef.current;
//     if (!audio) return;
//     const tryPlay = async () => {
//       try {
//         await audio.play();
//         setPlaying(true);
//       } catch (err) {
//         console.warn("Autoplay blocked — waiting for user interaction.");
//       }
//     };
//     tryPlay();
//     // Unmute when user clicks anywhere on the page
//     const handleUserInteraction = () => {
//       audio.muted = false;
//       document.removeEventListener("click", handleUserInteraction);
//     };
//     document.addEventListener("click", handleUserInteraction);
//     return () => {
//       audio.pause();
//       audio.currentTime = 0;
//       document.removeEventListener("click", handleUserInteraction);
//     };
//   }, []);
//   // ✅ Update scaling when screen resizes
//   const updateImageInfo = () => {
//     if (!mapRef.current || !mapRef.current.complete) return;
//     const img = mapRef.current;
//     const naturalWidth = img.naturalWidth;
//     const naturalHeight = img.naturalHeight;
//     const containerWidth = window.innerWidth;
//     const containerHeight = window.innerHeight;
//     const ratio = Math.min(containerWidth / naturalWidth, containerHeight / naturalHeight);
//     const displayedWidth = naturalWidth * ratio;
//     const displayedHeight = naturalHeight * ratio;
//     const offsetX = (containerWidth - displayedWidth) / 2;
//     const offsetY = (containerHeight - displayedHeight) / 2;
//     setImageInfo({ offsetX, offsetY, scale: ratio });
//     setScale(ratio);
//   };
//   const checkOrientation = () => {
//     const isSmallScreen = window.innerWidth < 640;
//     const isPortrait = window.innerWidth < window.innerHeight;
//     setShowLandscapePrompt(isSmallScreen && isPortrait);
//   };
//   useEffect(() => {
//     updateImageInfo();
//     checkOrientation();
//     window.addEventListener("resize", updateImageInfo);
//     window.addEventListener("resize", checkOrientation);
//     window.addEventListener("orientationchange", checkOrientation);
//     return () => {
//       window.removeEventListener("resize", updateImageInfo);
//       window.removeEventListener("resize", checkOrientation);
//       window.removeEventListener("orientationchange", checkOrientation);
//     };
//   }, []);
//   useEffect(() => {
//     if (selectedLocation) {
//       setIsSlideVisible(true);
//       setTimeout(() => setIsAnimating(true), 10);
//     }
//   }, [selectedLocation]);
//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (!selectedLocation) return;
//       if (e.key === "ArrowRight") handleNext(selectedLocation.id);
//       else if (e.key === "ArrowLeft") handlePrevious(selectedLocation.id);
//       else if (e.key === "Escape") handleClose();
//     };
//     window.addEventListener("keydown", handleKeyDown);
//     return () => window.removeEventListener("keydown", handleKeyDown);
//   }, [selectedLocation]);
//   const handleClose = () => {
//     setIsAnimating(false);
//     setTimeout(() => {
//       setIsSlideVisible(false);
//       clearSelected();
//     }, 300);
//   };
//   const handleNext = (currentId) => {
//     const currentIndex = locationPins.findIndex((loc) => loc.id === currentId);
//     if (currentIndex !== -1) {
//       const nextIndex = (currentIndex + 1) % locationPins.length;
//       setSelectedLocation(locationPins[nextIndex].id);
//     }
//   };
//   const handlePrevious = (currentId) => {
//     const currentIndex = locationPins.findIndex((loc) => loc.id === currentId);
//     if (currentIndex !== -1) {
//       const prevIndex = (currentIndex - 1 + locationPins.length) % locationPins.length;
//       setSelectedLocation(locationPins[prevIndex].id);
//     }
//   };
//   const pinBaseWidth = 220;
//   const pinBaseHeight = 270;
//   const getPinDimensions = () => {
//     if (window.innerWidth >= 1536) return { width: pinBaseWidth * 1.6, height: pinBaseHeight * 1.6 };
//     if (window.innerWidth >= 1280) return { width: pinBaseWidth * 1.4, height: pinBaseHeight * 1.4 };
//     if (window.innerWidth >= 1024) return { width: pinBaseWidth * 1.4, height: pinBaseHeight * 1.4 };
//     if (window.innerWidth >= 768) return { width: pinBaseWidth * 1.2, height: pinBaseHeight * 1.2 };
//     return { width: pinBaseWidth * 0.8, height: pinBaseHeight * 1.2 };
//   };
//   const pinDimensions = getPinDimensions();
//   const pinWidth = `${pinDimensions.width * scale}px`;
//   const pinHeight = `${pinDimensions.height * scale}px`;
//   const song1 = "https://firebasestorage.googleapis.com/v0/b/kanialbum.firebasestorage.app/o/Inst%20Clip%202.wav?alt=media&token=10316723-b997-4e1d-9a84-c90e8f077d72";
//   return (
//     <div className="h-screen w-full flex justify-center items-center overflow-hidden relative">
//       {/* ✅ Hidden audio element */}
//       <audio ref={audioRef} src={song1} loop preload="auto" />
//       {showLandscapePrompt && (
//         <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
//           <div className="bg-white/90 rounded-lg p-6 max-w-sm w-full text-center">
//             <h2 className="text-lg sm:text-xl font-bold text-primary-100 mb-4">
//               Please Rotate Your Device
//             </h2>
//             <p className="text-sm sm:text-base text-primary-100">
//               For the best experience with the interactive map, please use landscape mode on your mobile device or view on a larger screen.
//             </p>
//           </div>
//         </div>
//       )}
//       <div
//         className={`relative flex-shrink-0 max-w-full max-h-screen w-full h-full ${
//           hours > 5 && hours < 18
//             ? "bg-[rgba(196,170,141,0.9)]"
//             : "bg-[rgb(15,15,15)]"
//         }`}
//         style={{ backgroundImage: `url(${grainBG})` }}
//       >
//         <h2
//           className={`fixed left-5 top-5 lg:left-13 lg:top-13 text-center text-[1.2rem] sm:text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] rock mb-2 leading-tight ${
//             hours > 5 && hours < 18 ? "text-primary-100" : "text-textLight-100"
//           }`}
//         >
//           Explore the Kani
//           <br />
//           <span className="lowercase">journey</span>
//         </h2>
//         {/* Map images */}
//         <img
//           ref={mapRef}
//           src={hours > 5 && hours < 18 ? mapDay : mapNight}
//           alt="Map"
//           className="max-w-full max-h-screen object-contain w-full h-full"
//           onLoad={updateImageInfo}
//         />
//         {/* Pins */}
//         {locationPins.map((loc) => {
//           const topPercent = parseFloat(loc.coords.top.replace("%", ""));
//           const leftPercent = parseFloat(loc.coords.left.replace("%", ""));
//           const img = mapRef.current;
//           const naturalWidth = img?.naturalWidth || 0;
//           const naturalHeight = img?.naturalHeight || 0;
//           const topPx = imageInfo.offsetY + (topPercent / 100) * naturalHeight * imageInfo.scale;
//           const leftPx = imageInfo.offsetX + (leftPercent / 100) * naturalWidth * imageInfo.scale;
//           return (
//             <img
//               key={loc.id}
//               src={locPin}
//               alt={loc.locationName}
//               className="absolute cursor-pointer transition-all duration-200 hover:scale-120"
//               style={{
//                 top: `${topPx}px`,
//                 left: `${leftPx}px`,
//                 width: pinWidth,
//                 height: pinHeight,
//                 transform: "translate(-50%, -100%)",
//               }}
//               onClick={() => setSelectedLocation(loc.id)}
//             />
//           );
//         })}
//         {/* ✅ Speaker toggle button */}
//         <button onClick={togglePlay} className="cursor-pointer fixed bottom-6 left-12 lg:bottom-10">
//           <img
//             src={playing ? speakerMute : speaker}
//             alt={playing ? "Mute" : "Play"}
//             className="h-5 w-5 sm:h-6 sm:w-6 lg:h-12 lg:w-12"
//           />
//         </button>
//       </div>
//       {/* Slide overlay */}
//       {isSlideVisible && (
//         <div className="fixed inset-0 bg-black/55 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 lg:p-8 xl:p-10">
//           <Slide
//             location={selectedLocation}
//             close={handleClose}
//             isAnimating={isAnimating}
//             onNext={() => handleNext(selectedLocation?.id)}
//             onPrevious={() => handlePrevious(selectedLocation?.id)}
//           />
//         </div>
//       )}
//     </div>
//   );
// }
// export default Map;



// // new code for zooming into the map after clicking a particular location to display each related song
// import React, { useEffect, useState, useRef } from "react";
// import useLocationStore from "../store/useLocationStore";
// import grainBG from "../assets/backgrounds/grainBG.png";
// import mapDay from "../assets/mapDay.png";
// import mapNight from "../assets/mapNight.png";
// import locPin from "../assets/icons/locationPin.svg";
// import speaker from "../assets/icons/speaker.svg";
// import speakerMute from "../assets/icons/speakerMute.svg";
// import Slide from "./Slide";
// // import musical note placeholder - you'll replace with your own icon
// import musicalNote from "../assets/icons/interviewIcon.svg";

// function Map() {
//   const { groupedLocations, selectedLocation, setSelectedLocation, clearSelected } = useLocationStore();
//   const [isSlideVisible, setIsSlideVisible] = useState(false);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const [scale, setScale] = useState(1);
//   const [imageInfo, setImageInfo] = useState({ offsetX: 0, offsetY: 0, scale: 1, naturalWidth: 0, naturalHeight: 0 });
//   const [playing, setPlaying] = useState(false);
//   const [zoomedLocationId, setZoomedLocationId] = useState(null); // which location is zoomed (group id)
//   const [mapTransform, setMapTransform] = useState({ translateX: 0, translateY: 0, scale: 1 });
//   const mapRef = useRef(null);
//   const containerRef = useRef(null);
//   const audioRef = useRef(null);
//   const now = new Date();
//   const hours = now.getHours();

//   const pinBaseWidth = 220;
//   const pinBaseHeight = 270;

//   const getPinDimensions = () => {
//     if (window.innerWidth >= 1536) return { width: pinBaseWidth * 1.6, height: pinBaseHeight * 1.6 };
//     if (window.innerWidth >= 1280) return { width: pinBaseWidth * 1.4, height: pinBaseHeight * 1.4 };
//     if (window.innerWidth >= 1024) return { width: pinBaseWidth * 1.4, height: pinBaseHeight * 1.4 };
//     if (window.innerWidth >= 768) return { width: pinBaseWidth * 1.2, height: pinBaseHeight * 1.2 };
//     return { width: pinBaseWidth * 0.8, height: pinBaseHeight * 1.2 };
//   };
//   const pinDimensions = getPinDimensions();
//   const pinWidth = `${pinDimensions.width * scale}px`;
//   const pinHeight = `${pinDimensions.height * scale}px`;

//   // audio
//   const song1 = "https://firebasestorage.googleapis.com/v0/b/kanialbum.firebasestorage.app/o/Inst%20Clip%202.wav?alt=media&token=10316723-b997-4e1d-9a84-c90e8f077d72";

//   const togglePlay = () => {
//     const audio = audioRef.current;
//     if (!audio) return;
//     if (playing) {
//       audio.pause();
//       setPlaying(false);
//     } else {
//       audio.play();
//       setPlaying(true);
//     }
//   };

//   useEffect(() => {
//     const audio = audioRef.current;
//     if (!audio) return;
//     const tryPlay = async () => {
//       try {
//         await audio.play();
//         setPlaying(true);
//       } catch (err) {
//         console.warn("Autoplay blocked — waiting for user interaction.");
//       }
//     };
//     tryPlay();
//     const handleUserInteraction = () => {
//       audio.muted = false;
//       document.removeEventListener("click", handleUserInteraction);
//     };
//     document.addEventListener("click", handleUserInteraction);
//     return () => {
//       audio.pause();
//       audio.currentTime = 0;
//       document.removeEventListener("click", handleUserInteraction);
//     };
//   }, []);

//   // compute displayed image dimensions + offset & store natural sizes
//   const updateImageInfo = () => {
//     const img = mapRef.current;
//     if (!img || !img.complete) return;
//     const naturalWidth = img.naturalWidth;
//     const naturalHeight = img.naturalHeight;
//     const containerWidth = window.innerWidth;
//     const containerHeight = window.innerHeight;
//     const ratio = Math.min(containerWidth / naturalWidth, containerHeight / naturalHeight);
//     const displayedWidth = naturalWidth * ratio;
//     const displayedHeight = naturalHeight * ratio;
//     const offsetX = (containerWidth - displayedWidth) / 2;
//     const offsetY = (containerHeight - displayedHeight) / 2;
//     setImageInfo({ offsetX, offsetY, scale: ratio, naturalWidth, naturalHeight });
//     setScale(ratio);
//   };

//   useEffect(() => {
//     updateImageInfo();
//     window.addEventListener("resize", updateImageInfo);
//     return () => window.removeEventListener("resize", updateImageInfo);
//   }, []);

//   // When a grouped location is selected in the store (a song click from Slide), open slide
//   useEffect(() => {
//     if (selectedLocation) {
//       setIsSlideVisible(true);
//       setTimeout(() => setIsAnimating(true), 10);
//     }
//   }, [selectedLocation]);

//   const zoomToLocation = (locId) => {
//     // if already zoomed into same, do nothing or toggle out
//     if (zoomedLocationId === locId) return;
//     const loc = groupedLocations.find((g) => g.id === locId);
//     if (!loc) return;
//     // compute pixel coords for the anchor point (using the stored coords percent)
//     const topPercent = parseFloat(loc.coords.top.replace("%", ""));
//     const leftPercent = parseFloat(loc.coords.left.replace("%", ""));
//     const { offsetX, offsetY, scale: imgScale, naturalWidth, naturalHeight } = imageInfo;

//     // fallback if imageInfo not ready
//     const displayedWidth = naturalWidth * imgScale || window.innerWidth;
//     const displayedHeight = naturalHeight * imgScale || window.innerHeight;

//     const anchorX = offsetX + (leftPercent / 100) * displayedWidth;
//     const anchorY = offsetY + (topPercent / 100) * displayedHeight;

//     // zoom factor (tweakable)
//     const zoomScale = Math.min(2.2, window.innerWidth / 600);

//     // translate so anchor becomes centered (center of viewport)
//     const centerX = window.innerWidth / 2;
//     const centerY = window.innerHeight / 2;

//     const translateX = centerX - anchorX;
//     const translateY = centerY - anchorY;

//     // because we also scale, adjust translate to account for scale origin:
//     // apply translate then scale around center: use transform-origin center center
//     setMapTransform({ translateX, translateY, scale: zoomScale });
//     setZoomedLocationId(locId);

//     // small CSS transition via class or inline style
//     // we'll keep the musical note pins visible after short delay (simulate zoom animation)
//     setTimeout(() => {
//       // focus on showing musical notes - nothing to do here besides state
//     }, 300);
//   };

//   const zoomOut = () => {
//     setZoomedLocationId(null);
//     setMapTransform({ translateX: 0, translateY: 0, scale: 1 });
//   };

//   // Handle main grouped location pin click: zoom in (not open slide)
//   const handleMainPinClick = (locId) => {
//     zoomToLocation(locId);
//   };

//   // After clicking a musical note, setSelectedLocation with songId to open Slide
//   const handleSongPinClick = (locId, song) => {
//     // set selectedLocation in store with song
//     setSelectedLocation({ id: locId, songId: song.id });
//   };

//   // compute pixel position helper
//   const computePixelFromCoords = (coords) => {
//     const topPercent = parseFloat(coords.top.replace("%", ""));
//     const leftPercent = parseFloat(coords.left.replace("%", ""));
//     const { offsetX, scale: imgScale, naturalWidth, naturalHeight } = imageInfo;
//     const displayedWidth = naturalWidth * imgScale;
//     const displayedHeight = naturalHeight * imgScale;
//     const x = offsetX + (leftPercent / 100) * displayedWidth;
//     const y = (window.innerHeight - displayedHeight) / 2 + (topPercent / 100) * displayedHeight;
//     return { x, y };
//   };

//   // distribute note icons around anchor (basic radial layout)
//   const getSongPinPositions = (loc) => {
//     const { x: anchorX, y: anchorY } = computePixelFromCoords(loc.coords);
//     const songs = loc.songs || [];
//     const radius = Math.min(90, 30 + songs.length * 12); // adjust radius by number of songs
//     const positions = songs.map((s, i) => {
//       const angle = (i / songs.length) * Math.PI * 2;
//       const px = anchorX + Math.cos(angle) * radius;
//       const py = anchorY + Math.sin(angle) * radius;
//       return { song: s, left: px, top: py };
//     });
//     return positions;
//   };

//   return (
//     <div className="h-screen w-full flex justify-center items-center overflow-hidden relative" ref={containerRef}>
//       <audio ref={audioRef} src={song1} loop preload="auto" />
//       <div
//         className={`relative flex-shrink-0 max-w-full max-h-screen w-full h-full ${
//           hours > 5 && hours < 18 ? "bg-[rgba(196,170,141,0.9)]" : "bg-[rgb(15,15,15)]"
//         }`}
//         style={{ backgroundImage: `url(${grainBG})` }}
//       >
//         <h2
//           className={`fixed left-5 top-5 lg:left-13 lg:top-13 text-center text-[1.2rem] sm:text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] rock mb-2 leading-tight ${
//             hours > 5 && hours < 18 ? "text-primary-100" : "text-textLight-100"
//           }`}
//         >
//           Explore the Kani
//           <br />
//           <span className="lowercase">journey</span>
//         </h2>

//         {/* Map wrapper for transform (scale + translate) */}
//         <div
//           className="map-transform-wrapper w-full h-full transition-transform duration-500 ease-in-out"
//           style={{
//             transformOrigin: "center center",
//             transform: `translate(${mapTransform.translateX}px, ${mapTransform.translateY}px) scale(${mapTransform.scale})`,
//           }}
//         >
//           <img
//             ref={mapRef}
//             src={hours > 5 && hours < 18 ? mapDay : mapNight}
//             alt="Map"
//             className="max-w-full max-h-screen object-contain w-full h-full"
//             onLoad={updateImageInfo}
//           />

//           {/* Only render the 7 main location pins (groupedLocations) */}
//           {groupedLocations.map((loc) => {
//             const topPercent = parseFloat(loc.coords.top.replace("%", ""));
//             const leftPercent = parseFloat(loc.coords.left.replace("%", ""));
//             const { offsetX, scale: imgScale, naturalWidth, naturalHeight } = imageInfo;
//             const displayedWidth = naturalWidth * (imgScale || 1) || window.innerWidth;
//             const displayedHeight = naturalHeight * (imgScale || 1) || window.innerHeight;
//             const topPx = (window.innerHeight - displayedHeight) / 2 + (topPercent / 100) * displayedHeight;
//             const leftPx = offsetX + (leftPercent / 100) * displayedWidth;

//             return (
//               <img
//                 key={loc.id}
//                 src={locPin}
//                 alt={loc.locationName}
//                 className="absolute cursor-pointer transition-all duration-200 hover:scale-110 z-20"
//                 style={{
//                   top: `${topPx}px`,
//                   left: `${leftPx}px`,
//                   width: pinWidth,
//                   height: pinHeight,
//                   transform: "translate(-50%, -100%)",
//                 }}
//                 onClick={() => handleMainPinClick(loc.id)}
//               />
//             );
//           })}

//           {/* When zoomed to a specific location, render song pins (musical notes) around it */}
//           {zoomedLocationId &&
//             (() => {
//               const loc = groupedLocations.find((g) => g.id === zoomedLocationId);
//               if (!loc) return null;
//               const positions = getSongPinPositions(loc);
//               return positions.map((pObj, i) => (
//                 <img
//                   key={pObj.song.id}
//                   src={musicalNote} // replace with your musical note icon later
//                   alt={pObj.song.songTitle}
//                   className="absolute cursor-pointer z-30 transition-transform duration-200 hover:scale-125"
//                   style={{
//                     top: `${pObj.top}px`,
//                     left: `${pObj.left}px`,
//                     width: 44,
//                     height: 44,
//                     transform: "translate(-50%, -50%)",
//                   }}
//                   onClick={() => handleSongPinClick(loc.id, pObj.song)}
//                 />
//               ));
//             })()}
//         </div>

//         {/* speaker */}
//         <button onClick={togglePlay} className="cursor-pointer fixed bottom-6 left-12 lg:bottom-10 z-40">
//           <img src={playing ? speakerMute : speaker} alt={playing ? "Mute" : "Play"} className="h-5 w-5 sm:h-6 sm:w-6 lg:h-12 lg:w-12" />
//         </button>

//         {/* Zoom-out button appears when zoomed */}
//         {zoomedLocationId && (
//           <button
//             onClick={zoomOut}
//             className="fixed top-5 right-5 z-50 bg-white/90 rounded-full p-2 shadow-md"
//             aria-label="Zoom out"
//           >
//             {/* replace with your close/zoom-out icon if you want */}
//             ✕
//           </button>
//         )}
//       </div>

//       {/* Slide overlay (unchanged usage) */}
//       {isSlideVisible && (
//         <div className="fixed inset-0 bg-black/55 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 lg:p-8 xl:p-10">
//           <Slide
//             location={selectedLocation}
//             close={() => {
//               // keep behaviour: close slide but if you were zoomed, keep zoomed visible
//               setIsAnimating(false);
//               setTimeout(() => {
//                 setIsSlideVisible(false);
//                 setIsAnimating(false);
//                 // store clearSelected will also clear location.selectedSong
//                 clearSelected();
//               }, 300);
//             }}
//             isAnimating={isAnimating}
//             onNext={() => {
//               // move to next song in same location if present
//               if (!selectedLocation) return;
//               const songs = selectedLocation.songs || [];
//               if (!selectedLocation.selectedSong || songs.length === 0) return;
//               const currentIndex = songs.findIndex((s) => s.id === selectedLocation.selectedSong.id);
//               const nextIndex = (currentIndex + 1) % songs.length;
//               setSelectedLocation({ id: selectedLocation.id, songId: songs[nextIndex].id });
//             }}
//             onPrevious={() => {
//               if (!selectedLocation) return;
//               const songs = selectedLocation.songs || [];
//               if (!selectedLocation.selectedSong || songs.length === 0) return;
//               const currentIndex = songs.findIndex((s) => s.id === selectedLocation.selectedSong.id);
//               const prevIndex = (currentIndex - 1 + songs.length) % songs.length;
//               setSelectedLocation({ id: selectedLocation.id, songId: songs[prevIndex].id });
//             }}
//           />
//         </div>
//       )}
//     </div>
//   );
// }

// export default Map;





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

  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);

  // panning state
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const isDraggingRef = useRef(false);
  const dragOffset = useRef({ x: 0, y: 0 });

  const mapRef = useRef(null);
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
    const scale = baseRatio * ZOOM_FACTOR;

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

    // Reset pan so initial position is centered
    setPan({ x: 0, y: 0 });
  }, [naturalSize]);

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

  // pointer handlers - attach move/up to window for robust dragging
  const handlePointerDown = (e) => {
    // ignore clicks on pins
    if (e.target.closest && e.target.closest(".location-pin")) return;
    if (e.pointerType === "mouse" && e.button !== 0) return;
    e.preventDefault();
    isDraggingRef.current = true;
    dragOffset.current = { x: e.clientX - pan.x, y: e.clientY - pan.y };

    // ensure we capture pointer move/up outside the container too
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
  };

  const handlePointerMove = (e) => {
    if (!isDraggingRef.current) return;
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
          className={`absolute inset-0 overflow-hidden select-none ${
            isDraggingRef.current ? "cursor-grabbing" : "cursor-grab"
          }`}
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
              touchAction: "none", // prevent default touch gestures that conflict
            }}
          >
            <img
              ref={mapRef}
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
