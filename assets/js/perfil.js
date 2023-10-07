// Recuperar los datos JSON del almacenamiento local
var usuariosArray = JSON.parse(localStorage.getItem("usuarios"));

nombreUsuario = document.getElementById("menuPerfil");
nombreUsuario.innerHTML = usuariosArray[0].nombreUsuario;

