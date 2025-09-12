//JSON
   /*const clases =  {"baile":[
    {
    "img":"./img.bailes/HIPHOP.webp",
    "clase":"Hip-Hop", 
    "edad":"15 años en adelante.",
    "maestro":"Vespertino: Pablo López. Fin de semana: Índigo Valenzuela",
    "horario":["Lunes de 18:00 a 19:30 hrs.","Sábado y domingo de 11:00 a 12:15 hrs."],
    "precio":"$130 clase suelta.",
    "inscripcion anual": "$700",

},

{
    "img":"./img.bailes/HEELS.webp",
    "clase":"Heels", 
    "edad":"15 años en adelante.",
    "maestro": "Zhevia Kings.",
    "horario":["Jueves de 19:30 a 21:00 hrs.","Sábado de 12:15 a 13:30 hrs."],
     "precio":"$130 clase suelta.",
    "inscripcion anual": "$700",

},

{
    "img":"./img.bailes/JAZZ.webp",
    "clase":"Jazz", 
    "edad":"15 años en adelante.",
    "maestro": "Kardan Muñoz.",
    "horario":["Jueves de 18:00 a 19:00 hrs.","Sábado de 13:39 a 14:45 hrs."],
     "precio":"$130 clase suelta.",
    "inscripcion anual": "$700",
},

{

    "img":"./img.bailes/VOGUE.webp",
    "clase":"Vogue", 
    "edad":"15 años en adelante.",
    "maestro":"Zhevia King.",
    "horario":[ "Martes de 18:00 a 19:30 hrs.", "Sábado de 14:45 a 16:00 hrs."],
     "precio":"$130 clase suelta.",
    "inscripcion anual": "$700",
    

},

{
    "img":"./img.bailes/KPOP.webp",
    "clase":"K-Pop", 
    "edad": "15 años en adelante.",
    "maestro":"Kardan Muñoz.",
    "horario":[ "Jueves de 16:30 a 18:00 hrs.",  "Domingo de 12:15 a 13:30 hrs."],
   "precio":"$130 clase suelta.",
    "inscripcion anual": "$700",
    

},

{
   
  
   
  "img":"./img.bailes/REGGAETON.webp",
    "clase":"Reggaetón", 
    "edad":"15 años en adelante.",
    "maestro":"Kennybyaa.",
    "horario":["Viernes de  19:30 a 21:00 hrs."],
     "precio":"$130 clase suelta.",
    "inscripcion anual": "$700",
},

{
    "img":"./img.bailes/BALLET.webp",
    "clase":"Ballet", 
    "edad":"15 años en adelante.",
    "maestro":"Eduardo Sandoval.",
    "horario":["Lunes y miércoles de 19:30 a 21:00 hrs."],
     "precio":"$130 clase suelta.",
    "inscripcion anual": "$700",

},
{
    "img":"./img.bailes/CONTEMPORANEO.webp",
    "clase":"Contemporáneo", 
    "edad":"15 años en adelante.",
    "maestro":"Isaac Juárez.",
    "horario":["Martes de  19:30 a 21:00 hrs.",],
     "precio":"$130 clase suelta.",
    "inscripcion anual": "$700",

},

{
    
    "img":"./img.bailes/PERFORMANCE.webp",
    "clase":"Performance", 
    "edad":"15 años en adelante.",
    "maestro":"Josa Márquez",
    "horario":["Miércoles de 18:00 a 19:30 hrs."],
     "precio":"$130 clase suelta.",
    "inscripcion anual": "$700",

},

{
    "img":"./img.bailes/HOUSE.webp",
    "clase":"House", 
    "edad":"15 años en adelante.",
    "maestro":"Eduardo Sandoval.",
    "horario":["Viernes de  18:00 a 19:30 hrs."],
     "precio":"$130 clase suelta.",
    "inscripcion anual": "$700",

}

]
 };


  };*/

const contenedor = document.getElementById("contenedor-clases");

