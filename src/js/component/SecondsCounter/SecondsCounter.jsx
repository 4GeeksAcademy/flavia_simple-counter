import React from "react";
import "./style.css";

const SecondsCounter = ({ seconds }) =>{
    return (
        <div className="bigContainer">
            <div><i class="fa-regular fa-clock"></i></div>
            <div>0</div>
            <div>0</div>
            <div>0</div>
            <div>0</div>
            <div>0</div>
            <div>0</div>
        </div>
    )
}

export default SecondsCounter;