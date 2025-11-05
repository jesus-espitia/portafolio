var fondo = document.querySelector('.fondo')
var bus = document.querySelector('.bus')
var llanta1 = document.querySelector('.llanta1')
var llanta3 = document.querySelector('.llanta3')
var llanta2 = document.querySelector('.llanta2')
var humo = document.querySelector ('.humo')


bus.addEventListener("click", animaciones)

function animaciones(){
fondo.classList.add('fondoAnimado')
bus.classList.add('busAnimado')
llanta1.classList.add('llantasAnimadas')
llanta3.classList.add('llantasAnimadas')
llanta2.classList.add('llantasAnimadas')
humo.classList.add('humoreanimado')
humo.classList.add('humoanimado')
}


