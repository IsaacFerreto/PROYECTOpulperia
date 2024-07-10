import { useEffect, useState } from "react";
import { get } from "../hook/useFecht"//se trae consulta fetch

import CloseIcon from '@mui/icons-material/Close';// se importa iconos

const arregloEliminar = JSON.parse(localStorage.getItem("items"))//se consulta al local storage

//Este Componente esta creado para la visualizacion de los id guardados en localStorages hacerla consulta al get
//y traer todos los datos, mas la cantidad que quiere el cliente


const ProductoCarrito = ()=>{
    const [carro, setCarro] = useState(JSON.parse(localStorage.getItem("items")) || []);//se guarda el local storage en una variable
    const [cantidad,setCantidad]=useState({})//una de laz variables globales para jugar con las cantidades
    const [productosCarritos,setProductosCarritos]=useState([])//se guardan productos recorridos del get compaarados por ID
    const [arrayPedidos, setArrayPedidos]=useState([]);//El plan es guardar un array de arrays para guardar item y cantidad y enviarlos al API
    const [arregloTemporal, setArregloTemporal]=useState([]);//los pequeños arrays que van dentro de array pedidos incluyen [cantidad,item]
    const [cantidadPT,setCantidadPT]=useState(0)//variable para limpiar
useEffect(()=>{
    getCarrito()//get para estar actualizando
    // eslint-disable-next-line react-hooks/exhaustive-deps
},[carro])//cuando el local cambia el storage lo modifica

const getCarrito = async()=>{//se llama aca al get para guardarlo
    let listacarrito=[]//una lista temporal para guardar
    const productosGuardados = JSON.parse(localStorage.getItem("items"))//una constante extra de consulta
    for (let i = 0; i < productosGuardados.length; i++) {//ciclo se trae para verificar que se haga el get por cada item en el local
        const getPorID = await get("products",productosGuardados[i])// se trae el get y se guarda el la variable se recorre el array del local
        listacarrito.push(getPorID)//cuando machea se guarda a la lista
    }
    setProductosCarritos(listacarrito)//lista global se envia.


}


function  eliminar(id) {//esta funcion de eliminar es diferente ya que solo es del carrito
    const newCarro = carro.filter(itemId => itemId !== id);// en esta variable se filtra por los id que esten en el local storage menos el llamado
    setCarro(newCarro);//se guarda de nuevo en una funcion global
    localStorage.setItem('items', JSON.stringify(newCarro));//se guarda nuev lista ya una vez eliminada
    getCarrito()//se acude al get para que se refresque la vista
}




const handleQuantityChange = (product, change) => { //cambio de cantidad individual

   let nuevaCantidad= (cantidad[product.id]||0)+change// la cantidad se accecede por el id esta guardada como objeto 


       if (nuevaCantidad <= product.cantidad && nuevaCantidad >= 0) {//para que la funcion no se pase se verifica si es mayor a la cantidad puesta por el Admin

        
        setCantidad((prevCantidades) => ({
            ...prevCantidades,//un spreadoperator para que todas las cantidades previas pasen por aca
            [product.id]: nuevaCantidad,//en el objeto se guarda con el id la nueva cantidad
    
          }));
          setCantidadPT()
}
   
  };

  const calcularTotal = () => {//para calcular precio*producto sumatoria de todos los productos
    return productosCarritos//utilizando el get con los  objetos obtenidos
      .map(producto => (cantidad[producto.id] || 0) * producto.precio)//se multiplica cantidad por precio uno por uno
      .reduce((total, precio) => total + precio, 0);//se suman las multiplicaciones anteriores
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