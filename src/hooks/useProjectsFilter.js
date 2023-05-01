import { useEffect, useState } from "react";
import useSelectedCategory from "./useSelectedCategory";
import projectService from "../services/projectService";

export const useProjectsFilter = () => {
  const data = projectService();
  const [filterData, setFilterData] = useState(data);
  const category = useSelectedCategory();

  const doFilterData = () => {
    if (category.selected === "Todo") setFilterData(data);
    else
      setFilterData(data.filter((item) => item.category === category.selected));
  };

  useEffect(() => {
    doFilterData();
  }, [category.selected]);

  return { filterData };
};

export default useProjectsFilter;
