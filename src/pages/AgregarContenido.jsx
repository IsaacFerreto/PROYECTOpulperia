import { useState } from "react";
import { post } from "../hook/useFecht";
import Navbar from "../Componentes/Navbar";
import { validarNumeros, validarVacios } from "../hook/validateUser";
import { showToast } from "../hook/alertas";

const AgregarContenido=()=>{
    const url="http://localhost:3001/products"
 
    const [nombre,setNombre]=useState('');
    const [categorias,setcategorias]=useState('limpieza');
    const [cantidad,setCantidad]=useState(0); 
    const [base64, setBase64] = useState('');
    const[precio,setPrecio]=useState('')
    
    const handleFileChange = (event) => {
        const file = event.target.files[0];

        convertToBase64(file);
      };

      const convertToBase64 = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          setBase64(reader.result);
        };
      };

function validacionExtra() {
  event.preventDefault()
  console.log('llego aca');
  if (validarVacios(nombre,cantidad,precio,base64)) {
    console.log('primer if ',validarVacios(nombre,cantidad,precio,base64));
    if (validarNumeros(cantidad,precio)) {
      enviarObjeto()
      console.log('paso los filtro');
    }else{
      console.log('llego aqui');
      showToast('Porfavor, ingrese datos validos','error')
      
    }
    
  }else{
    console.log('llego aqui');
    showToast('Porfavor, ingrese infgormacion solicitada','error')
  }
  
  
}

function enviarObjeto() {

    
console.log(categorias);
const producto={
    "nombre":nombre,
    "Categorias":categorias,
    "cantidad":cantidad,
    "imagen":base64,
    "precio":precio
}
post(url,producto)
}


    return(<>
    <Navbar/>
    <h1>Agregar Contenido</h1><div>
        <img src={base64} alt={nombre} className="imgAgregar"/>
    <div>
    <form className="CajaRegistro">
        <div>
        <label htmlFor="nombre">Nombre del producto</label>
        <input type="text" id="nombre" onChange={(e)=>setNombre(e.target.value)}/>
        </div>
        <div>
        <label htmlFor="precio">Precio del producto en colones</label>
        <input type="text" id="precio" onChange={(e)=>setPrecio(e.target.value)}/>
        </div>
        <div className="categories">
            <div className="separatioDiv">
            <div action="/action_page.php" method="post">
            <label htmlFor="categories">Categoria</label>
            <select name="cat" id="categories" onChange={(e)=>setcategorias(e.target.value)}>
  <option value="limpieza">Limpieza</option>
  <option value="confites">Confites</option>
  <option value="comida">Comida</option>
</select>
</div>
  </div>
        </div>


        <div>
        <label htmlFor="imagen">Imagen del producto</label>
        <input type="file" id="imagen"  onChange={handleFileChange}/>
        </div>
        <div>
        <label htmlFor="cantidad">cantidad</label>
        <input type="number" id="cantidad" onChange={(e)=>setCantidad(e.target.value)}/>
        </div>
        <button type="submit" onClick={validacionExtra}>Subir</button>
    </form>
    </div>
    </div>
    </>)
}
export default AgregarContenido;