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

    

//////////////////////
// Recuperar los datos JSON del almacenamiento local
var productosArray = JSON.parse(localStorage.getItem("productosArray"));
console.log(productosArray);

// Mostrar todos los productos al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    mostrarProductos(productosArray);
});

var contadorId = 0;

function mostrarProductos(productosArray) {

    // Leer el elemento Resultado
    const contenedor = document.querySelector('#resultado');

    // Construir el HTML de los productos
    productosArray.forEach(producto => {
        contadorId++;
        const productoHTML = document.createElement('div');
        productoHTML.className = "col-sm-6 col-md-6 col-lg-3";
        productoHTML.innerHTML = `
        <a href="./productos2.html" id="enlaceProducto" target="_self">
        <div id="contenedorInferiorConProductos">
          <img src="./assets/img/Productos/${producto.nombre}/${producto.colores[0]}.webp" alt="producto" class="img-fluid"
            id="imgProducto">
          <br>
          <span id="nombreProducto" class="nombreProducto">${producto.nombre}</span>
          <span id="precio">$${producto.precio}</span>
        </a>
          <form>
            <input type="number" class="form-control" id="cantidadProducto" min="0" max="100" value="0">
            <button type="button" class="btn btn-primary agregar-carrito" id="btnAplicar" data-id="${contadorId}">Agregar al carrito</button>
          </form>
        </div>
        `;
        console.log(producto);
        contenedor.appendChild(productoHTML);
    })
} //codigo 

 