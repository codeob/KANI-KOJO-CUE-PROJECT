import mapBG from '../assets/backgrounds/Map1_Bkg.png'
import BTMapAndAudioLink from './BTMapAndAudioLink'
import KExpWithCloseBtnHeadingBrown from './KExpWithCloseBtnHeadingBrown'
import leftFrame from "../assets/imageDisplayFrames/displayImage_Inactive_Left.png"
import rightFrame from "../assets/imageDisplayFrames/displayImage_Inactive_Right.png"
import middleFrame from "../assets/imageDisplayFrames/displayImage_Active.png"
import prevBTNIcon from "../assets/icons/arrow_previous.svg"
import nextBTNIcon from "../assets/icons/arrow_next.svg"
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'


export default function ImagePreviewComponent() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [direction, setDirection] = useState(0)


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
  ]


  const wrapIndex = (index, length) => (index % length + length) % length

  const getMinOffset = (curr, idx, len) => {
    let diff = idx - curr
    diff = ((diff % len) + len) % len
    if (diff > len / 2) diff -= len
    return diff
  }

  const nextImage = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setDirection(1)
    setCurrentIndex((prev) => wrapIndex(prev + 1, images.length))
    setTimeout(() => setIsAnimating(false), 1000)
  }

  const prevImage = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setDirection(-1)
    setCurrentIndex((prev) => wrapIndex(prev - 1, images.length))
    setTimeout(() => setIsAnimating(false), 1000)
  }

  const goToImage = (index) => {
    if (isAnimating || index === currentIndex) return
    setIsAnimating(true)
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
    setTimeout(() => setIsAnimating(false), 1000)
  }

  // Auto-play functionality (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage()
    }, 4000)
    
    return () => clearInterval(interval)
  }, [isAnimating])

  const cardVariants = {
    hidden: (custom) => ({
      x: custom.direction > 0 ? '150%' : '-150%',
      scale: 0.4,
      rotateY: 0,
      opacity: 0,
      zIndex: 0
    }),
    visible: (custom) => {
      const absOffset = Math.abs(custom.offset)
      return {
        x: `${custom.offset * 45}%`,
        scale: 1 - absOffset * 0.2,
        rotateY: absOffset === 0 ? 180 : 0,
        opacity: 1,
        zIndex: 20 - Math.floor(absOffset * 10),
        transition: { duration: 1, ease: 'easeInOut' }
      }
    },
    exit: (custom) => ({
      x: custom.direction > 0 ? '-150%' : '150%',
      scale: 0.4,
      rotateY: 0,
      opacity: 0,
      zIndex: 0,
      transition: { duration: 1, ease: 'easeInOut' }
    })
  }


  return (
    <div className='h-screen relative overflow-hidden '>
      <img src={mapBG} alt="" className="absolute h-full w-full object-cover " />
            <div className="relative z-10 flex flex-col items-center justify-between h-full w-full p-10">
              <div className="w-full">
                <KExpWithCloseBtnHeadingBrown />
              </div>

              <div className="flex flex-col items-center justify-center ">
                <div className="relative w-full max-w-6xl">
                  {/* Main Carousel Container */}
                  <div 
                    className="relative h-96 md:h-[500px] mb-3 overflow-"
                    style={{ perspective: '1000px' }}
                  >
                    <AnimatePresence initial={false}>
                      {images.map((image, i) => {
                        const offset = getMinOffset(currentIndex, i, images.length)
                        const absOffset = Math.abs(offset)
                        if (absOffset > 2) return null

                        return (
                          <motion.div
                            key={image.id}
                            className="absolute inset-0 m-auto w-80 h-full"
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
                            {/* Card Back (placeholder side) */}
                            <div 
                              className="absolute inset-0 w-full h-full  flex items-center justify-center backface-hidden"
                              style={{
                                backfaceVisibility: 'hidden',
                                transform: 'rotateY(0deg)'
                              }}
                            >
                              <img src={middleFrame} alt="" className='h-full w-full' />
                            </div>

                            {/* Card Front (image side) */}
                            <div 
                              className="absolute inset-0 w-full h-full rounded-2xl shadow-2xl backface-hidden overflow-hidden"
                              style={{
                                backfaceVisibility: 'hidden',
                                transform: 'rotateY(180deg)'
                              }}
                            >
                              <img
                                src={image.src}
                                alt={image.title}
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent">
                                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                                  <h3 className="text-xl font-bold mb-1">{image.title}</h3>
                                  <p className="text-sm opacity-90">{image.description}</p>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )
                      })}
                    </AnimatePresence>

                    {/* Navigation Arrows */}
                    <button
                      onClick={prevImage}
                      disabled={isAnimating}
                      className="absolute -left-50 top-1/2 transform -translate-y-1/2 transition-all duration-200  cursor-pointer group z-30"
                    >
                      <img src={prevBTNIcon} alt="Previous Image Button" />
                    </button>

                    <button
                      onClick={nextImage}
                      disabled={isAnimating}
                      className="absolute -right-50 top-1/2 transform -translate-y-1/2 transition-all duration-200 cursor-pointer group z-30"
                    >
                      <img src={nextBTNIcon} alt="Next Image Button" />
                    </button>
                  </div>

                  {/* Thumbnails */}
                  <div className="flex justify-center space-x-2 mb-6">
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
                          className="w-16 h-16 object-cover"
                        />
                      </button>
                    ))}
                  </div>

                  {/* Progress Indicators */}
                  <div className="flex justify-center space-x-2">
                    {images.map((_, index) => (
                      <div
                        key={index}
                        className={`h-1 rounded-full transition-all duration-300 ${
                          index === currentIndex 
                            ? 'bg-secondy-100 w-8' 
                            : 'bg-surface-100 bg-opacity-30 w-4'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Controls Info */}
                  <div className="text-center mt-8 text-white text-opacity-60">
                    <p className="text-sm">
                      Use arrow buttons or click thumbnails to navigate • Auto-play every 4 seconds
                    </p>
                  </div>
                </div>

                <style jsx>{`
                  .backface-hidden {
                    -webkit-backface-visibility: hidden;
                    backface-visibility: hidden;
                  }
                `}</style>
              </div>

              <div className="w-full">
                <BTMapAndAudioLink />
              </div>      
            </div>
    </div>
  )
}
