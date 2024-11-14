import React from 'react'
import CityDetails from '../Components/CardsItineraries'


export default function Details() {
  return (
    <div className="min-h-[70vh]">
    <div className="relative">
      <img
        src="https://media.istockphoto.com/id/1322517873/photo/hat-map-camera-sunglasses-travelogue-pen-departure-for-a-travel.jpg?s=612x612&w=0&k=20&c=R0QEmGGkR6c-2quD6FRrgxOrGylXWmBl91Kx2SO0OqU="
        alt="Hero Background"
        className="w-full h-[50vh] object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold text-white ">
          Itinerary
        </h1>
      </div>
    </div>

    <div>
        <CityDetails></CityDetails>
    </div>
  </div>
  )
}