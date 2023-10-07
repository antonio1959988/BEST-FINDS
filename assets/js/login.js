


function mostrar(){
    document.getElementById('ocultar').style.display = 'block';
}

//////////////////////////////////////////////////////////////////////////
let formulario = document.getElementById('formFormulario');
let inputs = document.querySelectorAll('#formFormulario input');

//Expresiones permitidas para cada campo
const expresiones = {
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password: /^.{4,12}$/, // 4 a 12 digitos.
	correo2:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
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
	if(expresion.test(input.value)){
		
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