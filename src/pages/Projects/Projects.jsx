import React, { useCallback, useEffect, useRef, useState } from "react";
import ProjectNav from "@components/ProjectNav/ProjectNav";
import useProjectsFilter from "@hooks/useProjectsFilter";
import { NavLink } from "react-router-dom";
import useNearScreen from "../../hooks/useNearScreen";
import debounce from "just-debounce-it";
export default function Projects() {
  const { filterData,duplicate } = useProjectsFilter();
  const externalRef = useRef()
  const {isNearScreen,elementRef} = useNearScreen({ once:false,externalRef})
  const handleNextPage = ()=>{
    duplicate()
  }
  const debounceHandleNextPage = useCallback(debounce(handleNextPage,500),[])
  useEffect(()=>{
    if(isNearScreen) debounceHandleNextPage()
  },[debounceHandleNextPage,isNearScreen])

  return (
    <div className="page ">
      <div className=" container   ">
        <div className="w-full md:w-3/5  mx-auto ">
          <ProjectNav />
        </div>
        <div className="w-full my-8 grid  grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6">
          {filterData.map((item, index) => (
            <NavLink
              to={item.url}
              key={index}
              style={{ backgroundImage: `url(${item.featuredImage})` }}
              className={`cursor-pointer relative w-full aspect-square  group bg-cover bg-center bg-no-repeat opacity-0  animate-[appearWithScale_1000ms_ease-in-out_forwards]  `}
            >
              <div className="absolute w-full h-full  group-hover:opacity-0 duration-700 ease-linear ">
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
           <div ref={externalRef} > 

      </div> 
       
      </div>
      
    
    </div>
  );
}
