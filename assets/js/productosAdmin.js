//Array inicial para almacenar los objetos json de los productos
var productosArray = [];

//Contador de id para lista de carrito
let contadorId = 0;

// Función para cargar los datos de los productos
document.getElementById("btnAplicar").addEventListener("click", validarProducto);

function validarProducto() {
    // Obtener el valor del campo "nombre"
    const nombre = document.getElementById("nombre").value;

    // Array de nombres válidos
    var validNames = [
      'Fade Into Hue',
      'Frozen Forest Lip Balm',
      'Gothic Beach Palette',
      'Lip Injection Extreme Lip Plumper',
      'Maracuja Juicy Shift',
      'Naked Metal Mania  Eyeshadow Palette',
      'Soft Pinch Liquid Blush - Love',
      'Stretch Fluid Foundation',
      'Sunset Blur Finishing Powder',
      'The Escape Pod Palette'
    ];
  
    // Verificar si el nombre ingresado está en la lista de nombres válidos
    if (validNames.includes(nombre)) {
      agregarProducto();
    } else{
      alert("El nombre del producto no es válido. Por favor, elija un nombre de la lista.");
    }
};



function agregarProducto(){
   // Iteracion del contador para listado de carrito
   contadorId++;

   // Obtener los valores de los campos del formulario
   const nombre = document.getElementById("nombre").value;
   const descripcion = document.getElementById("descripcion").value;
   const precio = document.getElementById("precio").value;
   const fecha = document.getElementById("fecha").value;
   const categoria = document.getElementById("cboCategorias").value;
   const marca = document.getElementById("cboMarcas").value;
 
   // Obtener los valores de los inputs en base a los checkboxes seleccionados
   const coloresSeleccionados = [];
   const checkboxes = document.querySelectorAll("#color-checkbox");
   const inputs = document.querySelectorAll("#var");
   checkboxes.forEach((checkbox, index) => {
     if (checkbox.checked) {
       coloresSeleccionados.push(inputs[index].value);
     }
   });
 
   // Ahora, coloresSeleccionados contiene los valores de los inputs asociados a los checkboxes seleccionados
   console.log(coloresSeleccionados);
 
 
   // Crear un elemento para mostrar los datos
   const nuevoProducto = document.createElement("div");
   nuevoProducto.className = "col-sm-12 col-md-6 col-lg-3";
   nuevoProducto.innerHTML = `
     <a href="./productos2.html" id="enlaceProducto" target="_self">
     <div id="contenedorInferior">
       <img src="./assets/img/Productos/${nombre}/${coloresSeleccionados[0]}.webp" alt="producto" class="img-fluid"
         id="imgProducto">
       <br>
       <span id="nombreProducto">${nombre}</span>
       <span id="precio">$${precio}</span>
     </a>
       <form>
         <input type="number" class="form-control" id="cantidadProducto" min="0" max="100" value="0">
         <button type="button" class="btn btn-primary agregar-carrito" id="btnAplicar" data-id="${contadorId}">Agregar al carrito</button>
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
 
 
}
 