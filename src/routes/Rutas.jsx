import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import Home from "../pages/Home.jsx";
  import App from "../App.jsx";
import SobreNosotros from "../pages/SobreNosotros.jsx";
import AgregarContenido from "../pages/AgregarContenido.jsx";
import PrivateRoute from "../private/PrivateRoute.jsx";
AgregarContenido

const Rutas =()=>{

    const router = createBrowserRouter([
        {path: "/",element: <App/>,},
        {path: "/home",element: <Home/>, },
        {path: "/sobrenosotros",element: <SobreNosotros/>,},
        {path: "/agregarcontenido", element: <PrivateRoute Component={AgregarContenido}/>, }
      ]);

    return(<>
    
    <RouterProvider router={router} />
    </>)
}
export default Rutas