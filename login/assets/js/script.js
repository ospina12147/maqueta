//aqui pones las acciones//
document.getElementById("btn_iniciar_sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn_register").addEventListener("click", register);
window.addEventListener("resize", anchoPage);
var formulario_login = document.querySelector(".formulario_login");
var contenedor_register = document.querySelector(".contenedor_register");
var contenedor_login_register = document.querySelector(".contenedor_login_register");
var caja_trasera_login = document.querySelector(".caja_trasera_login");
var caja_trasera_register = document.querySelector(".caja_trasera_register");

function anchoPage() {

    if (window.innerWidth > 850) {
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "block";
    } else {
        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "0px";
        contenedor_register.style.display = "none";

    }
}
anchoPage();

function iniciarSesion() {
    if (window.innerWidth > 850) {
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "10px";
        contenedor_register.style.display = "none";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.opacity = "0";
    } else {
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_login.style.display = "none;";
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "none"
    }
}

function register() {
    if (window.innerWidth > 850) {
        contenedor_register.style.display = "block";
        contenedor_login_register.style.left = "410px";
        formulario_login.style.display = "none"
        caja_trasera_register.style.opacity = "0";
        caja_trasera_login.style.opacity = "1";
    } else {
        contenedor_register.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_login.style.display = "none";
        caja_trasera_register.style.display = "none";
        caja_trasera_login.style.display = "block";
        caja_trasera_login.style.opacity = "1";
    }
}