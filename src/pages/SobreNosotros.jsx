import Navbar from "../Componentes/Navbar"
const SobreNosotros =()=>{
    let Iniciado = sessionStorage.getItem("iniciada")
    let inicia =JSON.parse(Iniciado)

    return(<>
    <Navbar/>
    <div className="TextoCentrado">
    <h1>Linda Hora</h1>
    <p className="">Hola {inicia[2]}, nosotros somos una tienda local ubicada en Lagos de Lindora,<br></br> creamos esta página con el afán de hacer las compras más 
        fáciles para usted,<br></br> usando esta página podrás apartar tus productos para luego solo llegar pagar y recoger.
    </p>
    <p>Contactanos a:</p>
    <p>Tel: +506 8888-7777</p>
    <p>Correo:contactanos@lindahora.com</p>
    <p>Dirección San José, Santa Ana, Lindora, 800mtrs sur del Colegio Tecnico Profesional de Santa Ana, continuo a la torre </p>
    </div>
    </>)
}
export default SobreNosotros