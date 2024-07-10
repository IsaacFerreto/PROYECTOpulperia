import { useEffect,useState } from "react"
import { get } from "../hook/useFecht"

const ModalPedidos=()=>{
    const [pedidos,setPedidos]=useState([])
    useEffect(()=>{
        getPedidos
    },[])

    const getPedidos=async()=>{

      let datos= await  get('pedidos')
        console.log(datos);
        setPedidos(datos)
    }
    function test() {
        console.log(pedidos);
    }


    return(<>
    <div className="modalP">
        <label htmlFor="usuario">usuario</label>
        <p id="usuario">{pedidos[1]}</p>
        <button onClick={test}>probemos</button>


    </div>
    </>)
}
export default ModalPedidos