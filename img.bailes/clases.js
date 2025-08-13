 const clases =  {"baile":[
    {
    "img":"./portadaHIP-HOP.png",
    "clase":"hiphop", 
    "edad":"15 años en adelante",
    "maestro vespertino":"Pablo Lopez",
    "maestro fin de semana": "Indigo Valenzuela",
    "horario":["lunes de18:00 a 19:30","sabado y domingo de 11:00,12:15"],
    

},

{
    "img":"./portadaHEELS.png",
    "clase":"Heels", 
    "edad":"15 años en adelante",
    "maestro vespertino": "Zhevia Kings ",
    "maestro fin de semana":"Zhevia Kings ",
    "horario":["jueves de 19:30 a 21:00","sabado de 12:15 a 13:30"],
    


},
{
    "img":"./portadaJAZZ.png",
    "clase":"Jazz", 
    "edad":"15 años en adelante",
    "maestro vespertino": "Kardan Muñoz ",
    "maestro fin de semana":"Kardan Muñoz",
    "horario":["jueves de 18:00 a 19:00","sabado de 13:39 a 14:45"],
    
},
{

    "img":"./portadaVOGUE.png",
    "clase":"Vogue", 
    "edad":"15 años en adelante",
    "maestro vespertino":"Zhevia King ",
     "maestro fin de semana":"Zhevia King ",
    "horario":[ "martes de 18:00 a 19:30", "sabado de 14:45 a 16:00"],
    

},
{
    "img":"./portadaK-POP.png",
    "clase":"K-pop", 
    "edad": "15 años en adelante",
    "maestro vespertino":"Kardan Muñoz",
    "maestro fin de semana": "Kardan Muñoz ",
    "horario":[ "jueves de 16:30 a 18:00",  "domingo de12:15 a 13:30"],
  

},
{
   
  "img":"./portadaREGGAETON.png",
    "clase":"Reggaeton", 
    "edad":"15 años en adelante",
    "maestro vespertino":"Kennybyaa",
    "maestro fin de semana": " ",
    "horario":"viernes de  19:30 a 21:00",
    
},
{
    "img":"./portadaBALLET.png",
    "clase":"Ballet", 
    "edad":"15 años en adelante",
    "maestro vespertino":"Eduardo Sandoval",
    "maestro fin de semana": " ",
    "horario":["lunes de  19:30 a 21:00","miercoles de 19:30 a 21:00 "],
    

},
{
    "img":"./CONTEMPORANEO.png",
    "clase":"Contemporaneo", 
    "edad":"15 años en adelante",
    "maestro vespertino":"Isaac Juarez",
    "maestro fin de semana": " ",
    "horario":["martes de  19:30 a 21:00",],
    

},
{
    
    "img":"./portadaPERFORMANCE.png",
    "clase":"Performance", 
    "edad":"15 años en adelante",
    "maestro vespertino":"Josa Márquez",
    "maestro fin de semana": " ",
    "horario":["miercoles de 18:00 a 19:30 "],
    

},
{
    "img":"./portadaHOUSE.png",
    "clase":"House", 
    "edad":"15 años en adelante",
    "maestro vespertino":"Eduardo Sandoval",
    "maestro fin de semana": " ",
    "horario":["viernes de  18:00 a 19:30"],
    

}
]
 };



const container = document.getElementById('cards-container'); //Se llama al contenedor por ID
// const agregarBtn = document.getElementById('agregar-btn'); //No se pudo agregar el boton
function mostrarClases() {
  container.innerHTML = ''; // Limpiar contenedor antes de agregar
  clases.baile.forEach(clase => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.style.width = '18rem';

    const horario = Array.isArray(clase.horario) 
      ? `<ul>${clase.horario.map(h => `<li>${h}</li>`).join('')}</ul>` 
      : clase.horario; //declaracion de la constante para los arreglos de las clases

    card.innerHTML = `
      <img src="${clase.img}" class="card-img-top" alt="${clase.clase}">
      <div class="card-body">
        <h5 class="card-title">${clase.clase}</h5>
        <p class="card-text"><strong>Edad:</strong> ${clase.edad}</p>
        <p class="card-text"><strong>Maestro vespertino:</strong> ${clase["maestro vespertino"]}</p>
        <p class="card-text"><strong>Maestro fin de semana:</strong> ${clase["maestro fin de semana"] || "N/A"}</p>
        <p class="card-text"><strong>Horario:</strong> ${horario}</p>
      </div>
    `; //Se copia el codigo de la tarjeta en batcris

    container.appendChild(card);
  });
}

// Mostrar las clases inicialmente
mostrarClases();
