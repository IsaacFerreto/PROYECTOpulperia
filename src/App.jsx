
import './App.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react'
import Registro from './pages/Registro'
import Ingreso from './pages/Ingreso'

function App() {
const [pagina,setPagina]=useState(false)


function pageState() {
  setPagina(!pagina)
}
  return (
    <>
    {!pagina?<Ingreso pageState={pageState}/>:<Registro pageState={pageState}/>  }
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
    </>
    
  )
}

export default App
