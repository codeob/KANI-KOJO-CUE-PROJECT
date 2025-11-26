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

  // Convert YouTube URL to embed URL
  const getEmbedUrl = (url) => {
    if (!url) return '';
    const youtuBeMatch = url.match(/youtu\.be\/([a-zA-Z0-9_-]+)/);
    if (youtuBeMatch) return `https://www.youtube.com/embed/${youtuBeMatch[1]}`;
    const youtubeMatch = url.match(/youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/);
    if (youtubeMatch) return `https://www.youtube.com/embed/${youtubeMatch[1]}`;
    return url;
  };

  const embedUrl = getEmbedUrl(src);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const updateTime = () => setCurrentTime(video.currentTime);
    video.addEventListener("timeupdate", updateTime);
    return () => video.removeEventListener("timeupdate", updateTime);
  }, []);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!(
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement
      ));
    };

    const events = [
      "fullscreenchange",
      "webkitfullscreenchange",
      "mozfullscreenchange",
      "MSFullscreenChange"
    ];
    events.forEach(event => document.addEventListener(event, handleFullscreenChange));

    return () => events.forEach(event => document.removeEventListener(event, handleFullscreenChange));
  }, []);

  useEffect(() => {
    let timeout;
    const controls = playerRef.current?.querySelector('.custom-controls');
    if (!controls) return;

    const showControls = () => {
      controls.style.opacity = '1';
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        if (isFullscreen && playing) controls.style.opacity = '0';
      }, 3000);
    };

    const handleActivity = () => {
      if (isFullscreen) showControls();
    };

    const player = playerRef.current;
    player.addEventListener('mousemove', handleActivity);
    player.addEventListener('touchstart', handleActivity); // Important for mobile!

    showControls(); // Initial show

    return () => {
      player.removeEventListener('mousemove', handleActivity);
      player.removeEventListener('touchstart', handleActivity);
      clearTimeout(timeout);
    };
  }, [isFullscreen, playing]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (playing) video.pause();
    else video.play();
    setPlaying(!playing);
  };

  const handleSeek = (e) => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = e.target.value;
    setCurrentTime(video.currentTime);
  };

  const changeVolume = (delta) => {
    const newVolume = Math.min(Math.max(volume + delta, 0), 1);
    setVolume(newVolume);
    if (videoRef.current) videoRef.current.volume = newVolume;
  };

  const goFullscreen = () => {
    const elem = playerRef.current;
    if (!elem) return;

    if (!document.fullscreenElement) {
      if (elem.requestFullscreen) elem.requestFullscreen();
      else if (elem.webkitRequestFullscreen) elem.webkitRequestFullscreen();
      else if (elem.mozRequestFullScreen) elem.mozRequestFullScreen();
      else if (elem.msRequestFullscreen) elem.msRequestFullscreen();
    } else {
      if (document.exitFullscreen) document.exitFullscreen();
      else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
      else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
      else if (document.msExitFullscreen) document.msExitFullscreen();
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center flex flex-col"
      style={{ backgroundImage: `url(${mapBG})` }}
    >
      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-between px-4 py-6 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        
        {/* Header */}
        <div className="w-full z-20">
          <KExpWithCloseBtnHeadingBrown />
        </div>

        {/* Video Player - Fully Responsive */}
        <div
          ref={playerRef}
          className="relative w-full max-w-5xl mx-auto my-4 sm:my-6 lg:my-8 touch-manipulation"
        >
          {/* Video Container with Responsive Aspect Ratio */}
          <div className="relative w-full aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl">
            {embedUrl.includes('youtube.com/embed') ? (
              <iframe
                src={`${embedUrl}?autoplay=0&controls=1&modestbranding=1&rel=0&playsinline=1`}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                title="Music Video"
              />
            ) : (
              <>
                <video
                  src={src}
                  ref={videoRef}
                  className="w-full h-full object-contain"
                  playsInline
                  onClick={togglePlay}
                  onLoadedMetadata={(e) => {
                    setDuration(e.target.duration);
                    setIsLoading(false);
                  }}
                  onLoadStart={() => setIsLoading(true)}
                  onWaiting={() => setIsLoading(true)}
                  onCanPlay={() => setIsLoading(false)}
                />

                {/* Loading Spinner */}
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/80 z-10">
                    <div className="w-12 h-12 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
                  </div>
                )}

                {/* Big Play Button Overlay */}
                {!playing && !isLoading && (
                  <button
                    onClick={togglePlay}
                    className="absolute inset-0 flex items-center justify-center bg-black/70 hover:bg-black/80 transition-all z-10"
                    aria-label="Play video"
                  >
                    <img
                      src={playBtnOverlay}
                      alt="Play"
                      className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 drop-shadow-2xl"
                    />
                  </button>
                )}
              </>
            )}
          </div>

          {/* Custom Controls - Only for non-YouTube videos */}
          {!embedUrl.includes('youtube.com/embed') && (
            <div
              className="custom-controls absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 sm:p-5 transition-opacity duration-300"
              style={{ opacity: isFullscreen && playing ? 0 : 1 }}
              onMouseMove={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                {/* Left Controls */}
                <div className="flex items-center gap-3 sm:gap-4 bg-surface-100/90 backdrop-blur-sm rounded-2xl px-4 py-2">
                  <button onClick={togglePlay} className="p-2 hover:scale-110 transition">
                    <img src={playing ? pauseIcon : playIcon} alt="Play/Pause" className="w-6 h-6 sm:w-7 sm:h-7" />
                  </button>
                  <button onClick={() => changeVolume(-0.1)} className="p-2">
                    <img src={volumeDown} alt="Volume Down" className="w-6 h-6" />
                  </button>
                  <button onClick={() => changeVolume(0.1)} className="p-2">
                    <img src={volumeUp} alt="Volume Up" className="w-6 h-6" />
                  </button>
                </div>

                {/* Progress Bar */}
                <input
                  type="range"
                  min="0"
                  max={duration || 0}
                  step="0.1"
                  value={currentTime}
                  onChange={handleSeek}
                  className="flex-1 h-2 rounded-lg cursor-pointer accent-primary-100"
                  style={{
                    background: `linear-gradient(to right, #D4AF37 0%, #D4AF37 ${(currentTime / duration) * 100}%, #522a00 ${(currentTime / duration) * 100}%, #522a00 100%)`,
                  }}
                />

                {/* Right Controls */}
                <div className="flex items-center gap-3 sm:gap-6 bg-surface-100/90 backdrop-blur-sm rounded-2xl px-4 py-2">
                  <span className="text-xs sm:text-sm font-medium text-amber-100 tracking-wider">
                    {formatTime(currentTime)} / {formatTime(duration)}
                  </span>
                  <button onClick={goFullscreen} className="p-2 hover:scale-110 transition">
                    <img
                      src={isFullscreen ? exitFullscreen : fullscreen}
                      alt="Fullscreen"
                      className="w-6 h-6 sm:w-8 sm:h-8"
                    />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="w-full z-20">
          <BTMapAndAudioLink />
        </div>
      </div>
    </div>
  );
}