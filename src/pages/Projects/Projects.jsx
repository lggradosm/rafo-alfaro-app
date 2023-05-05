import React, { useState } from "react";
import ProjectNav from "../../components/ProjectNav/ProjectNav";
import dummy from "../../util/dummy";
import useSelectedCategory from "../../hooks/useSelectedCategory";
import useProjectsFilter from "../../hooks/useProjectsFilter";
import { NavLink } from "react-router-dom";
export default function Projects() {
  const { filterData } = useProjectsFilter();
  const category = useSelectedCategory();
  return (
    <div className="page ">
      <div className=" container flex__center">
        <div className="w-full md:w-3/5 ">
          <ProjectNav />
        </div>
        <div className="w-full my-8 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6">
          {filterData.map((item, index) => (
            <NavLink
              to={item.url}
              key={index}
              style={{ backgroundImage: `url(${item.featuredImage})` }}
              className="cursor-pointer relative w-full aspect-square duration-500 group bg-cover bg-center bg-no-repeat"
            >
              <div className="absolute w-full h-full group-hover:opacity-0 duration-700 ease-linear">
                <img src={item.coverImage} className=" w-full h-full " alt="" />
                <div className="w-full absolute bottom-5 text-center bg-neutral-950/60 py-2 ">
                  <h3 className="text-white text-xs lg:text-sm tracking-wider">
                    {item.title}
                  </h3>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}