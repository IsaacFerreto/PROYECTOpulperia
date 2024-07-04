import { useEffect} from "react";
import { useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import { deleteMethod,getByCategory ,put  } from "../hook/useFecht";




  const Producto =({categoria})=>{
  let Iniciado = sessionStorage.getItem("iniciada")
  let carrito = JSON.parse(localStorage.getItem('items')) ;
  let inicia =JSON.parse(Iniciado)
    const [productos,setProductos]=useState([])
    const [cerrarModal,setCerrarModal]=useState(false)
    const[permitido,setPermitido]=useState(false)
    const [id,setID] = useState()
    const [editando,setEditando]=useState(false)
    const [precio,setPrecio]=useState()
    const [cantidad,setCantidad]=useState()
    const[carro,SetCarro]=useState([])

    useEffect(()=>{
        console.log("ENTRA productos");  
        getUsuario()
       console.log(categoria);
      
    },[categoria])

    const getUsuario = async()=>{
      const  dataProductos =await getByCategory("products",categoria)
      setProductos(dataProductos)
      console.log(dataProductos);
  }

function setCarrito(obj) {
  let fila =[]
  fila.push(carrito,obj.id)
SetCarro([fila])
  localStorage.setItem('items', JSON.stringify(carro));
  console.log('CARRO '+carro);
  console.log('CARRITO '+JSON.parse(carrito));
} 


    function cambiarEstado() {
      setCerrarModal(!cerrarModal)
      console.log('llega');
    }
    
    function permitirEliminar() {
      console.log("PERMITIR ELIMINAR");
      deleteMethod('products/',id)
      getUsuario()
  cambiarEstado()
}

 function eliminarObjeto(producto) {
  cambiarEstado()
  console.log("LLEGA");
  if (permitido) {
    console.log('llega aca');
    console.log(producto);
    setPermitido(false)
  }
}
function edit(producto) {
let product={
  precio:precio,
  cantidad:cantidad,
  nombre:producto.nombre,
  imagen:producto.imagen,
  Categorias:producto.Categorias
  
}
let url=`http://localhost:3001/products/${producto.id}`

  put(url, product)
  .then(() => {
    // Actualiza los productos después de la edición
    getUsuario();
  })
  setEditando(false)
}


return(<>
<div className="cuadricula">
 {cerrarModal?   <div className="contModal">
        <p>Estas seguro que quieres el eliminar el producto?</p>
        <button onClick={permitirEliminar}>Si</button><button onClick={cambiarEstado}>no</button>
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