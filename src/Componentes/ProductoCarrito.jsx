import { useEffect, useState } from "react";
import { get } from "../hook/useFecht"

import CloseIcon from '@mui/icons-material/Close';

const arregloEliminar = JSON.parse(localStorage.getItem("items"))

const ProductoCarrito = ()=>{
    const [carro, setCarro] = useState(JSON.parse(localStorage.getItem("items")) || []);
    const [cantidad,setCantidad]=useState({})
    const [productosCarritos,setProductosCarritos]=useState([])
    const [arrayPedidos, setArrayPedidos]=useState([]);
    const [arregloTemporal, setArregloTemporal]=useState([]);
    const [cantidadPT,setCantidadPT]=useState(0)
useEffect(()=>{
    getCarrito()
    // eslint-disable-next-line react-hooks/exhaustive-deps
},[carro])

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


function  eliminar(id) {
    const newCarro = carro.filter(itemId => itemId !== id);
    setCarro(newCarro);
    localStorage.setItem('items', JSON.stringify(newCarro));
    getCarrito()
}




const handleQuantityChange = (product, change) => { 

   let nuevaCantidad= (cantidad[product.id]||0)+change


       if (nuevaCantidad <= product.cantidad && nuevaCantidad >= 0) {

        
        setCantidad((prevCantidades) => ({
            ...prevCantidades,
            [product.id]: nuevaCantidad,
    
          }));
          setCantidadPT()
}
   
  };

  const calcularTotal = () => {
    return productosCarritos
      .map(producto => (cantidad[producto.id] || 0) * producto.precio)
      .reduce((total, precio) => total + precio, 0);
  };

  const crearPedido=()=>{
      let nuevoArreglo=arrayPedidos;
      
     productosCarritos.map(producto =>(setArregloTemporal((cantidad[producto.id] || 0),producto.nombre) ), nuevoArreglo.push(arregloTemporal))
    setArrayPedidos(nuevoArreglo)

    console.log(arrayPedidos);
}


    return(
        <>
        <div className="Separacion">
            <p>Total: ₡{calcularTotal()}</p>
            <button
            onClick={()=>{
                crearPedido()
            }}
            >Apartar!</button>
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
    <p >₡{producto.precio}</p>
    <div className="AumentarDis">
        <button  onClick={()=>handleQuantityChange(producto,-1)}>-</button>
    <p onChange={(e)=>setCantidadPT(e.target.value)}>{cantidad[producto.id] || 0}</p>
        <button  onClick={()=>handleQuantityChange(producto,1)}>+</button>
    </div>
    
      
  </div>
</div>
))}

</div>
       
        </>
    )
}
export default ProductoCarrito