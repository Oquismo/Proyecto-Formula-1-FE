let arrayImagenes = ['img/hamcompra.avif', 'img/merchultimo.webp', 'img/alonsostore.webp']


let posicion = 0;

function manejarEventos(){
     
    }

  function pasaImagen(){


    posicion = posicion +1;

    if (posicion == 3) {

        posicion = 0;
        
}

    let imagen = document.getElementById("imagen");

    imagen.src = arrayImagenes[posicion]
}

let intervalo = setInterval(pasaImagen,3000)

window.onload = manejarEventos;


