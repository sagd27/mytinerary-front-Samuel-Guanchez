import { createReducer } from "@reduxjs/toolkit";
import { login, setUser,logout } from "../action/actionAuth";

const initialState = {  
    loading : false,
    error : false,
    user : null,
    token : null
}

 const authReducer = createReducer(initialState,(builder) => {
    builder.addCase(login.fulfilled,(state,action)=>{
        console.log("Se ejecuto correctamente");
        console.log(action);
        state.loading = false,
        state.error = false,
        state.user = action.payload.user,
        state.token = action.payload.token
        localStorage.setItem("user", action.payload.user)
    })
    .addCase(login.pending,(state,action)=>{
        console.log("Se inicio sign in");
        console.log(action);
        state.loading = true,
        state.error = false,
        state.user = null,
        state.token = null
    })
    .addCase(login.rejected,(state,action)=>{
        console.log("Error en el sign in");
        localStorage.removeItem("token");
        state.loading = false,
        state.error = true,
        state.user = null,
        state.token = null
    })

    .addCase(setUser,(state,action)=>{
        console.log(action.payload, 'este es el payload')
        state.user = action.payload.user,
        state.token = action.payload.token,
        action.payload.token && localStorage.setItem('token',action.payload.token)
    })

    .addCase(logout,(state,action)=>{
        localStorage.removeItem("token");
        state.user = null,
        state.token = null
    })

})

export default authReducer;