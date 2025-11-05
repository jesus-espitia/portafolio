var uno = document.getElementById("uno")
uno.addEventListener("click", function(){
	uno.style.display = "none"
})

var dos = document.getElementById("dos")
dos.addEventListener("click", function(){
	dos.style.display = "none"
})

var tres = document.getElementById("tres")
tres.addEventListener("click", function(){
	tres.style.display = "none"
})

var cuatro = document.getElementById("cuatro")
cuatro.addEventListener("click", function(){
	cuatro.style.display = "none"
})

var cinco = document.getElementById("cinco")
cinco.addEventListener("click", function(){
	cinco.style.display = "none"
})

var seis = document.getElementById("seis")
seis.addEventListener("click", function(){
	seis.style.display = "none"
})

   const cangrejo = lottie.loadAnimation({
   container: document.getElementById("cangrejo"),
   renderer:"svg",
   loop: true,
   autoplay: true,
   path: "cangrejo.json"
  })

  cangrejo.addEventListener("DOMLoaded", function (){
	cangrejo.goToAndStop(0, true)
  })

   document.getElementById("btn-cangrejo").addEventListener("click", () => {
    cangrejo.stop(); cangrejo.play();
  });

   const castillo = lottie.loadAnimation({
   container: document.getElementById("castillo"),
   renderer:"svg",
   loop: true,
   autoplay: true,
   path: "castillo.json"
  })

  castillo.addEventListener("DOMLoaded", function (){
	castillo.goToAndStop(0, true)
  })

   document.getElementById("btn-castillo").addEventListener("click", () => {
    castillo.stop(); castillo.play();
  });

     const nubes = lottie.loadAnimation({
   container: document.getElementById("nubes"),
   renderer:"svg",
   loop: true,
   autoplay: true,
   path: "nubes.json"
  })

const bandera = document.getElementById("bandera");
const luna = document.getElementById("luna");
const estrellas = document.querySelectorAll(".estrella");

let noche = false;

bandera.addEventListener("click", () => {
  noche = !noche;
  if (noche) {
    luna.style.display = "block";  // aparece la luna
    estrellas.forEach(e => e.style.opacity = "1"); // aparecen estrellas
  } else {
    luna.style.display = "none";   // desaparece la luna
    estrellas.forEach(e => e.style.opacity = "0"); // desaparecen estrellas
  }
});
