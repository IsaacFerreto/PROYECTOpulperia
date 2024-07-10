/* eslint-disable react/prop-types */
import { useEffect} from "react";
import { useState } from "react";
import EditIcon from '@mui/icons-material/Edit';//icono para editar
import CloseIcon from '@mui/icons-material/Close';//icono para borrar
import { deleteMethod,getByCategory ,put  } from "../hook/useFecht"; //traemos las funciones de fetch
import { showToast } from "../hook/alertas";// importacion para alertas


//Este componente Fue creado principalmente para crear los objetos, hacerlos 'visibles' y controlar sus principales botones

  const Producto =({categoria})=>{
  let Iniciado = sessionStorage.getItem("iniciada")//se consulta session iniciada
  let inicia =JSON.parse(Iniciado)//se traduce el json
    const [productos,setProductos]=useState([])//estado para traer datos del GET
    const [cerrarModal,setCerrarModal]=useState(false)//estado creado para manejar estado del modal verificando si es visible o no.
    const[permitido,setPermitido]=useState(false) // verificacion para eliminar
    const [id,setID] = useState() // este id se utiliza de manera global para enviarlo a consultas fetch
    const [editando,setEditando]=useState(false)//estado para cambio de visualizacion par administradores
    const [precio,setPrecio]=useState()//se utiza para el nuevo precio para consulta PUT
    const [cantidad,setCantidad]=useState()//se utiza para el nuevo cantidad para consulta PUT
    const [carro, setCarro] = useState(JSON.parse(localStorage.getItem('items')) || []);//llamamos local storage para guardar carrito
    
    
    useEffect(()=>{
        
        getUsuario()//se vuelve a ejecutar la funcion GET
      
      
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[categoria])//este use effect se uso de dependencia a categoria ya que cada que se modifique en el navbar se haga visible aca

    const getUsuario = async()=>{//funcion GET para hacer consulta al fetch
      const  dataProductos =await getByCategory("products",categoria)//guardando datos traidos del get en una variable inicial
      setProductos(dataProductos)//guardando datos en una funcion global para poder usarlo en todo el documento
     
  }
 
  
function setCarrito(obj) {//esta duncion fue hecha para guardar los datos en el carrito en este caso utilizamos referencia localStorage

  let flag = false;//esta variable es inicializada para verificar si los datos ya fueron agregados

  for (let e of carro) {//en este for se hace un recorrido de la lista carro donde e va a ser la referencia de cada elemento
    if (obj.id === e) {//si el id de el objeto coincide con alguno de la lista se manda una alerta y se cierra el ciclo
      showToast('El objeto ya fue agregado al carrito','info')
      flag = true;//cuando coincide se cambia la bandera a verdadero para que no pueda ingresar al localStorage
      break;//cierra ciclo
    }
  }

  if (!flag) {//se verifica si la bandera es verdadera o falsa
    const updatedCarro = [...carro, obj.id];//se introducen los datos nuevos a una lista 'temporal' en la que se ingresan al mismo tiempo los item viejos
    setCarro(updatedCarro); //se guarda lista en lista global para referencias
    localStorage.setItem('items', JSON.stringify(updatedCarro)); //se sube la lista a localStorage de nuevo
    showToast('El objeto exitosamente agregado al carrito','success')//se le deja saber al usuario que todo salio bien
  
  }

} 


    function cambiarEstado() {//funcion para jugar con estado de modal
      setCerrarModal(!cerrarModal)
   
    }
    
    function permitirEliminar() {//funcion para eliminar luego de darle si al modal
      
      deleteMethod('products/',id)//se llama fetch para eliminar
      getUsuario()// se llama get para reiniciar informacion
  cambiarEstado()//se cierra modal
}

 function eliminarObjeto(producto) {// funcion para abrir modal
  cambiarEstado()
  
  if (permitido) {//se verifica si se paso por el modal
    console.log(producto);
    setPermitido(false)//se vuelve a establecer como falso por si elimina varios productoos
  }
}
function edit(producto) {//funcion para activar PUT
let product={//se reinicia objeto como se establece objeto desde aca y no en el fetch tenemos que llamar los datos no modificados del get
  precio:precio,
  cantidad:cantidad,
  nombre:producto.nombre,
  imagen:producto.imagen,
  Categorias:producto.Categorias
  
}
let url=`http://localhost:3001/products/${producto.id}`//seteamos la url para put

  put(url, product)//se llama metodo PUT
  .then(() => {
    // Actualiza los productos después de la edición
    getUsuario();
  })
  setEditando(false)//se cambia la vista de edicion
}


return(<>
<div className="cuadricula">
 {cerrarModal?   <div className="contModal">
        <p>Estas seguro que quieres el eliminar el producto?</p>
        <div>
        <button onClick={permitirEliminar}>Si</button><button onClick={cambiarEstado}>no</button>
        </div>
    </div>:<></>}

 {productos.map((producto,index) => (
<div className="card" key={producto.id}>
  <img src={producto.imagen} alt={producto.nombre} style={{ width: "100%" }} />
  <div className="container" key={index}>
    <h4>
      <b>{producto.nombre}</b>
    </h4>

    <p>{producto.Categorias}</p>
    {!editando?<p>₡{producto.precio}</p>:<input type="number" id="precio"placeholder="Precio"  onChange={(e) => setPrecio(e.target.value)} />}
    {inicia[1] ? (!editando ? <p>{producto.cantidad}</p> : <input type="number" id="cantidad" placeholder="Cantidad" onChange={(e) => setCantidad(e.target.value)} />) : <></>}
    {inicia[1]?<EditIcon onClick={() => setEditando(true)} />:<></>}
    {inicia[1]?<CloseIcon className="point"
     onClick={
      ()=>{
        setID(producto.id)
        eliminarObjeto(producto.id)
      }}/>:<></>}
      {editando?<button onClick={() => edit(producto)}>Guardar Cambios</button>:<button onClick={()=>setCarrito(producto)}>Agregar al carrito</button>}
      {editando?<button onClick={() => setEditando(false)}>Cancelar</button>:<></>}
  </div>
</div>
))}
</div>
</>)
}
export default Producto;