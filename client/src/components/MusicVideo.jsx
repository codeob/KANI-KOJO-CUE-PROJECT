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

export default function MusicVideo({ src }) {
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const getEmbedUrl = (url) => {
    if (!url) return "";
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/watch\?v=)([a-zA-Z0-9_-]+)/);
    return match ? `https://www.youtube.com/embed/${match[1]}` : url;
  };
  const embedUrl = getEmbedUrl(src);

  // —————— All your useEffects (unchanged, just cleaned) ——————
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

  useEffect(() => {
    let timeout;
    const controls = playerRef.current?.querySelector(".custom-controls");
    if (!controls) return;

    const show = () => {
      controls.style.opacity = "1";
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        if (isFullscreen && playing) controls.style.opacity = "0";
      }, 3000);
    };
    const activity = () => isFullscreen && show();

    playerRef.current?.addEventListener("mousemove", activity);
    playerRef.current?.addEventListener("touchstart", activity);
    show();

    return () => {
      playerRef.current?.removeEventListener("mousemove", activity);
      playerRef.current?.removeEventListener("touchstart", activity);
      clearTimeout(timeout);
    };
  }, [isFullscreen, playing]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    playing ? videoRef.current.pause() : videoRef.current.play();
    setPlaying(!playing);
  };

  const handleSeek = (e) => {
    if (!videoRef.current || !duration) return;
    const percent = e.target.value / 100;
    videoRef.current.currentTime = percent * duration;
    setCurrentTime(percent * duration);
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
    /* Full screen fixed container – no scroll ever */
    <div
      className="fixed inset-0 flex flex-col bg-cover bg-center"
      style={{ backgroundImage: `url(${mapBG})` }}
    >
      {/* Header – tiny but always visible */}
      <header className="flex-shrink-0 px-4 pt-safe-offset-top pb-1 z-50">
        <KExpWithCloseBtnHeadingBrown />
      </header>

      {/* Video – takes ALL remaining space perfectly */}
      <main className="flex-1 flex items-center justify-center px-3 pb-3">
        <div
          ref={playerRef}
          className="relative w-full h-full max-w-5xl"
          style={{
            // This is the magic: video never exceeds available height
            maxHeight: "calc(100vh - 160px)",   // 160px = header + footer + safe margins
          }}
        >
          <div className="relative w-full h-full bg-black rounded-2xl overflow-hidden shadow-2xl border-4 border-amber-900/40">
            {/* YouTube or Local Video */}
            {embedUrl.includes("youtube.com/embed") ? (
              <iframe
                src={`${embedUrl}?autoplay=0&controls=1&rel=0&playsinline=1&modestbranding=1`}
                className="w-full h-full"
                allowFullScreen
                title="Video"
              />
            ) : (
              <>
                <video
                  src={src}
                  ref={videoRef}
                  className="w-full h-full object-contain bg-black"
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
                  <div className="absolute inset-0 flex items-center justify-center bg-black/90 z-40">
                    <div className="w-14 h-14 border-4 border-t-transparent border-amber-500 rounded-full animate-spin" />
                  </div>
                )}

                {/* Big Play Button */}
                {!playing && !isLoading && (
                  <button
                    onClick={togglePlay}
                    className="absolute inset-0 flex items-center justify-center bg-black/70 z-40"
                  >
                    <img src={playBtnOverlay} alt="Play" className="w-20 h-20 md:w-28 md:h-28 drop-shadow-2xl" />
                  </button>
                )}
              </>
            )}

            {/* Custom Controls – only for local videos */}
            {!embedUrl.includes("youtube.com/embed") && (
              <div
                className="custom-controls absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent p-4 transition-opacity duration-300 z-30"
                style={{ opacity: isFullscreen && playing ? 0 : 1 }}
              >
                <div className="flex flex-col sm:flex-row items-center gap-3">
                  {/* Left */}
                  <div className="flex items-center gap-4 bg-black/70 backdrop-blur rounded-full px-5 py-3">
                    <button onClick={togglePlay} className="hover:scale-110 transition">
                      <img src={playing ? pauseIcon : playIcon} alt="Play" className="w-8 h-8" />
                    </button>
                    <button onClick={() => changeVolume(-0.1)}>
                      <img src={volumeDown} alt="Vol-" className="w-7 h-7" />
                    </button>
                    <button onClick={() => changeVolume(0.1)}>
                      <img src={volumeUp} alt="Vol+" className="w-7 h-7" />
                    </button>
                  </div>

                  {/* Progress */}
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={duration ? (currentTime / duration) * 100 : 0}
                    onChange={handleSeek}
                    className="flex-1 h-2 rounded-full accent-amber-500 bg-gray-700"
                    style={{
                      background: `linear-gradient(to right, #D4AF37 0%, #D4AF37 ${
                        duration ? (currentTime / duration) * 100 : 0
                      }%, #522a00 ${duration ? (currentTime / duration) * 100 : 0}%, #522a00 100%)`,
                    }}
                  />

                  {/* Right */}
                  <div className="flex items-center gap-4 bg-black/70 backdrop-blur rounded-full px-5 py-3">
                    <span className="text-amber-100 font-medium text-sm">
                      {formatTime(currentTime)} / {formatTime(duration)}
                    </span>
                    <button onClick={goFullscreen} className="hover:scale-110 transition">
                      <img
                        src={isFullscreen ? exitFullscreen : fullscreen}
                        alt="Fullscreen"
                        className="w-8 h-8"
                      />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer – always visible, never cut off */}
      <footer className="flex-shrink-0 px-4 pb-safe-offset-bottom pt-2 z-50">
        <BTMapAndAudioLink />
      </footer>
    </div>
  );
}