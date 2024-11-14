import { useState } from "react";
import { LiaMoneyBillSolid } from "react-icons/lia";

export const CardItineraries = ({ itinerary }) => {
  const [showMore, setShowMore] = useState(false);

  const handlerShow = () => {
    setShowMore((s) => !s);
  };

  return (
    <div className="w-1/2 sm:w-1/4 lg:w-1/4 m-2 transform transition duration-700 hover:scale-105 flex ">
      <div className="bg-navbarfooter text-fondo rounded-lg shadow-lg p-3 w-[90%] flex flex-col items-center justify-center">
        <img
          src={itinerary.photo}
          alt={itinerary.name}
          className="w-40 h-40 object-contain rounded-full"
        />
        <h3 className="text-xl font-bold mt-2">{itinerary.name}</h3>
        <p className="text-fondo mt-2">
          Duration: {itinerary.duration} Days
        </p>
        <div className="flex text-left gap-3 items-center">
          <p className="text-fondo">Price: {itinerary.price}</p>
          {Array.from({ length: itinerary.price }).map((_, i) => (
            <LiaMoneyBillSolid key={i} className="text-green-800 size-7" />
          ))}
        </div>
        <p className="text-fondo mt-1">Likes: {itinerary.Likes}</p>
        <div className="text-center text-fondo mt-1">
          Hashtags: <p className="text-blue-500">{itinerary.Hashtags.join(", ")}</p>
        </div>

        {/* Botón para mostrar más información */}
        <button
          onClick={handlerShow}
          className="mt-4 bg-blue-700 hover:bg-blue-600 text-white rounded px-4 py-2"
        >
          View More
        </button>

        {/* Contenido adicional con transición */}
        <div
          className={`transition-opacity duration-500 ease-in-out ${
            showMore ? "opacity-100 mt-4 p-2 border-t border-gray-300" : "opacity-0 h-0 overflow-hidden"
          }`}
        >
          {showMore && (
            <div>
              <h4 className="text-fondo">Activities and Comments:</h4>
              <p className="text-fondo">Under construction</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
