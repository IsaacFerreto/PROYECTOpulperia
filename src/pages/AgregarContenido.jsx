const AgregarContenido=()=>{

    return(<>
    <h1>Agregar Contenido</h1>
    <form className="CajaRegistro">
        <div>
        <label htmlFor="nombre">Nombre del producto</label>
        <input type="text" id="nombre"/>
        </div>
        <div className="categories">
            <div className="separatioDiv">
            <form action="/action_page.php" method="post">
   <fieldset>
      <legend>Creating checkboxes:</legend>
      <label for="food1">First food:</label>
      <input type="checkbox" name="food1" id="food1" value="chicken" /> Chicken
     <label for="food2">Second food:</label>
     <input type="checkbox" name="food2" id="food2" value="rice" /> Rice
     <label for="food3">Third food:</label>
     <input type="checkbox" name="food3" id="food3" value="potato" /> Potato
   </fieldset> 
</form>
  </div>
        </div>
        <div>
        <label htmlFor="imagen">Imagen del producto</label>
        <input type="file" id="imagen"/>
        </div>
        <div>
        <label htmlFor="cantidad">cantidad</label>
        <input type="number" id="cantidad"/>
        </div>
        <button>Subir</button>
    </form>
    </>)
}
export default AgregarContenido;