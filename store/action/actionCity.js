import { createAction, createAsyncThunk } from "@reduxjs/toolkit";

export const  setCity = createAsyncThunk("Set_City", async(filterValue)=> {
        try {

                const queryParam = filterValue ? `?name=${filterValue}` : ""; // Agregar parámetro de búsqueda
                const response = await fetch(`http://localhost:8080/api/cities/all${queryParam}`);
                const data = await response.json();
      
                
                return data.response
                
              } catch (error) {
                console.error("Error fetching cities:", error);
              }
} )

export const filterImput = createAction("Filter_Imput")
