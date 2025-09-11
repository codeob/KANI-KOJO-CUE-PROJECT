import mapIcon from "../assets/icons/mapIcon.svg" 
export default function BTMapAndAudioLink() {
  return (
    // note: to use this componenent, create a div where even you call it and add w-full to get it to flex
    <div className='flex justify-between w-full'>
      <button className='flex justify-between items-center'>
        <img src={mapIcon} alt="Return to map" className=""  />
        <p className="rock ">Back to map</p>
      </button>
      <div className="">
        
      </div>
    </div>
  )
}
