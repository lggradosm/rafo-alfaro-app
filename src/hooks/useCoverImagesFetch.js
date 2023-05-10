import { useEffect, useState } from "react"
import coverImagesService from "@services/coverImagesServices"

export default function useCoverImagesFetch (){
    const [loaded, setLoaded] = useState(false)
    const [data,setData] = useState(null)

    useEffect(()=>{
        coverImagesService().then((res)=> {
      
          setData(res)
          setLoaded(true)
        }
      
          )

      },[])
    
    return {data,loaded}

}