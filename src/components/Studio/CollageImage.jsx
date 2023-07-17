import React from 'react'

export default function CollageImage({cols=1,rows=1,image, type="image",text,name,position,center=false}) {
  return (
    <div style={{ backgroundImage: `url(${image})` }} className={`w-full relative h-auto ${(rows>1  || cols>1) && cols>rows ?"aspect-auto":"aspect-square"} ${cols>1?"   lg:col-span-"+cols:""} ${rows>1?"row-span-1 lg:row-span-"+rows:""} ${center?"bg-center":""} bg-cover flex__center`}  >

    {type === "text" && (<span className='whitespace-pre-wrap p-6 text-white text-sm md:text-md leading-loose md:leading-relaxed flex__center'>{text}</span>)}
        {type === "team" && (
          <span className='flex absolute bottom-0 left-0 bg-black p-2  text-white text-xs md:text-sm lg:text-md  font-manrope font-bold tracking-wide'>{name} 
            <span className={`font-light before:content-[""] before:h-full before:w-0.5 before:mx-2 before:bg-white  before:inline-block flex `}>   {position}</span>
          </span>
        )}
    </div>
    
  )
}
