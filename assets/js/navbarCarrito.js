/////////////////////CARRITO DE COMPRAS//////////////////////////

// Variables 
const carrito = document.querySelector('#carritoNav');
const listaProducto = document.querySelector('#listaProductos');
const contenedorCarrito = document.querySelector('#lista-carritoNav tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito'); 
let articulosCarrito = [];

// Listeners
cargarEventListeners();

function cargarEventListeners() {
     // Dispara cuando se presiona "Agregar Carrito"
     listaProducto.addEventListener('click', agregarProducto);

     // Cuando se elimina un producto del carrito
     carrito.addEventListener('click', eliminarProducto);

     // Al Vaciar el carrito
     vaciarCarritoBtn.addEventListener('click', vaciarCarrito);

}


// Funciones
// Función que añade el producto al carrito
function agregarProducto(e) {
     // Delegation para agregar-carrito
     if (e.target.classList.contains('agregar-carrito')) {
          const producto = e.target.parentElement.parentElement;
          // Enviamos el producto seleccionado para tomar sus datos
          leerDatosProducto(producto);
     }
}


// Leer los datos del producto
function leerDatosProducto(producto) {
     const infoProducto = {
          imagen: producto.querySelector('img').src,
          titulo: producto.querySelector('#nombreProducto').textContent,
          precio: producto.querySelector('#precio').textContent,
          id: producto.querySelector('button').getAttribute('data-id'), 
          cantidad: producto.querySelector('#cantidadProducto').value
     }

     // Revisa si un elemento ya existe en el carrito
     if( articulosCarrito.some( producto => producto.id === infoProducto.id ) ) { 
          const productos = articulosCarrito.map( producto => {
               if( producto.id === infoProducto.id ) {
                    producto.cantidad = parseInt(producto.cantidad) + parseInt(infoProducto.cantidad);
                     return producto;
                } else {
                     return producto;
             }
          })
          articulosCarrito = [...productos];
     }  else {
          articulosCarrito = [...articulosCarrito, infoProducto];
     }

     carritoHTML();
}

// Elimina el curso del carrito en el DOM
function eliminarProducto(e) {
     e.preventDefault();
     if(e.target.classList.contains('borrar-producto') ) {
  
          const productoId = e.target.getAttribute('data-id')
          
          // Eliminar del arreglo del carrito
          articulosCarrito = articulosCarrito.filter(producto => producto.id !== productoId);

          carritoHTML();
     }
}


// Muestra el producto seleccionado en el Carrito
function carritoHTML() {

     vaciarCarrito();

     articulosCarrito.forEach(producto => {
          const row = document.createElement('tr');
          row.innerHTML = `
               <td>  
                    <img src="${producto.imagen}" width=100>
               </td>
               <td>${producto.titulo}</td>
               <td>${producto.precio}</td>
               <td>${producto.cantidad} </td>
               <td>
                    <a href="#" class="borrar-producto" data-id="${producto.id}">x</a>
               </td>
          `;
          contenedorCarrito.appendChild(row);
     });

}

// Elimina los productos del carrito en el DOM
function vaciarCarrito() {

     while(contenedorCarrito.firstChild) {
          contenedorCarrito.removeChild(contenedorCarrito.firstChild);
      }
}

function agregarProducto(e) {
     // Delegation para agregar-carrito
     if (e.target.classList.contains('agregar-carrito')) {
          const producto = e.target.parentElement.parentElement;
          // Enviamos el producto seleccionado para tomar sus datos
          leerDatosProducto(producto);
          mostrarNotificacion();
     }
}

function mostrarNotificacion() {
     const notificacion = document.querySelector('#notificacion');
     notificacion.style.display = 'block';

     // Ocultar la notificación después de un tiempo (por ejemplo, 3 segundos)
     setTimeout(() => {
          notificacion.style.display = 'none';
     }, 3000); // 3000 milisegundos = 3 segundos
}
