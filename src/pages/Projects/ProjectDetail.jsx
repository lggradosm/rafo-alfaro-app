import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import projectService from "../../services/projectService";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Zoom } from "swiper";
import useVisibility from "../../hooks/useVisibility"

import {ChevronRightIcon,ChevronLeftIcon} from "@heroicons/react/24/outline"
export default function ProjectDetail() {
  const route = useLocation().pathname.split("/")[2];
  const project = projectService().filter((item) => item.url === route)[0];
  const [imageSelected, setImageSelected] = useState(0);
  const fullPageImage = useVisibility();
  const body = document.getElementsByTagName("body")[0] 

  const fullPageImageShow = ()=>{
    body.classList.add("body__scroll-hiden")
    fullPageImage.show();
  }
  const fullPageImageHide = ()=>{
    body.classList.remove("body__scroll-hiden")
    fullPageImage.hide();

  }

  const nextSlide = ()=>{
    if(imageSelected <= project.images.length-2)
      setImageSelected((prev)=>prev=prev+1)
  }

  const prevSlide = ()=>{
    if(imageSelected > 0)
    setImageSelected((prev)=>prev=prev-1)
  }

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
          <div className="w-full h-auto bg-neutral-900 flex__center  cursor-zoom-in" onClick={()=>fullPageImageShow()}>
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
            navigation={{
              
              prevEl: '.prev',
              nextEl: '.next',
            }}
            modules={[Navigation]}

          >
            {project.images.map((image, index) => (
              <SwiperSlide
                style={{ backgroundImage: `url(${image})` }}
                className={`relative  aspect-square bg-no-repeat bg-cover bg-center group`}
                onClick={() => setImageSelected(index)}
                key={index}
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
            <div className="flex__center">
             <div className="prev" onClick={()=>prevSlide()}>
                <ChevronLeftIcon className="w-5 text-white" />
             </div>
            </div>
            <div className="flex__center">
            <div className="next"  onClick={()=>nextSlide()}>
            <ChevronRightIcon className="w-5 text-white" />

            </div>
            </div>
          </Swiper>
        </div>
      </div>
      {fullPageImage.isVisible && (<div className="z-[101] fixed h-screen w-screen bg-neutral-900/80 top-0 bottom-0 right-0" >
     
      <Swiper
          slidesPerView={1}
          className="relative  w-full h-full"
          navigation={true}
          initialSlide={imageSelected}
          zoom={true}
          modules={[Navigation,Zoom]}
          grabCursor
        >
          {project.images.map((image, index) => (
            <SwiperSlide  
            key={index}
              
              onClick={() => setImageSelected(index)}
              className=" p-10 flex__center "
            
            >
              <div className="absolute  z-[102] h-full w-full cursor-pointer" onClick={()=> fullPageImageHide()} />

              <img src={`${image}`} alt="" className="w-auto h-full z-[103]"/>
            
            </SwiperSlide>
          ))}
        </Swiper>

      </div>) }
    </div>
  );
}
