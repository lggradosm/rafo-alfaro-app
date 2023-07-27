import { useDispatch, useSelector } from "react-redux";
import { loadProject, projectReducer } from "../app/reducers/projectReducer";
export const useDetailProject = () => {
  const detailProject = useSelector((state) => state.projectReducer.value);
  const dispatch = useDispatch();

  const load = (data) => {
    dispatch(loadProject(data));
  };
  return { detailProject, load, loading };
};
export default useDetailProject;
