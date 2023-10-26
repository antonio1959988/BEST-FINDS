function mostrar() {
	document.getElementById('ocultar').style.display = 'block';
}

//////////////////////////////////////////////////////////////////////////
let formulario = document.getElementById('formFormulario');
let inputs = document.querySelectorAll('#formFormulario input');

//Expresiones permitidas para cada campo
const expresiones = {
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo2: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}


//Switch para validar cada campo
let validarFormulario = (e) => {
	switch (e.target.name) {
		case "correo":
			validarCampo(expresiones.correo, e.target, 'Correo');
			break;
		case "correo2":
			validarCampo(expresiones.correo2, e.target, 'Correo2');
			break;
		case "password":
			validarCampo(expresiones.password, e.target, 'Password');

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

///////////////////////////////////////////////////////////////////////////////////////
//Creacion del objeto JSON
var sesion = [];

document.getElementById("btnSesion").addEventListener("click", function () {
	// Obtener los valores de los campos del formulario
	const correo = document.getElementById("correo").value;
	const password = document.getElementById("password").value;

	// Crear un objeto con los datos de la sesión
	const nuevaSesion = {
		correo: correo,
		password: password,
	};

	// Agregar la nueva sesión al array de sesiones
	sesion.push(nuevaSesion);


	

	// Recuperar los datos JSON del almacenamiento local


	/*
	fetch(`http://localhost:8080/usuarios/byCorreo?correo=${correo}`)
		.then(res => res.json())
		.then(json => {
			usuariosArray = json;
		})
		.catch(err => console.log(err));
*/
	const url = `http://localhost:8080/usuarios/byCorreo?correo=${correo}`;
	let userData;
	fetch(url)
		.then(response => response.json())
		.then(userData => {
		
			// Guardar los datos de la sesión en el almacenamiento local
	localStorage.setItem("inicioSesion", JSON.stringify(userData));
			
			// Comparar los datos del formulario con los datos del JSON
	if (correo == userData.correo && password == userData.contrasenia) {
		document.getElementById('modalMensaje').textContent = `Bienvenido ${userData.usuario}, en un momento serás redirigido a tu perfil.`;
		document.getElementById('miModal').style.display = 'block';

		// Esperar 3 segundos antes de redirigir a la página de perfil
		setTimeout(function () {
			window.location.href = "/Perfil_axel.html";
		}, 6000);
	} else {
		document.getElementById('modalMensaje').textContent = "Datos incorrectos.";
		document.getElementById('miModal').style.display = 'block';
		
	}
		})
		.catch(error => {
			console.error(error);
		});

		console.log(userData);
});



// HASTA AQUI
document.getElementById('cerrarModal').addEventListener('click', function () {
	document.getElementById('miModal').style.display = 'none';
});
