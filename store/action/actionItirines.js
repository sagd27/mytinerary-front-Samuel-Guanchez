import { createAsyncThunk } from "@reduxjs/toolkit";

export const setItinerary = createAsyncThunk("Set_Itinerary", async (city) => {
  try {
    const itinerariesResponse = await fetch(
      `http://localhost:8080/api/itineraries/itineraryCity/${city._id}`
    );
    const itinerariesData = await itinerariesResponse.json();

    return itinerariesData.response;
    
  } catch (error) {
    console.error("Error fetching city details or itineraries:", error);
  }
});
