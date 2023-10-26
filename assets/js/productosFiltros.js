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

// Recuperar los datos JSON del almacenamiento local
var productosArray;

fetch('http://localhost:8080/productos')
    .then(res => res.json())
    .then(json => {
        productosArray = json;
        agregarProductos();
    })
    .catch(err => console.log(err));

// Mostrar todos los productos al dar click en el botón de borrar filtros
btnBorrarFiltros.addEventListener('click', () => {
    mostrarProductos(listaProductosTemporal); // Modificar para usar listaProductosTemporal
});

document.addEventListener('DOMContentLoaded', () => {
    mostrarProductos(listaProductosTemporal); // Modificar para usar listaProductosTemporal
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

calificacion.addEventListener('input', () => {
    datosBusqueda.calificacion = calificacion.value;
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

function mostrarProductos(productosArray) {
    limpiarHTML();

    const contenedor = document.getElementById('listaProductos'); // Modificar el ID para que coincida con el contenedor de productos

    productosArray.forEach(producto => {
        contadorId++;
        const productoHTML = document.createElement('div');
        productoHTML.className = "col-sm-12 col-md-6 col-lg-3";
        productoHTML.innerHTML = `
            <a href="./productos2.html" id="enlaceProducto" target="_self">
            <div id="contenedorInferior">
                <img src="./assets/img/Productos/${producto.nombre}/${producto.variante[0]}.webp" alt="producto" class="img-fluid"
                    id="imgProducto">
                <br>
                <span id="nombreProducto">${producto.nombre}</span>
                <span id="precio">$${producto.precio}</span>
            </a>
            <form>
                <input type="number" class="form-control" id="cantidadProducto" min="0" max="100" value="0">
                <button type="button" class="btn btn-primary agregar-carrito" id="btnAplicar" data-id="${contadorId}">Agregar al carrito</button>
            </form>
            </div>
        `;
        contenedor.appendChild(productoHTML);
    });
}

function noResultado() {
    limpiarHTML();

    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta', 'error');
    noResultado.appendChild(document.createTextNode('No hay Resultados'));
    document.querySelector('#resultado').appendChild(noResultado);
}

function filtrarProductos() {
    let resultado = listaProductosTemporal.filter(filtrarCategoria).filter(filtrarMarca).filter(filtrarLanzamiento).filter(filtrarPrecio).filter(filtrarCalificacion);

    // Ordenar por fecha
    if (datosBusqueda.lanzamiento === "fechaR-A") {
        resultado = resultado.sort((a, b) => {
            const dateA = new Date(a.fecha);
            const dateB = new Date(b.fecha);
            return dateB - dateA;
        });
    } else if (datosBusqueda.lanzamiento === "fechaA-R") {
        resultado = resultado.sort((a, b) => {
            const dateA = new Date(a.fecha);
            const dateB = new Date(b.fecha);
            return dateA - dateB;
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

function filtrarLanzamiento(producto) {
    if (datosBusqueda.lanzamiento) {
        return producto.lanzamiento === datosBusqueda.lanzamiento;
    }
    return producto;
}

function filtrarPrecio(producto) {
    if (datosBusqueda.precio) {
        return producto.precio === datosBusqueda.precio;
    }
    return producto;
}

function filtrarCalificacion(producto) {
    if (datosBusqueda.calificacion) {
        return producto.calificacion === datosBusqueda.calificacion;
    }
    return producto;
}







// ...
// ...



// ...
