import React, { useEffect, useState } from "react";
import LastProjects from "@components/LastProjects/LastProjects";
import SliderProjects from "@components/SliderProjects/SliderProjects";
import CategoriesSection from "@components/CategoriesSection/CategoriesSection";
import useCoverImagesFetch from "@hooks/useCoverImagesFetch";
import usePageLoadStatus from "@hooks/usePageLoadStatus.js"
import {trackPromise ,usePromiseTracker} from "react-promise-tracker"
import useVisibility from "@hooks/useVisibility"
import coverImagesService from "../services/coverImagesServices";
export default function Home() {
  const pageState = usePageLoadStatus()
  const coverImages = useCoverImagesFetch()
  const loading = useVisibility();

  useEffect(()=>{
    loading.hide()
  },[])

  return (
   !loading.isVisible?
    <div className="w-full min-h-screen flex flex-col loaded-page__animation">
      <SliderProjects coverImages={coverImages} />
      {/* <div className='container mx-auto h-[800px]  bg-[url("./src/assets/images/img-home-2.jpg")] bg-no-repeat bg-cover bg-center'>
            
        </div> */}
      <LastProjects />
      <CategoriesSection />
      
    </div>:"cargando"
  );
}
