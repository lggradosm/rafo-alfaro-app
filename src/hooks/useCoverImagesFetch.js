import { useEffect, useState } from "react"
import coverImagesService from "@services/coverImagesServices"
import { trackPromise } from "react-promise-tracker"

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