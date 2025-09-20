import React, { useEffect, useRef, useState } from 'react'
import scrollUp from "../assets/icons/arrow_previous.svg"


export default function Scrollbar_Lyrics({ children }) {
  const contentRef = useRef(null);
  const trackRef = useRef(null);
  const thumbRef = useRef(null);

  const [scrollPercent, setScrollPercent ] = useState(0);

  //track scroll position
  const handleScroll = () => {
    const el =contentRef.current;
    const track = trackRef.current;
    const thumb = thumbRef.current;
    
    if (!el || !track || !thumb) return;

    const scrollableHeight = el.scrollHeight - el.clientHeight;
    const trackHeight = track.clientHeight;
    const thumbHeight = thumb.clientHeight;
    const maxThumbTop = trackHeight - thumbHeight;

    const percent = el.scrollTop / scrollableHeight;
    setScrollPercent(percent * maxThumbTop); 
  }

  // Scroll with arrow buttons
  const scrollByStep = (amount) => {
    contentRef.current.scrollBy({ top:amount, behavior: "smooth" })
  }


    // Dragging logic
  useEffect(() => {
    const thumb = thumbRef.current;
    const track = trackRef.current;
    const content = contentRef.current;
    if (!thumb || !track || !content) return;

    let isDragging = false;
    let startY = 0;
    let startScrollTop = 0;

    const onMouseDown = (e) => {
      isDragging = true;
      startY = e.clientY;
      startScrollTop = content.scrollTop;
      document.body.style.userSelect = "none"; // prevent text highlight
    };

    const onMouseMove = (e) => {
      if (!isDragging) return;
      const deltaY = e.clientY - startY;
      const trackHeight = track.clientHeight;
      const thumbHeight = thumb.clientHeight;
      const maxThumbMove = trackHeight - thumbHeight;

      const scrollableHeight = content.scrollHeight - content.clientHeight;
      const scrollMove = (deltaY / maxThumbMove) * scrollableHeight;

      content.scrollTop = startScrollTop + scrollMove;
    };

    const onMouseUp = () => {
      isDragging = false;
      document.body.style.userSelect = "auto";
    };

    thumb.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    return () => {
      thumb.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  return (
    <div className='relative flex h-full w-full px-3'>
      {/* Scrollable Content */}
      <div ref={contentRef} onScroll={handleScroll} className="flex-1 overflow-y-scroll pr-6 no-scrollbar">
        {children}
      </div>
      {/* CustomScrollbar */}
      <div className="w-6 flex flex-col items-center">
        {/* Up Arrow */}
        <button onClick={() => scrollByStep(-50)} >
          <img src={scrollUp} alt="Up" className='w-4 h-4 rotate-90 cursor-pointer' />
        </button>

        {/* Track */}
        <div className="relative flex-1 w-3 bg-[#b69f7c] rounded-full my-3"
          ref={trackRef} 
        >
          {/* Thumb */}
          <div
            ref={thumbRef}
            className="absolute left-0 w-3 h-10 bg-[#b07010] rounded-full cursor-pointer"
            style={{ top: `${scrollPercent}px` }}
/>        </div>

        {/* Down Arrow */}
        <button onClick={() => scrollByStep(50)} >
          <img src={scrollUp} alt="Up" className='w-4 h-4 -rotate-90 cursor-pointer' />
        </button>          
      </div>
    </div>
  )
}
