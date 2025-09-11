import closeBtnCream from "../assets/icons/closeBtnCream.svg"

export default function KExpWithCloseBtnHeadingCream() {
  return (
    <div className='flex flex-row justify-between freckle-face-regular'>
      <p className='text-[#afa692] uppercase '>The KANI Experience</p>
      <button>
        <img src={closeBtnCream} alt="Close Button" />
      </button>
    </div>
  )
}
