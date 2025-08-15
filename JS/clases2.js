 const clases =  {"baile":[
    {
    "img":"./img.bailes/portadaHIP-HOP.png",
    "clase":"hiphop", 
    "edad":"15 años en adelante",
    "maestro vespertino":"Pablo Lopez",
    "maestro fin de semana": "Indigo Valenzuela",
    "horario":["lunes de18:00 a 19:30","sabado y domingo de 11:00,12:15"],
    

},

{
    "img":"./img.bailes/portadaHEELS.png",
    "clase":"Heels", 
    "edad":"15 años en adelante",
    "maestro vespertino": "Zhevia Kings ",
    "maestro fin de semana":"Zhevia Kings ",
    "horario":["jueves de 19:30 a 21:00","sabado de 12:15 a 13:30"],
    


},
{
    "img":"./img.bailes/portadaJAZZ.png",
    "clase":"Jazz", 
    "edad":"15 años en adelante",
    "maestro vespertino": "Kardan Muñoz ",
    "maestro fin de semana":"Kardan Muñoz",
    "horario":["jueves de 18:00 a 19:00","sabado de 13:39 a 14:45"],
    
},
{

    "img":"./img.bailes/portadaVOGUE.png",
    "clase":"Vogue", 
    "edad":"15 años en adelante",
    "maestro vespertino":"Zhevia King ",
     "maestro fin de semana":"Zhevia King ",
    "horario":[ "martes de 18:00 a 19:30", "sabado de 14:45 a 16:00"],
    

},
{
    "img":"./img.bailes/portadaK-POP.png",
    "clase":"K-pop", 
    "edad": "15 años en adelante",
    "maestro vespertino":"Kardan Muñoz",
    "maestro fin de semana": "Kardan Muñoz ",
    "horario":[ "jueves de 16:30 a 18:00",  "domingo de12:15 a 13:30"],
  

},
{
   
  "img":"./img.bailes/portadaREGGAETON.png",
    "clase":"Reggaeton", 
    "edad":"15 años en adelante",
    "maestro vespertino":"Kennybyaa",
    "maestro fin de semana": " ",
    "horario":"viernes de  19:30 a 21:00",
    
},
{
    "img":"./img.bailes/portadaBALLET.png",
    "clase":"Ballet", 
    "edad":"15 años en adelante",
    "maestro vespertino":"Eduardo Sandoval",
    "maestro fin de semana": " ",
    "horario":["lunes de  19:30 a 21:00","miercoles de 19:30 a 21:00 "],
    

},
{
    "img":"./img.bailes/portadaCONTEMPORANEO.png",
    "clase":"Contemporaneo", 
    "edad":"15 años en adelante",
    "maestro vespertino":"Isaac Juarez",
    "maestro fin de semana": " ",
    "horario":["martes de  19:30 a 21:00",],
    

},
{
    
    "img":"./img.bailes/portadaPERFORMANCE.png",
    "clase":"Performance", 
    "edad":"15 años en adelante",
    "maestro vespertino":"Josa Márquez",
    "maestro fin de semana": " ",
    "horario":["miercoles de 18:00 a 19:30 "],
    

},
{
    "img":"./img.bailes/portadaHOUSE.png",
    "clase":"House", 
    "edad":"15 años en adelante",
    "maestro vespertino":"Eduardo Sandoval",
    "maestro fin de semana": " ",
    "horario":["viernes de  18:00 a 19:30"],
    

}
]
 };

const contenedor = document.getElementById("contenedor-clases");

clases.baile.forEach((item) => {
  const tarjeta = document.createElement("div");
  tarjeta.classList.add("col-md-4", "mb-4");

  tarjeta.innerHTML = `
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img src="${item.img}" alt="${item.clase}" class="card-img-top">
        </div>
        <div class="flip-card-back">
          <h5>${item.clase}</h5>
          <p><strong>Edad:</strong> ${item.edad}</p>
          <p><strong>Maestro Vespertino:</strong> ${item["maestro vespertino"]}</p>
          <p><strong>Maestro Fin de Semana:</strong> ${item["maestro fin de semana"]}</p>
          <ul>
            ${Array.isArray(item.horario) ? item.horario.map(h => `<li>${h}</li>`).join('') : `<li>${item.horario}</li>`}
          </ul>
        </div>
      </div>
    </div>

    <div class="text-center mt-2">
      <button type="button" class="btn btn-primary agregar-btn">Agregar</button>
    </div>
  `;

  contenedor.appendChild(tarjeta);

  // Seleccionamos el botón de esta tarjeta y le agregamos un evento
  const boton = tarjeta.querySelector(".agregar-btn");
  boton.addEventListener("click", () => {
    window.location.href = `formulario.html?clase=${encodeURIComponent(item.clase)}`;
});
   // alert(`Has agregado la clase: ${item.clase}`);
    // Aquí puedes agregar otras acciones, por ejemplo:
    // agregarClaseAlCarrito(item);
  });

