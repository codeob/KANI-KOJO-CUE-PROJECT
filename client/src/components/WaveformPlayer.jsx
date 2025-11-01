import React, { useState, useEffect, useRef } from 'react';
import bgimage from '../assets/backgrounds/VoiceNotebg.png';
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

      const radius = Math.min(effectiveWidth / 4, 3);
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
    <div className="h-screen relative overflow-hidden">
      <img src={bgimage} alt="" className="absolute bg-secondy-100/75 h-full w-full object-cover" />
      <div className="relative z-10 flex flex-col items-center justify-between h-full w-full p-4 sm:p-6 md:p-8 lg:p-10">
        <div className="w-full">
          <KExpWithCloseBtnHeadingBrown />
        </div>
        <div className="px-4 sm:px-6 md:px-8 lg:px-[42px] py-6 sm:py-8 md:py-10 lg:py-[52px] max-w-[1020px] w-full"> 
          <audio ref={audioRef} src={audioUrl} preload="metadata" />
          <div
            className="w-full h-40 sm:h-48 md:h-56 lg:h-60 cursor-pointer overflow-hidden"
            onClick={handleWaveformClick}
          >
            <canvas ref={canvasRef} className="w-full h-full" />
          </div>
          <div className="flex justify-center mt-2 sm:mt-4 md:mt-6 lg:mt-[8px]">
            <button
              onClick={togglePlayPause}
              className="w-[60px] sm:w-[70px] md:w-[80px] lg:w-[87px] h-[60px] sm:h-[70px] md:h-[80px] lg:h-[87px] bg-[#B69F7C] rounded-full flex items-center justify-center hover:scale-110 active:scale-95 transition-transform duration-200" // changed: responsive button size
            >
              {isPlaying ? <PauseIcon /> : <PlayIcon />}
            </button>
          </div>
        </div>
        <div className="w-full">
          <BTMapAndAudioLink />
        </div>
      </div>
    </div>
  );
};

export default WaveformPlayer;