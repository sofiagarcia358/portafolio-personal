import { header } from "../Header/header.js";
function proyectos(){

    let section = document.createElement('section');
    section.className = `section-proyectos`;
    section.appendChild(header());
    section.appendChild(item());

    return section;
}

//Item lista
function item(){
    let div = document.createElement('div');
    div.innerText = "item de lista";

    return div;
}


export{ proyectos }