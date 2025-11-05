const PIROTECNIA = lottie.loadAnimation({
  container: document.getElementById("PIROTECNIA"),
  renderer: "svg",
  loop: false,
  autoplay: false,
  path: "pirotecnia.json"
});

const PIROTECNIA2 = lottie.loadAnimation({
  container: document.getElementById("PIROTECNIA2"),
  renderer: "svg",
  loop: false,
  autoplay: false,
  path: "pirotecnia.json"
});

function reproducirConReset(animacion) {
  animacion.stop();
  animacion.play();
  setTimeout(() => {
    animacion.stop();
  }, 3000); // duración estimada de la animación
}

document.getElementById("btn-pirotecnia").addEventListener("click", () => {
  reproducirConReset(PIROTECNIA);
});

document.getElementById("btn-pirotecnia2").addEventListener("click", () => {
  reproducirConReset(PIROTECNIA2);
});

const ANIMALITOO = lottie.loadAnimation({
  container: document.getElementById("ANIMALITOO"),
  renderer: "svg",
  loop: false,
  autoplay: false,
  path: "animalitoo.json"
});

// CLICK en la mata
const mata = document.querySelector(".mata-con-matera");
const contenedorAnimalito = document.getElementById("ANIMALITOO");

mata.addEventListener("click", () => {
  // animar la mata
  mata.classList.add("mata-animada");

  // mostrar animalito
  contenedorAnimalito.style.opacity = "1";
  contenedorAnimalito.classList.add("aparecer");
  ANIMALITOO.stop();
  ANIMALITOO.play();

  // ocultar animalito y resetear mata
  setTimeout(() => {
    contenedorAnimalito.style.opacity = "0";
    contenedorAnimalito.classList.remove("aparecer");
    ANIMALITOO.stop();
    mata.classList.remove("mata-animada");
  }, 2500);
});

document.getElementById("btn-mata2").addEventListener("click", () => {
  reproducirConReset(MATA2);
});
const MATA2 = lottie.loadAnimation({
  container: document.getElementById("MATA2"),
  renderer: "svg",
  loop: false,
  autoplay: false,
  path: "mata2.json"
});

// Mostrar ventana emergente
const btnVerImagen = document.getElementById("btn-ver-imagen");
const ventanaImagen = document.getElementById("ventana-imagen");
const cerrarVentana = document.getElementById("cerrar-ventana");

btnVerImagen.addEventListener("click", () => {
  ventanaImagen.classList.add("visible");
});

cerrarVentana.addEventListener("click", () => {
  ventanaImagen.classList.remove("visible");
});


const LIANCORRE = lottie.loadAnimation({
  container: document.getElementById("LIANCORRE"),
  renderer: "svg",
  loop: false,
  autoplay: false,
  path: "liancorre.json"
});

document.getElementById("btn-liancorre").addEventListener("click", () => {
  reproducirConReset(LIANCORRE);
});
