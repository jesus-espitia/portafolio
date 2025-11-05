

// Lottie Animations
const LIBROVERDE = lottie.loadAnimation({
  container: document.getElementById("LIBROVERDE"),
  renderer: "svg",
  loop: true,
  autoplay: false,
  path: "LIBROVERDE.json"
});

const LIBROROJO = lottie.loadAnimation({
  container: document.getElementById("LIBROROJO"),
  renderer: "svg",
  loop: true,
  autoplay: false,
  path: "LIBROROJO.json"
});

const LIBROAMARILLO = lottie.loadAnimation({
  container: document.getElementById("LIBROAMARILLO"),
  renderer: "svg",
  loop: true,
  autoplay: false,
  path: "LIBROAMARILLO.json"
});

const LIBRONARANJA = lottie.loadAnimation({
  container: document.getElementById("LIBRONARANJA"),
  renderer: "svg",
  loop: true,
  autoplay: false,
  path: "LIBRONARANJA.json"
});

const CORRER = lottie.loadAnimation({
  container: document.getElementById("CORRER"),
  renderer: "svg",
  loop: true,
  autoplay: false,
  path: "correr.json"
});
const LADO1 = lottie.loadAnimation({
  container: document.getElementById("LADO1"),
  renderer: "svg",
  loop: true,
  autoplay: false,
  path: "lado1.json"
});
const CORTINA2 = lottie.loadAnimation({
  container: document.getElementById("CORTINA2"),
  renderer: "svg",
  loop: true,
  autoplay: false,
  path: "cortina2.json"
});

document.addEventListener("DOMContentLoaded", () => {
  const sol = document.getElementById("sol");
  const puerta = document.getElementById("puerta");

  sol.addEventListener("click", (e) => {
    e.stopPropagation();
    sol.classList.toggle("animado");
  });

  setTimeout(() => {
    puerta.classList.add("visible");
  }, 100);

  document.getElementById("btn-puerta").addEventListener("click", () => {
    puerta.classList.toggle("abierta");
  });

  // Solo activan su propia animación
  document.getElementById("btn-libroverde").addEventListener("click", () => {
    LIBROVERDE.stop(); LIBROVERDE.play();
  });

  document.getElementById("btn-librorojo").addEventListener("click", () => {
    LIBROROJO.stop(); LIBROROJO.play();
  });

  document.getElementById("btn-libroamarillo").addEventListener("click", () => {
    LIBROAMARILLO.stop(); LIBROAMARILLO.play();
  });

    document.getElementById("btn-libronaranja").addEventListener("click", () => {
    LIBRONARANJA.stop(); LIBRONARANJA.play();
  });
  
  document.getElementById("btn-correr").addEventListener("click", () => {
    CORRER.stop(); CORRER.play();
  });

   document.getElementById("btn-lado1").addEventListener("click", () => {
    LADO1.stop(); LADO1.play();
  });
  
   document.getElementById("btn-cortina2").addEventListener("click", () => {
    CORTINA2.stop(); CORTINA2.play();
  });
});

const body = document.body;
const contenedor = document.querySelector(".contenedor");

sol.addEventListener("click", (e) => {
  e.stopPropagation();
  sol.classList.toggle("animado");
  body.classList.toggle("modo-noche");
});

document.getElementById("btn-correr").addEventListener("click", () => {
  const correrDiv = document.getElementById("CORRER");

  correrDiv.classList.remove("movimiento");
  CORRER.stop();
  CORRER.play();


  setTimeout(() => {
    correrDiv.classList.add("movimiento");
  }, 350); // tiempo de animacióon
});

