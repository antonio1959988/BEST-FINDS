// Selectores
const categoria = document.querySelector('#cboCategoria');
const marca = document.querySelector('#cboMarca');
const lanzamiento = document.querySelector('#cboLanzamiento');
const precio = document.querySelector('#cboPrecio');
const calificacion = document.querySelector('#cboCalificacion');
const btnBorrarFiltros = document.querySelector('#btnAplicarFiltro');

var contadorId = 0;

// Datos para la busqueda
const datosBusqueda = {
    categoria: '',
    marca: '',
    lanzamiento: '',
    precio: '',
    calificacion: ''
}

// Mostrar todos los productos al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    // Lista de productos que se cargarán en el carrito de compras
    fetch('http://localhost:8080/productos')
        .then(res => res.json())
        .then(json => {
            generarProductos(json);
        })
        .catch(err => console.log(err));
});


function generarProductos(productosArray){
    
mostrarProductos(productosArray);
// Mostrar todos los productos al dar click en el botón de borrar filtros
btnBorrarFiltros.addEventListener('click', () => {
    mostrarProductos(productosArray);
});

// Event Listeners para el formulario
categoria.addEventListener('input', () => {
    datosBusqueda.categoria = categoria.value;
    // Mandar llamar la función de filtrar productos
    filtrarProductos();
});

marca.addEventListener('input', () => {
    datosBusqueda.marca = marca.value;
    // Mandar llamar la función de filtrar productos
    filtrarProductos();
});

lanzamiento.addEventListener('input', () => {
    datosBusqueda.lanzamiento = lanzamiento.value;
    // Mandar llamar la función de filtrar productos
    filtrarProductos();
});

precio.addEventListener('input', () => {
    datosBusqueda.precio = precio.value;
    // Mandar llamar la función de filtrar productos
    filtrarProductos();
});

function limpiarHTML() {
    // Leer el elemento Resultado
    const contenedor = document.querySelector('#resultado');

    // limpiar los resultados anteriores
    while (contenedor.firstChild) {
        contenedor.removeChild(contenedor.firstChild);
    }
}

function agregarProductoSession(productoId) {
  let productosArray = JSON.parse(sessionStorage.getItem("productosArray")) || [];

  let producto = listaProductosTemporal.find((item) => item.idProducto === productoId);

  if (producto) {
    let cantidadInput = document.getElementById(`productoCantidad-${producto.idProducto}`);
    let cantidad = parseInt(cantidadInput.value);

    let productoEnCarrito = productosArray.find((item) => item.id === producto.idProducto);

    if (productoEnCarrito) {
      productoEnCarrito.cantidad += cantidad;
      productoEnCarrito.total = productoEnCarrito.cantidad * productoEnCarrito.precio;
    } else {
      productosArray.push({
        id: producto.idProducto,
        imagen: `./assets/img/Productos/${producto.nombre}/default.webp`,
        nombre: producto.nombre,
        descripcion: producto.descripcion,
        precio: parseFloat(producto.precio),
        total: parseFloat(producto.precio) * cantidad,
        cantidad: cantidad,
        categoria: producto.categoria, // Agregar categoría
        marca: producto.marca, // Agregar marca
        lanzamiento: producto.fechaLanzamiento, // Agregar fecha de lanzamiento
        calificacion: producto.calificacion, // Agregar calificación
      });
    }

    mostrarNotificacion();
    sessionStorage.setItem("productosArray", JSON.stringify(productosArray));
  }
}

function mostrarProductos(productosArray) {
    console.log(productosArray);
    limpiarHTML();

    // Leer el elemento Resultado
    const contenedor = document.querySelector('#resultado');

    // Construir el HTML de los productos
    productosArray.forEach(producto => {
        contadorId++;
        const productoHTML = document.createElement('div');
        productoHTML.className = "col-sm-12 col-md-6 col-lg-3";
        productoHTML.innerHTML = `
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
      </div>
        `;
        console.log(producto);
        contenedor.appendChild(productoHTML);
    })
}
function noResultado() {
    limpiarHTML();

    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta', 'error');
    noResultado.appendChild(document.createTextNode('No hay Resultados'));
    document.querySelector('#resultado').appendChild(noResultado);
}

function filtrarProductos() {
    let resultado = productosArray.filter(filtrarCategoria).filter(filtrarMarca);

    // Ordenar por nombre
    if (datosBusqueda.lanzamiento === "ordenAZ") {
        resultado = resultado.sort((a, b) => {
            return a.nombre.localeCompare(b.nombre, undefined, { sensitivity: 'base' });
        });
    } else if (datosBusqueda.lanzamiento === "ordenZA") {
        resultado = resultado.sort((a, b) => {
            return b.nombre.localeCompare(a.nombre, undefined, { sensitivity: 'base' });
        });
    }
    

    // Ordenar por precio
    if (datosBusqueda.precio === "costoMen-May") {
        resultado = resultado.sort((a, b) => a.precio - b.precio);
    } else if (datosBusqueda.precio === "costoMay-Men") {
        resultado = resultado.sort((a, b) => b.precio - a.precio);
    }

    // Ordenar por calificación
    if (datosBusqueda.calificacion === "mayorLikes") {
        resultado = resultado.sort((a, b) => a.likes - b.likes);
    } else if (datosBusqueda.calificacion === "mayorCommit") {
        resultado = resultado.sort((a, b) => a.comentarios - b.comentarios);
    } else if (datosBusqueda.calificacion === "mayorVentas") {
        resultado = resultado.sort((a, b) => a.ventas - b.ventas);
    }

    if (resultado.length) {
        mostrarProductos(resultado);
    } else {
        noResultado();
    }
}

// Aplica los filtros
function filtrarCategoria(producto) {
    if (datosBusqueda.categoria) {
        return producto.categoria === datosBusqueda.categoria;
    }
    return producto;
}

function filtrarMarca(producto) {
    if (datosBusqueda.marca) {
        return producto.marca === datosBusqueda.marca;
    }
    return producto;
}





function mostrarNotificacion() {
  const notificacion = document.querySelector('.notificacion');
  notificacion.style.display = 'block';

  // Ocultar la notificación después de un tiempo (por ejemplo, 3 segundos)
  setTimeout(() => {
    notificacion.style.display = 'none';
  }, 1000); // 1000 milisegundos = 1 segundo
}





// Función para ordenar los productos por nombre alfabéticamente






// ...
// ...



// ...

}