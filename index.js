
var bandera=false;

function validar (){
if(bandera){
    console.log('validacion completa')
}

    alert($("#user").val());


    var user=document.getElementById("user").value;
    alert(user)
}

function correctCaptcha(){
    console.log('Captcha resuelto')
    bandera=true;
}