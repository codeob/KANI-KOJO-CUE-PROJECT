import closeBtnCream from "../assets/icons/closeBtnCream.svg"

export default function KExpWithCloseBtnHeadingCream({ close }) {
  return (
        // note: to use this componenent, create a div where even you call it and add w-full to get it to flex
    <div className='flex justify-between  freckle-face-regular'>
      <div>
        <p className='text-[#afa692] uppercase text-sm md:text-lg'>The KANI Experience</p>
      </div>
      <div>
        <button className="cursor-pointer" onClick={close}>
          <img src={closeBtnCream} alt="Close Button" className="w-[36px] md:w-[48px] " />
        </button>
      </div>
    </div>
  )
}
