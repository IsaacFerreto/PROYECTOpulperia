import { useEffect} from "react";
import { useState } from "react";
import { get } from "../hook/useFecht";
const Producto =()=>{
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
  <img src="img_avatar.png" alt="Avatar" style={{ width: "100%" }} />
  <div className="container" key={index}>
    <h4>
      <b>{producto.nombre}</b>
    </h4>
    <p>Architect &amp; Engineer</p>
    <input type="number"/>
    <button>Agregar al carrito</button>
  </div>
</div>
))}
</div>
</>)
}
export default Producto;