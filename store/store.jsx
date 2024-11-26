import { configureStore } from "@reduxjs/toolkit";
import { cityReducer } from "./reducer/cityReducer.js";
import { itineraryReducer } from "./reducer/itineraryReducer.js";
import authReducer from "./reducer/authReducer"
import reducerRegister from "./reducer/registerReducer.js";



export const store = configureStore({reducer: 
        {cityReducer: cityReducer ,
        itineraryReducer: itineraryReducer ,authStore: authReducer
        , registerStore: reducerRegister}
})

