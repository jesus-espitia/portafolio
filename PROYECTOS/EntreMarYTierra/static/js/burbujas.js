function crearBurbuja() {
    const burbuja = document.createElement("div");
    burbuja.classList.add("burbuja");

    const tamaño = Math.random() * 30 + 10;
    burbuja.style.width = `${tamaño}px`;
    burbuja.style.height = `${tamaño}px`;
    burbuja.style.left = `${Math.random() * window.innerWidth}px`;
    burbuja.style.animationDuration = `${Math.random() * 5 + 4}s`;

    document.getElementById("burbujas-container").appendChild(burbuja);


    setTimeout(() => {
        burbuja.remove();
    }, 9000);
}
setInterval(crearBurbuja, 300);

