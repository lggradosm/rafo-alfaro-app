import { configureStore } from "@reduxjs/toolkit";
import projectCategoryReducer from "./reducers/projectCategoryReducer";
export default configureStore({
  reducer: {
    projectCategory: projectCategoryReducer,
  },
});
