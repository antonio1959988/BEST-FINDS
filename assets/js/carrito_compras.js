// Selecciona el carrusel por su id
const carousel = document.getElementById('BannerIndex');

// Configura el intervalo de transición automática (5 segundos)
const interval = 5000; // 5000 milisegundos (5 segundos)

// Inicializa el carrusel con la opción "ride"
const myCarousel = new bootstrap.Carousel(carousel, {
    interval: interval,
    pause: 'hover', // Pausa la transición al pasar el ratón sobre el carrusel
});


//Lista de productos que se cargarán en el carrito de compras
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

//funcion para añadir los productos al carrito
function agregarProductoCarrito(boton) {
    let index = boton.id.split("-")[1];
    let productoId = document.getElementById(`productoCarruselId-${index}`);
    let imagen = document.getElementById(`productoImagen-${index}`);
    let nombre = document.getElementById(`productoNombre-${index}`);
    let descripcion = document.getElementById(`productoDescripcion-${index}`);
    let precio = document.getElementById(`productoPrecio-${index}`);

    let producto = {
        id: productoId.innerHTML,
        imagen: imagen.src,
        nombre: nombre.innerHTML,
        descripcion: descripcion.innerHTML,
        precio: precio.innerHTML,
        cantidad: 1,
        total: precio.innerHTML
    };

    agregarProductoSession(producto);
    actualizarCarrito();
    actualizarCarritoNavBar();
    calcularCostoTotal();
}

function actualizarCarrito() {
    let productosArray = JSON.parse(sessionStorage.getItem("productosArray"));

    let carrito = document.getElementById("carritoProductos"); //necesitamos el container de carrito para agregar el row de producto
    //Limpiar carrito antes de agregar los productos
    carrito.innerHTML = "";

    productosArray.map((producto, index) => { //map permite iterar sobre los elementos del array y se le agrega un indice a cada iteracion, el indice lo necesitamos para generar un ID unico para los elementos de cada row de producto con los que vamos a interactuar

        let rowProducto = document.createElement("div");
        rowProducto.setAttribute("id", `producto-${index}`) //interactuamos con el row para poder eliminarlo completo
        rowProducto.className = "row rowPosition mb-3";
        rowProducto.innerHTML = `
        <div class="col"> <!-- div  col Imagen-->
            <img src=${producto.imagen} alt="producto1" id="imgProductos">
        </div> <!-- div col imagen-->
      
        <div class="col-4 col-sm-4 col-md-6 col-lg-6"> <!--DescripcioProducto-->
    
            <div class="row">
                <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                    <p id="productoId-${index}" class="d-none">${producto.id}</p>
                    <h6><b>${producto.nombre}</b></h6>
                    <p>${producto.descripcion}</p>
                </div>
    
                <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                    <!-- Seccion contador -->
                    <div class="d-inline-block">
                        <div class="input-group">
                            <button id="decrementar-${index}" type="button" class="btn btn-number" onclick="decrementarCantidad(this);" > 
                                <i class="fa-solid fa-minus"></i>
                            </button>
                            <input type="text" id="cantidad-${index}" name="cantidad" class="form-control input-number" value="${producto.cantidad}" min="1" max="100">
                            <button id="incrementar-${index}" type="button" class="btn btn-number" onclick="incrementarCantidad(this);">
                                <i class="fa-solid fa-plus"></i>
                            </button>
                        </div>
                    </div>
                    <div class="d-inline-block">
                        <button id= "eliminar-${index}" type="button" class="btn" onclick = "eliminarProducto(this)">
                            <i class="fa-regular fa-trash-can fa-xl icon-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div> <!--Col descripcion-->
    
         <!--TOTAL PRODUCTO 1-->
        <div class="col"><!--Inicio div col3 total-->
            <p id="totalProducto-${index}" class="costo-color">$${producto.total}</p>
        </div> <!--Cierre col3 total-->`;

        carrito.appendChild(rowProducto);

    });
}

//Funciones para el contador
function incrementarCantidad(boton) {
    let productosArray = JSON.parse(sessionStorage.getItem("productosArray")); //Traer el array de sesión
    let index = boton.id.split("-")[1]; //el split es para partir una palabra por medio de un caracter.
    //Split Nos da como resultado un array de strings 
    //["incrementar", "1"]
    let producto = document.getElementById(`productoId-${index}`)
    let inputCantidad = document.getElementById(`cantidad-${index}`);
    let cantidad = parseInt(inputCantidad.value);
    inputCantidad.value = cantidad + 1;

    let productoIndex = productosArray.findIndex(productoArray => productoArray.id == producto.innerHTML);
    productosArray[productoIndex].cantidad = cantidad + 1;
    sessionStorage.setItem("productosArray", JSON.stringify(productosArray)); //Volver a guardarlo en sesión ya modificado


    calcularPrecio(index);
    calcularCostoTotal();
    actualizarCarritoNavBar();
}

