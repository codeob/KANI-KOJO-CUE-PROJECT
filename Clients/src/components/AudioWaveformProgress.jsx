import React, { useRef, useState, useCallback } from "react";
import { useWavesurfer } from "@wavesurfer/react";

const AudioWaveformProgress = ({ audioUrl = "/assets/audio/song1.mp3" }) => {
  const containerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Setup wavesurfer
  const { wavesurfer, isReady } = useWavesurfer({
    container: containerRef,
    url: audioUrl,
    height: 100,
    waveColor: "#9ca3af",
    progressColor: "#f97316",
    barWidth: 2,
    barGap: 1,
    cursorWidth: 1,
    cursorColor: "#f97316",
  });

  const togglePlay = useCallback(() => {
    if (!wavesurfer) return;
    if (wavesurfer.isPlaying()) {
      wavesurfer.pause();
      setIsPlaying(false);
    } else {
      wavesurfer.play();
      setIsPlaying(true);
    }
  }, [wavesurfer]);

  return (
    <div className="w-full max-w-2xl mx-auto p-4 bg-gray-900 rounded-lg shadow-lg">
      <div ref={containerRef} className="rounded-md" />

      <button
        onClick={togglePlay}
        disabled={!isReady}
        className="mt-4 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition"
      >
        {isPlaying ? "Pause" : "Play"}
      </button>
    </div>
  );
};

export default AudioWaveformProgress;
