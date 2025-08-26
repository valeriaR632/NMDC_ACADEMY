document.addEventListener('DOMContentLoaded', () => {
  const flipCardInner = document.getElementById('flipcardInner');
  const loginText = document.getElementById('loginText');
  const registerText = document.getElementById('registerText');
  const registerForm = document.getElementById('registerForm');
  const loginForm = document.getElementById('loginform');

  const alertBox = document.getElementById('alertBox');
  const alertLogin = document.getElementById('alertLogin');

  const params = new URLSearchParams(window.location.search);
  const modo = params.get("modo");

  if (modo === "login") {
    flipCardInner.style.transform = "rotateY(180deg)";
  } else if (modo === "registro") {
    flipCardInner.style.transform = "rotateY(0deg)";
  }

  // Girar a formulario de login
  loginText.addEventListener('click', () => {
    flipCardInner.style.transform = 'rotateY(180deg)';
    clearAlerts();
  });

  // Girar a formulario de registro
  registerText.addEventListener('click', () => {
    flipCardInner.style.transform = 'rotateY(0deg)';
    clearAlerts();
  });

  // Funciones de validación
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

  function validarContraseña(password) {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return regex.test(password);
  }

  function clearAlerts() {
    alertBox.className = "alert d-none";
    alertBox.innerHTML = "";
    alertLogin.className = "alert d-none";
    alertLogin.innerHTML = "";
  }

  // Registro
  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const txtnombre = document.getElementById('txtnombre').value.trim();
    const txtapellido = document.getElementById('txtapellido').value.trim();
    const txtcorreo = document.getElementById('txtcorreo').value.trim();
    const txtpassword = document.getElementById('txtpassword').value;
    const txtconfirmar = document.getElementById('txtconfirmar').value;

    clearAlerts();
    let errores = [];

    if (!validarNombre(txtnombre)) {
      errores.push("El nombre no es válido (mínimo 3 letras).");
    }
    if (!validarApellido(txtapellido)) {
      errores.push("El apellido no es válido (mínimo 3 letras).");
    }
    if (!validarEmail(txtcorreo)) {
      errores.push("El email no es válido.");
    }
    if (txtpassword !== txtconfirmar) {
      errores.push("Las contraseñas no coinciden.");
    } else if (!validarContraseña(txtpassword)) {
      errores.push("La contraseña debe tener al menos 8 caracteres, incluyendo letras y números.");
    }

    if (errores.length > 0) {
      alertBox.innerHTML = errores.map(e => `<li>${e}</li>`).join('');
      alertBox.className = "alert alert-danger show";
      return;
    }

    const usuario = { nombre: txtnombre, apellido: txtapellido, correo: txtcorreo, contraseña: txtpassword };
    localStorage.setItem('usuarioRegistrado', JSON.stringify(usuario));

    alertBox.innerText = "¡Registro exitoso! Ahora puedes iniciar sesión.";
    alertBox.className = "alert alert-success show";

    registerForm.reset();

    setTimeout(() => {
      flipCardInner.style.transform = 'rotateY(180deg)';
      clearAlerts();
    }, 1500);
  });

  // Login
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const correoIngresado = document.getElementById('iptnombre').value.trim();
    const contraseñaIngresada = document.getElementById('iptpasword').value;

    clearAlerts();

    const usuarioGuardado = JSON.parse(localStorage.getItem('usuarioRegistrado'));
   // const usuarioGuardado =  { correo: txtcorreo, contraseña: txtpassword };
    //localStorage.setItem('usuarioLogueado', JSON.stringify(usuarioGuardado));

    if (!usuarioGuardado) {
      alertLogin.innerText = "No hay usuarios registrados.";
      alertLogin.className = "alert alert-danger show";
      return;
    }

    if (
      correoIngresado === usuarioGuardado.correo &&
      contraseñaIngresada === usuarioGuardado.contraseña
    ) {
      alertLogin.innerText = `Bienvenido, ${usuarioGuardado.nombre} ${usuarioGuardado.apellido}!`;
      alertLogin.className = "alert alert-success show";

      const datosSesion= {
        correo: correoIngresado, 
        contraseña: contraseñaIngresada
      };

      localStorage.setItem('usuarioLogueado', JSON.stringify(datosSesion)); 
      // Aquí redirigir o lo que quieras después de login

      setTimeout(() => {
      window.location.href = "index.html";
    }, 1000); // espera 1 segundo para mostrar el mensaje antes de redirigir

    } else {
    alertLogin.innerText = "Correo o contraseña incorrectos.";
    alertLogin.className = "alert alert-danger show";
    }

  });
});
