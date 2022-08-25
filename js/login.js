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
    if(((correo!="admin@magtrack.com")&&(password!="admin"))||((correo="")&&(password=""))){
        ev.preventDefault();
        errorLogin = document.getElementById("errorText");
        errorLogin.innerText = "Usuario y/o contraseña incorrectos";
    }
}