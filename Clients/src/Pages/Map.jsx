import React from 'react'
import mapimg from '../assets/mapimg.jpg'
import { IoPinSharp } from "react-icons/io5";

function Map() {
  return (
    <div className=" relative">
      <img 
        src={mapimg} 
        alt="Map" 
        className="h-screen w-screen "
      />
      <div className='absolute top-[4.5rem] left-[7rem]'>
         <IoPinSharp style={{ color: "red", fontSize: "40px" }} className='cursor-pointer animate-bounce'/>
      </div>
       <div className='absolute top-[1.8rem] left-[58.6rem]'>
         <IoPinSharp style={{ color: "red", fontSize: "40px" }} className='cursor-pointer  animate-bounce'/>
      </div>
       <div className='absolute top-[12rem] left-[39.7rem]'>
         <IoPinSharp style={{ color: "red", fontSize: "40px" }} className='cursor-pointer  animate-bounce'/>
      </div>
        <div className='absolute top-[8.1rem] left-[69.7rem]'>
         <IoPinSharp style={{ color: "red", fontSize: "40px" }} className='cursor-pointer  animate-bounce'/>
      </div>
        <div className='absolute top-[20.5rem] left-[35rem]'>
         <IoPinSharp style={{ color: "red", fontSize: "40px" }} className='cursor-pointer  animate-bounce'/>
      </div>
        <div className='absolute top-[21.2rem] left-[31rem]'>
         <IoPinSharp style={{ color: "red", fontSize: "40px" }} className='cursor-pointer  animate-bounce'/>
      </div>
       <div className='absolute top-[26.0rem] left-[16.3rem]'>
         <IoPinSharp style={{ color: "red", fontSize: "40px" }} className='cursor-pointer  animate-bounce'/>
      </div>
       <div className='absolute top-[31rem] left-[37rem]'>
         <IoPinSharp style={{ color: "red", fontSize: "40px" }} className='cursor-pointer  animate-bounce'/>
      </div>
       <div className='absolute top-[33rem] left-[46rem]'>
         <IoPinSharp style={{ color: "red", fontSize: "40px" }} className='cursor-pointer  animate-bounce'/>
      </div>
        <div className='absolute top-[33rem] left-[70rem]'>
         <IoPinSharp style={{ color: "red", fontSize: "40px" }} className='cursor-pointer  animate-bounce'/>
      </div>
    </div>
  )
}

export default Map