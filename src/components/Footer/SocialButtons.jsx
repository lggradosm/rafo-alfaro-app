import React from 'react'

export default function SocialButtons({icon}) {
  return (
    <span className='w-10 h-10 hover:scale-110 hover:animate-pulse p-[9px] duration-300 cursor-pointer rounded-full border-[.18rem]   border-[#d2d2d2] flex justify-center items-center'>
        <img src={icon} className='w-6  fill-red-500' alt="" />
    </span>
  )
}
