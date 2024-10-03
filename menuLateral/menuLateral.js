import { dataNavBar } from "../componentes/data/data.js";

function listamenu() {
    let div = document.createElement('div');
    div.className = "lista-menu";

    // Iterar sobre cada elemento de dataNavBar
    dataNavBar.forEach((navBar) => {
        // Crear un ítem por cada grupo de botones y añadirlo al div
        div.appendChild(item(navBar.Boton1, navBar.Boton2, navBar.Boton3, navBar.Boton4, navBar.Boton5, navBar.Boton6));
    });

    return div;
}

// Item para cada conjunto de botones
function item(Boton1, Boton2, Boton3, Boton4, Boton5, Boton6) {
    let section = document.createElement('section');
    section.className = "menu-item";

    // Crear divs para cada botón
    let b1 = document.createElement('div');
    b1.innerText = Boton1;
    section.appendChild(b1);

    let b2 = document.createElement('div');
    b2.innerText = Boton2;
    section.appendChild(b2);

    let b3 = document.createElement('div');
    b3.innerText = Boton3;
    section.appendChild(b3);

    let b4 = document.createElement('div');
    b4.innerText = Boton4;
    section.appendChild(b4);

    let b5 = document.createElement('div');
    b5.innerText = Boton5;
    section.appendChild(b5);

    let b6 = document.createElement('div');
    b6.innerText = Boton6;
    section.appendChild(b6);

    return section;
}

export { listamenu };
