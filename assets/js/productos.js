

let filtrosDiv = document.getElementById('filtrosDiv');
filtrosDiv.innerHTML=`<br>
<h4>Filtros</h4>
<br>
<form id="formFiltros">
  <div class="form-group">
    <label for="categorias">Categoría</label>
    <select class="form-select">
      <option disabled selected>Seleccione</option>
      <option value="1">Uno</option>
      <option value="2">Dos</option>
      <option value="3">Tres</option>
    </select>
    <br>

    <label for="categorias">Marca</label>
    <select class="form-select">
      <option disabled selected>Seleccione</option>
      <option value="1">Uno</option>
      <option value="2">Dos</option>
      <option value="3">Tres</option>
    </select>
    <br>

    <label for="categorias">Lanzamiento</label>
    <select class="form-select">
      <option disabled selected>Seleccione</option>
      <option value="1">Uno</option>
      <option value="2">Dos</option>
      <option value="3">Tres</option>
    </select>
    <br>

    <label for="categorias">Precio</label>
    <select class="form-select">
      <option disabled selected>Seleccione</option>
      <option value="1">Uno</option>
      <option value="2">Dos</option>
      <option value="3">Tres</option>
    </select>
    <br>

    <label for="categorias">Calificación</label>
    <select class="form-select">
      <option disabled selected>Seleccione</option>
      <option value="1">Uno</option>
      <option value="2">Dos</option>
      <option value="3">Tres</option>
    </select>
    <br>
    <button type="button" class="btn btn-primary" id="btnAplicar">Aplicar Filtros</button>
  </div>
</form>`;
