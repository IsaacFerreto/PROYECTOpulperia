/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { get } from "../hook/useFecht";
import { validateUser } from "../hook/validateUser";
import Titulo from "../Componentes/Titulo";
import { useNavigate } from "react-router-dom";


const Ingreso =({pageState})=>{
    const [nombre,setNombre]=useState('');
    const [contrasena,setContrasena]=useState('');
    const [usuarios,setUsuarios]=useState([])
    const [movTitulo,setMovTitulo]=useState("")
    const navigate=useNavigate();

    useEffect(()=>{
        console.log("ENTRA");
        const getUsuario = async()=>{
            const  dataUsuarios =await get("users","")
            setUsuarios(dataUsuarios)
        }
        getUsuario()
        console.log(usuarios);
    },[])
    



    return(
    <>

    <Titulo titulo={"Linda Hora"} classT={movTitulo}/>
    <div className="CajaRegistro" 
    onMouseOver={()=>{setMovTitulo("title-app-hover");}}
     onMouseOut={()=>{setMovTitulo("")}}>
        <h1>INGRESA</h1>
        <div>
        <label htmlFor="nombre">Nombre</label>
        <input type="text" id="nombre" onChange={(e)=>setNombre(e.target.value)}/>
        </div>
       
        <div>
            <label htmlFor="contrasena">Contraseña</label>
             <input type="text" id="contrasena"onChange={(e)=>setContrasena(e.target.value)}/>
        </div>
       
        <button onClick={()=>{
            if(validateUser(usuarios,nombre,contrasena)){
               navigate("/home")
            }else{
                alert("NO ENTRA")
            }
        }}>Ingresa</button>
        <a onClick={pageState}>No tienes cuenta?</a>
    </div>
    </>)
}

export default Ingreso;