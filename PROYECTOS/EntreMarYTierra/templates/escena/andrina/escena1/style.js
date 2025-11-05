const  unoa = lottie.loadAnimation({
   container: document.getElementById("unoa"),
   renderer:"svg",
   loop: true,
   autoplay: true,
   path: "unoa.json"
  })

   unoa.addEventListener("DOMLoaded", function (){
	unoa.goToAndStop(0, true)
  })

document.getElementById("unoa").addEventListener("click", function(){
	unoa.stop()
	unoa.play()
	document.getElementById("unoa").style.animationName = "unoa"
})


const  dosa = lottie.loadAnimation({
   container: document.getElementById("dosa"),
   renderer:"svg",
   loop: true,
   autoplay: true,
   path: "dosa.json"
  })

   dosa.addEventListener("DOMLoaded", function (){
	dosa.goToAndStop(0, true)
  })

document.getElementById("dosa").addEventListener("click", function(){
	dosa.stop()
	dosa.play()
	document.getElementById("dosa").style.animationName = "dosa"
})

const tresa = lottie.loadAnimation({
   container: document.getElementById("tresa"),
   renderer:"svg",
   loop: true,
   autoplay: true,
   path: "tresa.json"
  })

  tresa.addEventListener("DOMLoaded", function (){
	tresa.goToAndStop(0, true)
  })

document.getElementById("tresa").addEventListener("click", function(){
	tresa.stop()
	tresa.play()
	document.getElementById("tresa").style.animationName = "tresa"
})

const cuatroa = lottie.loadAnimation({
   container: document.getElementById("cuatroa"),
   renderer:"svg",
   loop: true,
   autoplay: true,
   path: "cuatroa.json"
  })

  cuatroa.addEventListener("DOMLoaded", function (){
	cuatroa.goToAndStop(0, true)
  })

document.getElementById("cuatroa").addEventListener("click", function(){
	cuatroa.stop()
	cuatroa.play()
	document.getElementById("cuatroa").style.animationName = "cuatroa"
})

const  burbujas = lottie.loadAnimation({
   container: document.getElementById("burbujas"),
   renderer:"svg",
   loop: true,
   autoplay: true,
   path: "burbujas.json"
  })

document.getElementById("btn-unoa").addEventListener("click", () => {
    unoa.stop(); unoa.play();
  });

  document.getElementById("btn-dosa").addEventListener("click", () => {
    dosa.stop(); dosa.play();
  });

  document.getElementById("btn-tresa").addEventListener("click", () => {
    tresa.stop(); tresa.play();
  });

  document.getElementById("btn-cuatroa").addEventListener("click", () => {
    cuatroa.stop(); cuatroa.play();
  });


const  tapete = lottie.loadAnimation({
   container: document.getElementById("tapete"),
   renderer:"svg",
   loop: true,
   autoplay: true,
   path: "tapete.json"
  })

  tapete.addEventListener("DOMLoaded", function (){
	tapete.goToAndStop(0, true)
  })

document.getElementById("tapete").addEventListener("click", function(){
    tapete.stop()
    tapete.play()
    document.getElementById("tapete").style.animationName = "tapete"
})

   document.getElementById("btn-tapete").addEventListener("click", () => {
    tapete.stop(); tapete.play();
  });

const  andrina = lottie.loadAnimation({
   container: document.getElementById("andrina"),
   renderer:"svg",
   loop: true,
   autoplay: true,
   path: "andrina.json"
  })

  andrina.addEventListener("DOMLoaded", function (){
	andrina.goToAndStop(0, true)
  })

document.getElementById("andrina").addEventListener("click", function(){
    andrina.stop()
    andrina.play()
    document.getElementById("andrina").style.animationName = "andrina"
})

   document.getElementById("btn-andrina").addEventListener("click", () => {
    andrina.stop(); andrina.play();
  });


document.addEventListener("DOMContentLoaded", () => {
  const puerta = document.getElementById("puerta");
  const btnPuerta = document.getElementById("btn-puerta");
  const luzRayos = document.getElementById("luz-rayos");
  const overlayNoche = document.getElementById("overlay-noche");

  if (puerta && btnPuerta) {
    setTimeout(() => {
      puerta.classList.add("visible");
    }, 100);

    btnPuerta.addEventListener("click", () => {
      const abierta = puerta.classList.toggle("abierta");

      if (abierta) {
        luzRayos.style.opacity = "1";
        overlayNoche.style.opacity = "0";
        burbujas.setSpeed(1.5); // más vivas
      } else {
        luzRayos.style.opacity = "0";
        overlayNoche.style.opacity = "1";
        burbujas.setSpeed(0.6); // más lentas
      }
    });
  } else {
    console.warn("SVG o botón no encontrados");
  }
});
document.body.classList.toggle("modo-noche", !abierta);



