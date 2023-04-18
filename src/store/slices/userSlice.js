import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    email: '',
    emailVerified: '',
    uid: ''
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        addUser(state,action){
            state.uid = action.payload.uid
            state.email = action.payload.email
            state.emailVerified = action.payload.emailVerified
        }
    }
})
//сам ти лох, сука
export const {addUser} = userSlice.actions;
export default userSlice.reducer