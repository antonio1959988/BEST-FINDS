////////////////////AGREGAR COMENTARIO/////////////////////////
// Se obtiene el elemento del botón de agregar comentario mediante su ID
// Se obtiene el elemento del botón de agregar comentario mediante su ID
const botonComentario = document.getElementById('btnEnviarComentario');
let comentarios = document.getElementById('txtComentario');
let seccionComentarios = document.getElementById('seccionDescYComentarios');

var contador = 3;
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

    const botonCorazon = document.getElementById(`boton-corazon-${contador}`);
    const contadorLikes = document.getElementById(`contador-likes-${contador}`);

    let likes = 0;
    let Liked = false;

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

    botonCorazon.addEventListener('click', actualizarLikes);

}

botonComentario.addEventListener("click", agregarComentario);








// Función que contabiliza los likes para un comentario específico
function contabilizarLikes(comentarioId) {

}


// Llamar a la función para cada comentario en un bucle)


/////////////////////////LOCAL STORAGE//////////////////////////////////

// Recuperar los datos JSON del almacenamiento local
/*
var productosArray = JSON.parse(localStorage.getItem("productosArray"));

let nombreProducto = document.getElementById("tituloNombre");
let precioProducto = document.getElementById("precioPrincipal");
let descripcionProducto = document.getElementById("acercaDeProducto");

nombreProducto.textContent = productosArray[0].nombre;
precioProducto.textContent = "$" + productosArray[0].precio;
descripcionProducto.textContent = productosArray[0].descripcion;

*/