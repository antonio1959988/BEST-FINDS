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
//console.log(productosArray);

/* Mostrar todos los productos al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    mostrarProductos(productosArray);
});

var contadorId = 0;*/

/*function mostrarProductos(productosArray) {

    // Leer el elemento Resultado
    const contenedor = document.querySelector('#resultado');



            // Construir el HTML de los productos
    productosArray.forEach(producto => {
    
        if(contadorId <= 3){
            contadorId++;
 
            const productoHTML = document.createElement('div');
            productoHTML.className = "col-sm-6 col-md-6 col-lg-3";
            productoHTML.innerHTML = `
            <a href="./productos2.html" class="enlaceProducto" target="_self">
            <div id="contenedorInferior">
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
        }
        

    })
}codigo */
    
 
/*const myCarousel2 = new bootstrap.Carousel(carousel2, {
    interval: interval,
    
});*/

// Lista de productos que se cargarán en el carrito de compras
let listaProductosTemporal;

fetch('http://localhost:8080/productos')
  .then(res => res.json())
  .then(json => {
    listaProductosTemporal = json;
    agregarProductos();
  })
  .catch(err => console.log(err));

function agregarProductos() {
  let divListaProductos = document.getElementById("listaProductos");

  listaProductosTemporal.map((producto, index) => {
    if(index <= 3){
        let divProducto = document.createElement("div");
    divProducto.className = "col-sm-12 col-md-6 col-lg-3";

    divProducto.innerHTML = `
    <div class="contenedorInferior">
      <a href="./productos2.html" class="enlaceProducto" target="_self">
        <img id="productoImagen-${producto.idProducto}" src="./assets/img/Productos/${producto.nombre}/default.webp" alt="producto" class="img-fluid imgProducto">
        <br>
        <p id="productoId-${producto.idProducto}" class="d-none">${producto.idProducto}</p>
        <p id="productoDescripcion-${producto.idProducto}" class="d-none">${producto.descripcion}</p>
        <span id="productoNombre-${producto.idProducto}" class="nombreProducto">${producto.nombre}</span>
        <span id="productoPrecio-${producto.idProducto}" class="precio">$${producto.precio}</span>
      </a>
      <input id="productoCantidad-${producto.idProducto}" type="number" class="form-control cantidadProducto" min="1" max="100" value="1">
      <button id="agregarCarrito-${producto.idProducto}" type="button" class="btn btn-primary agregar-carrito" onclick="agregarProductoSession(${producto.idProducto}); actualizarCarritoNavBar();">
        Agregar al carrito
      </button>
    </div>`;

    divListaProductos.appendChild(divProducto);
    }
  });
}

function agregarProductoSession(productoId) {
  let productosArray = JSON.parse(sessionStorage.getItem("productosArray")) || []; // Obtener el array de sesión o un array vacío si no existe

  let producto = listaProductosTemporal.find((item) => item.idProducto === productoId);

  if (producto) {
    let cantidadInput = document.getElementById(`productoCantidad-${producto.idProducto}`);
    let cantidad = parseInt(cantidadInput.value);

    let productoEnCarrito = productosArray.find((item) => item.id === producto.idProducto);

    if (productoEnCarrito) {
      // Si el producto ya está en el carrito, actualiza la cantidad y el total
      productoEnCarrito.cantidad += cantidad;
      productoEnCarrito.total = productoEnCarrito.cantidad * productoEnCarrito.precio;
    } else {
      // Si el producto no está en el carrito, agrégalo al array
      productosArray.push({
        id: producto.idProducto,
        imagen: `./assets/img/Productos/${producto.nombre}/default.webp`,
        nombre: producto.nombre,
        descripcion: producto.descripcion,
        precio: parseFloat(producto.precio),
        total: parseFloat(producto.precio) * cantidad,
        cantidad: cantidad,
      });
    }

    mostrarNotificacion();
    sessionStorage.setItem("productosArray", JSON.stringify(productosArray)); // Volver a guardar el carrito en la sesión ya modificado
  }
}

function mostrarNotificacion() {
	const notificacion = document.querySelector('.notificacion');
	notificacion.style.display = 'block';

	// Ocultar la notificación después de un tiempo (por ejemplo, 3 segundos)
	setTimeout(() => {
		 notificacion.style.display = 'none';
	}, 1000); // 3000 milisegundos = 3 segundos
}