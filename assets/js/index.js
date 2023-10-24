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

//Idealmente esta informacion tiene que venir del backend - base de datos
let listaProductosTemporal = [ //array de objetos
    {
        id: 1,
        nombre: "Eaze Drop Stick Blur",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        precio: 621,
        imagen: "./assets/img/carritoCompras/producto1.jpg"
    },
    {
        id: 2,
        nombre: "Eaze Drop Stick Blur",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        precio: 1992,
        imagen: "./assets/img/carritoCompras/producto2.jpg"
    },
    {
        id: 3,
        nombre: "Eaze Drop Stick Blur",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        precio: 1999,
        imagen: "./assets/img/carritoCompras/producto3.jpg"
    }
];



function agregarProductosIndex() {
    let divListaProductos = document.getElementById("listaProductos");


    listaProductosTemporal.map((producto, index) => {
        let divProducto = document.createElement("div");
        divProducto.className = "col-sm-6 col-md-6 col-lg-3";
        divProducto.innerHTML = `
            <div class="contenedorInferior">
                <p id="productoId-${index}" class="d-none">${producto.id}</p>
                <p id="productoDescripcion-${index}" class="d-none">${producto.descripcion}</p>
                <img id="productoImagen-${index}" src=${producto.imagen} alt="producto" class="imgProducto img-fluid" >
                <span id="productoNombre-${index}" class="nombreProducto">${producto.nombre}</span>
                <span id="productoPrecio-${index}" class="precio">$${producto.precio}</span>
                <input id="productoCantidad-${index}"  type="number" class="form-control cantidadProducto" min="1" max="100" value="1">
                <button id="agregarCarrito-${index}" type="button" class="btn btn-primary btnAplicar" onclick="agregarProductoSession(this); actualizarCarritoNavBar();"  >Agregar al carrito</button>
            
            </div>
        `;
        divListaProductos.appendChild(divProducto);
    });

}


function agregarProductoSession(boton) {
    let productosArray = JSON.parse(sessionStorage.getItem("productosArray")); //Traer el array de sesión
    let index = boton.id.split("-")[1];
    let productoId = document.getElementById(`productoId-${index}`);
    let imagen = document.getElementById(`productoImagen-${index}`);
    let nombre = document.getElementById(`productoNombre-${index}`);
    let descripcion = document.getElementById(`productoDescripcion-${index}`);
    let precio = document.getElementById(`productoPrecio-${index}`);
    let cantidad = document.getElementById(`productoCantidad-${index}`);

    let producto = {
        id: productoId.innerHTML,
        imagen: imagen.src,
        nombre: nombre.innerHTML,
        descripcion: descripcion.innerHTML,
        precio: parseFloat(precio.innerHTML.substring(1)),
        total: parseFloat(precio.innerHTML.substring(1)) * parseInt(cantidad.value),
        cantidad: parseInt(cantidad.value)
    };


    let productoIndex = productosArray.findIndex(productoArray => productoArray.id == producto.id);
    if (productoIndex >= 0) {
        productosArray[productoIndex].cantidad += producto.cantidad;
        productosArray[productoIndex].total = productosArray[productoIndex].cantidad * productosArray[productoIndex].precio;
    } else {
        productosArray.push(producto);
    }
    sessionStorage.setItem("productosArray", JSON.stringify(productosArray)); //Volver a guardarlo en sesión ya modificado

}

