(function() {
    // Variable para almacenar el contenedor del loader
    let loaderContainer;
    
    // Función para inicializar el loader
    function initLoader() {
        loaderContainer = document.getElementById('loader-container');
        
        // Si no se encuentra el contenedor, no hacemos nada
        if (!loaderContainer) {
            console.error('No se encontró el contenedor del loader. Asegúrate de incluir el HTML del loader.');
            return;
        }
        
        // Mostrar el loader inmediatamente
        showLoader();
        
        // Configurar eventos para ocultar el loader
        setupLoaderEvents();
    }
    
    // Función para mostrar el loader
    function showLoader() {
        if (loaderContainer) {
            loaderContainer.style.display = 'flex';
        }
    }
    
    // Función para ocultar el loader
    function hideLoader() {
        if (loaderContainer) {
            loaderContainer.style.display = 'none';
        }
    }
    
    // Configurar eventos para ocultar el loader
    function setupLoaderEvents() {
        // Evento que se dispara cuando toda la página (incluyendo imágenes) ha cargado
        window.addEventListener('load', function() {
            // Esperamos un mínimo de 1 segundo para que el loader sea visible
            setTimeout(hideLoader, 1000);
        });
        
        // Si la página tarda más de 4 segundos en cargar, ocultamos el loader de todos modos
        setTimeout(hideLoader, 4000);
    }
    
    // Inicializar el loader cuando el DOM esté listo
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initLoader);
    } else {
        // El DOM ya está cargado
        initLoader();
    }
    
    // Exponer funciones globalmente para poder llamarlas manualmente
    window.Loader = {
        show: showLoader,
        hide: hideLoader
    };
})();