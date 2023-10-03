

let loginButton = document.getElementById("botonL"); // Reemplaza "tuBotonDeLogin" con el ID de tu botón
loginButton.addEventListener("click", login);


function login() {
    // Recuperar el valor del campo de email
    let email = document.getElementsByName("email")[0].value;
    
    // Recuperar el valor del campo de contraseña
    let password = document.getElementsByName("password")[0].value;
    
    // Mostrar los valores en la consola
    console.log("Email:", email);
    console.log("Contraseña:", password);
    
    // Aquí puedes agregar la lógica de autenticación con los valores recuperados
}
function mostrar(){
    document.getElementById('ocultar').style.display = 'block';
}

