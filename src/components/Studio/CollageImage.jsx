import React, { useEffect, useRef } from 'react'
import { useState } from 'react'

export default function CollageImage({cols=1,rows=1,image, type="image",text,name,position,center=false}) {
  const [isSquare,setIsSquare] = useState(false)
  const videoRef = useRef(null);
  const attemptPlay = () => {
    videoRef &&
    videoRef?.current &&
    videoRef?.current.play().catch(error => {
        console.error("Error attempting to play", error);
      });
      videoRef?.current?.play();
    console.log(videoRef);
  };

  useEffect(()=>{
        attemptPlay()
    if(cols!==rows)
      setIsSquare(false)
    else 
      setIsSquare(true)
    

  },[])
  return (
    // <div style={{ backgroundImage: `url(${image})`}} className={`relative col-span-1 w-full h-full row-span-1 aspect-square bg-cover ${isSquare?"aspect-square":"sm:aspect-video lg:aspect-auto"} ${"lg:col-span-"+cols} ${"lg:row-span-"+rows} ${rows>cols?"row-span-1 ":""} 
    // ${cols>rows?"sm:col-span-"+cols:""} ${type==="image"?"bg-center":""} ${type==="text"?"flex__center":""}` }  >
    // {type === "text" && (<span className='whitespace-pre-wrap p-6 h-full text-white text-sm sm:text-sm leading-loose 2xl:text-[1em] sm:leading-relaxed flex__center'>{text}</span>)}
    //     {type === "team" && (
    //       <span className='flex w-fit absolute bottom-0 left-0 bg-black p-2 min-w-[100px] text-white text-[.8em] sm:text-[.65em] md:text-xs  whitespace-nowrap  overflow-hidden  font-manrope font-bold tracking-wide'>{name} 
    //         <span className={`font-light w-fit before:content-[""] before:h-full before:w-0.5 before:mx-2 before:bg-white  before:inline-block flex`}>   {position}</span>
    //       </span>
    //     )}
    // </div>

    <div className={`relative col-span-1 w-full h-full row-span-1 aspect-square bg-cover ${isSquare?"!aspect-square":"sm:!aspect-video lg:!aspect-auto"} ${"lg:!col-span-"+cols} ${"lg:!row-span-"+rows} ${rows>cols?"row-span-1 ":""} 
    // ${cols>rows?"sm:col-span-"+cols:""} ${type==="image"?"bg-center":""} ${type==="text"?"flex__center":""}` }>
      {type==="video"?
      
      ( <video controls playsInline ref={videoRef} loop={true} autoPlay  muted  className="object-center object-cover h-full w-full">
      <source src={image} type="video/mp4"/>
      Your browser does not support the video tag.

    </video>)
            :( 
              <div className='h-full w-full'>
                      <div className='bg-transparent absolute z-20 w-full h-full left-0 top-0 '/>
                      <img src={image} alt="" className={` object-cover object-top w-full h-full ` }/>
              </div>    
             
    )}
    {type === "text" && (<span className='whitespace-pre-wrap p-6 h-full absolute left-0 top-0 bg-black text-white text-sm sm:text-sm leading-loose 2xl:text-[1em] sm:leading-relaxed flex__center'>{text}</span>)}
        {type === "team" && (
          <span className='flex w-fit absolute bottom-0 left-0 bg-black p-2 min-w-[100px] text-white text-[.8em] sm:text-[.65em] md:text-xs  whitespace-nowrap  overflow-hidden  font-manrope font-bold tracking-wide'>{name} 
            <span className={`font-light w-fit before:content-[""] before:h-full before:w-0.5 before:mx-2 before:bg-white  before:inline-block flex`}>   {position}</span>
          </span>
        )}
    </div>
    
  )
}
