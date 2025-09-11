
nav.navbar {
  margin: 0px;
  padding: 0;
  position: fixed; /* opcional: para que quede fija arriba */
  top: 0;
  left: 0;
  right: 0;
  height: 0px;
  z-index: 1000;
  flex-direction: column;
  align-items: center;
}



.container-fluid{
    background-color: #ED1A87;
    height: 100px;
    background: radial-gradient(circle, #ED1A87, #d9c64d);
    text-align: center;
    border-bottom: 0px;
    margin-top: 50px;
    


}
   span#text-litle{
     color: white;
     /* Se agrega sombreado con brillo al titulo */
     text-shadow:  
    0 0 5px #2f00ff,
    0 0 10px #0099ff,
    0 0 20px #bf00ff,
    0 0 40px #ff00de;
    font-size: 50px;
    position: absolute;      /* Lo sacamos del flujo normal */
  top: 5px;                 /* Separación desde arriba */
  left: 50%;                /* Lo colocamos en el centro horizontal */
  transform: translateX(-50%); /* Ajuste exacto al centro */
  font-weight: bold;
  margin-bottom: 10px;
  font-size: (16px, 2vw, 28px);

 
}
nav .nav-link,
.navbar-brand{
    color: white;
    text-align:justify;
    font-size: 25px;
}
