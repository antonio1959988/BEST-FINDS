var productosArray = [];

document.getElementById("btnAplicar").addEventListener("click", function () {
    // Obtener los valores de los campos del formulario
    const nombre = document.getElementById("nombre").value;
    const descripcion = document.getElementById("descripcion").value;
    const precio = document.getElementById("precio").value;
    const fecha = document.getElementById("fecha").value;
    const categoria = document.getElementById("cboCategorias").value;
    const marca = document.getElementById("cboMarcas").value;

    // Obtener los valores de los checkboxes
    const coloresSeleccionados = [];
    const checkboxes = document.querySelectorAll("#color-checkbox");
    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            coloresSeleccionados.push(checkbox.name);
        }
    });

    // Crear un elemento para mostrar los datos
    const nuevoProducto = document.createElement("div");
    nuevoProducto.className = "col-sm-12 col-md-6 col-lg-3";
    nuevoProducto.innerHTML = `
    <a href="./productos2.html" id="enlaceProducto" target="_self">
    <div id="contenedorInferior">
      <img src="./assets/img/Productos/Eaze_Drop_Stick_Blur.webp" alt="producto" class="img-fluid"
        id="imgProducto">
      <br>
      <span id="nombreProducto">${nombre}</span>
      <span id="precio">$${precio}</span>
    </a>
      <form>
        <input type="number" class="form-control" id="cantidadProducto" min="0" max="100" value="0">
        <button type="button" class="btn btn-primary" id="btnAplicar">Agregar al carrito</button>
      </form>
    </div>
    `;

    // Agregar el nuevo producto al contenedor
    document.getElementById("containerDatos").appendChild(nuevoProducto);

    // Crear un objeto con los datos del producto
    const nuevoProductoJSON = {
        nombre: nombre,
        descripcion: descripcion,
        precio: precio,
        fecha: fecha,
        categoria: categoria,
        marca: marca,
        colores: coloresSeleccionados
    };

    // Agregar el nuevo producto al array de productos
    productosArray.push(nuevoProductoJSON);

    // Mostrar los datos del producto en la consola
    console.log(productosArray);

    localStorage.setItem("productosArray", JSON.stringify(productosArray));

});