// Clases iniciales (puedes dejar tu archivo original o un array aquí)
const clasesIniciales = []; // si ya no quieres usar locales, déjalo vacío

// Clases guardadas en localStorage
function obtenerClasesGuardadas() {
  return JSON.parse(localStorage.getItem("clases")) || [];
}

// 🔹 Normaliza los nombres para que coincidan con el frontend
function normalizarClase(c) {
  return {
    img: c.img || c.imagen || "./img/default.png",
    clase: c.clase || c.nombreClases || "Sin nombre",
    edad: c.edad || c.edadAdmision || "No especificada",
    maestro: c.maestro || "Por asignar",
    horario: Array.isArray(c.horario) ? c.horario : [c.horario || "Horario no disponible"],
    precio: c.precio || c.claseSuelta || "N/A",
    "inscripcion anual": c["inscripcion anual"] || c.inscripcion || "N/A"
  };
}

function obtenerClasesDesdeAPI() {
  const requestOptions = {
    method: "GET",
    redirect: "follow"
  };
  return fetch("http://localhost:8080/api/clases/", requestOptions)
    .then(response => response.json())
    .then(data => data.map(normalizarClase)) // normalizar todas las clases de la API
    .catch(error => {
      console.error("Error al obtener clases desde API:", error);
      return []; // Retornar arreglo vacío si falla
    });
}

// Función para obtener todas las clases combinadas (iniciales + guardadas + API)
async function obtenerTodasLasClases() {
  const clasesAPI = await obtenerClasesDesdeAPI();
  const clasesGuardadas = obtenerClasesGuardadas().map(normalizarClase);
  return [...clasesIniciales, ...clasesGuardadas, ...clasesAPI];
}

// Función para renderizar tarjetas
function mostrarClases(lista) {
  contenedor.innerHTML = ""; // Limpiamos antes de agregar

  lista.forEach((item, index) => {
    const tarjeta = document.createElement("div");
    tarjeta.className = "col-12 col-sm-6 col-md-4 mb-4";

    tarjeta.innerHTML = `
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src="${item.img}" alt="${item.clase}" class="card-img-top">
          </div>
          <div class="flip-card-back">
            <h5>${item.clase}</h5>
            <p><strong>Edad:</strong> ${item.edad}</p>
            <p><strong>Maestro(s):</strong> ${item.maestro}</p>
            <p><strong>Horario:</strong><br> ${item.horario.join("<br>")}</p>
            <p><strong>Precio:</strong> ${item.precio}</p>
            <p><strong>Inscripción anual:</strong> ${item["inscripcion anual"]}</p>
          </div>
        </div>
      </div>
      <div style="text-align:center; margin-top: 10px;">
        <button type="button" class="btn btn-primary agregar-btn">Agregar</button>
        ${index >= clasesIniciales.length ? 
          `<button type="button" class="btn btn-danger eliminar-btn">Eliminar</button>` 
          : ""}
      </div>
    `;
    contenedor.appendChild(tarjeta);

    // Botón "Agregar"
    const botonAgregar = tarjeta.querySelector(".agregar-btn");
    botonAgregar.addEventListener("click", () => {
      window.location.href = `formulario.html?Name=${encodeURIComponent(item.clase)}`;
    });

    // Botón "Eliminar" (solo para las nuevas en localStorage o API)
    if (index >= clasesIniciales.length) {
      const botonEliminar = tarjeta.querySelector(".eliminar-btn");
      botonEliminar.addEventListener("click", () => {
        eliminarClase(item.clase);
      });
    }
  });
}

// Eliminar una clase del localStorage
function eliminarClase(nombre) {
  const clasesGuardadas = obtenerClasesGuardadas().filter(c => c.clase !== nombre);
  localStorage.setItem("clases", JSON.stringify(clasesGuardadas));
  // Recargamos lista
  obtenerTodasLasClases().then(lista => mostrarClases(lista));
}

// Mostrar todas las clases al cargar
obtenerTodasLasClases().then(lista => mostrarClases(lista));
