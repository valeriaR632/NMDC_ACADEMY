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