////////////////////AGREGAR COMENTARIO/////////////////////////
// Se obtiene el elemento del botón de agregar comentario mediante su ID
const botonComentario = document.getElementById('btnEnviarComentario');
let comentarios = document.getElementById('txtComentario');
let seccionComentarios = document.getElementById('seccionDescYComentarios');

//Inicio de un contador para los likes
var contador = 3;

//Función que usa el DOM para agregar un comentario
function agregarComentario() {
    contador++;
    let comentario = comentarios.value;
    let nuevoComentario = document.createElement('div');
    nuevoComentario.innerHTML = `<div id="contenedorInferior">
    <h5>Usuario Anónimo</h5>
    <p id="comentario">
        ${comentario}
    </p>
    <div id="der">
        <button id="boton-corazon-${contador}" class="boton-corazon">
            <span id="contador-likes-${contador}">0</span>
            <i class="fa fa-heart"></i>
        </button>
    </div>
</div>`;

    seccionComentarios.appendChild(nuevoComentario);
    comentarios.value = "";
    //Obtención y uso del contador de likes
    const botonCorazon = document.getElementById(`boton-corazon-${contador}`);
    const contadorLikes = document.getElementById(`contador-likes-${contador}`);

    let likes = 0;
    let Liked = false;

    //Función que actualiza los likes y los incrementsa o decrementa
    function actualizarLikes() {
        if (Liked) {
            likes--;
        } else {
            likes++;
        }

        Liked = !Liked;
        contadorLikes.innerText = likes;
        botonCorazon.classList.toggle('activo');
    }

    //Al dar clic al botón de corazón, se llama a la función de actualizar likes
    botonCorazon.addEventListener('click', actualizarLikes);

}

//Al dar clic al botón de agregar comentario, se llama a la función de agregar comentario
botonComentario.addEventListener("click", agregarComentario);

/////////////////MANIPULACIÓN DE IMÁGENES CON BOTONES//////////////////////////////////////
$(document).ready(function () {
    // Manejar clic en botones de color
    $("#tono1, #tono2, #tono3, #tono4").click(function () {
        // Obtener la ruta de la imagen desde el atributo de datos
        var imgSrc = $(this).data("img-src");
        
        // Aplicar transición de opacidad
        $(".imgProductoSeleccionada").css("opacity", "0");
        
        // Pequeña pausa antes de cambiar la fuente de la imagen
        setTimeout(function () {
            // Cambiar la fuente de la imagen principal
            $(".imgProductoSeleccionada").attr("src", imgSrc);
            
            // Restaurar la opacidad
            $(".imgProductoSeleccionada").css("opacity", "1");
        }, 500); // 500 milisegundos (0.5 segundos) para que coincida con la duración de la transición
    });
});














// Llamar a la función para cada comentario en un bucle)


/////////////////////////LOCAL STORAGE//////////////////////////////////

// Recuperar los datos JSON del almacenamiento local

//var productosArray = JSON.parse(localStorage.getItem("productosArray"));
/*
let nombreProducto = document.getElementById("tituloNombre");
let precioProducto = document.getElementById("precioPrincipal");
let descripcionProducto = document.getElementById("acercaDeProducto");

nombreProducto.textContent = productosArray[0].nombre;
precioProducto.textContent = "$" + productosArray[0].precio;
descripcionProducto.textContent = productosArray[0].descripcion;

*/