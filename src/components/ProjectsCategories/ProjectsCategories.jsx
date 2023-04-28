import React from 'react'
import image1 from "/images/casa-nb-1.jpg"
import image2 from "/images/interior-jay-lounge-4.jpg"
import image3 from "/images/casa-de-campo-t18-1.jpg"
import ProjectCategoryItem from './ProjectCategoryItem'
import logo from "/images/logo-white_retina.png"

export default function ProjectsCategories() {
  return (
    <div className=' bg-neutral-950 py-36 h-[100rem] '>
   
      
        <div className='container mx-auto flex h-full  items-center'>
            <div className='absolute -left-20 flex justify-center box-border items-center -rotate-90'>
                <span className='block w-[40rem] h-1 mr-10 rounded-md  bg-white'></span>
                <h2  className='text-white text-6xl  font-bold w-fit tracking-wider ' >Proyectos</h2>
            </div>
            <div  className='relative  flex items-start flex-col overflow-hidden gap-10  w-[calc(100%-20rem)] ml-auto'>
                  <div className='absolute w-full  left-0 top-0 flex justify-center'>
              <img src={logo} alt=""  className='w-[100rem] opacity-[.05]'/>
            </div>
                <ProjectCategoryItem image={image1} direction={"left"} category={"ARQUITECTURA"}/>
                <ProjectCategoryItem image={image2} direction={"right"} category={"INTERIORISMO"}/>
                <ProjectCategoryItem image={image3} direction={"left"} category={"CONSTRUCCION"}/>

            </div>
           

        </div>
    </div>

  )
}
