// // Funciones de validacion de registro

// function validarNombre(txtnombre) {
//     const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{3,}$/;
//     return regex.test(txtnombre);
// }

// function validarApellido(txtapellido) {
//     const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{3,}$/;
//     return regex.test(txtapellido);
// }

// function validarEmail(txtcorreo) {
//     const regex = /^[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$/;
//     return regex.test(txtcorreo);
// }
// function validarContraseña(txtpassword){
//     if(txtpassword === txtconfirmar){
//         const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
//         return regex.test(txtpassword);
//     }else{
//         mensaje.textContent = "❌ La contraseña no coincide";
//         return false;
//     }
// }
// // Validar campos 
//     if (!validarNombre(txtnombre)) {
//         errores.push("El nombre no es válido.");
//     }
//     if (!validarApellido(txtapellido)) {
//         errores.push("El apellido no es válido.");
//     }
//     if (!validarEmail(txtcorreo)) {
//         errores.push("El email no es válido.");
//     }
//     if (!validarContraseña(txtpassword)) {
//          errores.push("La contraseña no es válida.");
//     }
    
// // Si hay errores, mostrar la alerta con los mensajes
//     if (errores.length > 0) {
//         alertBox.innerHTML = errores.join("<br>");
//         alertBox.classList.add("show", "alert-danger");
//         return; 
//     }

//     emailjs.send("service_c04p4z4", "template_hjtdd87", {
//         nombre: txtnombre,
//         apellido: txtapellido,
//         email: txtcorreo
        
//     })
//     .then(function(response) {
//         console.log("Éxito!", response.status, response.text);
//         alertBox.innerText = "Mensaje enviado, te contactaremos pronto!";
//         alertBox.classList.add("show", "alert-success");
//         // Limpia el formulario después de enviar exitosamente
//         document.getElementById("contactoForm").reset();
//     }, function(error) {
//         console.log("Error:", error);
//         alertBox.innerText = "Error al enviar el mensaje. Inténtalo de nuevo.";
//         alertBox.classList.add("show", "alert-danger");
//     });