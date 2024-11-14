import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function StandartLayout() {
  
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar></Navbar>

        <main className="flex flex-col flex-grow bg-fondo justify-center">
          <Outlet />
        </main>

        <Footer></Footer>
      </div>
    </>
  );
}
