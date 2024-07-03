const ModalCerrar =({funcion})=>{

    return(<>
    <div className="contModal">
        <p>Estas seguro que quieres el eliminar el producto?</p>
        <button onClick={funcion}>Si</button><button>no</button>
    </div>
    </>)
}
export default ModalCerrar;