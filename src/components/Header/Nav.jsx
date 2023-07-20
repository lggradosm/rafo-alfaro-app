import React, { useEffect, useState } from "react";
import logoWhite from "/images/logo-white_retina.png";
import { NavLink, useLocation } from "react-router-dom";

import Hamburguer from "./Hamburguer";
import useVisibility from "../../hooks/useVisibility";
import NavItem from "./NavItem";
import { configureNav } from "../../util/configureNav";
export default function Nav() {
  const hamburguerButton = useVisibility();
  const currentRoute = useLocation();
  const isTransparent = ()=>{
    for(let i = 0;i<configureNav.length;i++)
      if(currentRoute.pathname === configureNav[i]) return true;
    return false
  }
  const [transparentNavbar,setTransparentNavbar] = isTransparent()?useState(true):useState(false);

    
 
  const handleScroll = function (){
    if(window.scrollY>10 && isTransparent())
      setTransparentNavbar(false)
    else
    setTransparentNavbar(true)

  }
  useEffect(() => {
    if(isTransparent()){
      setTransparentNavbar(true)
      window.addEventListener("scroll",handleScroll)

    }    
    else{
      setTransparentNavbar(false)
      window.removeEventListener("scroll",handleScroll)

    }
    window.scrollTo({ top: 0})
  }, [currentRoute]);


  return (
    <div
      className={`fixed z-30 h-header top-0 left-0 w-full  flex justify-center duration-300 ease-[cubic-bezier(.42,-0.01,.47,1)]  ${transparentNavbar?"bg-transparent":"ra_navbar "}`}
    >
      <div
        className={`fixed block md:hidden w-screen h-screen duration-300 bg-white ${
          hamburguerButton.isVisible ? "left-0" : "left-full "
        }`}
      >
        <ul className="w-full h-full flex flex-col justify-center items-center tracking-widest text-black">
          <li className=" w-full p-10 text-center">
            <NavLink
              to={`/proyectos`}
              className={({ isActive }) =>
                isActive
                  ? `font-bold`
                  : "" + `hover:underline block w-full h-full`
              }
              onClick={() => {
                hamburguerButton.toggle();
                category.selectCategory("Todo");
              }}
            >
              PROYECTOS
            </NavLink>
          </li>
          <li className="w-full p-10 text-center">
            <NavLink
              to={`/estudio`}
              className={({ isActive }) =>
                isActive
                  ? "font-bold"
                  : "" + `hover:underline   block w-full h-full`
              }
              onClick={() => hamburguerButton.toggle()}
            >
              ESTUDIO
            </NavLink>
          </li>
          <li className="w-full p-10 text-center">
            <NavLink
              to={`/contacto`}
              className={({ isActive }) =>
                isActive
                  ? "font-bold"
                  : "" + `hover:underline  block w-full h-full`
              }
              onClick={() => hamburguerButton.toggle()}
            >
              CONTACTO
            </NavLink>
          </li>
        </ul>
      </div>
      <div
        className={` p-6 flex w-full mx-auto px-5  items-center justify-between gap-4 duration-200  `}
      >
        <NavLink to={"/"}>
          <img
            src={logoWhite}
            alt="logotipo rafo alfaro"
            className={`duration-200 w-6 lg:w-7 hover:brightness-75 `}
          />
        </NavLink>
        <div className="sm:hidden block ">
          <Hamburguer
            visbility={hamburguerButton.isVisible}
            trigger={hamburguerButton.toggle}
          />
        </div>

        <ul
          className={`hidden justify-center gap-10 h-full font-manrope duration-100 md:text-sm 2xl:text-[.8em] text-white tracking-widest lg:text-md font-bold sm:flex `}
        >
          <NavItem  linkName={"PROYECTOS"} link="/proyectos"/>
          <NavItem  linkName={"ESTUDIO"}  link="/estudio"/>
          <NavItem  linkName={"CONTACTO"}  link="/contacto"/>

        </ul>
      </div>
    </div>
  );
}
