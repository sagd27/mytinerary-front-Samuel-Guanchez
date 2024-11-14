import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { setItinerary } from "../../../store/action/actionItirines.js";
import { CardItineraries } from "./InfoItineraris.jsx";
import { LiaMoneyBillSolid } from "react-icons/lia";


const CityDetails = () => {
  const location = useLocation(); // Captura el ID de la ciudad desde la URL
  const city = location.state;
  const dispatch = useDispatch();
  const { itineraries } = useSelector(state => state.itineraryReducer);
  const navigate = useNavigate();  
  // Estado para controlar las tarjetas activas
  const [activeIndices, setActiveIndices] = useState([]);

  useEffect(() => {
    dispatch(setItinerary(city));
  }, [dispatch, city]);

  const handdlerNavigateBack = ()=>{
    navigate(-1)
  }



  return (
    <div className="pb-4 pt-4"  >
      <div
        className="mb-8 bg-cover bg-center rounded-lg h-[55vh]  w-full flex items-center justify-center text-center relative"
      >
        <img src={city.photo} className=" w-[92%] h-full object-cover " alt="" />
        <div className=" absolute h-full  top-0 flex flex-col items-center justify-center  gap-5  p-4 rounded-lg">
          <div className="h-[50%] flex flex-col bg-black/50 justify-center gap-5 p-5 ">
          <h1 className="text-3xl font-bold text-white">
            {city.name}, {city.country}
          </h1>
          <p className="text-lg text-gray-200 mt-2 font-semibold">{city.description}</p>
          <p className="text-gray-300 text-xl font-semibold mt-1">Continent: {city.continent}</p>
          <p className="text-gray-300 text-xlfont-semibold">Currency: {city.currency}</p>

          </div>  
          <button className="bg-blue-800 hover:bg-blue-600 p-2 font-semibold text-gray-300 rounded-xl" onClick={()=> handdlerNavigateBack()}> Return</button>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-6 text-center">Itineraries:</h2>
      <div className="flex flex-wrap w-full justify-center gap-10 mt-4">
        {itineraries.length > 0 ? (
          itineraries.map((itinerary) => (
            <CardItineraries itinerary={itinerary} key={itinerary._id}></CardItineraries>
          ))
        ) : (
          <div className=" mb-8 bg-cover bg-center rounded-lg h-[55vh]  w-full flex items-start justify-center text-center relative">
          <img src="https://pbs.twimg.com/media/FlcAVgFaUAABBuZ.jpg:large" className="h-full w-[92%] sm:w-[50%]" alt="" />
          <p className="text-fondo bg-black/20 absolute font-bold text-2xl p-2 mt-5 w-[90%] sm:w-[50%]">   We are sorry, there are no itineraries available for this city.</p>
         
          </div>
        )}
      </div>
    </div>
  );
};

export default CityDetails;
