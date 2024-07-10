/* eslint-disable react/prop-types */
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';//icono del carrito
import { useState } from 'react'; //use State para cada uno de los estados
import { useNavigate } from 'react-router-dom';//navegacion entre rutas



//Este componentente mueve el navbar es que principalmente maneja los movimientos entre rutas y filtros


const Navbar=({confite,limpieza,comida,casa,busqueda})=>{//los props solicitados son para crear los filtros
  
  let Iniciado = sessionStorage.getItem("iniciada")//se utiliza para consultar la session actual  previamente guardada en el sessionStorage
  let inicia =JSON.parse(Iniciado)//se tiene que 'traducir' 
  const navigate=useNavigate()//declaracion para utilizar navigate
  const [palabra,setPalabra]=useState('')//estado utilizado para la busqueda

  function cerrarsesion() {//funcion para cerrar sesion
    sessionStorage.removeItem('iniciada');//eliminamos la session del sessions storage
    localStorage.removeItem('items');//en caso de que el usuario tenga carrito hecho lo limpiamos por si alguien ingresa en la misma pc
    navigate('/')//se envia al usuario al login
  }

  function moveAndChange() {
    navigate('/home')//se utiliza para enviar al usuario a donde pueda ver los productos
    casa()//funcion casa limpia los filtros casa como traduccion de home
    
  }
    return(
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand"  onClick={() =>moveAndChange()}>
        Linda Hora
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" onClick={() =>navigate('/sobrenosotros')} >
            Sobre nosotros
            </a>
          </li>
          
          <li className="nav-item">
            <a className="nav-link" href="#">
            <ShoppingCartIcon onClick={()=>navigate('/carrito')}/>
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Productos
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" onClick={() =>comida()}>
                  Comida
                </a>
              </li>
              <li>
                <a className="dropdown-item" onClick={() =>limpieza()}>
                  Limpieza
                </a>
              </li>
              <li>
                <a className="dropdown-item" onClick={() =>confite()}>
                 Confites
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={cerrarsesion}>
              Cerrar sesion
            </a>
          </li>
          {  inicia[1]? <li className="nav-item">
                     <a className="nav-link" onClick={() =>navigate('/agregarcontenido')}>
                     Agregar Articulo?
                     </a>
                    </li>:<></>
          }
          {/* <li className="nav-item">
            <a className="nav-link disabled" aria-disabled="true">
              Disabled
            </a>
          </li> */}
        </ul>
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={(e)=>setPalabra(e.target.value)}
          />
          <button className="btn btn-outline-success" type="submit" onClick={(e)=>{
            e.preventDefault()
            busqueda(palabra)
          }}>
            Buscar
          </button>
        </form>
      </div>
    </div>
  </nav>
  </>
)
}
export default Navbar