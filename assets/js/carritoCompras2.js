//Función para ocultar segmento de datos de tarjeta
let creditInfo = document.querySelector(".cardSection");
let visaInput = document.querySelector("#Visa");
let payPalInput = document.querySelector("#Paypal");
let mercadoInput = document.querySelector("#mercadoPago");


 visaInput.addEventListener("input", function(){
    creditInfo.style.display = "block";
});
 payPalInput.addEventListener("input", function(){
    creditInfo.style.display = "none";
 });
 mercadoInput.addEventListener("input", function(){
    creditInfo.style.display = "none";
 });//Funcion para ocultar segmento de datos de tarjeta


 // Validación de formulario de Envío
 let formularioEnvio = document.getElementById('formReceiver');
 let inputsEnvio = document.querySelectorAll('#formReceiver input');
 
 //Expresiones permitidas para cada campo
 const expresionesEnvio = {
     nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
     direccion: /^[a-zA-Z0-9-ÿ\s\_\-]{1,50}$/, // Letras, numeros, guion y guion_bajo
     colonia: /^[a-zA-Z0-9-ÿ\s\_\-]{1,50}$/, // Letras, numeros, guion y guion_bajo
     ciudad: /^[a-zA-ZÀ-ÿ\s]{1,25}$/, // Letras y espacios, pueden llevar acentos.
     zip: /^\d{1,5}$/,// 7 a 14 numeros.
     telefono: /^\d{7,14}$/ // 7 a 14 numeros.
 }

//  let campos = {
//      nombre: false,
//      direccion: false,
//      colonia: false,
//      ciudad: false,
//      zip: false,
//      telefono: false
// }

let camposEnvio = {
	inputReciver: false,
	inputAddress: false,
	inputAddress2: false,
	inputCity: false,
	inputZip: false,
	inputPhone: false
}

//Switch para validar cada campo
function validarFormularioEnvio(p) {
	// console.log(p);
	switch (p.target.name) {
		case "inputReceiver":
			validarCampoEnvio(expresionesEnvio.nombre, p.target, 'inputReceiver');
			//console.log(p);
			break;
		case "inputAddress":
			validarCampoEnvio(expresionesEnvio.direccion, p.target, 'inputAddress');
			break;
		case "inputAddress2":
			validarCampoEnvio(expresionesEnvio.colonia, p.target, 'inputAddress2');
			break;
        case "inputCity":
			validarCampoEnvio(expresionesEnvio.ciudad, p.target, 'inputCity');
			break;
		case "inputZip":
			validarCampoEnvio(expresionesEnvio.zip, p.target, 'inputZip');
			break;
		case "inputPhone":
			validarCampoEnvio(expresionesEnvio.telefono, p.target, 'inputPhone');
			break;

	}
}

let validarCampoEnvio = (expresion, input, campo) => {
	if (expresion.test(input.value)) {

		document.getElementById(`alert${campo}`).classList.remove('alert-activa');
		camposEnvio[campo] = true;
	} else {
		document.getElementById(`alert${campo}`).classList.add('alert-activa');
		camposEnvio[campo] = false;
	}
}

//Se comprueba cada que se realicen los siguientes eventos
inputsEnvio.forEach((input) => {
	input.addEventListener('keyup', validarFormularioEnvio);//Cada que presiona una teclas
	input.addEventListener('blur', validarFormularioEnvio);//Cada que se de click fuera del input
});




// Validación de formulario Tarjeta
let formularioTarjeta = document.getElementById('credit-info-content');
let inputsTarjeta = document.querySelectorAll('#credit-info-content input');

//Expresiones permitidas para cada campo
const expresionesTarjeta = {
	tarjeta: /^\d{16}$/,
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	mes: /^\d{1,2}$/,// 1 a 2 numeros.
	anio: /^\d{2}$/,// 2 numeros.
	cvv: /^\d{3}$/ // 7 a 14 numeros.
}

let camposTarjeta = {
   cardNumber: false,
   cardHolder: false,
   cardMonth: false,
   cardYear: false,
   cardCVV: false
}

//Switch para validar cada campo
function validarFormularioTarjeta(t) {
   // console.log(t);
   switch (t.target.name) {
	   case "cardNumber":
		   validarCampoTarjeta(expresionesTarjeta.tarjeta, t.target, 'cardNumber');
		   //console.log(t);
		   break;
	   case "cardHolder":
		   validarCampoTarjeta(expresionesTarjeta.nombre, t.target, 'cardHolder');
		   break;
	   case "cardMonth":
		   validarCampoTarjeta(expresionesTarjeta.mes, t.target, 'cardMonth');
		   break;
	   case "cardYear":
		   validarCampoTarjeta(expresionesTarjeta.anio, t.target, 'cardYear');
		   break;
	   case "cardCVV":
		   validarCampoTarjeta(expresionesTarjeta.cvv, t.target, 'cardCVV');
		   break;

   }
}

let validarCampoTarjeta = (expresion, input, campo) => {
   if (expresion.test(input.value)) {

	   document.getElementById(`alert${campo}`).classList.remove('alert-activa');
	   camposTarjeta[campo] = true;
   } else {
	   document.getElementById(`alert${campo}`).classList.add('alert-activa');
	   camposTarjeta[campo] = false;
   }
}

//Se comprueba cada que se realicen los siguientes eventos
inputsTarjeta.forEach((input) => {
   input.addEventListener('keyup', validarFormularioTarjeta);//Cada que presiona una teclas
   input.addEventListener('blur', validarFormularioTarjeta);//Cada que se de click fuera del input
});