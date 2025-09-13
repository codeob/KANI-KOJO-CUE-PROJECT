import React, { useEffect, useState } from "react";
import useLocationStore from "../store/useLocationStore"
import mapimg from "../assets/backgrounds/mapimg.jpg";
import locPin from "../assets/pin.png";
import Slide from "./Slide";
import locationPins from "../../locations";

function Map() {
  const { selectedLocation, setSelectedLocation, clearSelected} = useLocationStore()
  const [isSlideVisible, setIsSlideVisible ] = useState(false)
  const [ isAnimating, setIsAnimating ] = useState(false)

  // Handle opening slide animation
  useEffect(() => {
    if (selectedLocation) {
      setIsSlideVisible(true)
      setTimeout(() => setIsAnimating(true), 10)  // small delay b4 animation to ensure element is mounted
    }
  }, [selectedLocation] )

  //handle closing animation
  const handleClose = () =>{
    setIsAnimating(false);
    // wait for animation to complete before hiding
    setTimeout(() => {
      setIsSlideVisible(false)
      clearSelected();
    }, 300)
  }

  return (
    <div className="flex justify-center items-center h-screen w-screen p-10">
      {/* Container that keeps image responsive */}
      <div className="relative min-w-7xl aspect-[16/9] ">
        {/* Map image */}
        <img
          src={mapimg}
          alt="Map"
          className="w-full h-full object-contain"
        />

        {/* Location pins (scale with map), render from location.js data, coords top and left can be edited in location.js file */}
        {locationPins.map((loc) => (
          <img 
            key={loc.id}
            src={locPin}
            alt={loc.locationName}
            className="absolute h-8 w-5 cursor-pointer"
            style={{ top:loc.coords.top, left:loc.coords.left}}
            onClick={()=> setSelectedLocation(loc.id)}
          />
        ))}


        {/* Overlay / Slide Info base on selected pin */}
        {isSlideVisible && (
          <div className="absolute inset-0 bg-black/55 z-50">
             <Slide location={selectedLocation} close={handleClose} isAnimating={isAnimating} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Map;
