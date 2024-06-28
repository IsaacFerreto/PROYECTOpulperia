 const validateUser=(usuarios,nombre,contrasena)=>{
    return usuarios.find((user)=>nombre === user.nombre && contrasena=== user.contrasena)
}

const validateName=(usuarios,nombre)=>{
    return usuarios.find((user)=>nombre === user.nombre)
}

const validateEmpty=(nombre,correo,contrasena)=>{
if (!nombre||!correo||!contrasena) {
    return false
} else {
    return true
}


}
const validateEmail=(correo)=>{
    var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    if( validEmail.test(correo) ){
		alert('Email is valid, continue with form submission');
		return true;
	}else{
		alert('Email is invalid, skip form submission');
		return false;
	}
}
function validatePassword(contrasena) {
    
    if (contrasena.length<8) {
        alert('contrasña debe tener mas de 8 caracteres')
        return false
    }else{ return true}
}

export {validateUser,validateName,validateEmpty,validateEmail,validatePassword}