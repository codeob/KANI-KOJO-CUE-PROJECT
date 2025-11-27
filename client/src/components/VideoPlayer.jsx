import { useEffect, useRef, useState } from "react";
import BTMapAndAudioLink from "./BTMapAndAudioLink";
import mapBG from "../assets/backgrounds/Map1_Bkg.png";
import KExpWithCloseBtnHeadingBrown from "./KExpWithCloseBtnHeadingBrown";
import playIcon from "../assets/icons/play.svg";
import pauseIcon from "../assets/icons/pause.svg";
import volumeDown from "../assets/icons/Group(1).svg";
import volumeUp from "../assets/icons/Group.svg";
import fullscreen from "../assets/icons/fullscreen.svg";
import exitFullscreen from "../assets/icons/exitFullscreen.svg";
import playBtnOverlay from "../assets/icons/playBtnWBg.svg";

export default function VideoPlayer({ src }) {
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [showOverlayControls, setShowOverlayControls] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const update = () => setCurrentTime(video.currentTime);
    video.addEventListener("timeupdate", update);
    return () => video.removeEventListener("timeupdate", update);
  }, []);

  useEffect(() => {
    const handler = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", handler);
    return () => document.removeEventListener("fullscreenchange", handler);
  }, []);

  // Auto-hide overlay controls in fullscreen only
  useEffect(() => {
    if (!isFullscreen || !playing) {
      setShowOverlayControls(true);
      return;
    }
    const timer = setTimeout(() => setShowOverlayControls(false), 3000);
    return () => clearTimeout(timer);
  }, [isFullscreen, playing, currentTime]);

  const handleActivity = () => {
    setShowOverlayControls(true);
    if (isFullscreen && playing) {
      const timer = setTimeout(() => setShowOverlayControls(false), 3000);
      return () => clearTimeout(timer);
    }
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    playing ? videoRef.current.pause() : videoRef.current.play();
    setPlaying(!playing);
  };

  const handleSeek = (e) => {
    if (!videoRef.current || !duration) return;
    const percent = e.target.value;
    videoRef.current.currentTime = (percent / 100) * duration;
    setCurrentTime((percent / 100) * duration);
  };

  const changeVolume = (delta) => {
    const newVol = Math.max(0, Math.min(1, volume + delta));
    setVolume(newVol);
    if (videoRef.current) videoRef.current.volume = newVol;
  };

  const goFullscreen = () => {
    if (!playerRef.current) return;
    document.fullscreenElement
      ? document.exitFullscreen()
      : playerRef.current.requestFullscreen?.() || playerRef.current.webkitRequestFullscreen?.();
  };

  const formatTime = (sec) => {
    if (!sec) return "0:00";
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <div
      className="fixed inset-0 flex flex-col bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${mapBG})` }}
    >
      {/* Header */}
      <header className="z-50 px-4 pt-safe-offset-top pb-2 flex-shrink-0">
        <KExpWithCloseBtnHeadingBrown />
      </header>

      {/* Main Video Area */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 gap-4">
        {/* Video Container */}
        <div
          ref={playerRef}
          className="relative w-full max-w-5xl bg-black rounded-2xl overflow-hidden shadow-2xl border-4 border-amber-900/40"
          style={{ maxHeight: "calc(100vh - 220px)" }}
          onMouseMove={handleActivity}
          onTouchStart={handleActivity}
        >
          <video
            src={src}
            ref={videoRef}
            className="w-full h-full object-contain"
            playsInline
            preload="metadata"
            onClick={togglePlay}
            onLoadedMetadata={(e) => setDuration(e.target.duration)}
            onLoadStart={() => setIsLoading(true)}
            onCanPlay={() => setIsLoading(false)}
            onWaiting={() => setIsLoading(true)}
          />

          {/* Loading */}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/90 z-50">
              <div className="w-16 h-16 border-4 border-t-transparent border-amber-500 rounded-full animate-spin" />
            </div>
          )}

          {/* Big Play Button */}
          {!playing && !isLoading && (
            <button
              onClick={togglePlay}
              className="absolute inset-0 flex items-center justify-center bg-black/70 z-40"
            >
              <img src={playBtnOverlay} alt="Play" className="w-24 h-24 md:w-32 md:h-32 drop-shadow-2xl" />
            </button>
          )}

          {/* Overlay Controls - Only on Large Screens */}
          <div
            className="hidden md:block absolute inset-0 pointer-events-none z-40 transition-opacity duration-300"
            style={{ opacity: showOverlayControls ? 1 : 0 }}
          >
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-auto" />
            <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-3 pointer-events-auto">
              <input
                type="range"
                min="0"
                max="100"
                value={duration ? (currentTime / duration) * 100 : 0}
                onChange={handleSeek}
                className="w-full h-3 rounded-full accent-amber-500 bg-gray-700/80 cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #D4AF37 0%, #D4AF37 ${duration ? (currentTime / duration) * 100 : 0}%, #522a00 ${duration ? (currentTime / duration) * 100 : 0}%, #522a00 100%)`,
                }}
              />
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4 bg-black/70 backdrop-blur-md rounded-full px-5 py-3">
                  <button onClick={togglePlay}>
                    <img src={playing ? pauseIcon : playIcon} alt="Play" className="w-8 h-8" />
                  </button>
                  <button onClick={() => changeVolume(-0.1)}>
                    <img src={volumeDown} alt="Vol-" className="w-7 h-7" />
                  </button>
                  <button onClick={() => changeVolume(0.1)}>
                    <img src={volumeUp} alt="Vol+" className="w-7 h-7" />
                  </button>
                </div>
                <div className="flex items-center gap-4 bg-black/70 backdrop-blur-md rounded-full px-5 py-3">
                  <span className="text-amber-100 font-medium text-sm">
                    {formatTime(currentTime)} / {formatTime(duration)}
                  </span>
                  <button onClick={goFullscreen}>
                    <img src={isFullscreen ? exitFullscreen : fullscreen} alt="FS" className="w-8 h-8" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Controls BELOW Video - Only on Small Screens (phones) */}
        <div className="md:hidden w-full max-w-5xl flex flex-col gap-3 px-2">
          {/* Progress Bar */}
          <input
            type="range"
            min="0"
            max="100"
            value={duration ? (currentTime / duration) * 100 : 0}
            onChange={handleSeek}
            className="w-full h-3 rounded-full accent-amber-500 bg-gray-700"
            style={{
              background: `linear-gradient(to right, #D4AF37 0%, #D4AF37 ${duration ? (currentTime / duration) * 100 : 0}%, #522a00 ${duration ? (currentTime / duration) * 100 : 0}%, #522a00 100%)`,
            }}
          />

          {/* Bottom Controls Row */}
          <div className="flex justify-between items-center gap-4">
            <div className="flex items-center gap-4 bg-black/80 backdrop-blur-md rounded-full px-5 py-3">
              <button onClick={togglePlay}>
                <img src={playing ? pauseIcon : playIcon} alt="Play" className="w-8 h-8" />
              </button>
              <button onClick={() => changeVolume(-0.1)}>
                <img src={volumeDown} alt="Vol-" className="w-7 h-7" />
              </button>
              <button onClick={() => changeVolume(0.1)}>
                <img src={volumeUp} alt="Vol+" className="w-7 h-7" />
              </button>
            </div>

            <div className="flex items-center gap-4 bg-black/80 backdrop-blur-md rounded-full px-5 py-3">
              <span className="text-amber-100 font-medium text-sm">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
              <button onClick={goFullscreen}>
                <img src={isFullscreen ? exitFullscreen : fullscreen} alt="Fullscreen" className="w-8 h-8" />
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="z-50 px-4 pb-safe-offset-bottom pt-2 flex-shrink-0">
        <BTMapAndAudioLink />
      </footer>
    </div>
  );
}