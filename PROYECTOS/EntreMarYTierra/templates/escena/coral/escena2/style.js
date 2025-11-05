document.addEventListener("DOMContentLoaded", () => {
  const burbujas = document.querySelector('.burbujas');

  function crearBurbuja() {
    const bubble = document.createElement('span');
    bubble.classList.add('burbuja');
    bubble.style.left = Math.random() * 100 + '%';
    bubble.style.animationDelay = Math.random() * 5 + 's';
    burbujas.appendChild(bubble);

    setTimeout(() => bubble.remove(), 10000);
  }

  setInterval(crearBurbuja, 500);
});

const concha = lottie.loadAnimation({
   container: document.getElementById("concha"),
   renderer:"svg",
   loop: true,
   autoplay: true,
   path: "concha.json"
  })

  concha.addEventListener("DOMLoaded", function (){
	concha.goToAndStop(0, true)
  })

   document.getElementById("btn-concha").addEventListener("click", () => {
    concha.stop(); concha.play();
  });

  const conchita = lottie.loadAnimation({
   container: document.getElementById("conchita"),
   renderer:"svg",
   loop: true,
   autoplay: true,
   path: "conchita.json"
  })

  conchita.addEventListener("DOMLoaded", function (){
	conchita.goToAndStop(0, true)
  })

   document.getElementById("btn-conchita").addEventListener("click", () => {
    conchita.stop(); conchita.play();
  });

  const algas = lottie.loadAnimation({
   container: document.getElementById("algas"),
   renderer:"svg",
   loop: true,
   autoplay: true,
   path: "algas.json"
  })

  algas.addEventListener("DOMLoaded", function (){
	algas.goToAndStop(0, true)
  })

   document.getElementById("btn-algas").addEventListener("click", () => {
    algas.stop(); algas.play();
  });


   const personaje = lottie.loadAnimation({
   container: document.getElementById("personaje"),
   renderer:"svg",
   loop: true,
   autoplay: true,
   path: "personaje.json"
  })

  personaje.addEventListener("DOMLoaded", function (){
	personaje.goToAndStop(0, true)
  })

   document.getElementById("btn-personaje").addEventListener("click", () => {
    personaje.stop(); personaje.play();
  });
  
  
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


 