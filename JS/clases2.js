//JSON
   const clases =  {"baile":[
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

const contenedor = document.getElementById("contenedor-clases");

// Clases iniciales (las 10 que ya tienes en tu archivo original)
const clasesIniciales = clases.baile;

// Clases guardadas en localStorage
function obtenerClasesGuardadas() {
  return JSON.parse(localStorage.getItem("clases")) || [];
}

// Unimos ambas listas
function obtenerTodasLasClases() {
  return [...clasesIniciales, ...obtenerClasesGuardadas()];
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

    // Botón "Eliminar" (solo para las nuevas en localStorage)
    if (index >= clasesIniciales.length) {
      const botonEliminar = tarjeta.querySelector(".eliminar-btn");
      botonEliminar.addEventListener("click", () => {
        eliminarClase(index - clasesIniciales.length);
      });
    }
  });
}

// Eliminar una clase del localStorage
function eliminarClase(index) {
  const clasesGuardadas = obtenerClasesGuardadas();
  clasesGuardadas.splice(index, 1); // Quitamos la clase en esa posición
  localStorage.setItem("clases", JSON.stringify(clasesGuardadas));
  mostrarClases(obtenerTodasLasClases()); // Recargamos lista
}

// Mostrar todas las clases al cargar
mostrarClases(obtenerTodasLasClases());


    
  

 

  