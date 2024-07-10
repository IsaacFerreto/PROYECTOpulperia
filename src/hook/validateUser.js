let Sesion = JSON.parse(sessionStorage.getItem('iniciada')) ;
//  COMANDO PARA ABRIR SERVER json-server --watch db.json --port 3001
 const validateUser=(usuarios,nombre,contrasena)=>{
    const user=usuarios.find((user)=>nombre === user.nombre && contrasena=== user.contrasena);
    if (user) {
        Sesion=[user.id,user.administrador,user.nombre]
        sessionStorage.setItem('iniciada', JSON.stringify(Sesion));

        return true
    }else{
        return false 
    }
}
const validarNumeros=(precio,cantidad)=>{
    if ( isNaN(precio)||isNaN(cantidad)) {
        return false
    }else{
        return true
    }
}
const validarVacios=(nombre,precio,archivo,cantidad)=>{
    if (nombre.trim()===''||precio.trim()===''||archivo.trim()===''||cantidad.trim()==='') {
        return false
    }else{
        return true
    }
}
const validateName=(usuarios,nombre)=>{
    return usuarios.find((user)=>nombre === user.nombre)
}

const validateEmpty=(nombre,correo,contrasena)=>{
if (nombre.trim()===''||correo.trim()===''||contrasena.trim()==='') {
    return false
} else {
    return true
}


}
const validateEmail=(correo)=>{
    var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    if( validEmail.test(correo) ){
		
		return true;
	}else{
		
		return false;
	}
}
function validatePassword(contrasena) {
    
    if (contrasena.length<8) {
     
        return false
    }else{ return true}
}

export {validateUser,validateName,validateEmpty,validateEmail,validatePassword,validarVacios,validarNumeros}