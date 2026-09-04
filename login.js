const formularioLogin = document.getElementById("login-form");


formularioLogin.addEventListener("submit", function(event) {

    event.preventDefault();


    const correo = document.getElementById("correo").value.trim();

    const password = document.getElementById("password").value;


    const errorCorreo = document.getElementById("error-correo");

    const errorPassword = document.getElementById("error-password");


    // Limpiar mensajes anteriores

    errorCorreo.textContent = "";

    errorPassword.textContent = "";


    let formularioValido = true;


    // DOMINIOS PERMITIDOS

    const dominiosPermitidos = ["@duoc.cl", "@profesor.duoc.cl","@gmail.com"];


    const correoValido = dominiosPermitidos.some(function(dominio) {

        return correo.endsWith(dominio);

    });


    // VALIDAR CORREO

    if (correo === "") {

        errorCorreo.textContent = "El correo es obligatorio.";

        formularioValido = false;

    } else if (correo.length > 50) {

        errorCorreo.textContent = "El correo no puede superar los 50 caracteres.";

        formularioValido = false;

    } else if (!correoValido) {

        errorCorreo.textContent = "Solo se permiten correos con formato @duoc.cl, @profesor.duoc.cl o @gmail.com.";

        formularioValido = false;

    }


    // VALIDAR CONTRASEÑA

    if (password === "") {

        errorPassword.textContent = "La contraseña es obligatoria.";

        formularioValido = false;

    } else if (password.length < 4 || password.length > 10) {

        errorPassword.textContent = "La contraseña debe tener entre 4 y 10 caracteres.";

        formularioValido = false;

    }


    // LOGIN CORRECTO

    if (formularioValido) {

        alert("Inicio de sesión correcto");

    }

});