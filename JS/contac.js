// Inicializa EmailJS
(function () {
    emailjs.init("qVMb1Aw-hiXIfCxSq");
})();

// Funciones de validación con ciertas características
function validarNombre(nombre) {
    const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{3,}$/;
    return regex.test(nombre);
}

function validarApellido(apellido) {
    const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{3,}$/;
    return regex.test(apellido);
}

function validarEmail(email) {
    const regex = /^[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$/;
    return regex.test(email);
}

function validarTelefono(telefono) {
    const regex = /^[1-9]\d{9}$/;
    return regex.test(telefono);
}

function validarMensaje(mensaje) {
    return mensaje.trim() !== "";
}

// Listener del formulario
document.getElementById("contactoForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;
    const mensaje = document.getElementById("mensaje").value;
    const alertBox = document.getElementById("alertResultado");

    // Limpia la alerta antes de empezar
    alertBox.innerText = "";
    alertBox.style.display = "none"; // 🔹 siempre oculto antes de usar
    alertBox.classList.remove("alert-danger", "alert-success");

    // Array errores
    let errores = [];

    // Validar campos 
    if (!validarNombre(nombre)) errores.push("El nombre no es válido.");
    if (!validarApellido(apellido)) errores.push("El apellido no es válido.");
    if (!validarEmail(email)) errores.push("El email no es válido.");
    if (!validarTelefono(telefono)) errores.push("El teléfono no es válido.");
    if (!validarMensaje(mensaje)) errores.push("El mensaje no puede estar vacío.");

    // Si hay errores, mostrar la alerta con los mensajes
    if (errores.length > 0) {
        alertBox.innerHTML = errores.join("<br>");
        alertBox.classList.add("alert-danger");
        alertBox.style.display = "block"; // 🔹 mostrar solo cuando haya error
        return; 
    }

    // Envío a emailjs
    emailjs.send("service_c04p4z4", "template_hjtdd87", {
        nombre: nombre,
        apellido: apellido,
        email: email,
        telefono: telefono,
        mensaje: mensaje
    })
    .then(function(response) {
        console.log("Éxito!", response.status, response.text);
        alertBox.innerText = "✅ Mensaje enviado, te contactaremos pronto!";
        alertBox.classList.add("alert-success");
        alertBox.style.display = "block"; // 🔹 mostrar confirmación
        document.getElementById("contactoForm").reset(); // limpia formulario
    }, function(error) {
        console.log("Error:", error);
        alertBox.innerText = "❌ Error al enviar el mensaje. Inténtalo de nuevo.";
        alertBox.classList.add("alert-danger");
        alertBox.style.display = "block"; // 🔹 mostrar error
    });
});

