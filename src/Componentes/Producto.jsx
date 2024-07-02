import { useEffect} from "react";
import { useState } from "react";
import { get } from "../hook/useFecht";
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';



const Producto =()=>{
  let Iniciado = sessionStorage.getItem("iniciada")
  let inicia =JSON.parse(Iniciado)
    const [productos,setProductos]=useState([])
   

    useEffect(()=>{
        console.log("ENTRA productos");
        const getUsuario = async()=>{
            const  dataProductos =await get("products","")
            setProductos(dataProductos)
            console.log(dataProductos);
        }
        getUsuario()
       

    },[])

return(<>
<div className="cuadricula">

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
    {inicia[1]?<CloseIcon />:<></>}
    <button>Agregar al carrito</button>
  </div>
</div>
))}
</div>
</>)
}
export default Producto;