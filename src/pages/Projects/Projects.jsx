import React, { useCallback, useEffect, useRef, useState } from "react";
import ProjectNav from "@components/ProjectNav/ProjectNav";
import useProjectsFilter from "@hooks/useProjectsFilter";
import { NavLink } from "react-router-dom";
import useNearScreen from "../../hooks/useNearScreen";
import debounce from "just-debounce-it";
export default function Projects() {
  const { data, duplicate } = useProjectsFilter();
  const externalRef = useRef();
  const { isNearScreen, elementRef } = useNearScreen({
    once: false,
    externalRef,
  });
  const handleNextPage = () => {
    duplicate();
  };
  const debounceHandleNextPage = useCallback(debounce(handleNextPage, 500), []);
  useEffect(() => {
    if (isNearScreen) debounceHandleNextPage();
  }, [debounceHandleNextPage, isNearScreen]);
  const [selectedCategory,setSelectedCategory] = useState("Todo");
  const changeSelectedCategory = (category)=>{
    setSelectedCategory(category)
  }
  return (
    <div className="page ">
      <div className="  relative pt-10 ">
        <div className="w-full fixed top-[5.5rem]  ra_navbar z-20 p-4 flex justify-start   ">
          <ProjectNav selected={selectedCategory} onclick = {changeSelectedCategory} />
        </div>
        <div className="w-full my-12 grid  grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-5 gap-1 p-1 bg-primaryColor">
          {data.map((item, index) => (
           <div               key={index}
           style={{ backgroundImage: `url(${item.featuredImage})` }} className="w-full  bg-red-500 relative  aspect-square  group bg-cover bg-center bg-no-repeat opacity-0  animate-[appearWithScale_1000ms_ease-in-out_forwards] ">
             <NavLink
              to={item.url}
              style={{ backgroundImage: `url(${item.featuredImage})` }}
              className={`cursor-pointer  `}
            >
              <div className="absolute w-full h-full  group-hover:opacity-0 duration-500 ease-linear ">
                <img src={item.coverImage} className=" w-full h-full " alt="" />
                <div className="w-fit absolute bottom-0 text-center bg-black p-3 ">
                  <h3 className="text-white text-xs lg:text-[.95em] font-manrope font-bold -tracking-tight">
                    {item.title}
                  </h3>
                </div>
              </div>
     
            </NavLink>
            <div className={`bg-neutral-950 w-full h-full absolute ${item.category!==selectedCategory && selectedCategory!=="Todo" ? "opacity-100 duration-300 z-10":"opacity-0 -z-10 duration-300"}`}/>

           </div>
          ))}
        </div>
        <div ref={externalRef}></div>
      </div>
    </div>
  );
}
