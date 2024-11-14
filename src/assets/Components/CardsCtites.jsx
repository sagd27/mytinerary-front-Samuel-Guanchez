import React, { useState, useEffect } from "react";
import CityFilter from "./CityFilter";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const CityCards = () => {
  
  const {cities, filterValue} = useSelector(state => state.cityReducer)

  const navigate = useNavigate(); // Inicializa navigate

  const handleViewMore = (city) => {
    navigate(`/details`, {state: city});
  };

  return (
    <div className="p-4">
      <CityFilter />
      <div className="flex flex-wrap justify-around">
        {cities.map((city) => (
          <div key={city._id} className="w-full sm:w-1/2 lg:w-1/4 m-2  transform transition duration-500 hover:scale-105  ">
            <div className="bg-black rounded-lg overflow-hidden shadow-lg">
              <img
                src={city.photo}
                alt={city.name}
                className="w-full h-48 object-cover"
              />
              <div className="flex p-4 justify-between">
                <h5 className="text-xl font-semibold text-white">
                  {city.name}
                </h5>
                <button
                  className="mt-2 bg-blue-800 text-white py-1 px-3 rounded hover:bg-slate-500"
                  onClick={() => handleViewMore(city)} // Redirigir con el ID de la ciudad
                >
                  View More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CityCards;

