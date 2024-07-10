import { useState } from "react";
import Navbar from "../Componentes/Navbar";
import Producto from "../Componentes/Producto";
import ModalPedidos from "../Componentes/ModalPedidos";

const Home =()=>{


const [notificaciones,setNotificaciones]=useState(false)
    const [categoria,setCategoria]=useState('')

    function showNotifications() {
        setNotificaciones(!notificaciones)
        console.log('funciona boton');
    }
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
    setCategoria(`?nombre=${palabra}`)
    console.log(categoria);
}

    return(
        <>
        <Navbar comida={comida} limpieza={limpieza} confite={confites} casa={casa} busqueda={busqueda} cambioNot={showNotifications}/>
        {notificaciones? <ModalPedidos/>:<></>}
        <Producto categoria={categoria}/>
        </>
        
    )
}
export default Home; 