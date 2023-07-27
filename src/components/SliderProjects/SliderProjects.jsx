import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import cloudinaryConfig from "../../config/cloudinary";
import useCoverImagesFetch from "../../hooks/useCoverImagesFetch";
import "@css/Swipe.css";
import "swiper/swiper.min.css";
import "swiper/css/pagination";
import "@css/IconScroll.css";
import Loading from "../Loading";
export default function SliderProjects() {
  const { data } = useCoverImagesFetch();
  const cld = new Cloudinary(cloudinaryConfig);
  const myImage = cld.image("/v1690215503/Rafo%20Alfaro/page/cover/2.png");
  const [visible, setVisible] = useState(false);
  const TIME_TO_SHOW_SCROLL_ICON = 8000;
  const SCROLL_Y_TRIGGER = 0;
  const [loaded, setLoaded] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY === SCROLL_Y_TRIGGER) {
      setVisible(false);
      scrollvisible();
    } else setVisible(false);
  });

  const moveScroll = () => {
    window.scrollTo({
      top: 500,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (data) setLoaded(true);
  }, [data]);

  const scrollvisible = () => {
    setTimeout(() => {
      if (window.scrollY === SCROLL_Y_TRIGGER) setVisible(true);
    }, TIME_TO_SHOW_SCROLL_ICON);
  };
  scrollvisible();
  if (loaded)
    return (
      <Swiper
        centeredSlides={true}
        slidesPerView={"1"}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        allowTouchMove={false}
        loop={true}
        className="relative w-full h-screen animate-loadOpacity"
        modules={[Autoplay]}
      >
        <div
          className={`absolute animate-bounce ${
            visible ? "block" : "hidden"
          } duration-[800ms] z-10 icon-scroll`}
          onClick={() => moveScroll()}
        ></div>

        {data?.map((element) => {
          return (
            <SwiperSlide key={element.id} className={`relative w-full h-full`}>
              {element.file_type == "image" ? (
                <img
                  src={element.media_url}
                  alt=""
                  className=" w-full h-full block object-center  object-cover"
                />
              ) : (
                <video
                  autoPlay
                  loop
                  muted
                  className="object-center object-cover h-full w-full"
                >
                  <source src={element.media_url} type="video/mp4" />
                </video>
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
    );
  else
    return (
      <div className="h-screen">
        <Loading />
      </div>
    );
}
