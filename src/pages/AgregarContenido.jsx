import { useState } from "react";
import { imgurPOST } from "../hook/imgurfecht";
import { post } from "../hook/useFecht";
import Navbar from "../Componentes/Navbar";

const AgregarContenido=()=>{
    const url="http://localhost:3001/products"
    const [file, setFileName]=useState('')
    const [nombre,setNombre]=useState('');
    const [categorias,setcategorias]=useState([]);
    const [cantidad,setCantidad]=useState(0); 
    const [selectedFile, setSelectedFile] = useState(null);
    const [base64, setBase64] = useState('');
    
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
        convertToBase64(file);
      };

      const convertToBase64 = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          setBase64(reader.result);
        };
      };

function enviarObjeto() {
    //crear objeto
    // imgurPOST(fileName)
    imgurPOST(file)

const producto={
    "nombre":nombre,
    "Categorias":categorias,
    "cantidad":cantidad,
    "imagen":base64
}
post(url,producto)
}


    return(<>
    <Navbar/>
    <h1>Agregar Contenido</h1><div>
        <img src={base64} alt="" />
    <div>
    <form className="CajaRegistro">
        <div>
        <label htmlFor="nombre">Nombre del producto</label>
        <input type="text" id="nombre" onChange={(e)=>setNombre(e.target.value)}/>
        </div>
        <div className="categories">
            <div className="separatioDiv">
            <div action="/action_page.php" method="post">
   <fieldset>
      <legend>Creating checkboxes:</legend>
      <label htmlFor="food1">First food:</label>
      <input type="checkbox" name="food1" id="food1" value="chicken" /> Chicken
     <label htmlFor="food2">Second food:</label>
     <input type="checkbox" name="food2" id="food2" value="rice" /> Rice
     <label htmlFor="food3">Third food:</label>
     <input type="checkbox" name="food3" id="food3" value="potato" /> Potato
   </fieldset> 
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
        <button onClick={enviarObjeto}>Subir</button>
    </form>
    </div>
    </div>
    </>)
}
export default AgregarContenido;