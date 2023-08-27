import React from "react";
import "./style.css";

const SecondsCounter = (props) =>{
    return (
        <div className="bigContainer">
            <div className="relojIcon"><i class="fa-regular fa-clock"></i></div>
            <div className="sextoDigito">{props.sextoDigito % 10}</div>
            <div className="quintoDigito">{props.quintoDigito % 10}</div>
            <div className="cuartoDigito">{props.cuartoDigito % 10}</div>
            <div className="tercerDigito">{props.tercerDigito % 10}</div>
            <div className="segundoDigito">{props.segundoDigito % 10}</div>
            <div className="primerDigito">{props.primerDigito % 10}</div>
        </div>
    )
}

export default SecondsCounter;