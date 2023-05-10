import { configureStore } from "@reduxjs/toolkit";
import projectCategoryReducer from "./reducers/projectCategoryReducer";
import pageLoadedReducer from "./reducers/pageLoadedReducer";
export default configureStore({
  reducer: {
    projectCategory: projectCategoryReducer,
    pageLoaded: pageLoadedReducer
  },
});
