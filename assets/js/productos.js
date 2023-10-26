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
  });
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


function mostrarNotificacion() {
  const notificacion = document.querySelector('.notificacion');
  notificacion.style.display = 'block';

  // Ocultar la notificación después de un tiempo (por ejemplo, 3 segundos)
  setTimeout(() => {
    notificacion.style.display = 'none';
  }, 1000); // 1000 milisegundos = 1 segundo
}
