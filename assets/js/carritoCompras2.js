let receiverName = document.getElementById("inputReceiver");
let receiverAdress = document.getElementById("inputAdress");
let receiverAdress2 = document.getElementById("inputAdress2");
let receiverCity = document.getElementById("inputCity");
let receiverState = document.getElementById("inputState");
let receiverZip = document.getElementById("inputZip");
let receiverPhone = document.getElementById("inputPhone");
let btnSend = document.getElementById("btnGoToPayMethods");

function enviarFormulario(){
    let receiverNameValue = receiverName.value;
    let receiverAdressValue = receiverAdress.value;
    let receiverAdress2Value = receiverAdress2.value;
    let receiverCityValue = receiverCity.value;
    let receiverStateValue = receiverState.value;
    let receiverZipValue = receiverZip.value;
    let receiverPhoneValue = receiverPhone.value;
    

    if(receiverNameValue == "" || receiverAdressValue == "" || receiverAdress2Value == "" || receiverCityValue == "" || receiverStateValue == "Seleccione su estado" || receiverZipValue == "" ||receiverPhoneValue == ""){
        alert("Todos los campos son obligatorios");
    }else{
        alert("Proceda al pago");
    }
}


btnSend.addEventListener("click", enviarFormulario)