import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./assets/Pages/Home";
import StandartLayout from "./assets/Layouts/StandartLayout";
import Cities from "./assets/Pages/Cities";
import Details from "./assets/Pages/Detail";

const routers = createBrowserRouter([
  {element: <StandartLayout></StandartLayout>,
    children: [
      {path: "/", element:<Home></Home>},
      {path: "/Home", element:<Home></Home>},
      {path: "/Cities", element:<Cities></Cities>},
      {path: "/details", element:<Details></Details>}
    ]
  },
 
]) 



function App() {
 
  return (
<>
   <RouterProvider router={routers} > </RouterProvider>
</>
  );
}

export default App;
