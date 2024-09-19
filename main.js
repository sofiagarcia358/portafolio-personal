import { navBarDiv } from "./componentes/navBar/navBar.js";


/*Componentes de la pasgina*/
let DOM =document.querySelector("#root");


let navBar = document.createElement(`section`);
navBar.className = "nav-bar";
navBar.appendChild(navBarDiv);
DOM.appendChild(navBar);

let proyect = documet.createElement(`section`);
proyect.className = "proyect"
proyect.innerText = "Hola mundo soy proyect"
DOM.appendChild(proyect);