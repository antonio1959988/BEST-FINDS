let nomUsuario = document.getElementById("txtNomUsuario");
let emailUsuario = document.getElementById("txtEmailUsuario");
let telUsuario = document.getElementById("txtTelUsuario");
let mensaje = document.getElementById("txtMensaje");
let btnEnviar = document.getElementById("btnEnviar");

function enviarFormulario(){
    let nomUsuarioValue = nomUsuario.value;
    let emailUsuarioValue = emailUsuario.value;
    let telUsuarioValue = telUsuario.value;
    let mensajeValue = mensaje.value;

    if(nomUsuarioValue == "" || emailUsuarioValue == "" || telUsuarioValue == "" || mensajeValue == ""){
        alert("Todos los campos son obligatorios");
    }else{
        alert("Mensaje enviado correctamente");
    }
}








btnEnviar.addEventListener("click", enviarFormulario)