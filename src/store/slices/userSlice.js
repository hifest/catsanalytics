import {createSlice} from "@reduxjs/toolkit";

const catSlice = createSlice({
    name: "cat",
    initialState: {},
    reducers:{
        addCat(state,action){
            console.log(state,action)
        }
    }
})

export const {addCat} = catSlice.actions;
export default catSlice.reducer