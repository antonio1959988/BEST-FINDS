
document.addEventListener("DOMContentLoaded", function () {
    const profileImage = document.getElementById("imgPerfil");

    // Lista de rutas de imágenes de perfil
    const imagePaths = [
        "./assets/img/Fotos perfil/foto perfil best .jpeg",
        "./assets/img/Fotos perfil/foto perfil best 2.jpeg",
        "./assets/img/Fotos perfil/foto perfil best 3.jpeg",
        "./assets/img/Fotos perfil/foto perfil best 4.jpeg",
        "./assets/img/Fotos perfil/foto perfil best 5.jpeg",
        "./assets/img/Fotos perfil/foto perfil best 6.jpeg",
        "./assets/img/Fotos perfil/foto perfil best 7.jpeg",
        "./assets/img/Fotos perfil/foto perfil best 8.jpeg",
        "./assets/img/Fotos perfil/foto perfil best 9.jpeg",
        "./assets/img/Fotos perfil/foto perfil best 10.jpeg",
        "./assets/img/Fotos perfil/foto perfil best 11.jpeg",
        "./assets/img/Fotos perfil/foto perfil best 12.jpeg",
        "./assets/img/Fotos perfil/foto perfil best 13.jpeg",
        "./assets/img/Fotos perfil/foto perfil best 14.jpeg",
        "./assets/img/Fotos perfil/foto perfil best 15.jpeg",
    ];

    let currentIndex = 0;
    let nextIndex = 1; // Indice de la siguiente imagen

    // Función para cambiar la imagen
    function changeImage() {
        currentIndex = (currentIndex + 1) % imagePaths.length;
        nextIndex = (nextIndex + 1) % imagePaths.length;

        // Carga la siguiente imagen
        const nextImage = new Image();
        nextImage.src = imagePaths[nextIndex];
        nextImage.onload = function () {
            profileImage.src = nextImage.src; // Muestra la siguiente imagen
            profileImage.classList.remove("hidden"); // Muestra la imagen actual
        };
    }

    // Cargar todas las imágenes de perfil de antemano
    function preloadImages() {
        for (const path of imagePaths) {
            const img = new Image();
            img.src = path;
        }
    }

    // Llama a la función de precarga de imágenes antes de mostrar la primera imagen
    preloadImages();

    // Cambiar la imagen al hacer clic en ella (opcional)
    profileImage.addEventListener("click", changeImage);

    // Inicializar la rotación de imágenes automáticamente (opcional)
    setInterval(changeImage, 1000); // Cambiar cada 3 segundos (ajusta según tus necesidades)
});

//////////////////////////////////

// Recuperar los datos JSON del almacenamiento local
var usuariosArray = JSON.parse(localStorage.getItem("usuarios"));

nombreUsuario = document.getElementById("menuPerfil");
nombreUsuario.innerHTML = usuariosArray[0].nombreUsuario;

///////////////////////////////////

//Recuperar datos JSON del almacenamiento local y agregarlos a datos personales del usuario registrado 
var usuariosArray = JSON.parse(localStorage.getItem("usuarios"));
var nombreUsuario = document.getElementById("datosPersonales");

// Se crea un elemento de contraseña visible/invisible con estilos CSS personalizados
nombreUsuario.innerHTML = `
    Nombre: ${usuariosArray[0].nombre}<br>
    Correo: ${usuariosArray[0].correo}<br>
    <div id="passwordContainer">
        <span id="password" style="display: none;">${usuariosArray[0].password}</span>
        <button id="showPasswordButton" style="font-size: 12px; padding: 4px 8px; background-color: #F89DC8; color: white;">Mostrar Contraseña ;)</button>
    </div>
`;

// Obtiene elementos del DOM
var showPasswordButton = document.getElementById("showPasswordButton");
var password = document.getElementById("password");

var passwordVisible = false;

// Evento al mantener presionado el botón
showPasswordButton.addEventListener("mousedown", function () {
    password.style.display = "inline"; // Muestra la contraseña
});

// Evento al soltar el botón
showPasswordButton.addEventListener("mouseup", function () {
    password.style.display = "none"; // Oculta la contraseña
});

// Evento para asegurarse de que la contraseña esté oculta al cargar la página
window.addEventListener("load", function () {
    password.style.display = "none"; // Oculta la contraseña al cargar la página
});

//////////////////

// Obtén todos los elementos con la clase "menu-perfil"
const menuPerfiles = document.querySelectorAll(".menu-perfil");

// Mantén un registro del contenedor actualmente visible
let contenedorVisible = null;

// Agrega un evento de clic a cada elemento
menuPerfiles.forEach((menuPerfil) => {
    menuPerfil.addEventListener("click", () => {
        // Obtiene el valor del atributo "data-toggle" para encontrar el contenedor correspondiente
        const toggleValue = menuPerfil.getAttribute("data-toggle");
        const infoContainer = document.getElementById(toggleValue);
        
        // Si hay un contenedor visible diferente, ocúltalo
        if (contenedorVisible && contenedorVisible !== infoContainer) {
            contenedorVisible.classList.add("hidden");
        }
        
        // Alterna la visibilidad del contenedor actual
        infoContainer.classList.toggle("hidden");
        
        // Actualiza el contenedor actualmente visible
        contenedorVisible = infoContainer;
        
        // Cambia el color de fondo al hacer clic
        // if (infoContainer.classList.contains("hidden")) {
        //     menuPerfil.style.backgroundColor = "#D71787";
        // } else {
        //     menuPerfil.style.backgroundColor = "#F89DC8";
        // }
    });
});
