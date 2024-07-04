import { useEffect} from "react";
import { useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import { deleteMethod,getByCategory ,get  } from "../hook/useFecht";




  const Producto =({categoria})=>{
  let Iniciado = sessionStorage.getItem("iniciada")
  let inicia =JSON.parse(Iniciado)
    const [productos,setProductos]=useState([])
    const [cerrarModal,setCerrarModal]=useState(false)
    const[permitido,setPermitido]=useState(false)
    const [id,setID] = useState()
    const [editando,setEditando]=useState(false)

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
function edit() {
  
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
    <p>₡{producto.precio}</p>
    {inicia[1]?<p>{producto.cantidad}</p>:<></> }
    {/* {inicia[1]? {editando ? <p>{producto.cantidad}</p>:<input type="text" id="nombre" onChange={(e)=>setNombre(e.target.value)}/>} : <></>} */}
    {inicia[1]?<EditIcon/>:<></>}
    {inicia[1]?<CloseIcon className="point"
     onClick={
      ()=>{
        setID(producto.id)
        eliminarObjeto(producto.id)
      }}/>:<></>}
    <button>Agregar al carrito</button>
  </div>
</div>
))}
</div>
</>)
}
export default Producto;