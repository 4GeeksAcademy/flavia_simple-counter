import React from "react";
import "./style.css";

const SecondsCounter = (props) =>{
    return (
        <div className="bigContainer">
            <div className="relojIcon"><i class="fa-regular fa-clock"></i></div>
            <div className="sextoDigito">{props.sextoDigito}</div>
            <div className="quintoDigito">{props.quintoDigito}</div>
            <div className="cuartoDigito">{props.cuartoDigito}</div>
            <div className="tercerDigito">{props.tercerDigito}</div>
            <div className="segundoDigito">{props.segundoDigito}</div>
            <div className="primerDigito">{props.primerDigito}</div>
        </div>
    )
}

export default SecondsCounter;