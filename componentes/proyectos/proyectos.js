import { header } from "../Header/header.js";
import { dataProyectos } from "../data/data.js";

function proyectos(){

    let section = document.createElement('section');
    section.className = `section-proyectos`;
    section.appendChild(header());
    section.appendChild(listaProyectos());

    return section;
}
function listaProyectos(){
    let div = document.createElement('div');
    div.className = "lista-Proyectos";

    dataProyectos.forEach((proyecto)=>{
        div.appendChild( item(proyecto.nombre, proyecto.githubs, proyecto.Stacks, proyecto.web));
    });

    

    return div;
}

//Item lista
function item(nombre, githubs, web, Stacks){
    let div = document.createElement('div');
    div.className = "div-item";

    let a = document.createElement('a');
    a.className = "link-github-page";
    a.href = web;
    a.innerText = "web";
    div.appendChild(a);


    let Stack = document.createElement('div');
    Stack.innerText = "[js, CSS, HTML]";
    div.appendChild(Stack);


    let btnGithub = document.createElement('div');
    btnGithub.className = "btn-github";
    btnGithub.href ="https://github.com/sofiagarcia358/";
    btnGithub.innerText = "Github";
    div.appendChild(btnGithub);



    return div;
}


export{ proyectos }