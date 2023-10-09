
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
let listaProductos = [ //array de objetos
    {
        nombre: "Lorem1",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        costo: 621,
        imagen: "./assets/img/carritoCompras/producto1.jpg"
    },
    {
        nombre: "Lorem2",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        costo: 621,
        imagen: "./assets/img/carritoCompras/producto2.jpg"
    },
    {
        nombre: "Lorem3",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        costo: 621,
        imagen: "./assets/img/carritoCompras/producto3.jpg"
    }
];



//funcion para añadir los productos al carrito
function agregarProductos() {
    let carrito = document.getElementById("carrito"); //necesitamos el container de carrito para agregar el row de producto

    listaProductos.map((producto, index) => { //map permite iterar sobre los elementos del array y se le agrega un indice a cada iteracion, el indice lo necesitamos para generar un ID unico para los elementos de cada row de producto con los que vamos a interactuar

        let rowProducto = document.createElement("producto");
        rowProducto.setAttribute("id", `producto-${index}`) //interactuamos con el row para poder eliminarlo completo
        rowProducto.className = "row rowPosition mb-3";
        rowProducto.innerHTML = `
        <div class="col"> <!-- div  col Imagen-->
            <img src=${producto.imagen} alt="producto1" id="imgProductos">
        </div> <!-- div col imagen-->
      
        <div class="col-4 col-sm-4 col-md-6 col-lg-6"> <!--DescripcioProducto-->
    
            <div class="row">
                <div class="col-12 col-sm-12 col-md-6 col-lg-6">
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
                            <input type="text" id="cantidad-${index}" name="cantidad" class="form-control input-number" value="1" min="1" max="100">
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
            <p id="costo-${index}" class="costo-color">$${producto.costo}</p>
        </div> <!--Cierre col3 total-->`;

        carrito.appendChild(rowProducto);

    });
}

//Funciones para el contador
function incrementarCantidad(boton) {
    let index = boton.id.split("-")[1]; //el split es para partir una palabra por medio de un caracter.
    //Split Nos da como resultado un array de strings 
    //["incrementar", "1"]
    let inputCantidad = document.getElementById(`cantidad-${index}`);
    let cantidad = parseInt(inputCantidad.value);
    inputCantidad.value = cantidad + 1;

    calcularPrecio(index);
    calcularCostoTotal();
}

function decrementarCantidad(boton) {
    let index = boton.id.split("-")[1]; //siempre vamos a acceder al indice uno porque es el row donde vamos a estar trabajando.
    let inputCantidad = document.getElementById(`cantidad-${index}`);
    let cantidad = parseInt(inputCantidad.value);
    if (cantidad != 1) {
        inputCantidad.value = cantidad - 1;
    }

    calcularPrecio(index);
    calcularCostoTotal();
}


//Funcion para eliminar productos
function eliminarProducto(boton) {
    let index = boton.id.split("-")[1];
    let rowProducto = document.getElementById(`producto-${index}`);
    rowProducto.remove();

    
    calcularCostoTotal();

}

//Calcular precio
function calcularPrecio(index) {
    let costo = document.getElementById(`costo-${index}`); //row
    let inputCantidad = document.getElementById(`cantidad-${index}`);
    let cantidad = parseInt(inputCantidad.value);
    let calculo = listaProductos[index].costo * cantidad;
    costo.innerHTML = `$${calculo}`;
}


//Funcion para calcular costo total

function calcularCostoTotal() {
    let suma = 0;
    let cantidades = document.getElementsByClassName("costo-color");
    let sumaTotal = document.getElementById("costoTotal");
    for(let i = 0; i < cantidades.length; i++){
        let cantidad = parseInt(cantidades[i].innerHTML.substring(1));
        suma = suma + cantidad;
    }
    sumaTotal.innerHTML = `$${suma}`;


    
}











