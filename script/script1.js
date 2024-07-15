/*/----------------------------------------------------- 
script.js
Funciones del documento:
-Darle funcionalidad al carrousell de imagenes de la store
------------------------------------------------------------------ */ 


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

// Esta función es para crear el movimiento de las imagenes la he usado varias veces en el proyecto porque me parece 
// una forma muy curiosa de añadir imagenes sin coste de espacio 

