import { createReducer } from "@reduxjs/toolkit"
import { setItinerary } from "../action/actionItirines.js"

const initialState ={
        cities: [],
        itineraries: [],
        loading: true,
        error: true
}

export const itineraryReducer = createReducer(initialState,(builder) => {

        builder.addCase(setItinerary.pending, (state)=>{
                state.loading = true
        })
        .addCase(setItinerary.fulfilled, (state, action) =>{
                state.loading == false 
                state.itineraries = action.payload
        })
        .addCase(setItinerary.rejected, (state) =>{
                state.error = true
        })
        
})