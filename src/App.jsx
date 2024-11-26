import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./assets/Pages/Home";
import StandartLayout from "./assets/Layouts/StandartLayout";
import Cities from "./assets/Pages/Cities";
import Details from "./assets/Pages/Detail";
import SignRoute from "./assets/Components/SignInRoute";
import SignIn from "./assets/Pages/SignIn";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setUser } from "../store/action/actionAuth";
import Register from "./assets/Pages/Register";


const routers = createBrowserRouter([
  {element: <StandartLayout></StandartLayout>,
    children: [
      {path: "/", element:<Home></Home>},
      {path: "/Home", element:<Home></Home>},
      {path: "/Cities", element:<Cities></Cities>},
      {path: "/details", element:<Details></Details>},
      {path: "/sign-in", element: (<SignRoute><SignIn></SignIn></SignRoute>),},
      {path: "/Register", element:<Register></Register>}
    ]
  },
 
]) 

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


function App() {
 
  const dispatch = useDispatch();
  let token = localStorage.getItem("token");
  if (token) {
    console.log("token de app", token);
    
    loginWithToken(token).then((user) => {
      console.log(user,"user en app");
      
      dispatch(setUser({ user, token }));
    });
  }


  return (
<>
   <RouterProvider router={routers} > </RouterProvider>
</>
  );
}

export default App;
