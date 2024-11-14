import { createReducer } from "@reduxjs/toolkit"
import { filterImput, setCity } from "../action/actionCity.js"


const stateInital = {
        cities: [],
        filterValue: "",
        loading: true,
        error: false,
}

export const cityReducer = createReducer(stateInital, (builder) =>{
        builder.addCase(setCity.pending, (state)=> {
                state.loading = true
        })
        .addCase(setCity.fulfilled, (state, action)=> {
                state.loading = false
                state.cities= action.payload

        })
        .addCase(setCity.rejected, (state)=> {
                state.error = true

        })
        .addCase(filterImput,(state,action)=> {
                state.filterValue = action.payload
        })


        
})