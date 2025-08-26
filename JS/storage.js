function obtenerClases() {
  return JSON.parse(localStorage.getItem("clases")) || [];
}

function guardarClases(lista) {
  localStorage.setItem("clases", JSON.stringify(lista));
}

// 🔹 Inicializar datos SOLO la primera vez
if (!localStorage.getItem("clases")) {
  guardarClases([
    {
      "img":"./img.bailes/portadaHIP-HOP.png",
      "clase":"hiphop", 
      "edad":"15 años en adelante",
      "maestro":"vespertino: Pablo Lopez, Fin de semana: Indigo Valenzuela",
      "horario":["lunes de 18:00 a 19:30 hrs.","sabado y domingo de 11:00 a 12:15 hrs."],
      "precio":"$130",
      "inscripcion":"$700"
    },
    {
      "img":"./img.bailes/portadaHEELS.png",
      "clase":"Heels", 
      "edad":"15 años en adelante",
      "maestro": "Zhevia Kings",
      "horario":["jueves de 19:30 a 21:00 hrs.","sabado de 12:15 a 13:30 hrs."],
      "precio":"$130",
      "inscripcion":"$700"
    },
    {
      "img":"./img.bailes/portadaJAZZ.png",
      "clase":"Jazz", 
      "edad":"15 años en adelante",
      "maestro": "Kardan Muñoz",
      "horario":["jueves de 18:00 a 19:00 hrs.","sabado de 13:39 a 14:45 hrs."],
      "precio":"$130",
      "inscripcion":"$700"
    },
    {
      "img":"./img.bailes/portadaVOGUE.png",
      "clase":"Vogue", 
      "edad":"15 años en adelante",
      "maestro":"Zhevia King",
      "horario":[ "martes de 18:00 a 19:30 hrs.", "sabado de 14:45 a 16:00 hrs."],
      "precio":"$130",
      "inscripcion":"$700"
    },
    {
      "img":"./img.bailes/portadaK-POP.png",
      "clase":"K-pop", 
      "edad": "15 años en adelante",
      "maestro":"Kardan Muñoz",
      "horario":[ "jueves de 16:30 a 18:00 hrs.",  "domingo de 12:15 a 13:30 hrs."],
      "precio":"$130",
      "inscripcion":"$700"
    },
    {
      "img":"./img.bailes/portadaREGGAETON.png",
      "clase":"Reggaeton", 
      "edad":"15 años en adelante",
      "maestro":"Kennybyaa",
      "horario":["viernes de  19:30 a 21:00 hrs."],
      "precio":"$130",
      "inscripcion":"$700"
    },
    {
      "img":"./img.bailes/portadaBALLET.png",
      "clase":"Ballet", 
      "edad":"15 años en adelante",
      "maestro":"Eduardo Sandoval",
      "horario":["lunes de  19:30 a 21:00 hrs.","miercoles de 19:30 a 21:00 hrs."],
      "precio":"$130",
      "inscripcion":"$700"
    },
    {
      "img":"./img.bailes/portadaCONTEMPORANEO.png",
      "clase":"Contemporaneo", 
      "edad":"15 años en adelante",
      "maestro":"Isaac Juarez",
      "horario":["martes de  19:30 a 21:00 hrs."],
      "precio":"$130",
      "inscripcion":"$700"
    },
    {
      "img":"./img.bailes/portadaPERFORMANCE.png",
      "clase":"Performance", 
      "edad":"15 años en adelante",
      "maestro":"Josa Márquez",
      "horario":["miercoles de 18:00 a 19:30 hrs."],
      "precio":"$130",
      "inscripcion":"$700"
    },
    {
      "img":"./img.bailes/portadaHOUSE.png",
      "clase":"House", 
      "edad":"15 años en adelante",
      "maestro":"Eduardo Sandoval",
      "horario":["viernes de  18:00 a 19:30 hrs."],
      "precio":"$130",
      "inscripcion":"$700"
    }
  ]);
}

