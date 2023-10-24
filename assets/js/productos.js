//Uso del DOM para crear sección de filtros en vista móvil
let filtrosDiv = document.getElementById('filtrosDiv');
filtrosDiv.innerHTML=`          <br>
<h4>Filtros</h4>
<br>
<form id="formFiltros">
  <div class="form-group">
    <label for="categoria">Categoría:</label><br>
    <select class="form-select" id="cboCategorias">
        <option disabled selected>Seleccione</option>
        <option value="Ojos">Ojos</option>
        <option value="Rostro">Rostro</option>
        <option value="Labios">Labios</option>
    </select>
    <br>

    <label for="marca">Marca:</label><br>
    <select class="form-select" id="cboMarcas">
        <option disabled selected>Seleccione</option>
        <option value="Colourpop">Colourpop</option>
        <option value="Too Faced">Too Faced</option>
        <option value="Urban Decay">Urban Decay</option>
        <option value="Rare Beauty">Rare Beauty</option>
    </select>
    <br>

    <label for="lanzamiento">Lanzamiento</label>
    <select class="form-select">
      <option disabled selected>Seleccione</option>
      <option value="fechaR-A">Más reciente a más antiguo</option>
      <option value="fechaA-R">Más antiguo a más reciente</option>
    </select>
    <br>

    <label for="precio">Precio</label>
    <select class="form-select">
      <option disabled selected>Seleccione</option>
      <option value="costoMen-May">Menor costo a mayor costo</option>
      <option value="costoMay-Men">Mayor costo a menor costo</option>
    </select>
    <br>

    <label for="calificacion">Calificación</label>
    <select class="form-select">
      <option disabled selected>Seleccione</option>
      <option value="mayorLikes">Mayor número de likes</option>
      <option value="mayorCommit">Mayor número de comentarios</option>
      <option value="mayorVentas">Mayor número de ventas</option>
    </select>
    <br>
    <button type="button" class="btn btn-primary" id="btnAplicar">Aplicar Filtros</button>
  </div>
</form>`;

//Apartado para filtrar productos (por el momento solamente imprime informacióm en consola)
document.addEventListener("DOMContentLoaded", function() {
  const btnAplicar = document.getElementById("btnAplicar");

  btnAplicar.addEventListener("click", function() {
    // Obtiene los valores seleccionados en los filtros
    const categoria = document.getElementById("cboCategorias").value;
    const marca = document.getElementById("cboMarcas").value;
    const ordenLanzamiento = document.getElementById("cboLanzamiento").value;
    const ordenPrecio = document.getElementById("cboPrecio").value;
    const ordenCalificacion = document.getElementById("cboCalificacion").value;
    console.log(categoria);
    console.log(marca);
    console.log(ordenLanzamiento);
    console.log(ordenPrecio);
    console.log(ordenCalificacion);
    // Llamar a la función de filtrado con los valores seleccionados
    filtrarProductos(categoria, marca, ordenLanzamiento, ordenPrecio, ordenCalificacion);
  });

  function filtrarProductos(categoria, marca, ordenLanzamiento, ordenPrecio, ordenCalificacion) {
    console.log(categoria);
    console.log(marca);
    console.log(ordenLanzamiento);
    console.log(ordenPrecio);
    console.log(ordenCalificacion);
  }
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

function agregarProductos() {
  let divListaProductos = document.getElementById("listaProductos");

  listaProductosTemporal.map((producto, index) => {
    let divProducto = document.createElement("div");
    divProducto.className = "col-sm-12 col-md-6 col-lg-3";

    divProducto.innerHTML = `
        <div class="contenedorInferior">
          <a href="./productos2.html" class="enlaceProducto" target="_self">
            <img id="productoImagen-${index}" src=${producto.imagen} alt="producto" class="img-fluid imgProducto">
            <br>
            <p id="productoId-${index}" class="d-none">${producto.id}</p>
            <p id="productoDescripcion-${index}" class="d-none">${producto.descripcion}</p>
            <span id="productoNombre-${index}" class="nombreProducto">${producto.nombre}</span>
            <span id="productoPrecio-${index}" class="precio">$${producto.precio}</span>
          </a>
          <input id="productoCantidad-${index}" type="number" class="form-control cantidadProducto" min="1" max="100" value="1">
          <button id="agregarCarrito-${index}" type="button" class="btn btn-primary agregar-carrito" onclick="agregarProductoSession(this); actualizarCarritoNavBar();">
            Agregar al carrito
          </button>
        </div>`;

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

