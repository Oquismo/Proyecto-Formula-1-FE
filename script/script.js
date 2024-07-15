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

  window.onload = manejarEventos;





