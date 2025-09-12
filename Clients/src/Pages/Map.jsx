import React, { useState } from "react";
import mapimg from "../assets/backgrounds/mapimg.jpg";
import locPin from "../assets/pin.png";
import Slide from "./Slide";

function Map() {
  const [show, setShow] = useState(false);

  const handleOpen = () => {
    setShow(!show);
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen">
      {/* Container that keeps image responsive */}
      <div className="relative w-full max-w-5xl aspect-[16/9]">
        {/* Map image */}
        <img
          src={mapimg}
          alt="Map"
          className="w-full h-full object-contain"
        />

        {/* Location pins (scale with map) */}
        <img
          src={locPin}
          alt="Location Pin"
          className="absolute top-[13%] left-[19.5%] h-8 w-5 cursor-pointer"
          onClick={handleOpen}
        />
        <img
          src={locPin}
          alt="Location Pin"
          className="absolute top-[5%] left-[68%] h-8 w-5 cursor-pointer"
          onClick={handleOpen}
        />
        <img
          src={locPin}
          alt="Location Pin"
          className="absolute top-[32%] left-[50%] h-8 w-5 cursor-pointer"
          onClick={handleOpen}
        />
        <img
          src={locPin}
          alt="Location Pin"
          className="absolute top-[23%] left-[77.8%] h-8 w-5 cursor-pointer"
          onClick={handleOpen}
        />
        <img
          src={locPin}
          alt="Location Pin"
          className="absolute top-[55%] left-[45.8%] h-8 w-5 cursor-pointer"
          onClick={handleOpen}
        />
        <img
          src={locPin}
          alt="Location Pin"
          className="absolute top-[57%] left-[42%] h-8 w-5 cursor-pointer"
          onClick={handleOpen}
        />
        <img
          src={locPin}
          alt="Location Pin"
          className="absolute top-[69.8%] left-[27.2%] h-8 w-5 cursor-pointer"
          onClick={handleOpen}
        />
        <img
          src={locPin}
          alt="Location Pin"
          className="absolute top-[81.7%] left-[47.8%] h-8 w-5 cursor-pointer"
          onClick={handleOpen}
        />
        <img
          src={locPin}
          alt="Location Pin"
          className="absolute top-[88%] left-[56%] h-8 w-5 cursor-pointer"
          onClick={handleOpen}
        />
        <img
          src={locPin}
          alt="Location Pin"
          className="absolute top-[87%] left-[79%] h-8 w-5 cursor-pointer"
          onClick={handleOpen}
        />

        {/* Overlay / Slide Info */}
        {show && (
          <div className="fixed inset-0 bg-black/55 z-50">
             <Slide close={handleOpen} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Map;
