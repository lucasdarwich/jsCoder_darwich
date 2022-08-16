let formulario = document.getElementById("loginForm");
let campoCorreo = document.getElementById("correo");
let campoPass = document.getElementById("password");

campoCorreo.onchange = () => {
    correo = campoCorreo.value;
}
campoPass.onchange = () => {
    password = campoPass.value;
}

formulario.addEventListener("submit",validarForm);

function validarForm(ev){
    if((correo!="admin@magtrack.com")&&(password!="admin")){
        ev.preventDefault();
        alert("Nombre de Usuario y/o Contraseña incorrectas");
    }
}