function decrementarCantidad(boton) {
    let productosArray = JSON.parse(sessionStorage.getItem("productosArray")); //Traer el array de sesión
    let index = boton.id.split("-")[1]; //siempre vamos a acceder al indice uno porque es el row donde vamos a estar trabajando.
    let producto = document.getElementById(`productoId-${index}`)
    let inputCantidad = document.getElementById(`cantidad-${index}`);
    let cantidad = parseInt(inputCantidad.value);
    if (cantidad != 1) {
        inputCantidad.value = cantidad - 1;

        let productoIndex = productosArray.findIndex(productoArray => productoArray.id == producto.innerHTML);
        productosArray[productoIndex].cantidad = cantidad - 1;
        sessionStorage.setItem("productosArray", JSON.stringify(productosArray)); //Volver a guardarlo en sesión ya modificado
    }

    calcularPrecio(index);
    calcularCostoTotal();
    actualizarCarritoNavBar();
}


//Funcion para eliminar productos
function eliminarProducto(boton) {
    let productosArray = JSON.parse(sessionStorage.getItem("productosArray")); //Traer el array de sesión
    let index = boton.id.split("-")[1];
    let producto = document.getElementById(`productoId-${index}`)
    let rowProducto = document.getElementById(`producto-${index}`);

    rowProducto.remove();
    let productoIndex = productosArray.findIndex(productoArray => productoArray.id == producto.innerHTML);
    productosArray.splice(productoIndex, 1);
    sessionStorage.setItem("productosArray", JSON.stringify(productosArray)); //Volver a guardarlo en sesión ya modificado

    calcularCostoTotal();
    actualizarCarritoNavBar();

}

//Calcular precio
function calcularPrecio(index) {
    let productosArray = JSON.parse(sessionStorage.getItem("productosArray")); //Traer el array de sesión
    let producto = document.getElementById(`productoId-${index}`)
    let costo = document.getElementById(`totalProducto-${index}`); //row
    let inputCantidad = document.getElementById(`cantidad-${index}`);
    let cantidad = parseInt(inputCantidad.value);

    let productoIndex = productosArray.findIndex(productoArray => productoArray.id == producto.innerHTML);
    let calculo = productosArray[productoIndex].precio * cantidad;

    productosArray[productoIndex].total = calculo;
    sessionStorage.setItem("productosArray", JSON.stringify(productosArray)); //Volver a guardarlo en sesión ya modificado

    costo.innerHTML = `$${calculo}`;
}


//Funcion para calcular costo total

function calcularCostoTotal() {
    let suma = 0;
    let cantidades = document.getElementsByClassName("costo-color");
    let sumaTotal = document.getElementById("costoTotal");
    for (let i = 0; i < cantidades.length; i++) {
        let cantidad = parseInt(cantidades[i].innerHTML.substring(1));
        suma = suma + cantidad;
    }
    sumaTotal.innerHTML = `$${suma}`;



}




/* Carrusel */

function carruselProductos() {
    let carrusel = document.getElementById("carruselProductos");

    listaProductosTemporal.map((producto, index) => {
        let contenedorProducto = document.createElement("div");
        contenedorProducto.className = "carousel-item";

        if (index == 0) {
            contenedorProducto.classList.add("active");
        }

        contenedorProducto.innerHTML = `
            <div class="row">
                <div class="col">
                    <img id="productoImagen-${index}" class="imgProductos2" src=${producto.imagen}>
                </div>
                <div class="col">
                    <p id="productoCarruselId-${index}" class="d-none">${producto.id}</p>
                    <h3 id="productoNombre-${index}">${producto.nombre}</h3>
                    <p id="productoDescripcion-${index}">${producto.descripcion}</p>
                    <p id="productoPrecio-${index}" class="d-none">${producto.precio}</p>
                    <button id="productoCarrusel-${index}" class="btn colorButtonRosa" onclick="agregarProductoCarrito(this);">Agregar al carrito</button>
                </div>
            </div>
        `;

        carrusel.appendChild(contenedorProducto);

    });
}



function agregarProductoSession(producto) {
    let productosArray = JSON.parse(sessionStorage.getItem("productosArray")); //Traer el array de sesión

    let productoIndex = productosArray.findIndex(productoArray => productoArray.id == producto.id);
    if (productoIndex >= 0) {
        productosArray[productoIndex].cantidad += 1;
        productosArray[productoIndex].total = productosArray[productoIndex].cantidad * productosArray[productoIndex].precio;
    } else {
        productosArray.push(producto);
    }
    mostrarNotificacion();
    sessionStorage.setItem("productosArray", JSON.stringify(productosArray)); //Volver a guardarlo en sesión ya modificado
}

function vaciarCarrito() {
    sessionStorage.setItem("productosArray", JSON.stringify(new Array()));
    actualizarCarrito();
    actualizarCarritoNavBar();
  
  
  }
  
  function mostrarNotificacion() {
	const notificacion = document.querySelector('.notificacion');
	notificacion.style.display = 'block';

	// Ocultar la notificación después de un tiempo (por ejemplo, 3 segundos)
	setTimeout(() => {
		 notificacion.style.display = 'none';
	}, 1000); // 3000 milisegundos = 3 segundos
}