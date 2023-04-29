import React, { useEffect, useState } from "react";
import logoBlack from "/images/logo-black_retina.png";
import logoWhite from "/images/logo-white_retina.png";
import { NavLink, useLocation } from "react-router-dom";

import { Bars3Icon } from "@heroicons/react/24/outline";
import Hamburguer from "./Hamburguer";
import useVisibility from "../../hooks/useVisibility";

export default function Header() {
  console.log("Hola");
  const hamburguerButton = useVisibility();
  const currentRoute = useLocation();
  const SCROLL_Y_TRIGGER = 100;

  const [headerActive, setHeaderActive] =
    currentRoute.pathname === "/" ? useState(false) : useState(true);

  const isHomePage = () => {
    if (currentRoute.pathname === "/") return true;
    return false;
  };

  const activeNavByScroll = () => {
    if (window.scrollY < SCROLL_Y_TRIGGER && isHomePage())
      setHeaderActive(false);
    else setHeaderActive(true);
  };

  useEffect(() => {
    window.scrollY < SCROLL_Y_TRIGGER && isHomePage()
      ? setHeaderActive(false)
      : setHeaderActive(true);
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, [currentRoute]);

  window.addEventListener("scroll", activeNavByScroll);

  return (
    <div
      className={`fixed z-30 top-0 left-0 w-full flex justify-center duration-300  ${
        headerActive
          ? "bg-white h-20 text-black shadow-default"
          : " h-22 bg-transparent text-white"
      }  `}
    >
      <div
        className={`fixed block md:hidden w-screen h-screen duration-300 bg-white ${
          hamburguerButton.isVisible ? "left-0" : "left-full "
        }`}
      >
        <ul className="w-full h-full flex flex-col justify-center items-center text-black">
          <li className=" w-full p-10 text-center">
            <NavLink
              to={"/proyectos"}
              className={({ isActive }) =>
                isActive
                  ? "font-bold"
                  : "" + `hover:underline block w-full h-full`
              }
              onClick={() => hamburguerButton.toggle()}
            >
              PROYECTOS
            </NavLink>
          </li>
          <li className="w-full p-10 text-center">
            <NavLink
              to={"/estudio"}
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
              to={"/contacto"}
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
            src={`${headerActive ? logoBlack : logoWhite}`}
            alt="logotipo rafo alfaro"
            className={`duration-200 ${
              headerActive ? "w-7 lg:w-10" : " w-10 lg:w-16"
            }`}
          />
        </NavLink>
        <div className="md:hidden block ">
          <Hamburguer
            changeColorWhen={headerActive}
            visbility={hamburguerButton.isVisible}
            trigger={hamburguerButton.toggle}
          />
        </div>

        <ul
          className={`hidden justify-center gap-10  duration-100 md:text-sm lg:text-md font-bold md:flex`}
        >
          <li>
            <NavLink
              to={"/proyectos"}
              className={({ isActive }) =>
                isActive ? "font-bold" : "" + `hover:underline p-4`
              }
            >
              PROYECTOS
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/estudio"}
              className={({ isActive }) =>
                isActive ? "font-bold" : "" + `hover:underline p-4`
              }
            >
              ESTUDIO
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/contacto"}
              className={({ isActive }) =>
                isActive ? "font-bold" : "" + `hover:underline p-4`
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
