import { createSlice } from "@reduxjs/toolkit";

export const pageLoadedReducer = createSlice({
    name: "pageLoaded",
    initialState:{
        value:false
    },
    reducers:{
        pageLoading: (state)=>{
            state.value = false
        },
        pageLoaded: (state)=>{
            state.value = true
        }
    }
})
export const { pageLoading, pageLoaded } = pageLoadedReducer.actions;
export default pageLoadedReducer.reducer;