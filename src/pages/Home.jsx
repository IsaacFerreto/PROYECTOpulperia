import { useState } from "react";
import Navbar from "../Componentes/Navbar";
import Producto from "../Componentes/Producto";

const Home =()=>{


    const [categoria,setCategoria]=useState('')
function confites() {
    setCategoria('?Categorias=confites')
}
function limpieza() {
    setCategoria('?Categorias=limpieza')
}
function comida() {
    setCategoria('?Categorias=comida')
}
function casa() {
    setCategoria('/')
    
}
function busqueda(palabra) {
    console.log(palabra);
    setCategoria(`?nombre=comida${palabra}`)
}

    return(
        <>
        <Navbar comida={comida} limpieza={limpieza} confite={confites} casa={casa} busqueda={busqueda}/>
        <Producto categoria={categoria}/>
        </>
        
    )
}
export default Home; 