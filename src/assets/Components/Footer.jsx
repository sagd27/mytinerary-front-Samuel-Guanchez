import React from 'react'
import { NavLink } from "react-router-dom";
import { FaCity } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";

export default function () {
  return (
    <footer className="flex flex-col sm:flex-row justify-around bg-navbarfooter text-letrasNavFooter font-semibold p-6">
    <div className="m-4 p-2">
      <p className="text-2xl mb-4">Cites:</p>
      <ul>
        <li className="hover:underline cursor-pointer mb-2">
          <NavLink to="/Home">Home</NavLink>
        </li>
        <li className="hover:underline cursor-pointer mb-2">
          <NavLink to="/Cities">Cities</NavLink>
        </li>
      </ul>
    </div>
  
    <div className="m-4 p-2">
      <p className="text-2xl mb-4">Contact Us</p>
      <ul>
        <li className="flex items-center mb-2">
          <FaCity className="w-5 h-5 mr-2"  />
          123 Street, City
        </li>
        <li className="flex items-center mb-2">
        <MdContactPhone   className="w-5 h-5 mr-2"/>
          <a href="mailto:contact@mytinerary.com" className="hover:underline">contact@mytinerary.com</a>
        </li>
        <li className="flex items-center mb-2">
           <FaPhoneVolume className="w-5 h-5 mr-2"/>
          <a href="tel:1234567890" className="hover:underline">(123) 456-7890</a>
        </li>
      </ul>
    </div>
  </footer>
  )
}
