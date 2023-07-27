import { createSlice } from "@reduxjs/toolkit";

export const projectReducer = createSlice({
  name: "projectReducer",
  initialState: {
    value: {},
  },
  reducers: {
    loadProject: (state, actions) => {
      state.value = actions.payload;
    },
  },
});
export const { loadProject } = projectReducer.actions;
export default projectReducer.reducer;
