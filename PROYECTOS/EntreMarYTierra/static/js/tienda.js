/*
  SCRIPT.JS
  Este archivo contiene toda la funcionalidad JavaScript del proyecto Mar & Tierra.
  Incluye:
  - Sistema de autenticación con localStorage
  - Funcionalidad del carrito de compras
  - Gestión de eventos y navegación
*/

// Variables globales
let cart = [];

// Función que se ejecuta cuando el DOM está completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Verificar si el usuario está logueado
    checkLoginStatus();
    
    // Cargar el carrito desde localStorage
    loadCart();
    
    // Configurar eventos para el carrito
    setupCartEvents();
    
    // Configurar eventos para el formulario de contacto
    setupContactForm();
    
    // Configurar eventos para el formulario de login
    setupLoginForm();
    
    // Configurar eventos para el formulario de registro
    setupRegisterForm();
    
    // Configurar evento para cerrar sesión
    setupLogoutEvent();
    
    // Configurar eventos para los botones de añadir al carrito
    setupAddToCartButtons();
});

// Función para configurar los eventos de los botones de añadir al carrito
function setupAddToCartButtons() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            const productName = this.getAttribute('data-name');
            const productPrice = parseFloat(this.getAttribute('data-price'));
            const productImage = this.getAttribute('data-image');
            
            addToCart(productId, productName, productPrice, productImage);
        });
    });
}

// Función para verificar si el usuario está logueado
function checkLoginStatus() {
    const user = localStorage.getItem('user');
    const loginBtn = document.getElementById('login-btn');
    const registerBtn = document.getElementById('register-btn');
    const logoutBtn = document.getElementById('logout-btn');
    
    if (user) {
        // Usuario está logueado
        if (loginBtn) loginBtn.style.display = 'none';
        if (registerBtn) registerBtn.style.display = 'none';
        if (logoutBtn) logoutBtn.style.display = 'inline-block';
    } else {
        // Usuario no está logueado
        if (loginBtn) loginBtn.style.display = 'inline-block';
        if (registerBtn) registerBtn.style.display = 'inline-block';
        if (logoutBtn) logoutBtn.style.display = 'none';
    }
}

// Función para cargar el carrito desde localStorage
function loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartCount();
    }
}

// Función para guardar el carrito en localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

// Función para actualizar el contador del carrito
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        const count = cart.reduce((total, item) => total + item.quantity, 0);
        cartCount.textContent = count;
    }
}

// Función para añadir un producto al carrito
function addToCart(id, name, price, image) {
    // Verificar si el producto ya está en el carrito
    const existingItem = cart.find(item => item.id === id);
    
    if (existingItem) {
        // Si ya está, incrementar la cantidad
        existingItem.quantity += 1;
    } else {
        // Si no está, añadirlo al carrito
        cart.push({
            id,
            name,
            price,
            image,
            quantity: 1
        });
    }
    
    // Guardar el carrito en localStorage
    saveCart();
    
    // Mostrar un mensaje de confirmación
    showNotification(`${name} añadido al carrito`);
}

// Función para configurar los eventos del carrito
function setupCartEvents() {
    const viewCartBtn = document.querySelector('.cart-icon');
    const modal = document.getElementById('cart-modal');
    const closeBtn = document.querySelector('.close-modal');
    const checkoutBtn = document.getElementById('checkout-btn');
    
    if (viewCartBtn) {
        viewCartBtn.addEventListener('click', function() {
            showCart();
        });
    }
    
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    }
    
    if (modal) {
        window.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
    
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function() {
            processCheckout();
        });
    }
}

// Función para mostrar el carrito
function showCart() {
    const modal = document.getElementById('cart-modal');
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');
    
    if (!modal || !cartItems || !totalPrice) return;
    
    // Limpiar el contenido actual del carrito
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="empty-cart-message"><i class="fas fa-shopping-cart"></i><p>Tu carrito está vacío</p></div>';
    } else {
        let total = 0;
        
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            
            cartItem.innerHTML = `
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="cart-item-details">
                    <h4>${item.name}</h4>
                    <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                    <div class="cart-item-quantity">
                        <button class="decrease-quantity" data-id="${item.id}">-</button>
                        <span>${item.quantity}</span>
                        <button class="increase-quantity" data-id="${item.id}">+</button>
                    </div>
                </div>
                <div class="cart-item-remove" data-id="${item.id}">
                    <i class="fas fa-trash"></i>
                </div>
            `;
            
            cartItems.appendChild(cartItem);
            
            total += item.price * item.quantity;
        });
        
        totalPrice.textContent = `$${total.toFixed(3)}`;
        
        // Agregar eventos a los botones de cantidad
        const decreaseButtons = document.querySelectorAll('.decrease-quantity');
        decreaseButtons.forEach(button => {
            button.addEventListener('click', function() {
                const productId = parseInt(this.getAttribute('data-id'));
                decreaseQuantity(productId);
            });
        });
        
        const increaseButtons = document.querySelectorAll('.increase-quantity');
        increaseButtons.forEach(button => {
            button.addEventListener('click', function() {
                const productId = parseInt(this.getAttribute('data-id'));
                increaseQuantity(productId);
            });
        });
        
        // Agregar eventos a los botones de eliminar
        const removeButtons = document.querySelectorAll('.cart-item-remove');
        removeButtons.forEach(button => {
            button.addEventListener('click', function() {
                const productId = parseInt(this.getAttribute('data-id'));
                removeFromCart(productId);
            });
        });
    }
    
    modal.style.display = 'block';
}

