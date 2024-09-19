let navBarDiv = document.createElement(`div`)
navBarDiv.className = "nav-bar-div"

let imgLogo = document.createElement(`img`);
imgLogo.src = "https://pngimg.com/d/linux_PNG9.png"
imgLogo.className = "img-log"
navBarDiv.appendChild(imgLogo);

let h2 = document.createElement(`h2`)
h2.innerText = "Sofía García"
navBarDiv.appendChild(h2)

export{navBarDiv}