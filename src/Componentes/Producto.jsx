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
        }
        getUsuario()
        console.log(productos);
    },[])

return(<>
<div className="card">
  <img src="img_avatar.png" alt="Avatar" style={{ width: "100%" }} />
  <div className="container">
    <h4>
      <b>John Doe</b>
    </h4>
    <p>Architect &amp; Engineer</p>
  </div>
</div>

</>)
}
export default Producto;