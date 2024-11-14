import { configureStore } from "@reduxjs/toolkit";
import { cityReducer } from "./reducer/cityReducer.js";
import { itineraryReducer } from "./reducer/itineraryReducer.js";


export const store = configureStore({reducer: {cityReducer: cityReducer ,itineraryReducer: itineraryReducer }})

