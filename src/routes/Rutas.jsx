import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import Home from "../pages/Home.jsx";
  import App from "../App.jsx";
import SobreNosotros from "../pages/SobreNosotros.jsx";

const Rutas =()=>{

    const router = createBrowserRouter([
        {
          path: "/",
          element: <App/>,
        },
        {
          path: "/home",
          element: <Home/>,
        },
        {
          path: "/sobrenosotros",
          element: <SobreNosotros/>,
        }
      ]);

    return(<>
    
    <RouterProvider router={router} />
    </>)
}
export default Rutas