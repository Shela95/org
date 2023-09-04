import { useState } from "react"
import "./MiOrg.css"

const MiOrg = (props) => {
//Estado version 16 hooks, ayudar a trabajar con el comportamiento de react
// useState utiliza el estado
// Estado - hooks
// useState 
//useState ()
    
    //const [nombreVariable, funcion actualizarNombre] = useState(valorInicial)
    console.log(props)
  /*  const [mostrar,actualizarMostrar] = useState(true)
    const manejarClick = () => {
        console.log("Mostrar/Ocultar elemento", !mostrar)
        actualizarMostrar(!mostrar)

    } */

    return <section className="orgSection">
        <h3 className="title">Mi organización </h3>
        <img src ="/img/add.png" alt ="add " onClick={props.cambiarMostrar} />

    </section>
}

export default MiOrg