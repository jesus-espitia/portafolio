document.addEventListener('DOMContentLoaded', function() {
    // Función para mostrar el loader
    function showLoader() {
        const loader = document.getElementById('loader');
        loader.classList.add('active');
        
        // Ocultar el loader después de 3 segundos
        setTimeout(() => {
            loader.classList.remove('active');
        }, 3000);
    }

    // Añadir event listeners a los botones existentes
    const buttons = [
        document.querySelector('.btn-Siguiente'),
        document.querySelector('.btn-Anterior'),
        document.querySelector('.btn-inicio')
    ];

    buttons.forEach(button => {
        if (button) {
            button.addEventListener('click', showLoader);
        }
    });
});