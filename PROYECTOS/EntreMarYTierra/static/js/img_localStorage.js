function guardarImagenEnLocalStorage(url, key, tiempoExpiracionHoras = 24) {
    fetch(url)
        .then(res => res.blob())
        .then(blob => {
            const reader = new FileReader();
            reader.onloadend = () => {
                const data = {
                    imagen: reader.result,
                    timestamp: Date.now() // guardamos el momento
                };
                localStorage.setItem(key, JSON.stringify(data));
            };
            reader.readAsDataURL(blob);
        });
}

function obtenerImagenDeLocalStorage(key, tiempoExpiracionHoras = 24) {
    const data = JSON.parse(localStorage.getItem(key));

    if (!data) return null; // No existe en localStorage

    const ahora = Date.now();
    const expiracion = tiempoExpiracionHoras * 60 * 60 * 1000;

    if (ahora - data.timestamp > expiracion) {
        // Si pasó el tiempo, eliminar
        localStorage.removeItem(key);
        return null;
    }

    return data.imagen;
}

// Guardar
guardarImagenEnLocalStorage("../static/img/personajes/UNO.png", "imgLian");

// Recuperar
const imgGuardada = obtenerImagenDeLocalStorage("imgLian");
if (imgGuardada) {
    document.getElementById("miImagen").src = imgGuardada;
}
