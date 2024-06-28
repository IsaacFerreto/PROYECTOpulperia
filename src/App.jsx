
import './App.css'
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
    </>
    
  )
}

export default App
