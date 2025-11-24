import React, { useState, useEffect, useRef } from 'react';
import bgimage from '../assets/backgrounds/bgimage.png';
import PauseIcon from "./PauseIcon";
import PlayIcon from './PlayIcon';
import KExpWithCloseBtnHeadingBrown from './KExpWithCloseBtnHeadingBrown';
import BTMapAndAudioLink from './BTMapAndAudioLink';

const WaveformPlayer = ({ audioUrl }) => {
  const audioRef = useRef(null);
  const canvasRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [waveformData, setWaveformData] = useState([]);

  // Detect small landscape (e.g. phones rotated)
  const [isSmallLandscape, setIsSmallLandscape] = useState(() =>
    window.innerWidth < 640 && window.innerWidth > window.innerHeight
  );

  useEffect(() => {
    const handler = () => {
      setIsSmallLandscape(window.innerWidth < 640 && window.innerWidth > window.innerHeight);
    };
    window.addEventListener('resize', handler);
    window.addEventListener('orientationchange', handler);
    return () => {
      window.removeEventListener('resize', handler);
      window.removeEventListener('orientationchange', handler);
    };
  }, []);

  // Fake waveform (same as yours)
  useEffect(() => {
    const samples = 60;
    const data = [];
    for (let i = 0; i < samples; i++) {
      const base = Math.sin(i * 0.38) * 1.1;
      const rand = (Math.random() - 0.5) * 0.6;
      const env = Math.sin((i / samples) * Math.PI);
      let amp = (base + rand) * env;
      amp = Math.max(0.15, Math.min(1, Math.abs(amp)));
      data.push(amp);
    }
    setWaveformData(data);
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      const handleLoaded = () => setDuration(audioRef.current.duration);
      audioRef.current.addEventListener("loadedmetadata", handleLoaded);
      return () => audioRef.current?.removeEventListener("loadedmetadata", handleLoaded);
    }
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      const handleTimeUpdate = () => setCurrentTime(audioRef.current.currentTime);
      audioRef.current.addEventListener("timeupdate", handleTimeUpdate);
      const handleEnded = () => setIsPlaying(false);
      audioRef.current.addEventListener("ended", handleEnded);
      return () => {
        audioRef.current?.removeEventListener("timeupdate", handleTimeUpdate);
        audioRef.current?.removeEventListener("ended", handleEnded);
      };
    }
  }, []);

  // Canvas drawing (unchanged logic)
  useEffect(() => {
    if (!canvasRef.current || waveformData.length === 0) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * 2;
    canvas.height = rect.height * 2;
    ctx.scale(2, 2);

    const width = rect.width;
    const height = rect.height;
    const barWidth = width / waveformData.length;

    ctx.clearRect(0, 0, width, height);

    waveformData.forEach((amp, i) => {
      const barHeight = amp * (height * 0.85);
      const x = i * barWidth;
      const y = (height - barHeight) / 2;
      const isInProgress = x + barWidth <= (currentTime / duration) * width;
      const spacing = 12;
      const effectiveWidth = barWidth - spacing;

      if (isInProgress) {
        ctx.fillStyle = "#B07010";
      } else {
        ctx.fillStyle = "#AFA692";
      }

      const radius = Math.max(0, Math.min(effectiveWidth / 4, 3));
      ctx.beginPath();
      ctx.roundRect(x + spacing / 2, y, effectiveWidth, barHeight, radius);
      ctx.fill();
    });
  }, [waveformData, currentTime, duration]);

  const togglePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleWaveformClick = (e) => {
    if (!audioRef.current || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percent = clickX / rect.width;
    audioRef.current.currentTime = percent * duration;
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Background */}
      <img
        src={bgimage}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between h-full px-4 py-6 sm:px-8 md:px-12 lg:px-16">
        
        {/* Top - Heading */}
        <div className="w-full ">
          <KExpWithCloseBtnHeadingBrown />
        </div>

        {/* Middle - Waveform + Play Button */}
        <div className="relative flex-1 flex flex-col items-center justify-center max-w-5xl mx-auto w-full">
          <div className="relative w-full">
            <audio ref={audioRef} src={audioUrl} preload="metadata" />

            {/* Waveform Canvas */}
            <div
              className="w-full cursor-pointer"
              style={{ height: isSmallLandscape ? '120px' : 'clamp(160px, 35vh, 280px)' }}
              onClick={handleWaveformClick}
            >
              <canvas ref={canvasRef} className="w-full h-full" />
            </div>

            {/* Play/Pause Button - perfectly centered in all cases */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <button
                onClick={togglePlayPause}
                className={`
                  pointer-events-auto
                  w-16 h-16
                  xs:w-18 xs:h-18
                  sm:w-20 sm:h-20
                  md:w-22 md:h-22
                  lg:w-24 lg:h-24
                  bg-[#B69F7C] rounded-full flex items-center justify-center
                  hover:scale-110 active:scale-95 transition-transform duration-200 shadow-2xl
                `}
              >
                {isPlaying ? <PauseIcon /> : <PlayIcon />}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom - Map & Link */}
        <div className="w-full flex justify-center pb-2 sm:pb-6">
          <BTMapAndAudioLink />
        </div>
      </div>
    </div>
  );
};

export default WaveformPlayer;