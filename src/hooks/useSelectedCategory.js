import { useDispatch, useSelector } from "react-redux";
import { changeCategory } from "../app/reducers/projectCategoryReducer";

export const useSelectedCategory = () => {
  const selected = useSelector((state) => state.projectCategory.value);
  const dispatch = useDispatch();

  const selectCategory = (category) => {
    dispatch(changeCategory(category));
  };
  return { selected, selectCategory };
};
export default useSelectedCategory;
