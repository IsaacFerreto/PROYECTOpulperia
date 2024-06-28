/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { post, get } from "../hook/useFecht";
import { validateName,validateEmpty,validateEmail,validatePassword } from "../hook/validateUser";
import Titulo from "../Componentes/Titulo";
const Registro=( {pageState})=>{

    const [movTitulo,setMovTitulo]=useState("")   

const url="http://localhost:3001/users";//URL del API


const [usuarios,setUsuarios]=useState([])
useEffect(()=>{
    console.log("ENTRA");
    const getUsuario = async()=>{
        const  dataUsuarios =await get("users","")
        setUsuarios(dataUsuarios)
    }
    getUsuario()
    console.log(usuarios);
},[])

    //Setiando entradas de texto
const [nombre,setNombre]=useState('');
const [correo,setCorreo]=useState('');
const [contrasena,setContrasena]=useState('');
const [verfContrasena,setVerfContrasena]=useState('');

function verificacion() {
    //funcion para verificar que las contraseñas coinciden
if (contrasena===verfContrasena) {
    //creacion objeto usuario
    let user={
    nombre:nombre,
    correo:correo,
    contrasena:contrasena
    }
    return user
}else{
    //cambiar por SWEETALERT
    alert('No coinciden')
}

}


function usePost() {
if (validateEmpty(nombre,correo,contrasena)) {
if (!validateName(usuarios,nombre)) {
if (validateEmail(correo)) {
    if (validatePassword(contrasena)) {
        
   
    


    const usuario= verificacion();
post(url,usuario)

alert('usuario creado, sera redirigido a pagina de inicio')
setTimeout(() => {
    pageState()
    
}, 1000);
}else{
    console.log('asdf');
}
}else{
    alert('no funca')
}

} else{
    alert('Usuario Existe')
}


}else{
    alert('LLENE CAMPOS')
}

    
}




    return(<>
     <Titulo titulo={"Linda Hora"} classT={movTitulo}/>
    <div className="CajaRegistro" 
    onMouseOver={()=>{setMovTitulo("title-app-hover");}}
     onMouseOut={()=>{setMovTitulo("")}}>
        <h1>Registro</h1>
        <div>
        <label htmlFor="nombre">Nombre</label>
        <input type="text" id="nombre" onChange={(e)=>setNombre(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="correo">Correo</label>
             <input type="text" id="correo" onChange={(e)=>setCorreo(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="contrasena">Contraseña</label>
             <input type="text" id="contrasena"onChange={(e)=>setContrasena(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="verfContrasena">Repita la Contraseña</label>
             <input type="text" id="verfContrasena"onChange={(e)=>setVerfContrasena(e.target.value)}/>
        </div>
        <button onClick={usePost}>Registro</button>
        <a onClick={pageState}>Ya tienes cuenta?</a>
    </div>
    </>)
}

export default Registro;