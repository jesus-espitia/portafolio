const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.slide');

let currentIndex = 0;

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
}

function updateCarousel() {
  const translateX = -currentIndex * 100 + '%';
    carousel.style.transform = `translateX(${translateX})`;
}


const interval = setInterval(nextSlide, 3000); 


carousel.addEventListener('mouseenter', () => {
    clearInterval(interval);
});


carousel.addEventListener('mouseleave', () => {
    interval = setInterval(nextSlide, 3000);
});