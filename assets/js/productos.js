//Uso del DOM para crear sección de filtros en vista móvil
let filtrosDiv = document.getElementById('filtrosDiv');
filtrosDiv.innerHTML = `
<br>
<h4>Filtros</h4>
<br>
<form id="formFiltros">
  <div class="form-group">
    <label for="categoria">Categoría:</label>
    <select class="form-select" id="cboCategoria">
      <option disabled selected>Seleccione</option>
      <option value="Ojos">Ojos</option>
      <option value="Rostro">Rostro</option>
      <option value="Labios">Labios</option>
    </select>
    <br>

    <label for="marca">Marca:</label>
    <select class="form-select" id="cboMarca">
      <option disabled selected>Seleccione</option>
      <option value="Colourpop">Colourpop</option>
      <option value="Too Faced">Too Faced</option>
      <option value="Urban Decay">Urban Decay</option>
      <option value="Rare Beauty">Rare Beauty</option>
    </select>
    <br>

    <label for="lanzamiento">Nombre</label>
    <select class="form-select" id="cboLanzamiento">
      <option disabled selected>Seleccione</option>
      <option value="ordenAZ">A a la Z</option>
      <option value="ordenZA">Z a la A</option>
    </select>
    <br>

    <label for="precio">Precio</label>
    <select class="form-select" id="cboPrecio">
      <option disabled selected>Seleccione</option>
      <option value="costoMen-May">Menor costo a mayor costo</option>
      <option value="costoMay-Men">Mayor costo a menor costo</option>
    </select>
    <br>
    <button type="submit" class="btn btn-primary" id="btnAplicarFiltro">Restablecer Filtros</button>
  </div>
</form>
`;

//Apartado para filtrar productos (por el momento solamente imprime informacióm en consola)
document.addEventListener("DOMContentLoaded", function () {
  const btnAplicar = document.getElementById("btnAplicar");

  btnAplicar.addEventListener("click", function () {
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



