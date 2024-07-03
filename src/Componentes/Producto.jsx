import { useEffect} from "react";
import { useState } from "react";
import { get } from "../hook/useFecht";
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import { deleteMethod } from "../hook/useFecht";
import ModalCerrar from "./ModalCerrar";



const Producto =()=>{


  let Iniciado = sessionStorage.getItem("iniciada")
  let inicia =JSON.parse(Iniciado)
    const [productos,setProductos]=useState([])
    const [cerrarModal,setCerrarModal]=useState(false)
   

    useEffect(()=>{
        console.log("ENTRA productos");  
        getUsuario()
       

    },[])
    const getUsuario = async()=>{
      const  dataProductos =await get("products","")
      setProductos(dataProductos)
      console.log(dataProductos);
  }

    function cambiarEstado() {
      setCerrarModal(!cerrarModal)
    }


 function eliminarObjeto(producto) {
  console.log('llega aca');
  deleteMethod('products/',producto)
  getUsuario()
  console.log(producto);
  
}



return(<>
<div className="cuadricula">
 {cerrarModal?<ModalCerrar funcion={cambiarEstado}/>:<></>}

 {productos.map((producto,index) => (
<div className="card" key={producto.id}>
  <img src={producto.imagen} alt="Avatar" style={{ width: "100%" }} />
  <div className="container" key={index}>
    <h4>
      <b>{producto.nombre}</b>
    </h4>
    <p>Architect &amp; Engineer</p>
    {inicia[1]?<p>{producto.cantidad}</p>:<></>}
    {inicia[1]?<EditIcon/>:<></>}
    {inicia[1]?<CloseIcon className="point"
     onClick={
      (e)=>eliminarObjeto(producto.id)}/>:<></>}
    <button>Agregar al carrito</button>
  </div>
</div>
))}
</div>
</>)
}
export default Producto;