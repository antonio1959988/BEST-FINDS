

//funcion para añadir los productos al carrito
function agregarProductos() {
    let carrito = document.getElementById("carrito");
    //Lista de productos que se cargarán en el carrito de compras
    let listaProductos = [
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

    listaProductos.map((producto,index) => {

        let rowProducto = document.createElement("producto");
        rowProducto.setAttribute("id",`producto-${index}`)
        rowProducto.className = "row rowPosition  mb-3";
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
                            <button id="decrementar-${index}" type="button" class="btn btn-number" onclick="decrementarCantidad(this);">
                                <i class="fa-solid fa-minus"></i>
                            </button>
                            <input type="text" id="quantity-${index}" name="quantity" class="form-control input-number" value="1" min="1" max="100">
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
            <p id="cantidad-${index}">$${producto.costo}</p>
        </div> <!--Cierre col3 total-->`;

        carrito.appendChild(rowProducto);

    });
}





//Funciones para el contador
function incrementarCantidad(boton) {
    let index = boton.id.split("-")[1];
    let inputCantidad = document.getElementById(`quantity-${index}`);
    let cantidad = parseInt(inputCantidad.value);
    inputCantidad.value = cantidad + 1;
}

function decrementarCantidad(boton) {
    let index = boton.id.split("-")[1];
    let inputCantidad = document.getElementById(`quantity-${index}`);
    let cantidad = parseInt(inputCantidad.value);
    if (cantidad != 1) {
        inputCantidad.value = cantidad - 1;
    }
}


//Funcion para eliminar productos
function eliminarProducto(boton){
    let index = boton.id.split("-")[1];
    let rowProducto = document.getElementById(`producto-${index}`);
    rowProducto.remove();
}

//Calcular precio
function calcularPrecio(){

}




