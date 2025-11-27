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
  const controlsTimeout = useRef(null);

  const [isFullscreen, setIsFullscreen] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [showControls, setShowControls] = useState(true);

  // Show controls for 3 seconds on interaction
  const triggerControls = () => {
    setShowControls(true);
    if (controlsTimeout.current) clearTimeout(controlsTimeout.current);
    controlsTimeout.current = setTimeout(() => {
      if (playing) setShowControls(false);
    }, 3000);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateTime = () => setCurrentTime(video.currentTime);
    video.addEventListener("timeupdate", updateTime);
    return () => video.removeEventListener("timeupdate", updateTime);
  }, []);

  useEffect(() => {
    const handler = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", handler);
    return () => document.removeEventListener("fullscreenchange", handler);
  }, []);

  // Auto-hide controls when playing + show on move/tap
  useEffect(() => {
    const player = playerRef.current;
    if (!player) return;

    const showOnActivity = () => {
      triggerControls();
    };

    player.addEventListener("mousemove", showOnActivity);
    player.addEventListener("touchstart", showOnActivity);
    player.addEventListener("click", showOnActivity);

    // Initial show
    triggerControls();

    return () => {
      player.removeEventListener("mousemove", showOnActivity);
      player.removeEventListener("touchstart", showOnActivity);
      player.removeEventListener("click", showOnActivity);
      if (controlsTimeout.current) clearTimeout(controlsTimeout.current);
    };
  }, [playing]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    playing ? videoRef.current.pause() : videoRef.current.play();
    setPlaying(!playing);
    triggerControls();
  };

  const handleSeek = (e) => {
    if (!videoRef.current || !duration) return;
    const percent = e.target.value;
    const time = (percent / 100) * duration;
    videoRef.current.currentTime = time;
    setCurrentTime(time);
  };

  const changeVolume = (delta) => {
    const newVol = Math.max(0, Math.min(1, volume + delta));
    setVolume(newVol);
    if (videoRef.current) videoRef.current.volume = newVol;
    triggerControls();
  };

  const goFullscreen = () => {
    if (!playerRef.current) return;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      playerRef.current.requestFullscreen?.() || playerRef.current.webkitRequestFullscreen?.();
    }
    triggerControls();
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

      {/* Video Player */}
      <main className="flex-1 flex items-center justify-center px-4 pb-4">
        <div
          ref={playerRef}
          className="relative w-full h-full max-w-5xl cursor-pointer"
          style={{ maxHeight: "calc(100vh - 170px)" }}
          onMouseMove={triggerControls}
          onTouchStart={triggerControls}
        >
          <div className="relative w-full h-full bg-black rounded-2xl overflow-hidden shadow-2xl border-4 border-amber-900/40">
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

            {/* Loading Spinner */}
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/90 z-50">
                <div className="w-16 h-16 border-4 border-t-transparent border-amber-500 rounded-full animate-spin" />
              </div>
            )}

            {/* Big Play Button (Only when paused) */}
            {!playing && !isLoading && (
              <button
                onClick={togglePlay}
                className="absolute inset-0 flex items-center justify-center bg-black/70 hover:bg-black/80 z-40 transition"
              >
                <img src={playBtnOverlay} alt="Play" className="w-24 h-24 md:w-32 md:h-32 drop-shadow-2xl" />
              </button>
            )}

            {/* Custom Controls - Fade In/Out */}
            <div
              className="absolute inset-0 pointer-events-none z-40 transition-opacity duration-500"
              style={{ opacity: showControls ? 1 : 0 }}
            >
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent p-5 pointer-events-auto">
                <div className="flex flex-col sm:flex-row items-center gap-4 max-w-4xl mx-auto">
                  {/* Left Controls */}
                  <div className="flex items-center gap-4 bg-surface-100 backdrop-blur-md rounded-full px-6 py-3">
                    <button onClick={togglePlay} className="hover:scale-110 transition">
                      <img src={playing ? pauseIcon : playIcon} alt="Play/Pause" className="w-9 h-9" />
                    </button>
                    <button onClick={() => changeVolume(-0.1)} className="hover:scale-110 transition">
                      <img src={volumeDown} alt="Volume Down" className="w-8 h-8" />
                    </button>
                    <button onClick={() => changeVolume(0.1)} className="hover:scale-110 transition">
                      <img src={volumeUp} alt="Volume Up" className="w-8 h-8" />
                    </button>
                  </div>

                  {/* Progress Bar */}
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={duration ? (currentTime / duration) * 100 : 0}
                    onChange={handleSeek}
                    className="flex-1 h-3 rounded-full accent-amber-500 bg-surface-100 cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #D4AF37 0%, #D4AF37 ${
                        duration ? (currentTime / duration) * 100 : 0
                      }%, #522a00 ${duration ? (currentTime / duration) * 100 : 0}%, #522a00 100%)`,
                    }}
                  />

                  {/* Right Controls */}
                  <div className="flex items-center gap-5 bg-surface-100 backdrop-blur-md rounded-full px-6 py-3">
                    <span className="text-amber-100 font-medium text-sm tracking-wider">
                      {formatTime(currentTime)} / {formatTime(duration)}
                    </span>
                    <button onClick={goFullscreen} className="hover:scale-110 transition">
                      <img
                        src={isFullscreen ? exitFullscreen : fullscreen}
                        alt="Fullscreen"
                        className="w-9 h-9"
                      />
                    </button>
                  </div>
                </div>
              </div>
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