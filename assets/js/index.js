// Selecciona el carrusel por su id
const carousel = document.getElementById('BannerIndex');
const carousel2 = document.getElementById('myCarousel2');
// Configura el intervalo de transición automática (5 segundos)
const interval = 5000; // 5000 milisegundos (5 segundos)

// Inicializa el carrusel con la opción "ride"
const myCarousel = new bootstrap.Carousel(carousel, {
    interval: interval,
    pause: 'hover', // Pausa la transición al pasar el ratón sobre el carrusel
    
});
const myCarousel2 = new bootstrap.Carousel(carousel2, {
    interval: interval,
    
    
});