import React from 'react'
import KExpWithCloseBtnHeadingCream from '../components/KExpWithCloseBtnHeadingCream'

function Slide({close}) {
  return (
    <div className=' bg-white h-screen w-1/2 p-5'>
        <KExpWithCloseBtnHeadingCream open={close} />
    </div>
  )
}

export default Slide