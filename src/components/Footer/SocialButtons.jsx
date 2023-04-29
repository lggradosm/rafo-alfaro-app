import React from "react";
import { NavLink } from "react-router-dom";

export default function SocialButtons({ icon, url }) {
  return (
    <NavLink
      to={url}
      target="_blank"
      className="w-10 h-10  p-3  duration-300 cursor-pointer rounded-fullflex rounded-full bg-neutral-900 justify-center items-center"
    >
      <img src={icon} className="w-6  fill-red-500" alt="" />
    </NavLink>
  );
}
