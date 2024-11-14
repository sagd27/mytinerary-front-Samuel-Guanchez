import React from "react";
import CityCards from "../Components/CardsCtites.jsx";

export default function Cities() {
  return (
    <div className="min-h-[70vh]">
      <div className="relative">
        <img
          src="https://images2.alphacoders.com/592/592195.jpg"
          alt="Hero Background"
          className="w-full h-[50vh] object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Cities
          </h1>
        </div>
      </div>

      <div>
        <CityCards></CityCards>
      </div>
    </div>
  );
}
