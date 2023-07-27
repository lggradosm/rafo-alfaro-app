import React, { useCallback, useEffect, useRef, useState } from "react";
import useProjectsFilter from "@hooks/useProjectsFilter";
import { NavLink } from "react-router-dom";
import useNearScreen from "../../hooks/useNearScreen";
import debounce from "just-debounce-it";
import useProjectsFetch from "../../hooks/useProjectsFetch";
import Loading from "../Loading";
export default function ProjectsGrid({ selectedCategory }) {
  const { data, duplicate } = useProjectsFilter();
  const externalRef = useRef();
  const [loaded, setLoaded] = useState(false);

  const { projects } = useProjectsFetch();
  useEffect(() => {
    if (projects) setLoaded(true);
  }, [projects]);

  //   const { isNearScreen } = useNearScreen({
  //     once: false,
  //     externalRef,
  //   });
  //   const handleNextPage = () => {
  //     duplicate();
  //   };
  //   const debounceHandleNextPage = useCallback(debounce(handleNextPage, 500), []);
  //   useEffect(() => {
  //     if (isNearScreen) debounceHandleNextPage();
  //   }, [debounceHandleNextPage, isNearScreen]);
  if (loaded)
    return (
      <div className="w-full  grid  grid-cols-2  lg:grid-cols-3 xl:grid-cols-5 gap-1 p-1 bg-primaryColor animate-loadOpacity">
        {projects.map((item) => (
          <div
            key={item.id}
            style={{ backgroundImage: `url(${item.featured_image})` }}
            className="w-full overflow-hidden relative saturate-0  aspect-square  group hover:saturate-100 bg-cover bg-center bg-no-repeat opacity-0   animate-[appearWithScale_1000ms_ease-in-out_forwards] "
          >
            <NavLink
              to={item.url}
              style={{ backgroundImage: `url(${item.featured_image})` }}
              className={`cursor-pointer  `}
            >
              <div className="absolute h-full w-full bg-black/[85%] flex items-center group-hover:opacity-0  duration-[350ms] ease-[cubic-bezier(.42,-0.01,.47,1)]  ">
                <img
                  src={item.sketch_image}
                  className="   w-full h-auto "
                  alt=""
                />
                <div className="w-fit absolute bottom-0 group-hover:-bottom-10 duration-[350ms] ease-[cubic-bezier(.42,-0.01,.47,1)]  text-center bg-black p-3 ">
                  <h3 className="text-white text-[.55em] sm:text-xs lg:text-[.95em] 2xl:text-[.8em] font-manrope font-bold -tracking-tight">
                    {item.title_es}
                  </h3>
                </div>
              </div>
            </NavLink>
            <div
              className={`bg-neutral-950 w-full h-full absolute ${
                item.category !== selectedCategory &&
                selectedCategory !== "Todo"
                  ? "opacity-100 duration-300 z-10"
                  : "opacity-0 -z-10 duration-300"
              }`}
            />
          </div>
        ))}
        <div ref={externalRef}></div>
      </div>
    );
  else {
    return <Loading />;
  }
}
