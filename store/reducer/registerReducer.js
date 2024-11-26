import { createReducer } from "@reduxjs/toolkit";
import { createUser } from "../action/actionRegister";

const initialState = {
    register: [],
    loading: true,
    error: false,
}

const reducerRegister = createReducer(initialState,(builder) => {
    builder.addCase(createUser.fulfilled,(state,action)=>{
        state.loading = false;
        state.register = action.payload;
        state.error = false;

    }).addCase(createUser.pending,(state,action)=>{
        state.loading = true;
        state.error = false;
        state.register = [];
    }).addCase(createUser.rejected,(state,action)=>{
        state.loading = false;
        state.error = true;
        state.register = [];
    })
})

export default reducerRegister