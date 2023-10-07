let nomUsuario = document.getElementById("nombre");
let emailUsuario = document.getElementById("correo");
let telUsuario = document.getElementById("telefono");
let mensaje = document.getElementById("txtMensaje");
let btnEnviar = document.getElementById("colorB");

function enviarFormulario() {
	let nomUsuarioValue = nomUsuario.value;
	let emailUsuarioValue = emailUsuario.value;
	let telUsuarioValue = telUsuario.value;
	let mensajeValue = mensaje.value;

	if (nomUsuarioValue == "" || emailUsuarioValue == "" || telUsuarioValue == "" || mensajeValue == "") {
		alert("Todos los campos son obligatorios");
	} else {
		alert("Mensaje enviado correctamente");
	}
}

let formulario = document.getElementById('formFormulario');
let inputs = document.querySelectorAll('#formFormulario input');

//Expresiones permitidas para cada campo
const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}
let campos = {
	nombre: false,
	correo: false,
	telefono: false
}

//Switch para validar cada campo
let validarFormulario = (e) => {
	switch (e.target.name) {
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'Nombre');
			break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'Correo');
			break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'Telefono');
			break;
	}
}

//En caso de que se den expresiones invalidas, se muestra la alerta
let validarCampo = (expresion, input, campo) => {
	if (expresion.test(input.value)) {

		document.getElementById(`alert${campo}`).classList.remove('alert-activa');
		campos[campo] = true;
	} else {
		document.getElementById(`alert${campo}`).classList.add('alert-activa');
		campos[campo] = false;
	}
}

//Se comprueba cada que se realicen los siguientes eventos
inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);//Cada que presiona una teclas
	input.addEventListener('blur', validarFormulario);//Cada que se de click fuera del input
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();
});

btnEnviar.addEventListener("click", enviarFormulario)

var comentariosArray = [];

document.getElementById("colorB").addEventListener("click", function () {
    // Obtener los valores de los campos del formulario
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const telefono = document.getElementById("telefono").value;
    const mensaje = document.getElementById("txtMensaje").value;

    // Crear un objeto con los datos del producto
    const nuevoMensajeJSON = {
        nombre: nombre,
        correo: correo,
        telefono: telefono,
        mensaje: mensaje
    };

    // Agregar el nuevo comentario a un array
    comentariosArray.push(nuevoMensajeJSON);

    // Mostrar los datos en la consola
    console.log(comentariosArray);

});






