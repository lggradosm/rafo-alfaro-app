import React from 'react'
import LastProjects from '../components/LastProjects/LastProjects'
import ProjectsCategories from '../components/ProjectsCategories/ProjectsCategories'
import SliderProjects from '../components/SliderProjects/SliderProjects'

export default function Home() {
 
  return (
    <div className='w-full min-h-screen flex flex-col'>

        <SliderProjects />
        {/* <div className='container mx-auto h-[800px]  bg-[url("./src/assets/images/img-home-2.jpg")] bg-no-repeat bg-cover bg-center'>
            
        </div> */}
        <LastProjects />
        <ProjectsCategories />
    </div>
  )
}
