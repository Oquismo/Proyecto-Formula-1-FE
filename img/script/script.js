/*/----------------------------------------------------- 
script.js
Funciones del documento:
-Darle uso al boton leer mas
-Darle funcionalidad al carrousell de imagenes
------------------------------------------------------------------ */ 



// Este esel boton leer mas de la primera card 
function readMore() {
    var dots = document.getElementById("puntos");
    var moreText = document.getElementById("mas");
    var btnText = document.getElementById("botoncito");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Leer más"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Leer menos"; 
      moreText.style.display = "inline";
    }
  }
// Este es el boton leer mas de la segunda card
  function readMore2() {
    var dots = document.getElementById("puntos2");
    var moreText = document.getElementById("mas2");
    var btnText = document.getElementById("botoncito2");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Leer más"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Leer menos"; 
      moreText.style.display = "inline";
    }
  }
// Esta funcion la hice para crrar el desplegable de leer mas me he basado en tareas asincronas 
// y contenido que hemos dado en clase para hacerlo
  let arrayImagenes = [ "img/carrousell2.jpg",  "img/carrousell3.jpg", "img/carrousell1.jpg",]


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

  let intervalo = setInterval(pasaImagen,1000)
  
  const switchButton = document.getElementById('cambio');
 
  switchButton.addEventListener('click', () => {
      document.body.classList.toggle('oscuro');
      switchButton.classList.toggle('activar');
  });

  window.onload = manejarEventos;

// Esta ultima es para crear el movimiento de las imagenes la he usado varias veces en el proyecto porque me parece 
// una forma muy curiosa de añadir imagenes sin coste de espacio 



