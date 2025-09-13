import closeBtnBrown from "../assets/icons/closeBtnBrown.svg"

export default function KExpWithCloseBtnHeadingBrown() {
  return (
        // note: to use this componenent, create a div where even you call it and add w-full to get it to flex
    <div className='flex justify-between freckle-face-regular'>
      <p className='text-[#522a00] uppercase '>The KANI Experience</p>
      <button className="cursor-pointer">
        <img src={closeBtnBrown} alt="Close Button" />
      </button>
    </div>
  )
}
