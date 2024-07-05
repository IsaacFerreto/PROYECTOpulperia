/* eslint-disable react/prop-types */
import CloseIcon from '@mui/icons-material/Close';
const Lista =({listaDeProducto})=>{


    return(<>
    <div className='cuadricula'>
    {listaDeProducto.map((producto,index) => (
<div className="card" key={producto.id}>
<CloseIcon className="point"/>
  <img src={producto.imagen} alt={producto.nombre} style={{ width: "100%" }} />
  <div className="container" key={index}>
    <h4>
      <b>{producto.nombre}</b>
    </h4>

    <p>{producto.Categorias}</p>
    <p>₡{producto.precio}</p>
    <p>{producto.cantidad}</p>
    
   
      
  </div>
</div>
))}

</div>
    </>)
} 
export default Lista;