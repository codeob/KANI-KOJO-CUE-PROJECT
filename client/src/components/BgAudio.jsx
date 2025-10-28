import speaker from "../assets/icons/Speaker1.svg";
import speakerMute from "../assets/icons/Speaker-mute.svg";
import { useRef, useState, useEffect } from "react";


export default function BgAudio() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

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
      } catch (err) {
        console.warn("Autoplay blocked — waiting for user interaction.");
      }
    };

    tryPlay();

    // Unmute when user clicks anywhere on the page
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

  // audio url
  const Audio = "https://firebasestorage.googleapis.com/v0/b/kanialbum.firebasestorage.app/o/Inst%20Clip%208.wav?alt=media&token=9c2cee40-c56e-4ada-91d8-8f63a297f9cf";

  return (
    <div className="absolute top-[73px] left-[4%] ">
      <div>
        <audio ref={audioRef} src={Audio} loop preload="auto" />
        <button onClick={togglePlay} className="cursor-pointer fixed">
          <img
            src={playing ? speakerMute : speaker}
            alt={playing ? "Play" : "Mute"}
            className="h-5 w-5 sm:h-6 sm:w-6 lg:h-12 lg:w-12"
          />
        </button>
      </div>
    </div>
  )
}
