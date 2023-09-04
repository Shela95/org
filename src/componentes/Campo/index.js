import { useState } from "react"
import "./Campo.css"
// este archivo antes se llamaba CampoTexto.js
const Campo = (props) => { 
    // props es un objeto con todas las propiedades que deseamos enviar
    const placeholderModificado = `${props.placeholder}...`
    
    // Destructuraciòn
    const { type = "text" } = props
    

    
    console.log(type)

    const manejarCambio = (e) => {
       props.actualizarValor(e.target.value)

    }
    return <div className={`campo campo-${type} `}>
        <label>{props.titulo}</label>
        <input
            placeholder={placeholderModificado}
            required={props.required}
            value={props.valor}
            onChange={manejarCambio}
            type = {type}
        />
       
    </div>
}

export default Campo