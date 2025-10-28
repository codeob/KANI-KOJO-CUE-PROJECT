import { useEffect, useRef, useState } from "react";
import BTMapAndAudioLink from "./BTMapAndAudioLink";
import mapBG from "../assets/backgrounds/Map1_Bkg.png";
import KExpWithCloseBtnHeadingBrown from "./KExpWithCloseBtnHeadingBrown";
import playIcon from "../assets/icons/play.svg";
import pauseIcon from "../assets/icons/pause.svg";
import volumeDown from "../assets/icons/volumeDown.svg";
import volumeUp from "../assets/icons/volumeUp.svg";
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

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const updateTime = () => setCurrentTime(video.currentTime);
    video.addEventListener("timeupdate", updateTime);
    return () => video.removeEventListener("timeupdate", updateTime);
  }, []);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement || !!document.webkitFullscreenElement || !!document.mozFullScreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
    document.addEventListener("mozfullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener("webkitfullscreenchange", handleFullscreenChange);
      document.removeEventListener("mozfullscreenchange", handleFullscreenChange);
    };
  }, []);

  useEffect(() => {
    let timeout;
    const controls = playerRef.current?.querySelector('.custom-controls');
    if (!controls) return;

    const showControls = () => {
      controls.style.opacity = '1';
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        if (isFullscreen) controls.style.opacity = '0.3';
      }, 3000);
    };

    const handleMouseMove = () => {
      if (isFullscreen) showControls();
    };

    playerRef.current.addEventListener('mousemove', handleMouseMove);
    return () => {
      playerRef.current?.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timeout);
    };
  }, [isFullscreen]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (playing) {
      video.pause();
    } else {
      video.play();
    }
    setPlaying(!playing);
  };

  const handleSeek = (e) => {
    const video = videoRef.current;
    video.currentTime = e.target.value;
    setCurrentTime(video.currentTime);
  };

  const changeVolume = (v) => {
    const newVolume = Math.min(Math.max(volume + v, 0), 1);
    setVolume(newVolume);
    videoRef.current.volume = newVolume;
  };

  const goFullscreen = () => {
    if (!document.fullscreenElement && !document.webkitFullscreenElement && !document.mozFullScreenElement) {
      const elem = playerRef.current;
      const video = videoRef.current;
      if (elem.requestFullscreen) {
        elem.requestFullscreen().catch(() => {
          if (video.requestFullscreen) video.requestFullscreen();
        });
      } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen().catch(() => {
          if (video.webkitRequestFullscreen) video.webkitRequestFullscreen();
        });
      } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen().catch(() => {
          if (video.mozRequestFullScreen) video.mozRequestFullScreen();
        });
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      }
    }
  };

  return (
    <div className="h-screen w-full relative">
      <img
        src={mapBG}
        alt="Background Image"
        className="absolute inset-0 h-full w-full object-cover z-0"
      />
      <div className="relative z-10 flex flex-col items-center justify-between h-full w-full p-4 sm:p-6 md:p-8 lg:p-10">
        <div className="w-full">
          <KExpWithCloseBtnHeadingBrown />
        </div>
        <div
          ref={playerRef}
          className="relative w-full max-w-[800px] sm:max-w-[900px] md:max-w-[1000px] lg:max-w-[1049px] h-[400px] sm:h-[500px] md:h-[520px] xl:h-[598px] flex flex-col items-center"
        >
          <div className="relative w-full flex justify-center" style={{ height: 'calc(100% - 60px)' }}>
            <video
              src={src}
              ref={videoRef}
              controls={false}
              className="w-full h-full object-contain rounded-lg"
              onLoadedMetadata={(e) => setDuration(e.target.duration)}
              onClick={togglePlay}
            />
            {!playing && (
              <button
                onClick={togglePlay}
                className="absolute inset-0 flex items-center justify-center bg-black/95 rounded-3xl"
              >
                <img
                  src={playBtnOverlay}
                  alt="Play overlay"
                  className="h-20 w-20 sm:h-25 sm:w-25 cursor-pointer"
                />
              </button>
            )}
          </div>
          <div className="custom-controls flex items-center justify-between gap-4 sm:gap-6 rounded-lg py-2 w-full mt-2">
            <div className="bg-surface-100 rounded-2xl py-2 px-4 sm:px-5 h-[40px] sm:h-[50px] w-[120px] sm:w-[141px] flex items-center justify-between"> 
              <button onClick={togglePlay} className="cursor-pointer">
                <img
                  src={playing ? pauseIcon : playIcon}
                  alt={playing ? "Pause" : "Play"}
                  className="h-5 w-5 sm:h-6 sm:w-6" 
                />
              </button>
              <button
                onClick={() => changeVolume(-0.1)}
                className="cursor-pointer"
              >
                <img
                  src={volumeDown}
                  alt="Volume Down"
                  className="h-5 w-5 sm:h-6 sm:w-6" 
                />
              </button>
              <button
                onClick={() => changeVolume(0.1)}
                className="cursor-pointer"
              >
                <img src={volumeUp} alt="Volume Up" className="h-5 w-5 sm:h-6 sm:w-6" /> 
              </button>
            </div>
            <input
              type="range"
              min="0"
              max={duration}
              value={currentTime}
              onChange={handleSeek}
              className="flex-1 appearance-none h-2 rounded-lg cursor-pointer"
              style={{
                background: `linear-gradient(to right, #522a00 ${(currentTime / duration) * 100}%, #B69F7C ${(currentTime / duration) * 100}%)`,
              }}
            />
            <div className="bg-surface-100 rounded-2xl py-2 px-4 sm:px-5 flex items-center justify-between gap-6 sm:gap-8">
              <span className="special-elite text-xs sm:text-sm md:text-base text-primary-100">
                {Math.floor(currentTime / 60)}:
                {("0" + Math.floor(currentTime % 60)).slice(-2)} /{" "}
                {Math.floor(duration / 60)}:
                {("0" + Math.floor(duration % 60)).slice(-2)}
              </span>
              <button onClick={goFullscreen} className="cursor-pointer">
                <img
                  src={isFullscreen ? exitFullscreen : fullscreen}
                  alt="Fullscreen toggle"
                  className="h-6 w-6 sm:h-8 sm:w-8" // changed: responsive icon size
                />
              </button>
            </div>
          </div>
        </div>
        <div className="w-full">
          <BTMapAndAudioLink />
        </div>
      </div>
    </div>
  );
}