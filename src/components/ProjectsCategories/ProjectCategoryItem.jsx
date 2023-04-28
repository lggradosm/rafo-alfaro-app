import React, { useEffect, useRef, useState } from 'react'

export default function ProjectCategoryItem({image,direction,category}) {
    const ref = useRef(null)
    const [visible,setVisible ] = useState(false)
    useEffect(()=>{
        const observer = new IntersectionObserver((entries)=>{
            const entry = entries[0]
            if(entry.isIntersecting)
                setVisible(true)
           
        })
        observer.observe(ref.current)
    },[])
  return (
    <div ref={ref}  className=' text-white w-full px-36'>
    <div className={` relative w-full ${visible?"opacity-1":"opacity-0"} group cursor-pointer flex ${direction===`left`?`justify-start   
    ${visible? "animate-rightToLeft":" "}`:`justify-end 
     ${visible?" animate-leftToRight": ""}`} `}>
        <img src={image+""} alt="asd" className='w-96 grayscale group-hover:grayscale-0 duration-300 ' />
        <div  className={`absolute  ${direction==="left"?"left-40":"right-40"} top-1/2`}>
            <h3 className={`text-3xl font-bold w-full ${direction==="left"?"text-end":"text-start"} tracking-wider  mb-4`}>{category}</h3>
            <span className='w-[50rem] h-0.5 rounded-md bg-white block'></span>
        </div>
    </div>
</div>
  )
}
