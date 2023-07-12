import React, { useEffect, useState } from "react";
import logoBlack from "/images/logo-black_retina.png";
import logoWhite from "/images/logo-white_retina.png";
import { NavLink, useLocation } from "react-router-dom";

import { Bars3Icon } from "@heroicons/react/24/outline";
import Hamburguer from "./Hamburguer";
import useVisibility from "../../hooks/useVisibility";
import useSelectedCategory from "../../hooks/useSelectedCategory";

export default function Header() {
  const hamburguerButton = useVisibility();
  const currentRoute = useLocation();
  const category = useSelectedCategory();
  const url = import.meta.env.BASE_URL;

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [currentRoute]);

  return (
    <div
      className={`fixed z-10  top-0 left-0 w-full flex justify-center duration-300 bg-neutral-900/50 backdrop-blur-[3px]
        `}
    >
      <div
        className={`fixed block md:hidden w-screen h-screen duration-300 bg-white ${
          hamburguerButton.isVisible ? "left-0" : "left-full "
        }`}
      >
        <ul className="w-full h-full flex flex-col justify-center items-center tracking-widest text-black">
          <li className=" w-full p-10 text-center">
            <NavLink
              to={`${url}/proyectos`}
              className={({ isActive }) =>
                isActive
                  ? "font-bold"
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
              to={`${url}/estudio`}
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
              to={`${url}/contacto`}
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
        className={` p-4 flex container mx-auto px-10  items-center justify-between gap-4 duration-200  `}
      >
        <NavLink to={"/"}>
          <img
            src={logoWhite}
            alt="logotipo rafo alfaro"
            className={`duration-200 w-6 lg:w-8 `}
          />
        </NavLink>
        <div className="md:hidden block ">
          <Hamburguer
            visbility={hamburguerButton.isVisible}
            trigger={hamburguerButton.toggle}
          />
        </div>

        <ul
          className={`hidden justify-center gap-10 h-full  duration-100 md:text-sm text-white tracking-widest lg:text-md font-bold md:flex`}
        >
          <li className="h-full flex__center  ">
            <NavLink
              to={`${url}/proyectos`}
              className={({ isActive }) =>
                isActive
                  ? "header-text__shadow text-black font-black"
                  : "" + `hover:underline h-full flex__center`
              }
              onClick={() => category.selectCategory("Todo")}
            >
              PROYECTOS
            </NavLink>
          </li>
          <li className="h-full flex__center ">
            <NavLink
              to={`${url}/estudio`}
              className={({ isActive }) =>
                isActive
                  ? "header-text__shadow text-black font-black"
                  : "" + `hover:underline h-full flex__center`
              }
            >
              ESTUDIO
            </NavLink>
          </li>
          <li className="h-full flex__center ">
            <NavLink
              to={`${url}/contacto`}
              className={({ isActive }) =>
                isActive
                  ? "header-text__shadow text-black font-black"
                  : "" + `hover:underline h-full flex__center`
              }
            >
              CONTACTO
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
