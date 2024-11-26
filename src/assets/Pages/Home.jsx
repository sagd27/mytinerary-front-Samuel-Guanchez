import React, { useEffect } from 'react'
import Carrusel from '../Components/Carrusel'
import Welcome from '../Components/Welcome'
import CTA from '../Components/CTA'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../../../store/action/actionAuth';
import axios from 'axios';

const loginWithToken = async (token) => {
  try {
    console.log("Se ejecuto Login With Token");

    const response = await axios.get(
      "http://localhost:8080/api/auth/token",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
};

export default function Home() {

  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    if (token) {
      localStorage.setItem("token", token);
console.log('entro al if del token', token);

      loginWithToken(token).then((user) => {
        dispatch(setUser({ user, token }));
        console.log(user,'este es el usuarios');
        
      });
      navigate("/")
    }
    
  }, [dispatch,navigate]);
  return (
   
    <>
        <Welcome></Welcome>
        
        <div className='flex flex-col min-h-[80vh] justify-around items-center sm:flex-row w-full h-auto' >
        <CTA />
        <Carrusel></Carrusel>
        </div>
        </>
  )
}
