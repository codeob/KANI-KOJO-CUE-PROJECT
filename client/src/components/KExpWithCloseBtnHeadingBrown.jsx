import { Link } from "react-router-dom"
import closeBtnBrown from "../assets/icons/closeBtnBrown.svg"

export default function KExpWithCloseBtnHeadingBrown() {
  return (
    // note: to use this componenent, create a div where even you call it and add w-full to get it to flex
    <div className='flex justify-between freckle-face-regular'>
      <p className='text-primary-100 uppercase text-sm md:text-lg'>The KANI Experience</p>
      <Link to="/map" >
        <button className="cursor-pointer">
          <img src={closeBtnBrown} alt="Close Button" className="w-[36px] md:w-[48px] " />
        </button>
      </Link>
    </div>
  )
}
