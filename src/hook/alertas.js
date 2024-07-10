import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const showToast = (message, type) => {
    
    const options = {//options viene directamentee de tostify para establecer especificacioon
        position: "top-right",//posicion en pantalla
        autoClose: 5000,//cuanto dura en cerrarse
        hideProgressBar: false,//barra de progreso
        closeOnClick: true,//si se cierra cuando le da click
        pauseOnHover: true,//si pone el mause encima se pausa
        draggable: true,//arrastrable
        progress: undefined,//define el valor de la barra de progreso tiene que estar entre 1 y 0
    };
    //llamados diferentes opciones para alertas
    switch(type) {
        case 'success':
            toast.success(message, options);
            break;
        case 'error':
            toast.error(message, options);
            console.log('llego a error');
            break;
        case 'info':
            toast.info(message, options);
            break;
        case 'warn':
            toast.warn(message, options);
            break;
        default:
            toast(message, options);
            break;
    }
};

// Exporta las funciones
export { showToast };