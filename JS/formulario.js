<<<<<<< HEAD
// --- Variables ---
let contador = 0;
let totalClases = 0;
let totalPrecio = 0;

// --- Precios por tipo de clase ---
const precios = {
    suelta: 130,
    anualidad: 700
};

// Elementos del DOM
const nameInput = document.getElementById("Name");
const cantidadInput = document.getElementById("Number");
const horarioInput = document.getElementById("horario");
const tipoClaseSelect = document.getElementById("tipoClase");
const alertBox = document.getElementById("alertValidaciones");
const alertTexto = document.getElementById("alertValidacionesTexto");
const tablaBody = document.querySelector("#tablaListaClases tbody");
const contadorClasesSpan = document.getElementById("contadorClases");
const clasesTotalSpan = document.getElementById("clasesTotal");
const precioTotalSpan = document.getElementById("precioTotal");
const btnAgregar = document.getElementById("btnAgregar");
const btnClear = document.getElementById("btnClear");

// --- Función para mostrar mensajes de error ---
function mostrarError(mensaje) {
    alertBox.style.display = "block";
    alertTexto.textContent = mensaje;
    setTimeout(() => {
        alertBox.style.display = "none";
    }, 3000);
}

// --- Función para agregar clase ---
function agregarClase() {
    const nombre = nameInput.value.trim();
    const cantidad = parseInt(cantidadInput.value.trim());
    const horario = horarioInput.value.trim();
    const tipo = tipoClaseSelect.value;

    // Validaciones
    if (!nombre) {
        mostrarError("El nombre de la clase es obligatorio.");
        return;
    }
    if (isNaN(cantidad) || cantidad <= 0) {
        mostrarError("La cantidad debe ser un número mayor a 0.");
        return;
    }
    if (!horario) {
        mostrarError("El horario es obligatorio.");
        return;
    }
    if (!tipo) {
        mostrarError("Debes seleccionar un tipo de clase.");
        return;
    }

    // Calcular precio
    const precio = precios[tipo] * cantidad;

    // Agregar a tabla
    contador++;
    const fila = document.createElement("tr");
    fila.innerHTML = `
        <th scope="row">${contador}</th>
        <td>${nombre}</td>
        <td>${cantidad}</td>
        <td>${horario}</td>
        <td>$${precio}</td>
    `;
    tablaBody.appendChild(fila);

    // Actualizar totales
    totalClases += cantidad;
    totalPrecio += precio;

    contadorClasesSpan.textContent = contador;
    clasesTotalSpan.textContent = totalClases;
    precioTotalSpan.textContent = `$${totalPrecio}`;

    // Limpiar inputs
    nameInput.value = "";
    cantidadInput.value = "";
    horarioInput.value = "";
    tipoClaseSelect.value = "";
}

// --- Función para limpiar todo ---
function limpiarTodo() {
    tablaBody.innerHTML = "";
    contador = 0;
    totalClases = 0;
    totalPrecio = 0;
    contadorClasesSpan.textContent = 0;
    clasesTotalSpan.textContent = 0;
    precioTotalSpan.textContent = "$0";
}

// --- Eventos ---
btnAgregar.addEventListener("click", agregarClase);
btnClear.addEventListener("click", limpiarTodo);
=======
// document.getElementById("formulario").addEventListener("submit", function(e){
//     e.preventDefault();
    
//     const nombre = document.getElementById("nombre").value.trim();
//     const edad = document.getElementById("edad").value.trim();
//     const email = document.getElementById("email").value.trim();
//     const telefono = document.getElementById("telefono").value.trim();
//     const estilo = document.getElementById("estilo").value;

//     if(!nombre || !edad || !email || !telefono || !estilo ||!foto){
//       showAlert("Por favor llena todos los campos obligatorios.", "danger");
//       return;
//     }

//     const alumno = {
//       nombre,
//       edad: parseInt(edad),
//       email,
//       telefono,
//       estilo,
//       foto
//     };
//     //Alerta que se envio la inscripcion
//     console.log("Alumno inscrito:", alumno);
//     showAlert("Inscripción enviada con éxito ", "success");
//   });

//   function showAlert(message, type){
//     const alertContainer = document.getElementById("alertContainer");
//     alertContainer.innerHTML = `<div class="alert alert-${type}">${message}</div>`;
//   }


//   //Descripcion del objeto

//   const formulario= {"inscripcion":[
//     {
//         "nombre",
//         "edad",
//     }
//   ]

//   }


  const formulario = document.getElementById("formulario");
  //Funsion para extraer los datos
  const submit=(e)=>
>>>>>>> 14231d2a1c9333d3b3784a20d54510589b8d791e
