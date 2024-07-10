import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  import Home from "../pages/Home.jsx";
  import App from "../App.jsx";
import SobreNosotros from "../pages/SobreNosotros.jsx";
import AgregarContenido from "../pages/AgregarContenido.jsx";
import PrivateRoute from "../private/PrivateRoute.jsx";
import Carrito from "../pages/Carrito.jsx";
// import UploadImage from "../hook/UploadImage.jsx";
AgregarContenido

const Rutas =()=>{

    const router = createBrowserRouter([
        {path: "/",element: <App/>,},
        {path: "/home",element: <Home/>, },
        {path: "/sobrenosotros",element: <SobreNosotros/>,},
        {path: "/carrito",element: <Carrito/>,},

        // {path: "/test",element: <UploadImage/>,},
        {path: "/agregarcontenido", element: <PrivateRoute Component={AgregarContenido}/>, }
      ]);

    return(<>
    
    <RouterProvider router={router} />
    <ToastContainer
  position="top-right"
  autoClose={5000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
/>
    </>)
}
export default Rutas