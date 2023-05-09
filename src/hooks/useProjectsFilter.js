import { useEffect, useState } from "react";
import useSelectedCategory from "./useSelectedCategory";
import projectService from "../services/projectService";

export const useProjectsFilter = () => {
  const [data,setData] = useState(projectService());
  const [filterData, setFilterData] = useState(data);
  const category = useSelectedCategory();

  const doFilterData = () => {
    if (category.selected === "Todo") setFilterData(data);
    else
      setFilterData(data.filter((item) => item.category === category.selected));
  };

  const duplicate = ()=>{
    setData((prev)=>prev.concat(data))
  }

  useEffect(() => {
    doFilterData();
  }, [category.selected,data]);

  return { filterData, duplicate };
};

export default useProjectsFilter;
