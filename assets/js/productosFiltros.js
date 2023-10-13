// Selectores
const categoria = document.querySelector('#cboCategoria');
const marca = document.querySelector('#cboMarca');
const lanzamiento = document.querySelector('#cboLanzamiento');
const precio = document.querySelector('#cboPrecio');
const calificacion = document.querySelector('#cboCalificacion');
const btnBorrarFiltros = document.querySelector('#btnAplicarFiltro');

// Datos para la busqueda
const datosBusqueda = {
    categoria: '',
    marca: '',
    lanzamiento : '',
    precio: '',
    calificacion: ''
}

document.addEventListener('DOMContentLoaded', () => {
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

calificacion.addEventListener('input', () => {
    datosBusqueda.calificacion = calificacion.value;
    // Mandar llamar la función de filtrar productos
    filtrarProductos();
});

function limpiarHTML() {
    // Leer el elemento Resultado
    const contenedor = document.querySelector('#resultado');

    // limpiar los resultados anteriores
    while(contenedor.firstChild) {
        contenedor.removeChild(contenedor.firstChild);
    }
}

function mostrarProductos(productosArray){
    limpiarHTML();

    // Leer el elemento Resultado
    const contenedor = document.querySelector('#resultado');

    // Construir el HTML de los productos
    productosArray.forEach(producto => {
        const productoHTML = document.createElement('p');
        productoHTML.innerHTML = `
            <p>${producto.categoria} ${producto.marca} - ${producto.fecha} - ${producto.precio} - ${producto.calificacion}</p>
        `;
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

// Aplica los filtros
function filtrarCategoria(producto) {
    if(datosBusqueda.categoria){
        return producto.categoria === datosBusqueda.categoria;
    } 
    return producto;
}

function filtrarMarca(producto) {
    if(datosBusqueda.marca){
        return producto.marca === datosBusqueda.marca;
    } 
    return producto;
}

function filtrarLanzamiento(producto) {
    if(datosBusqueda.lanzamiento){
        return producto.fecha === datosBusqueda.lanzamiento;
    } 
    return producto;
}


function filtrarPrecio(producto) {
    if(datosBusqueda.precio){
        return producto.precio === datosBusqueda.precio;
    } 
    return producto;
}

function filtrarCalificacion(producto) {
    if(datosBusqueda.calificacion){
        return producto.calificacion === datosBusqueda.calificacion;
    } 
    return producto;
}






// ...
// ...



// ...
