import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Navbar=({confite,limpieza,comida,casa,busqueda})=>{
  let Iniciado = sessionStorage.getItem("iniciada")
  let inicia =JSON.parse(Iniciado)
  const navigate=useNavigate()
  const [palabra,setPalabra]=useState('')
  function cerrarsesion() {
    sessionStorage.removeItem('iniciada');
    navigate('/')
  }

  function moveAndChange() {
    navigate('/home')
    casa()
    
  }
  console.log(inicia[1]);

    
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