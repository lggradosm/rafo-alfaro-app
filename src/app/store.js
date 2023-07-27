import { configureStore } from "@reduxjs/toolkit";
import pageLoadedReducer from "./reducers/pageLoadedReducer";
import projectReducer from "./reducers/projectReducer";
export default configureStore({
  reducer: {
    pageLoaded: pageLoadedReducer,
    projectReducer: projectReducer,
  },
});
