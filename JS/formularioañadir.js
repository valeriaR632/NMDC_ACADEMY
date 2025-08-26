// --- Referencias del formulario ---
const form = document.getElementById("claseForm");
const uploadButton = document.getElementById("upload_widget");
const imgInput = document.getElementById("imgUrl");

// --- Inicializar Cloudinary Widget ---
const cloudinaryWidget = cloudinary.createUploadWidget(
  {

    cloudName: "dymqe1jb3", // 🔹 pon aquí tu cloudName de Cloudinary
    uploadPreset: "next_move_dance", // 🔹 pon aquí tu uploadPreset de Cloudinary
    api_key: '849985375176277'
  },
  (error, result) => {
    if (!error && result && result.event === "success") {
      console.log("Imagen subida:", result.info.secure_url);
      imgInput.value = result.info.secure_url; // Guardamos la URL en el input hidden
    }
  }
);

// Botón para subir imagen
uploadButton.addEventListener("click", () => {
  cloudinaryWidget.open();
}, false);

// --- Guardar clase en localStorage ---
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Validar que se subió imagen
  if (!imgInput.value) {
    alert("Por favor sube una imagen antes de guardar la clase.");
    return;
  }

  // Obtenemos datos del formulario
  const nuevaClase = {
    clase: document.getElementById("clase").value.trim(),
    edad: document.getElementById("edad").value.trim(),
    maestro: document.getElementById("maestro").value.trim(),
    horario: document.getElementById("horario").value.split(",").map(h => h.trim()),
    precio: document.getElementById("precio").value.trim(),
    inscripcion: document.getElementById("inscripcion").value.trim(),
    img: imgInput.value
  };

  // Recuperar clases guardadas en localStorage
  let clasesGuardadas = JSON.parse(localStorage.getItem("clases")) || [];

  // Agregar nueva clase
  clasesGuardadas.push(nuevaClase);

  // Guardar en localStorage
  localStorage.setItem("clases", JSON.stringify(clasesGuardadas));

  // Mostrar mensaje
  alert("Clase creada con éxito ✅");

  // Redirigir a clases2.html
  window.location.href = "../clases2.html";
});
