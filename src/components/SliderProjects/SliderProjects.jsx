import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "@css/Swipe.css";
import "swiper/swiper.min.css";
import "swiper/css/pagination";
import "@css/IconScroll.css";

export default function SliderProjects() {
  const slide_img = [
    {
      img:"/videos/reel3.mp4",type:"video"
    },
    {img:'/images/1.jpg',type:"image"},{
    img: `/images/2.png`,type:"image"
  },
  {
    img:`/images/3.jpg`, type:"image"
  }
   
  ];
  const [visible, setVisible] = useState(false);
  const TIME_TO_SHOW_SCROLL_ICON = 8000;
  const SCROLL_Y_TRIGGER = 0;
  const swiperRef = useRef(null);
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
    // <Swiper
    //   effect={"coverflow"}
    //   centeredSlides={true}
    //   slidesPerView={"1"}
    //   autoplay={{
    //     delay: 4000,
    //     disableOnInteraction: false,
    //   }}
    //   allowTouchMove={false}
    //   coverflowEffect={{
    //     rotate: 50,
    //     stretch: 0,
    //     depth: 100,
    //     modifier: 1,
    //     slideShadows: false,
    //   }}
    //   loop={true}
    //   className="relative w-full h-screen "
     
    //   modules={[ Autoplay]}
    // >
    //   <div
    //     className={`absolute animate-bounce ${
    //       visible ? "block" : "hidden"
    //     } duration-[800ms] z-10 icon-scroll`}
    //     onClick={() => moveScroll()}
    //   ></div>

    //   {slide_img.map((element, i) => {
    //     return (
    //       <SwiperSlide
    //         key={i}
    //         style={{ backgroundImage: `url(${element})` }}
    //         className={`relative bg-no-repeat bg-cover bg-center`}
    //       ></SwiperSlide>
    //     );
    //   })}
    // </Swiper>
    // swiper.slides[swiper.activeIndex-1])
     <Swiper
      centeredSlides={true}
      slidesPerView={"1"}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      allowTouchMove={false}
   
      loop={true}
      className="relative w-full h-screen "
      modules={[ Autoplay]}
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
            className={`relative w-full h-full`}
  
          >
            {element.type === "image"?(<img src={element.img} alt="" className=" w-full h-full block object-center  object-cover" />):
            (<video autoPlay   muted  className="object-center object-cover h-full w-full"  >
              <source src={element.img} type="video/mp4"/>
            </video>)}
          </SwiperSlide>
        );
      })}
    </Swiper>
    
    
    );
}
