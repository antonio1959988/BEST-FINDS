
function incrementarCantidad() {
    let inputCantidad = document.getElementById("quantity");
    let cantidad = parseInt(inputCantidad.value);
    inputCantidad.value = cantidad+1;
}

function decrementarCantidad() {
    let inputCantidad = document.getElementById("quantity");
    let cantidad = parseInt(inputCantidad.value);
    if(cantidad != 1) {
        inputCantidad.value = cantidad-1;
    }
}



