import React from "react";
import image1 from "/images/casa-nb-1.jpg";
import image2 from "/images/interior-jay-lounge-4.jpg";
import image3 from "/images/casa-de-campo-t18-1.jpg";
import ProjectCategoryItem from "./ProjectCategoryItem";
import logo from "/images/logo-white_retina.png";

export default function ProjectsCategories() {
  return (
    <div className=" bg-neutral-950 lg:py-36 h-[70rem] lg:h-[100rem] ">
      <div className="container mx-auto flex h-full  items-center">
        <div className="w-24 lg:w-36 relative h-full   flex justify-center items-center">
          <div className="absolute w-full h-full left-0 top-0 flex flex-col justify-center items-center  ">
            <h2
              style={{ writingMode: "vertical-lr" }}
              className="text-white text-2xl  md:text-4xl lg:text-6xl  font-bold w-fit tracking-wider rotate-180 "
            >
              Proyectos
            </h2>
            <span className=" h-[40rem] w-0.5 lg:w-1  lg:ml-6 mt-10  rounded-md  bg-white"></span>
          </div>
        </div>
        <div className="relative   flex items-start flex-col overflow-hidden gap-10 lg:gap-20  w-full ">
          <div className="absolute w-full  left-0 top-0 flex justify-center">
            <img src={logo} alt="" className="w-2/3 opacity-[.05]" />
          </div>
          <ProjectCategoryItem
            image={image1}
            direction={"left"}
            category={"ARQUITECTURA"}
          />
          <ProjectCategoryItem
            image={image2}
            direction={"right"}
            category={"INTERIORISMO"}
          />
          <ProjectCategoryItem
            image={image3}
            direction={"left"}
            category={"CONSTRUCCION"}
          />
        </div>
      </div>
    </div>
  );
}
