import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import projectService from "../../services/projectService";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

export default function ProjectDetail() {
  const route = useLocation().pathname.split("/")[2];
  const project = projectService().filter((item) => item.url === route)[0];
  const [imageSelected, setImageSelected] = useState(0);
  return (
    <div className="relative page container">
      <div className="w-[80%]  mx-auto   ">
        <div className=" flex flex-col mb-4">
          <div className="flex flex-col md:flex-row items-start mb-2 md:mb-0 md:items-center justify-between">
            <div className="font-bold font-widescreen">
              <h1 className="text-xl md:text-3xl text-neutral-800 tracking-wide">
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
        <div className="flex flex-col gap-2 md:gap-4 lg:gap-8">
          <div className="w-full h-auto bg-neutral-900 flex__center  cursor-zoom-in">
            <img
              src={project.images[imageSelected]}
              className="w-full h-auto"
              alt=""
            />
          </div>
          <Swiper
            breakpoints={{
              0: { spaceBetween: 10, slidesPerView: 3 },
              768: { spaceBetween: 15, slidesPerView: 4 },
              1024: { spaceBetween: 30, slidesPerView: 5 },
            }}
            className="relative !gap-5 !flex cursor-grab"
            navigation={true}
          >
            {project.images.map((image, index) => (
              <SwiperSlide
                key={index}
                style={{ backgroundImage: `url(${image})` }}
                className={`relative  aspect-square bg-no-repeat bg-cover bg-center group`}
                onClick={() => setImageSelected(index)}
                modules={[Navigation]}
              >
                <div
                  className={`absolute w-full h-full ${
                    index !== imageSelected ? "group-hover:opacity-20 " : ""
                  } opacity-0 duration-300 bg-white `}
                ></div>
                {index === imageSelected && (
                  <div className="absolute w-full h-full  opacity-60 duration-300 bg-black "></div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* <div className="z-[101] fixed w-screen h-screen  overflow-hidden right-0 top-0"></div> */}
    </div>
  );
}
