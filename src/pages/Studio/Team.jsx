import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {  Navigation } from "swiper";
import dummyEquipo from "@util/equipoDummy.js"
import {
  ChevronRightIcon,
  ChevronLeftIcon,

} from "@heroicons/react/24/outline";export default function Team() {
  const MAX_IMAGES_THUMB = 3
  return <div className="page container loaded-page__animation ">
    <h3 className="text-3xl font-bold mb-8 uppercase mt-28">Equipo</h3>
    <Swiper 
     breakpoints={{
      0: { spaceBetween: 10, slidesPerView: MAX_IMAGES_THUMB },
      768: { spaceBetween: 15, slidesPerView: MAX_IMAGES_THUMB },
      1024: { spaceBetween: 30, slidesPerView: MAX_IMAGES_THUMB },
    }}
    className="relative !gap-5 !flex cursor-grab  select-none"
    loop={true}

    navigation={{
      prevEl: ".prev",
      nextEl: ".next",
    }}
    modules={[Navigation]}
    speed={300}>
      {
        dummyEquipo.map((item,index)=>(
          <SwiperSlide key={index} className="relative" >
            <img src={item.image} alt="" />
            <div className="absolute bottom-0 w-full flex justify-start items-center gap-2 p-5 bg-black/50">
              <div className="w-[3px] h-10 bg-black" />
              <div className="text-white">
                <span className="block font-bold">{item.name}</span>
                <span className="block text-sm">{item.position}</span>
              </div>
            </div>
          </SwiperSlide>
        ))
      }
   <div
            className={`flex__center`}
          >
            <div className="prev">
              <ChevronLeftIcon className="w-5 text-white" />
            </div>
          </div>
          <div
            className={`flex__center`}
          >
            <div className="next" >
              <ChevronRightIcon className="w-5 text-white" />
            </div>
          </div>
    </Swiper>
  </div>;
}
