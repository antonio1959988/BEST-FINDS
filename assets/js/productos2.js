////////////////////AGREGAR COMENTARIO/////////////////////////
// Se obtiene el elemento del botón de agregar comentario mediante su ID
const botonComentario = document.getElementById('btnEnviarComentario');
let comentarios = document.getElementById('txtComentario');
let seccionComentarios = document.getElementById('seccionDescYComentarios');

function agregarComentario() {
    let comentario = comentarios.value;
    let nuevoComentario = document.createElement('div');
    nuevoComentario.innerHTML = `<div id="contenedorInferior">
    <h5>Usuario Anónimo</h5>
    <p id="comentario">
        ${comentario}
    </p>
    <div id="der">
        <button id="boton-corazon" class="boton-corazon">
            <span id="contador-likes">0</span>
            <i class="fa fa-heart"></i>
        </button>
    </div>
</div>`;
    seccionComentarios.appendChild(nuevoComentario);
    comentarios.value = "";
}

botonComentario.addEventListener("click", agregarComentario);







// Función que contabiliza los likes para un comentario específico
function contabilizarLikes(comentarioId) {
    const botonCorazon = document.getElementById(`boton-corazon-${comentarioId}`);
    const contadorLikes = document.getElementById(`contador-likes-${comentarioId}`);

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


// Llamar a la función para cada comentario en un bucle)
contabilizarLikes(1); // Para el primer comentario
contabilizarLikes(2); // Para el segundo comentario, etc.




/////////////////////////////Collapse de comentarios//////////////////////////////
let comentariosDiv = document.getElementById('comentariosDiv');
comentariosDiv.innerHTML=` <div id="contenedorDeComentarios">
<h4>Comentarios</h4>
<div id="contenedorAgregarComentario">
    <h5>Agrega un comentario</h5>
    <form>
        <textarea class="form-control" id="txtComentario" rows="2"
            placeholder="Tu opinion nos ayuda mucho :)..."></textarea>
        <div id="der">
            <button type="button" class="btn btn-primary"
                id="btnEnviarComentario">Enviar</button>
        </div>
    </form>
</div>

<div id="contenedorInferior">
    <h5>Usuario Anónimo</h5>
    <p id="comentario">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, praesentium
        expedita
        dolore eligendi cumque commodi harum impedit facere mollitia ad quibusdam deleniti
        cupiditate reiciendis ullam dolorum, eius, magni aliquam! Similique.
    </p>
    <div id="der">
        <button id="boton-corazon-1" class="boton-corazon">
            <!-- Utilizamos "fa" para FontAwesome -->
            <span id="contador-likes-1">0</span>
            <i class="fa fa-heart"></i>
        </button>
    </div>
</div>

<div id="contenedorInferior">
    <h5>Usuario Anónimo</h5>
    <p id="comentario">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, praesentium
        expedita
        dolore eligendi cumque commodi harum impedit facere mollitia ad quibusdam deleniti
        cupiditate reiciendis ullam dolorum, eius, magni aliquam! Similique.
    </p>
    <div id="der">
        <button id="boton-corazon-2" class="boton-corazon">
            <!-- Utilizamos "fa" para FontAwesome -->
            <span id="contador-likes-2">0</span>
            <i class="fa fa-heart"></i>
        </button>
    </div>
</div>
</div>`;