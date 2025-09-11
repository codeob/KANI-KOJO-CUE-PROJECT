import closeBtnBrown from "../assets/icons/closeBtnBrown.svg"

export default function KExpWithCloseBtnHeadingBrown() {
  return (
    <div className='flex justify-between freckle-face-regular'>
      <p className='text-[#522a00] uppercase '>The KANI Experience</p>
      <button>
        <img src={closeBtnBrown} alt="Close Button" />
      </button>
    </div>
  )
}
