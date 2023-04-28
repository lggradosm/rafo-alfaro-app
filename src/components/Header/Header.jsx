import React, { useEffect, useState } from 'react'
import logoBlack from "/images/logo-black_retina.png"
import logoWhite from "/images/logo-white_retina.png"

import { NavLink, useLocation } from 'react-router-dom'
export default function Header() {
    const currentRoute = useLocation();
    const SCROLL_Y_TRIGGER = 100
    
    const [headerActive,setHeaderActive] = currentRoute.pathname === "/"? useState(false):useState(true)

    const isHomePage = ()=>{
        if(currentRoute.pathname === "/") return true
        return false
    }
    
    const activeNavByScroll = ()=>{
        if(window.scrollY < SCROLL_Y_TRIGGER && isHomePage())
            setHeaderActive(false)
        else setHeaderActive(true)
    }

    useEffect(()=>{
        isHomePage()?setHeaderActive(false):setHeaderActive(true)
    },[currentRoute])

    window.addEventListener("scroll",activeNavByScroll)
    
  return (
    <div className={`fixed z-30 top-0 left-0 w-full  ${headerActive?"bg-white text-black shadow-default":"bg-transparent text-white"}  `}>
        <div className={` p-4 flex container mx-auto px-10  items-center justify-between gap-4 duration-200  `}>
        <NavLink to={"/"}><img src={`${headerActive?logoBlack:logoWhite}`} alt="logotipo rafo alfaro" className={`duration-200 ${headerActive?"w-10":"w-16"}`} /></NavLink>

        <ul className={`flex justify-center gap-10  duration-100 font-bold `}>
            <li><NavLink to={"/proyectos"} className={({isActive})=> isActive?"font-bold":""+`hover:underline p-2`} >PROYECTOS</NavLink></li>
            <li><NavLink to={"/estudio"}  className={({isActive})=> isActive?"font-bold":"" +`hover:underline p-2`} >ESTUDIO</NavLink></li>
            <li><NavLink to={"/#contacto"}  className={`hover:underline p-2`}>CONTACTO</NavLink></li>
        </ul>
    </div>
       
    </div>
  )
}
