//JSON
const clases =  {"baile":[
    {
    "img":"./img.bailes/portadaHIP-HOP.png",
    "clase":"hiphop", 
    "edad":"15 años en adelante",
    "maestro":"vespertino: Pablo Lopez, Fin de semana: Indigo Valenzuela",
    "horario":["lunes de 18:00 a 19:30 hrs.","sabado y domingo de 11:00 a 12:15 hrs."],
    "precio":"$130",
    "inscripcion anual": "$700",

},

{
    "img":"./img.bailes/portadaHEELS.png",
    "clase":"Heels", 
    "edad":"15 años en adelante",
    "maestro": "Zhevia Kings ",
    "horario":["jueves de 19:30 a 21:00 hrs.","sabado de 12:15 a 13:30 hrs."],
     "precio":"$130",
    "inscripcion anual": "$700",
   


},
{
    "img":"./img.bailes/portadaJAZZ.png",
    "clase":"Jazz", 
    "edad":"15 años en adelante",
    "maestro": "Kardan Muñoz ",
    "horario":["jueves de 18:00 a 19:00 hrs.","sabado de 13:39 a 14:45 hrs."],
     "precio":"$130",
    "inscripcion anual": "$700",
},
{

    "img":"./img.bailes/portadaVOGUE.png",
    "clase":"Vogue", 
    "edad":"15 años en adelante",
    "maestro":"Zhevia King ",
    "horario":[ "martes de 18:00 a 19:30 hrs.", "sabado de 14:45 a 16:00 hrs."],
     "precio":"$130",
    "inscripcion anual": "$700",
    

},
{
    "img":"./img.bailes/portadaK-POP.png",
    "clase":"K-pop", 
    "edad": "15 años en adelante",
    "maestro":"Kardan Muñoz",
    "horario":[ "jueves de 16:30 a 18:00 hrs.",  "domingo de 12:15 a 13:30 hrs."],
   "precio":"$130",
    "inscripcion anual": "$700",
    

},
{
   
  "img":"./img.bailes/portadaREGGAETON.png",
    "clase":"Reggaeton", 
    "edad":"15 años en adelante",
    "maestro":"Kennybyaa",
    "horario":["viernes de  19:30 a 21:00 hrs."],
     "precio":"$130",
    "inscripcion anual": "$700",
},
{
    "img":"./img.bailes/portadaBALLET.png",
    "clase":"Ballet", 
    "edad":"15 años en adelante",
    "maestro":"Eduardo Sandoval",
    "horario":["lunes de  19:30 a 21:00 hrs.","miercoles de 19:30 a 21:00 hrs."],
     "precio":"$130",
    "inscripcion anual": "$700",

},
{
    "img":"./img.bailes/portadaCONTEMPORANEO.png",
    "clase":"Contemporaneo", 
    "edad":"15 años en adelante",
    "maestro":"Isaac Juarez",
    "horario":["martes de  19:30 a 21:00 hrs.",],
     "precio":"$130",
    "inscripcion anual": "$700",

},
{
    
    "img":"./img.bailes/portadaPERFORMANCE.png",
    "clase":"Performance", 
    "edad":"15 años en adelante",
    "maestro":"Josa Márquez",
    "horario":["miercoles de 18:00 a 19:30 hrs."],
     "precio":"$130",
    "inscripcion anual": "$700",

},
{
    "img":"./img.bailes/portadaHOUSE.png",
    "clase":"House", 
    "edad":"15 años en adelante",
    "maestro":"Eduardo Sandoval",
    "horario":["viernes de  18:00 a 19:30 hrs."],
     "precio":"$130",
    "inscripcion anual": "$700",

}
]
 };

const contenedor = document.getElementById("contenedor-clases");

clases.baile.forEach((item) => {
  //  Creamos la columna responsiva
  const tarjeta = document.createElement("div");
  tarjeta.className = "col-12 col-sm-6 col-md-4 mb-4"; // ← clases Bootstrap

  // Agregamos el contenido HTML de la tarjeta
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
      </div>
    
  `;

  // Lo agregamos al contenedor
  contenedor.appendChild(tarjeta);

  // Funcionalidad del botón "Agregar"
  const boton = tarjeta.querySelector(".agregar-btn");
  boton.addEventListener("click", () => {
    window.location.href = `formulario.html?clase=${encodeURIComponent(item.clase)}`;
  });
});


    
  

 

  