// Función para disminuir la cantidad de un producto en el carrito
function decreaseQuantity(productId) {
    const item = cart.find(item => item.id === productId);
    
    if (item) {
        if (item.quantity > 1) {
            item.quantity -= 1;
        } else {
            removeFromCart(productId);
            return;
        }
        
        saveCart();
        showCart(); // Actualizar la vista del carrito
    }
}

// Función para aumentar la cantidad de un producto en el carrito
function increaseQuantity(productId) {
    const item = cart.find(item => item.id === productId);
    
    if (item) {
        item.quantity += 1;
        saveCart();
        showCart(); // Actualizar la vista del carrito
    }
}

// Función para eliminar un producto del carrito
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    showCart(); // Actualizar la vista del carrito
}

// Función para procesar el checkout
function processCheckout() {
    if (cart.length === 0) {
        showNotification('Tu carrito está vacío');
        return;
    }
    
    // Verificar si el usuario está logueado
    const user = localStorage.getItem('user');
    
    if (!user) {
        showNotification('Debes iniciar sesión para realizar una compra');
        document.getElementById('cart-modal').style.display = 'none';
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 1500);
        return;
    }
    
    // Simular proceso de pago
    showNotification('Procesando pago...');
    
    setTimeout(() => {
        // Vaciar el carrito
        cart = [];
        saveCart();
        
        // Cerrar el modal
        document.getElementById('cart-modal').style.display = 'none';
        
        // Mostrar mensaje de éxito
        showNotification('¡Gracias por tu compra! Tu pedido ha sido procesado correctamente.');
    }, 2000);
}

// Función para configurar el formulario de contacto
function setupContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Obtener los datos del formulario
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Simular envío del formulario
            showNotification('Enviando mensaje...');
            
            setTimeout(() => {
                // Limpiar el formulario
                contactForm.reset();
                
                // Mostrar mensaje de éxito
                showNotification('¡Mensaje enviado correctamente! Te responderemos pronto.');
            }, 1500);
        });
    }
}

// Función para configurar el formulario de login
function setupLoginForm() {
    const loginForm = document.getElementById('login-form');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Obtener los datos del formulario
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;
            const messageElement = document.getElementById('login-message');
            
            // Obtener los usuarios registrados
            const users = JSON.parse(localStorage.getItem('users') || '[]');
            
            // Buscar el usuario
            const user = users.find(u => u.email === email && u.password === password);
            
            if (user) {
                // Guardar el usuario en localStorage
                localStorage.setItem('user', JSON.stringify(user));
                
                // Mostrar mensaje de éxito
                messageElement.textContent = '¡Inicio de sesión exitoso!';
                messageElement.style.color = 'green';
                
                // Redirigir a la página principal después de un breve retraso
                setTimeout(() => {
                    window.location.href = '../templates/index.html';
                }, 1500);
            } else {
                // Mostrar mensaje de error
                messageElement.textContent = 'Email o contraseña incorrectos';
                messageElement.style.color = 'red';
            }
        });
    }
}

// Función para configurar el formulario de registro
function setupRegisterForm() {
    const registerForm = document.getElementById('register-form');
    
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Obtener los datos del formulario
            const name = document.getElementById('register-name').value;
            const email = document.getElementById('register-email').value;
            const password = document.getElementById('register-password').value;
            const confirmPassword = document.getElementById('register-confirm-password').value;
            const messageElement = document.getElementById('register-message');
            
            // Validar que las contraseñas coincidan
            if (password !== confirmPassword) {
                messageElement.textContent = 'Las contraseñas no coinciden';
                messageElement.style.color = 'red';
                return;
            }
            
            // Obtener los usuarios registrados
            const users = JSON.parse(localStorage.getItem('users') || '[]');
            
            // Verificar si el email ya está registrado
            if (users.some(u => u.email === email)) {
                messageElement.textContent = 'Este email ya está registrado';
                messageElement.style.color = 'red';
                return;
            }
            
            // Crear el nuevo usuario
            const newUser = {
                name,
                email,
                password
            };
            
            // Añadir el usuario a la lista
            users.push(newUser);
            
            // Guardar los usuarios en localStorage
            localStorage.setItem('users', JSON.stringify(users));
            
            // Mostrar mensaje de éxito
            messageElement.textContent = '¡Registro exitoso! Ahora puedes iniciar sesión.';
            messageElement.style.color = 'green';
            
            // Limpiar el formulario
            registerForm.reset();
            
            // Redirigir a la página de login después de un breve retraso
            setTimeout(() => {
                window.location.href = 'login.html';
            }, 2000);
        });
    }
}

// Función para configurar el evento de cerrar sesión
function setupLogoutEvent() {
    const logoutBtn = document.getElementById('logout-btn');
    
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Eliminar el usuario de localStorage
            localStorage.removeItem('user');
            
            // Mostrar mensaje de éxito
            showNotification('Sesión cerrada correctamente');
            
            // Actualizar la interfaz
            setTimeout(() => {
                checkLoginStatus();
                window.location.href = '../index.html';
            }, 1000);
        });
    }
}

// Función para mostrar notificaciones
function showNotification(message) {
    // Crear el elemento de notificación
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    // Añadir la notificación al cuerpo del documento
    document.body.appendChild(notification);
    
    // Mostrar la notificación
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // Ocultar y eliminar la notificación después de 3 segundos
    setTimeout(() => {
        notification.classList.remove('show');
        
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}