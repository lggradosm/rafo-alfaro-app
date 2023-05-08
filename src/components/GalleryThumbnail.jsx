import React, { useEffect, useRef, useState } from 'react'
import useVisibility from '../hooks/useVisibility';
import {ChevronRightIcon,ChevronLeftIcon,XMarkIcon, ArrowsPointingOutIcon} from "@heroicons/react/24/outline"
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Navigation, Zoom } from "swiper";

import "../css/GalleryThumbnail.css"
export default function GalleryThumbnail({images}) {
    const MAX_IMAGES_THUMB = 5
    const MIN_PROGRESS_TO_ACTIVE_NAV = 0.03
    const NAV_BUTTON_INITIAL_STATE = {left:false,right:true}
    const [imageSelected, setImageSelected] = useState(0);
    
    const [navButtonsVisible,setNavButtonVisible] = useState(NAV_BUTTON_INITIAL_STATE)
    const [navFullScreenButtonsVisible,setNavFullScreenButtonsVisible] = useState(NAV_BUTTON_INITIAL_STATE)

    const fullPageImage = useVisibility();
    const body = document.getElementsByTagName("body")[0] 
    const thumSlideRef = useRef(null)
    const thumFullSlideRef = useRef(null)
  
    const fullPageImageShow = ()=>{
      body.classList.add("body__scroll-hiden")
      fullPageImage.show();
    }
    const fullPageImageHide = ()=>{
      body.classList.remove("body__scroll-hiden")
      fullPageImage.hide();
  
    }
  
    const nextSlide = ()=>{
      if(imageSelected <= images.length-2)
        setImageSelected((prev)=>prev=prev+1)
    }
  
    const prevSlide = ()=>{
      if(imageSelected > 0)
      setImageSelected((prev)=>prev=prev-1)
    }
  

    const scrollSwiperMoveHandler = ()=>{
        if (thumSlideRef.current.swiper.progress  > MIN_PROGRESS_TO_ACTIVE_NAV ) {
            setNavButtonVisible({left:true,right:true})
        }else{
            setNavButtonVisible({left:false,right:true})
        }
        if(thumSlideRef.current.swiper.progress >= 1- MIN_PROGRESS_TO_ACTIVE_NAV){
            setNavButtonVisible({left:true,right:false})
        }
    }

    const scrollFullSwiperMoveHandler = ()=>{
            if(thumFullSlideRef.current.swiper.activeIndex > images.length-2  ){
                setNavFullScreenButtonsVisible({left:true,right:false})
                
            }else{
                if (thumFullSlideRef?.current.swiper.progress  > MIN_PROGRESS_TO_ACTIVE_NAV ) {
                    setNavFullScreenButtonsVisible({left:true,right:true})
                }else{
                    setNavFullScreenButtonsVisible({left:false,right:true})
                }
            }
        }
       
  

    useEffect(()=>{
      thumSlideRef.current.swiper.slideTo(imageSelected)
      thumFullSlideRef.current.swiper.slideTo(imageSelected)
      scrollSwiperMoveHandler()
      scrollFullSwiperMoveHandler()
    },[imageSelected])

  
  return (
    <div>
         <div className="flex flex-col gap-2 md:gap-4 lg:gap-8">
          <div className="relative w-full h-auto bg-neutral-900 flex__center" >
            <img
              src={images[imageSelected]}
              className="w-full h-auto"
              alt=""
            />
            <div className="absolute bg-black/50 rounded-full right-5 bottom-5 group  duration-300  p-3 cursor-pointer" onClick={()=>fullPageImageShow()}>
              <ArrowsPointingOutIcon className="w-6  group-hover:opacity-60 duration-300 text-white" />
            </div>
          </div>
          <Swiper
          
            breakpoints={{
              0: { spaceBetween: 10, slidesPerView: MAX_IMAGES_THUMB },
              768: { spaceBetween: 15, slidesPerView: MAX_IMAGES_THUMB },
              1024: { spaceBetween: 30, slidesPerView: MAX_IMAGES_THUMB },
            }}

            className="relative !gap-5 !flex cursor-grab"
            navigation={{
              
              prevEl: '.prev',
              nextEl: '.next',
            }}
            onSliderMove={()=>scrollSwiperMoveHandler()}
            modules={[Navigation]}
            ref={thumSlideRef}
          >
            {images.map((image, index) => (
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
            <div className={`flex__center ${navButtonsVisible.left && images.length > MAX_IMAGES_THUMB ?"opacity-100":"opacity-0"} ease-in `}>
             <div className="prev" onClick={()=>prevSlide()}>
                <ChevronLeftIcon className="w-5 text-white" />
             </div>
            </div>
            <div className={`flex__center ${navButtonsVisible.right && images.length > MAX_IMAGES_THUMB ?"opacity-100":"opacity-0" } ease-out`}>
            <div className="next"  onClick={()=>nextSlide()}>
            <ChevronRightIcon className="w-5 text-white" />

            </div>
            </div>
          </Swiper>
        </div>

         <div className={`z-[101]  ${fullPageImage.isVisible?"fullscreen-gallery__active":"fullscreen-gallery"} duration-500  fixed h-screen w-screen bg-black/90 top-0 bottom-0 right-0`} >
     
     <Swiper 
         slidesPerView={1}
         direction={"horizontal"}
         className="relative  w-full h-full select-none "
         initialSlide={imageSelected}
         modules={[Navigation,Mousewheel]}
         mousewheel={true}
         speed={600}
         onSlideChange={(e)=>{setImageSelected(e.activeIndex)}}
         onSliderMove={()=>scrollFullSwiperMoveHandler()}
        
         navigation={{
             
           prevEl: '.full_prev',
           nextEl: '.full_next',
         }}
         ref={thumFullSlideRef}
       >
         {images.map((image, index) => (
           
           <SwiperSlide  
           key={index}
             
             onClick={() => setImageSelected(index)}
             className="w-full h-[100%] flex__center "
           
           >
             <div className="absolute  z-[102] h-full w-full " onClick={()=> fullPageImageHide()} />

             <img src={`${image}`} alt="" className="w-[80%] h-auto 2xl:w-auto 2xl:h-full z-[103] active:cursor-grab"/>
           

           </SwiperSlide>
         ))}
           <div className={`z-[104] absolute top-0 left-0 w-20 h-full flex__center bg-transparent  ${navFullScreenButtonsVisible.left ?"opacity-100":"opacity-0"}`}>
             <ChevronLeftIcon className="full_prev w-16 text-white cursor-pointer hover:opacity-60 duration-200" />
           </div>

           <div className={`z-[104] absolute flex__center right-0 top-0 w-20 h-full bg-transparent ${navFullScreenButtonsVisible.right  ?"opacity-100":"opacity-0"}`}>
             <ChevronRightIcon className="full_next w-16 text-white cursor-pointer hover:opacity-60 duration-200" />


           </div>
           <div className=" z-[104] absolute  right-4 top-4 bg-transparent cursor-pointer" onClick={()=> fullPageImageHide()}>
               <XMarkIcon className="w-10 text-white hover:opacity-60 duration-200" />
           </div>
       </Swiper>

     </div>
    </div>
  )
}
