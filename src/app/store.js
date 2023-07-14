import { configureStore } from "@reduxjs/toolkit";
import pageLoadedReducer from "./reducers/pageLoadedReducer";
export default configureStore({
  reducer: {
    pageLoaded: pageLoadedReducer
  },
});
