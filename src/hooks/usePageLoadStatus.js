import { useDispatch, useSelector } from "react-redux";
import {pageLoaded,pageLoading} from "../app/reducers/pageLoadedReducer.js"
export const usePageLoadStatus =()=>{
  const isLoaded = useSelector((state) => state.pageLoaded.value);
  const dispatch = useDispatch();
  
  const loaded = () => {
    dispatch(pageLoaded())

  }
  const loading = ()=>{
    dispatch(pageLoading())
  }
  return {isLoaded,loaded,loading}
}
export default usePageLoadStatus