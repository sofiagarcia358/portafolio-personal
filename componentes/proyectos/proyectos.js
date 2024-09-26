function proyectos(){

    let section = document.createElement('section');
    section.className = `section-proyectos`;
    section.appendChild(header());
    section.appendChild(item());

    return section;
}
//funcion header
function header(){
    let div = document.createElement('div');
    div.className = `header`;
    
    let h2 = document.createElement('h2');
    h2.innerHTML = "proyectos";
    div.appendChild(h2)

    let btn = document.createElement('div');
    btn.innerHTML = "Github";
    div.appendChild(btn);
    
    return div;

}

//Item lista
function item(){
    let div = document.createElement('div');
    div.innerText = "item de lista";

    return div;
}


export{ proyectos }