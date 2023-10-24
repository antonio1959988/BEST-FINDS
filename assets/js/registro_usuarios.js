let formulario = document.getElementById('formFormulario');
let inputs = document.querySelectorAll('#formFormulario input');

//Expresiones permitidas para cada campo
const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	usuario: /^[a-zA-Z0-9\_\-]{1,16}$/, // Letras, numeros, guion y guion_bajo
	password: /^.{4,14}$/, // 4 a 14 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}
let campos = {
	Nombre: false,
	NombreUsuario: false,
	Password: false,
	Correo: false,
}

//Switch para validar cada campo
function quitarAlertas(p) {
	switch (p.target.name) {
		case "nombre":
			validarCampo(expresiones.nombre, p.target, 'Nombre');
			break;
		case "nombreUsuario":
			validarCampo(expresiones.usuario, p.target, 'NombreUsuario');
			break;
		case "password":
			validarCampo(expresiones.password, p.target, 'Password');
			validarPassword2();
			break;
		case "passwordConfirmacion":
			validarPassword2();
			break;
		case "correo":
			validarCampo(expresiones.correo, p.target, 'Correo');
			break;

	}
}

//Switch para validar cada campo
function validarFormulario2(p) {
	switch (p.target.name) {
		case "nombre":
			validarCampo2(expresiones.nombre, p.target, 'Nombre');
			break;
		case "nombreUsuario":
			validarCampo2(expresiones.usuario, p.target, 'NombreUsuario');
			break;
		case "password":
			validarCampo2(expresiones.password, p.target, 'Password');
			validarPassword2();
			break;
		case "passwordConfirmacion":
			validarPassword2();
			break;
		case "correo":
			validarCampo2(expresiones.correo, p.target, 'Correo');
			break;

	}
}

//En caso de que se den expresiones invalidas, se muestra la alerta
let validarCampo = (expresion, input, campo) => {
	if (expresion.test(input.value)) {

		document.getElementById(`alert${campo}`).classList.remove('alert-activa');
		campos[campo] = true;
	} 
}

//En caso de que se den expresiones invalidas, se muestra la alerta
let validarCampo2 = (expresion, input, campo) => {
	if (!expresion.test(input.value)) {
		document.getElementById(`alert${campo}`).classList.add('alert-activa');
		campos[campo] = false;
		
	}
}

//Se valida que las dos contraseñas dadas sean validas
let validarPassword2 = () => {
	let inputPassword1 = document.getElementById('password');
	let inputPassword2 = document.getElementById('passwordConfirmacion');

	if (inputPassword1.value !== inputPassword2.value) {
		document.getElementById(`alertPasswordConfirm`).classList.add('alert-activa');
		document.getElementById(`alertPasswordConfirm`).classList.remove('alert-noactiva');

		campos['password'] = false;
	} else {
		document.getElementById(`alertPasswordConfirm`).classList.remove('alert-activa');
		document.getElementById(`alertPasswordConfirm`).classList.add('alert-noactiva');

		campos['password'] = true;
	}
}

//Se comprueba cada que se realicen los siguientes eventos
inputs.forEach((input) => {
	input.addEventListener('keyup', quitarAlertas);//Cada que presiona una teclas
	input.addEventListener('blur', validarFormulario2);//Cada que se de click fuera del input
});



///////////////////////////////////////////////////////////////////////////////////////
//Creacion del objeto JSON
var usuarios = [];
let nombre;
let nombreUsuario;
let correo;
let password;
const myInput = document.getElementById('modal');

document.getElementById("btnRegistrar").addEventListener("click", function () {
	// Obtener los valores de los campos del formulario

	if(campos.Nombre && campos.NombreUsuario&&campos.Password &&campos.Correo){
		nombre = document.getElementById("nombre").value;
		nombreUsuario = document.getElementById("nombreUsuario").value;
		correo = document.getElementById("correo").value;
		password = document.getElementById("password").value;


	// Crear un objeto con los datos del producto
	const nuevoUsuario = {
		nombre: nombre,
		nombreUsuario: nombreUsuario,
		correo: correo,
		password: password,
	};
	// Agregar el nuevo producto al array de productos
	usuarios.push(nuevoUsuario);

	// Mostrar los datos del producto en la consola
	console.log(usuarios);

	localStorage.setItem("usuarios", JSON.stringify(usuarios));

	
}else{
	document.getElementById(`alertValidacion`).classList.add('alert-activa');
}
});

