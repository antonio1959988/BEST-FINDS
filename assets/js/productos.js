

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
    // Llama a la función de filtrado con los valores seleccionados
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