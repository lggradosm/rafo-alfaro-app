import React from "react";
import { useLocation } from "react-router-dom";
import projectService from "../../services/projectService";

import GalleryThumbnail from "../../components/GalleryThumbnail";
export default function ProjectDetail() {
 

  const route = useLocation().pathname.split("/")[2];
  const project = projectService().filter((item) => item.url === route)[0];


  return (
    <div className="relative page container">
      <div className="w-full mx-auto   ">
        <div className=" flex flex-col mb-4">
          <div className="flex flex-col md:flex-row items-start mb-2 md:mb-0 md:items-center justify-between">
            <div className="font-bold font-widescreen">
              <h1 className="text-xl md:text-3xl  text-neutral-800 tracking-wide animate-[appear_2s_ease-in-out_forwards]">
                {project.title}
              </h1>
              <h3 className=" my-4 text-sm md:text-md">{project.subtitle}</h3>
            </div>
            <div className="flex__center mr-20 font-widescreen ">
              <h4>Año</h4>
              <span className=" font-bold text-md md:text-lg">
                {project.year}
              </span>
            </div>
          </div>
          <p className="text-sm md:text-md">{project.text}</p>
        </div>
        <GalleryThumbnail images={project.images} />
      </div>

    </div>
  );
}
