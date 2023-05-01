import { createSlice } from "@reduxjs/toolkit";

export const projectCategoryReducer = createSlice({
  name: "projectCategory",
  initialState: {
    value: "Todo",
  },
  reducers: {
    changeCategory: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { changeCategory } = projectCategoryReducer.actions;
export default projectCategoryReducer.reducer;
