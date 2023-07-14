import { useEffect, useState } from "react";
import projectService from "../services/projectService";

export const useProjectsFilter = () => {
  const [data,setData] = useState(projectService());



  const duplicate = ()=>{
    setData((prev)=>prev.concat(data))
  }


  return { data, duplicate };
};

export default useProjectsFilter;
