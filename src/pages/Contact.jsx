import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Contact() {
  return (
    <div className='page md:container w-full mx-auto flex justify-center items-center   text-white '>
      <div className='flex flex-col gap-4 w-full'>
        <div>
          <h3 className='font-bold text-xl mb-4'>Horario de atención</h3>
          <p className='font-light text-sm'>Lunes a Viernes</p>
          <p className='font-light text-sm'>8:00 a.m. a 1:00 p.m. - 2:00 p.m a 6:00 p.m.</p>
        </div>
        <NavLink className={"text-sm block w-fit"} target='_blank' to={"https://www.google.com/maps/dir/''/RAFO+ALFARO+%7C+Estudio+Creativo,+Avenida+Metropolitana+II,+Trujillo/@-8.1219289,-79.0410366,17z/data=!4m6!4m5!1m0!1m2!1m1!1s0x91ad3dc7290a7e81:0xf85b63b6ccff7344!3e0"}>
          <p>AV. METROPOLITANA 2 MZ. S1 LOTE 9, URB. SAN ISIDRO ETAPA II </p>
          <p>TRUJILLO - PERÚ</p>
        </NavLink>
        <NavLink className={"text-sm block w-fit"} to={"tel:+51949222588"} >
          +51 949222588
        </NavLink>
      </div>
      <div className='w-full  '>
        <form action="w-full ">
          <div className='flex  gap-4'>
            
            
          <div className='relative w-full contact__form mb-6 '>
          <input autoFocus  className='placeholder-transparent duration-300 focus:border-white outline-none text-sm text-white p-4 bg-black border-b-2 border-neutral-500 w-full' type="text" placeholder='Nombres' />
            <label htmlFor="" className='text-sm  duration-300 text-neutral-400 absolute left-4 bottom-4'>Nombres</label>
          </div>
          <div className='relative w-full contact__form  mb-6'>
          <input   className='placeholder-transparent outline-none duration-300 focus:border-white text-sm text-white p-4 bg-black border-b-2 border-neutral-500 w-full' type="text" placeholder='Apellidos' />
            <label htmlFor="" className='text-sm  duration-300 text-neutral-400 absolute left-4 bottom-4'>Apellidos</label>
          </div>  
          </div> 
          <div className='relative w-full contact__form mb-6 '>
          <input   className='placeholder-transparent duration-300 focus:border-white outline-none text-sm text-white p-4 bg-black border-b-2 border-neutral-500 w-full' type="text" placeholder='Correo' />
            <label htmlFor="" className='text-sm  duration-300 text-neutral-400 absolute left-4 bottom-4'>Correo</label>
          </div>  
          <div className='relative w-full contact__form mb-6 '>
          <input   className='placeholder-transparent duration-300 focus:border-white outline-none text-sm text-white p-4 bg-black border-b-2 border-neutral-500 w-full' type="text" placeholder='Asunto' />
            <label htmlFor="" className='text-sm  duration-300 text-neutral-400 absolute left-4 bottom-4'>Asunto</label>
          </div>  

          <div className='relative w-full contact__form mb-6 mt-6'>
          <textarea   className=' h-32 placeholder-transparent duration-300 focus:border-white outline-none text-sm text-white p-4 bg-black border-b-2 border-neutral-500 w-full' type="text" placeholder='Mensaje'>

          </textarea>
            <label htmlFor="" className='text-sm  duration-300 text-neutral-400 absolute left-4 top-4'>Mensaje</label>
          </div>  
          <button className='bg-white w-full text-black p-3 rounded-sm hover:brightness-90 duration-300'>
            Enviar
          </button>
        </form>
        
      </div>

    </div>
  )
}
