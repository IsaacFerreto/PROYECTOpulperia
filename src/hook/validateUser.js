let Sesion = JSON.parse(sessionStorage.getItem('iniciada')) ;
//  COMANDO PARA ABRIR SERVER json-server --watch db.json --port 3001
 const validateUser=(usuarios,nombre,contrasena)=>{//funcion para validar que el usuario sea igual al que tenemos en el servidor
    const user=usuarios.find((user)=>nombre === user.nombre && contrasena=== user.contrasena);
    if (user) {
        Sesion=[user.id,user.administrador,user.nombre]
        sessionStorage.setItem('iniciada', JSON.stringify(Sesion));//si todo funciona se manda informacion del usuario al session storage

        return true
    }else{
        return false 
    }
}
const validarNumeros=(precio,cantidad)=>{//se verifica si solo llegan numeros en los campos solicitados
    if ( isNaN(precio)||isNaN(cantidad)) {
        return false
    }else{
        return true
    }
}
const validarVacios=(nombre,precio,archivo,cantidad)=>{//verifica si en registro llegan los campos vacios
    if (!nombre||!precio||!archivo||!cantidad||nombre.trim()===''||precio.trim()===''||archivo.trim()===''||cantidad.trim()==='') {
        return false
    }else{
        return true
    }
}
const validateName=(usuarios,nombre)=>{//se valida existencia de usuario
    return usuarios.find((user)=>nombre === user.nombre)
}

const validateEmpty=(nombre,correo,contrasena)=>{//se validan vacios en usuarios
if (nombre.trim()===''||correo.trim()===''||contrasena.trim()==='') {
    return false
} else {
    return true
}


}
const validateEmail=(correo)=>{//formato de correo con regex
    var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    if( validEmail.test(correo) ){
		
		return true;
	}else{
		
		return false;
	}
}
function validatePassword(contrasena) {//que la contraseña tenga mas de 8 caractere
    
    if (contrasena.length<8) {
     
        return false
    }else{ return true}
}

export {validateUser,validateName,validateEmpty,validateEmail,validatePassword,validarVacios,validarNumeros}