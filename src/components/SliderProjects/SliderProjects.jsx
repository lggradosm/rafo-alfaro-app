import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "@css/Swipe.css";
import "swiper/swiper.min.css";
import "swiper/css/pagination";
import "@css/IconScroll.css";

export default function SliderProjects() {
  const url = import.meta.env.BASE_URL;
  const slide_img = [
    `${url}/images/1.jpg`,
    `${url}/images/2.png`,
    `${url}/images/3.jpg`,
  ];
  const [visible, setVisible] = useState(false);
  const TIME_TO_SHOW_SCROLL_ICON = 8000;
  const SCROLL_Y_TRIGGER = 0;
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

  const scrollvisible = () => {
    setTimeout(() => {
      if (window.scrollY === SCROLL_Y_TRIGGER) setVisible(true);
    }, TIME_TO_SHOW_SCROLL_ICON);
  };
  scrollvisible();

  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"1"}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }}
      loop={true}
      navigation={true}
      className="relative w-full h-screen "
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination, Navigation, Autoplay]}
    >
      <div
        className={`absolute animate-bounce ${
          visible ? "block" : "hidden"
        } duration-[800ms] z-10 icon-scroll`}
        onClick={() => moveScroll()}
      ></div>

      {slide_img.map((element, i) => {
        return (
          <SwiperSlide
            key={i}
            style={{ backgroundImage: `url(${element})` }}
            className={`relative bg-no-repeat bg-cover bg-center`}
          ></SwiperSlide>
        );
      })}
    </Swiper>
  );
}