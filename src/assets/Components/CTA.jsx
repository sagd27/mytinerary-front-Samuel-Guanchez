import React from "react";
import { NavLink } from "react-router-dom";

export default function () {
  return (
    <>
      <div className="text-center max-w-xs w-auto h-auto m-1 shadow-lg sm:w-[60vw]">
        <p className="text-lg md:text-2xl w-full p-4 h-auto m-2 font-semibold text-white rounded-xl text-left bg-navbarfooter/90 leading-relaxed">
          "Plan your next adventure with personalized itineraries crafted by
          local experts. Discover the world your way!"
        </p>
        <button className="bg-navbarfooter text-white font-semibold p-4 m-4 rounded-full flex items-center justify-center hover:bg-green-400 hover:text-black transition-all duration-300 ease-in-out transform hover:scale-105">
          Explore now
          <NavLink className="ml-2 hover:underline" to="/Cities">
            <svg
              className="w-5 h-5 ml-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14M12 5l7 7-7 7"
              />
            </svg>
          </NavLink>
        </button>
      </div>
    </>
  );
}
