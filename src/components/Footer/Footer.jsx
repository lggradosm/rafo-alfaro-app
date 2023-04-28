import React from 'react'
import logo from "/images/logo-white_retina.png"
import SocialButtons from './SocialButtons'
import facebook from "/icons/facebook.svg"
import instagram from "/icons/instagram.svg"
import whatsapp from "/icons/whatsapp.svg"

export default function Footer() {
  return (
    <footer className='w-full h-[17rem] mt-36 bg-neutral-800'>
        <div className=' flex flex-col items-center justify-center gap-4 py-10  text-white'>
            <img src={logo} alt="" className='w-16 h-16'/>
            <ul className='flex gap-12 my-4'>
                <SocialButtons icon={facebook}/>
                <SocialButtons icon={instagram} />
                <SocialButtons icon={whatsapp} />
            </ul>
        </div>
        <div className='bg-black w-full py-2  text-white'>
            <p className='text-center text-sm'>rafoalfaro &copy; 2023 - Políticas de Privacidad</p>
        </div>
    </footer>
  )
}
