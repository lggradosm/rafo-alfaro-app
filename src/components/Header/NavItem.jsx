import React from "react";
import { NavLink } from "react-router-dom";

export default function NavItem({ linkName, link }) {
  return (
    <li className=" flex__center relative  h-full">
      <NavLink
        to={`${link}`}
        className={({ isActive }) =>
          isActive
            ? `block  w-full flex__center  h-full after:animate-underlineNavItem after:absolute after:block after:rounded-full 
       after:left-0 after:bottom-3  text-[.65em]  md:text-[0.85em] after:ease-[cubic-bezier(.42,-0.01,.47,1)] after:duration-200  after:h-0.5 after:bg-white`
            : `block h-full w-full text-[.65em] 
        md:text-[0.85em]  flex__center hover:brightness-75 after:ease-[cubic-bezier(.42,-0.01,.47,1)] after:duration-200`
        }
      >
        {linkName}
      </NavLink>
    </li>
  );
}
