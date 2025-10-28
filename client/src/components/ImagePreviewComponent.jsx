import mapBG from '../assets/backgrounds/Map_Bkg.png';
import BTMapAndAudioLink from './BTMapAndAudioLink';
import KExpWithCloseBtnHeadingBrown from './KExpWithCloseBtnHeadingBrown';
import middleFrame from "../assets/imageDisplayFrames/displayImage_Active.png";
import prevBTNIcon from "../assets/icons/arrow_previous.svg";
import nextBTNIcon from "../assets/icons/arrow_next.svg";
import picFrame from "../assets/backgrounds/carouselPhotoFrame.png";
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import BgAudio from './BgAudio';

export default function ImagePreviewComponent() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState(0);

  const images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=600&fit=crop",
      title: "Mountain Landscape",
      description: "Beautiful mountain scenery"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=500&h=600&fit=crop",
      title: "Ocean View",
      description: "Serene ocean waves"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=600&fit=crop",
      title: "Forest Path",
      description: "Peaceful forest trail"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=500&h=600&fit=crop",
      title: "Lake Reflection",
      description: "Mirror-like lake surface"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=600&fit=crop",
      title: "Desert Sunset",
      description: "Golden desert landscape"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=600&fit=crop",
      title: "Desert Sunset",
      description: "Golden desert landscape"
    },
  ];

  const wrapIndex = (index, length) => (index % length + length) % length;

  const getMinOffset = (curr, idx, len) => {
    let diff = idx - curr;
    diff = ((diff % len) + len) % len;
    if (diff > len / 2) diff -= len;
    return diff;
  };

  const nextImage = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(1);
    setCurrentIndex((prev) => wrapIndex(prev + 1, images.length));
    setTimeout(() => setIsAnimating(false), 1000);
  };

  const prevImage = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(-1);
    setCurrentIndex((prev) => wrapIndex(prev - 1, images.length));
    setTimeout(() => setIsAnimating(false), 1000);
  };

  const goToImage = (index) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 4000);
    return () => clearInterval(interval);
  }, [isAnimating]);

  const cardVariants = {
    hidden: (custom) => ({
      x: custom.direction > 0 ? '150%' : '-150%',
      scale: 0.4,
      rotateY: 0,
      opacity: 0,
      zIndex: 0
    }),
    visible: (custom) => {
      const absOffset = Math.abs(custom.offset);
      return {
        x: `${custom.offset * 45}%`,
        scale: 1 - absOffset * 0.2,
        rotateY: absOffset === 0 ? 180 : 0,
        opacity: 1,
        zIndex: 20 - Math.floor(absOffset * 10),
        transition: { duration: 1, ease: 'easeInOut' }
      };
    },
    exit: (custom) => ({
      x: custom.direction > 0 ? '-150%' : '150%',
      scale: 0.4,
      rotateY: 0,
      opacity: 0,
      zIndex: 0,
      transition: { duration: 1, ease: 'easeInOut' }
    })
  };

  return (
    <div className='h-screen relative overflow-hidden'>
      <img src={mapBG} alt="" className="absolute h-full w-full object-cover" />
      <div className="relative z-10 flex flex-col items-center justify-between h-full w-full p-4 sm:p-6 md:p-8 lg:p-10"> 
        <div className="w-full">
          <KExpWithCloseBtnHeadingBrown />
        </div>
        <BgAudio />
        <div className="flex flex-col items-center justify-center w-full max-w-4xl sm:max-w-5xl md:max-w-6xl lg:max-w-7xl"> 
          <div className="relative w-full">
            <div 
              className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] mb-3" 
              style={{ perspective: '1000px' }}
            >
              <AnimatePresence initial={false}>
                {images.map((image, i) => {
                  const offset = getMinOffset(currentIndex, i, images.length);
                  const absOffset = Math.abs(offset);
                  if (absOffset > 2) return null;
                  return (
                    <motion.div
                      key={image.id}
                      className="absolute inset-0 m-auto w-[180px] sm:w-[220px] md:w-[260px] lg:w-[360px] h-full" 
                      custom={{ direction, offset }}
                      variants={cardVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      style={{
                        transformStyle: 'preserve-3d',
                        backfaceVisibility: 'hidden'
                      }}
                    >
                      <div 
                        className="absolute inset-0 w-full h-full flex items-center justify-center backface-hidden"
                        style={{
                          backfaceVisibility: 'hidden',
                          transform: 'rotateY(0deg)'
                        }}
                      >
                        <img src={middleFrame} alt="" className='h-full w-full' />
                      </div>
                      <div 
                        className="relative left-0 inset-0 w-full h-full rounded-3xl backface-hidden overflow-hidden"
                        style={{
                          backfaceVisibility: 'hidden',
                          transform: 'rotateY(180deg)'
                        }}
                      >
                        <img src={picFrame} alt="" className='absolute h-full z-20  ' />
                        <div className="relative left-0 h-full overflow-hidden ">
                          <img
                            src={image.src}
                            alt={image.title}
                            className="w-full h-full object-cover rounded-2xl p-1"
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent">
                          <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 text-white"> 
                            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-1"> 
                              {image.title}
                            </h3>
                            <p className="text-xs sm:text-sm md:text-base lg:text-lg opacity-90"> 
                              {image.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
              <button
                onClick={prevImage}
                disabled={isAnimating}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 transition-all duration-200 cursor-pointer group z-30" 
              >
                <img src={prevBTNIcon} alt="Previous Image Button" />
              </button>
              <button
                onClick={nextImage}
                disabled={isAnimating}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 transition-all duration-200 cursor-pointer group z-30"
              >
                <img src={nextBTNIcon} alt="Next Image Button" />
              </button>
            </div>
            {/* <div className="flex justify-center space-x-1 sm:space-x-2 mb-4 sm:mb-6">
              {images.map((image, index) => (
                <button
                  key={image.id}
                  onClick={() => goToImage(index)}
                  className={`relative overflow-hidden rounded-lg transition-all duration-300 ${
                    index === currentIndex 
                      ? 'ring-3 ring-secondy-100 scale-110' 
                      : 'hover:scale-105 opacity-70 hover:opacity-100'
                  } ${isAnimating ? 'pointer-events-none' : ''}`}
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 object-cover"
                  />
                </button>
              ))}
            </div> */}
            <div className="mt-6 flex justify-center space-x-1 sm:space-x-2">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-secondy-100 w-6 sm:w-8' 
                      : 'bg-surface-100 bg-opacity-30 w-3 sm:w-4'
                  }`} // changed: responsive progress indicator width
                />
              ))}
            </div>
            <div className="text-center mt-4 sm:mt-6 md:mt-8 text-primary-100 text-opacity-60">
              <p className="text-xs sm:text-sm md:text-base rock ">
                Use arrow buttons to navigate • Auto-play every 4 seconds
              </p>
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