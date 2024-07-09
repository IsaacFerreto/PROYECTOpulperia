import { useEffect, useState } from "react";
import { get } from "../hook/useFecht"

import CloseIcon from '@mui/icons-material/Close';
const arregloEliminar = JSON.parse(localStorage.getItem("items"))

const ProductoCarrito = ()=>{
    const [cantidad,setCantidad]=useState(0)
const [productosCarritos,setProductosCarritos]=useState([])
let conteo =0;

useEffect(()=>{
    getCarrito()
    // eslint-disable-next-line react-hooks/exhaustive-deps
},[cantidad])

const getCarrito = async()=>{
    let listacarrito=[]
    console.log(arregloEliminar);
    const productosGuardados = JSON.parse(localStorage.getItem("items"))
    for (let i = 0; i < productosGuardados.length; i++) {
        const getPorID = await get("products",productosGuardados[i])
        listacarrito.push(getPorID)
        console.log( listacarrito);
    }
    setProductosCarritos(listacarrito)


    console.log(productosCarritos);

}
let casa =arregloEliminar
function  eliminar(id) {
   console.log(casa);
    let indice = arregloEliminar.indexOf(id); // obtenemos el indice
    console.log(indice);
    arregloEliminar.splice(indice, 1); 
console.log(arregloEliminar+' arregloEliminar');
    localStorage.setItem('items', JSON.stringify(arregloEliminar)); 
    getCarrito()
}

function aumentar() {
    
    setCantidad(cantidad+conteo++)
}
function disminuir() {
    setCantidad(cantidad+conteo--)
}


    return(
        <>
        <div className="Separacion">
            <p>total:</p>
            <button>Apartar!</button>
        </div>


       <div className='cuadricula'>
    {productosCarritos.map((producto,index) => (
<div className="card" key={producto.id}>
<CloseIcon onClick={()=>eliminar(producto.id)} className="point"/>
  <img src={producto.imagen} alt={producto.nombre} style={{ width: "100%" }} />

  
  <div className="container" key={index}>


    <h4>
      <b>{producto.nombre}</b>
    </h4>

    <p>{producto.Categorias}</p>
    <p>₡{producto.precio}</p>
    <div className="AumentarDis">
        <button onClick={disminuir}>-</button>
    <p>{cantidad}</p>
        <button onClick={aumentar}>+</button>
    </div>
    
   
      
  </div>
</div>
))}

</div>
       
        </>
    )
}
export default ProductoCarrito