//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import SecondsCounter from "./component/SecondsCounter";

let counter = 0;
//render your react application
setInterval(() => {
    const six = Math.floor(counter/100000); 
    const five = Math.floor(counter/10000); 
    const four = Math.floor(counter/1000); 
    const three = Math.floor(counter/100); 
    const two = Math.floor(counter/10); 
    const one = Math.floor(counter/1); 
    counter++;
    ReactDOM.render(<SecondsCounter primerDigito={one} segundoDigito={two} tercerDigito={three} cuartoDigito={four} quintoDigito={five} sextoDigito={six} />, document.querySelector("#app"));
}, 1000);

