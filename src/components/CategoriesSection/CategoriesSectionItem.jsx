import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import useNearScreen from "@hooks/useNearScreen";

export default function CategoriesSectionItem({
  image,
  direction,
  category,
  onClick,
  redirect,
}) {
  const {isNearScreen,elementRef} = useNearScreen()
 
  return (
    <NavLink
      to={redirect}
      ref={elementRef}
      className="px-mobilePage text-white w-full md:px-10 lg:px-36"
      onClick={onClick}
    >
      <div
        className={` relative w-full ${
          isNearScreen ? "opacity-1" : "opacity-0"
        } group cursor-pointer flex justify-center ${
          direction === `left`
            ? `md:justify-start   
    ${isNearScreen ? "animate-rightToLeft" : " "}`
            : `md:justify-end 
     ${isNearScreen ? " animate-leftToRight" : ""}`
        } `}
      >
        <img
          src={image + ""}
          alt="asd"
          className="w-60 md:w-72 lg:w-80  grayscale group-hover:grayscale-0 duration-300 "
        />
        <div
          className={`xl:px-20 absolute   w-full flex justify-center ${
            direction === "left"
              ? "left-0  md:left-10 lg:left-40 flex-row-reverse"
              : "right-0 md:right-10 lg:right-40"
          } top-1/2`}
        >
          <h3
            className={`text-lg md:text-2xl  lg:text-3xl  font-bold mx-10 uppercase ${
              direction === "left" ? " lg:text-end" : " lg:text-start"
            } tracking-wider  `}
          >
            {category}
          </h3>
          <div
            className={`hidden  md:flex items-center  w-full ${
              direction === "left" ? " lg:justify-start" : " lg:justify-end"
            }`}
          >
            <span className="w-full  h-0.5 rounded-md  bg-white "></span>
          </div>
        </div>
      </div>
    </NavLink>
  );
}
