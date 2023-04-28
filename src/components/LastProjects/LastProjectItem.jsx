import React from 'react'
import { NavLink } from 'react-router-dom'

export default function LastProjectItem({item}) {
  return (
    <li className='w-full overflow-hidden  rounded-md group'> 
             
    <div style={{backgroundImage:`url(${item.imageRoute})`}} className={`relative w-full h-[300px] bg-no-repeat bg-cover bg-center rounded-sm`}>
      <span className='absolute w-full h-full bg-black opacity-0 group-hover:opacity-[.65] duration-[800ms]'></span>
    </div>
    <div className='flex flex-col gap-2 my-4 p-4' >
        <h3 className='font-bold text-lg'>{item.title}</h3>
        <p className='line-clamp-4 text-sm'>{item.text}</p>
        <div className='text-center'>
            <NavLink className={"text-center font-medium hover:underline"}>Leer más</NavLink>
        </div>
    </div>

</li>
  )
}
