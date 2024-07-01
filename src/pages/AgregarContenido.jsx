const AgregarContenido=()=>{

    return(<>
    <h1>Agregar Contenido</h1>
    <form>
        <div>
        <label htmlFor="nombre">Nombre del producto</label>
        <input type="text" id="nombre"/>
        </div>
        <div>
        <label htmlFor="categorias">Categorias</label>
        <input type="text" id="categorias"/>
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