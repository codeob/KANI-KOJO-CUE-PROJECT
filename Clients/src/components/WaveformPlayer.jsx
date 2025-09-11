import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause } from 'lucide-react';

const WaveformPlayer = () => {
  const canvasRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration] = useState(180); // 3 minutes demo
  const [waveformData, setWaveformData] = useState([]);
  const playbackIntervalRef = useRef(null);

  // Generate waveform data
  useEffect(() => {
    const samples = 80; // Fewer bars for thicker appearance
    const data = [];
    
    for (let i = 0; i < samples; i++) {
      const baseAmplitude = Math.sin(i * 0.08) * 0.9;
      const randomVariation = (Math.random() - 0.5) * 0.6;
      const envelope = Math.sin((i / samples) * Math.PI);
      
      let amplitude = (baseAmplitude + randomVariation) * envelope;
      amplitude = Math.max(0.15, Math.min(1, Math.abs(amplitude)));
      
      data.push(amplitude);
    }
    
    setWaveformData(data);
  }, []);

  // Draw waveform
  useEffect(() => {
    if (!canvasRef.current || waveformData.length === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    
    // Set canvas size for high DPI
    canvas.width = rect.width * 2;
    canvas.height = rect.height * 2;
    ctx.scale(2, 2);

    const width = rect.width;
    const height = rect.height;
    const barWidth = width / waveformData.length;
    const progressWidth = (currentTime / duration) * width;

    ctx.clearRect(0, 0, width, height);

    // Draw waveform bars
    waveformData.forEach((amplitude, index) => {
      const barHeight = amplitude * (height * 0.85);
      const x = index * barWidth;
      const y = (height - barHeight) / 2;
      
      // Determine if this bar is in the progress area
      const isInProgress = x + barWidth <= progressWidth;
      
      // Set colors based on progress
      if (isInProgress) {
        // Progress bars - orange gradient
        const gradient = ctx.createLinearGradient(0, y, 0, y + barHeight);
        gradient.addColorStop(0, '#ff6b35');
        gradient.addColorStop(1, '#f7931e');
        ctx.fillStyle = gradient;
      } else {
        // Unplayed bars - white/gray
        const gradient = ctx.createLinearGradient(0, y, 0, y + barHeight);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0.4)');
        ctx.fillStyle = gradient;
      }
      
      // Draw rounded bars
      const radius = Math.min(barWidth / 4, 3);
      ctx.beginPath();
      ctx.roundRect(x + 1, y, barWidth - 2, barHeight, radius);
      ctx.fill();
    });
  }, [waveformData, currentTime, duration]);

  const togglePlayPause = () => {
    if (isPlaying) {
      setIsPlaying(false);
      if (playbackIntervalRef.current) {
        clearInterval(playbackIntervalRef.current);
      }
    } else {
      setIsPlaying(true);
      playbackIntervalRef.current = setInterval(() => {
        setCurrentTime(prev => {
          if (prev >= duration) {
            setIsPlaying(false);
            clearInterval(playbackIntervalRef.current);
            return duration;
          }
          return prev + 0.1;
        });
      }, 100);
    }
  };

  const handleWaveformClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = clickX / rect.width;
    const newTime = percentage * duration;
    setCurrentTime(Math.max(0, Math.min(duration, newTime)));
  };

  // Cleanup interval on unmount
  useEffect(() => {
    return () => {
      if (playbackIntervalRef.current) {
        clearInterval(playbackIntervalRef.current);
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-amber-900 via-orange-900 to-red-900 p-6">
      <div className="bg-black/30 backdrop-blur-lg rounded-2xl p-8 shadow-2xl">
        
        {/* Waveform Container */}
        <div 
          className="relative w-96 h-24 cursor-pointer rounded-xl overflow-hidden bg-black/20 mb-6"
          onClick={handleWaveformClick}
        >
          <canvas
            ref={canvasRef}
            className="w-full h-full"
            style={{ width: '100%', height: '100%' }}
          />
        </div>

        {/* Play Button */}
        <div className="flex justify-center">
          <button
            onClick={togglePlayPause}
            className="w-14 h-14 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-transform duration-200 hover:shadow-orange-500/50"
          >
            {isPlaying ? (
              <Pause className="w-6 h-6 text-white ml-0" fill="white" />
            ) : (
              <Play className="w-6 h-6 text-white ml-1" fill="white" />
            )}
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default WaveformPlayer;