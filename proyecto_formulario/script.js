const formulario=document.getElementById("formulario");

const mensaje=document.getElementById("mensaje");

const verPassword = document.getElementById("verPassword");

const passwordInput = document.getElementById("password");

formulario.addEventListener("submit",function(e){

e.preventDefault();

const nombre=document.getElementById("nombre").value;

const correo=document.getElementById("correo").value;

const password=document.getElementById("password").value;

if(nombre===""){

mensaje.style.color="red";

mensaje.innerHTML="Ingrese su nombre.";

return;

}
if(correo===""){

mensaje.style.color="red";

mensaje.innerHTML="Ingrese su correo electrónico.";

return;

}

if(password.length<8){

mensaje.style.color="red";

mensaje.innerHTML="La contraseña debe tener mínimo 8 caracteres.";

return;

}

mensaje.style.color="green";

mensaje.innerHTML="Formulario enviado correctamente.";

formulario.reset();
});
verPassword.addEventListener("click", function () {

    const icono = verPassword.querySelector("i");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        icono.classList.remove("fa-eye");
        icono.classList.add("fa-eye-slash");
    } else {
        passwordInput.type = "password";
        icono.classList.remove("fa-eye-slash");
        icono.classList.add("fa-eye");
    }

});