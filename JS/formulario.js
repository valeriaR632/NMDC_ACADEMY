document.addEventListener('DOMContentLoaded', function() { //Carga una vez que prueba3 ya este cargada
    let clases = [];
    let contadorId = 1;

    // Precios por tipo de clase
    const precioSuelta = 130;
    const precioAnualidad = 700;


    //Declaracion de cada elemento del Html que se va a mostrar en el objeto
    const nameInput = document.getElementById('Name');
    const numberInput = document.getElementById('Number');
    const horarioInput = document.getElementById('horario');
    const tipoClaseSelect = document.getElementById('tipoClase');
    const precioInput = document.getElementById('precio'); 
    const btnAgregar = document.getElementById('btnAgregar');
    const btnClear = document.getElementById('btnClear');
    const tablaBody = document.querySelector('#tablaListaClases tbody');
    const alertValidaciones = document.getElementById('alertValidaciones');
    const alertTexto = document.getElementById('alertValidacionesTexto');
    const contadorClases = document.getElementById('contadorClases');
    const clasesTotal = document.getElementById('clasesTotal');
    const precioTotal = document.getElementById('precioTotal');

    //  Funciones para obtener el nombre de clase de URL desde clases2
    function getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);

    }


    // Rellenar automáticamente el nombre de la clase si viene de la URL
    const claseSeleccionada = getQueryParam('Name');
    if(claseSeleccionada) {
        nameInput.value = claseSeleccionada;
    }


    // Funciones de alertas 
    function mostrarAlerta(mensaje) {
        alertTexto.textContent = mensaje;
        alertValidaciones.style.display = 'block';
        setTimeout(() => {
            alertValidaciones.style.display = 'none';
        }, 3000);//El mensaje durara 3 segundos
    }


    function validarInputs() {
        const nombre = nameInput.value.trim();//.trim  elimina los espacios en blanco
        const cantidad = numberInput.value.trim();
        const horario = horarioInput.value.trim();
        const tipo = tipoClaseSelect.value;

        if (!nombre) {
            nameInput.style.border="medium red solid";
            mostrarAlerta('El nombre de la clase es requerido');
            return false;
        }
        if (!cantidad || isNaN(cantidad) || parseInt(cantidad) <= 0) {
            numberInput.style.border="medium red solid";
            mostrarAlerta('La cantidad debe ser un número mayor a 0');
            return false;
        }
        if (!horario) {
            horarioInput.style.border="medium red solid";
            mostrarAlerta('Debe seleccionar un horario');
            return false;
        }
        if (!tipo) {
            tipoClaseSelect.style.border="medium red solid";
            mostrarAlerta('Debe seleccionar un tipo de clase');
            return false;
        }
        return true;
    }

    function limpiarInputs() {
        nameInput.value = '';
        numberInput.value = '';
        horarioInput.value = '';
        tipoClaseSelect.value = '';
        precioInput.value = '';
        alertValidaciones.style.display = 'none';
    }

    function actualizarTotales() {
        const totalClases = clases.reduce((sum, clase) => sum + parseInt(clase.cantidad), 0);
        const totalPrecio = clases.reduce((sum, clase) => sum + (parseInt(clase.cantidad) * clase.precio), 0);

        contadorClases.textContent = clases.length;
        clasesTotal.textContent = totalClases;
        precioTotal.textContent = `$${totalPrecio.toFixed(2)}`;

        const resumen = {
            cantidadClases: clases.length,
            totalClases: totalClases,
            totalPrecio: totalPrecio
        };

        localStorage.setItem("resumen", JSON.stringify(resumen));
        localStorage.setItem("clases", JSON.stringify(clases));
    }

    function renderizarTabla() {
        tablaBody.innerHTML = '';
        clases.forEach((clase, index) => {
            const totalClase = clase.cantidad * clase.precio;
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${clase.nombre}</td>
                <td>${clase.cantidad}</td>
                <td>${clase.horario}</td>
                <td>$${totalClase.toFixed(2)}</td>
                <td>
                    <button class="btn btn-danger btn-sm" onclick="eliminarClase(${clase.id})">Eliminar</button>
                </td>
            `;
            tablaBody.appendChild(row);
        });
        actualizarTotales();
    }

    function agregarClase() {
        if (!validarInputs()) return;

        const precioClase = tipoClaseSelect.value === 'anualidad' ? precioAnualidad : precioSuelta;

        const nuevaClase = {
            id: contadorId++,
            nombre: nameInput.value.trim(),
            cantidad: parseInt(numberInput.value.trim()),
            horario: horarioInput.value.trim(),
            tipo: tipoClaseSelect.value,
            precio: precioClase
        };

        clases.push(nuevaClase);
        renderizarTabla();
        limpiarInputs();
    }

    window.eliminarClase = function(id) {
        clases = clases.filter(clase => clase.id !== id);
        renderizarTabla();
    };

    function limpiarTodo() {
        clases = [];
        contadorId = 1;
        renderizarTabla();
        limpiarInputs();
        localStorage.removeItem("clases");
        localStorage.removeItem("resumen");
        nameInput.style.border="";
        numberInput.style.border="";
        horarioInput.style.border="";
        tipoClaseSelect.style.border="";
    }

    // --- Event listeners ---
    btnAgregar.addEventListener('click', agregarClase);
    btnClear.addEventListener('click', limpiarTodo);

    [nameInput, numberInput, horarioInput].forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                agregarClase();
            }
        });
    });

    window.actualizarPrecio = function() {
        const tipo = tipoClaseSelect.value;
        if (tipo === 'suelta') {
            precioInput.value = `${precioSuelta.toFixed(2)}`;
        } else if (tipo === 'anualidad') {
            precioInput.value = `${precioAnualidad.toFixed(2)}`;
        } else {
            precioInput.value = '';
        }
    };

    function cargarDesdeLocalStorage() {
        const dataClases = localStorage.getItem("clases");
        const dataResumen = localStorage.getItem("resumen");

        if (dataClases) {
            clases = JSON.parse(dataClases);
            contadorId = clases.length > 0 ? clases[clases.length - 1].id + 1 : 1;
            renderizarTabla();
        }

        if (dataResumen) {
            const resumen = JSON.parse(dataResumen);
            contadorClases.textContent = resumen.cantidadClases;
            clasesTotal.textContent = resumen.totalClases;
            precioTotal.textContent = `$${resumen.totalPrecio.toFixed(2)}`;
        }
    }

    cargarDesdeLocalStorage();
    actualizarTotales();
});
