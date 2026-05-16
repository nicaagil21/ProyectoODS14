/*Agarrar referencias a los botones de control*/
const botonGuardar = document.querySelector('#guardarPersonaje');
const botonBorrar = document.querySelector('#borrarPersonajes');
const botonModificar = document.querySelector('#modificarPersonajes');

// Variable para almacenar el ID del personaje seleccionado para modificar
let personajeSeleccionadoId = null;

// Crear
botonGuardar.onclick = () => {
    let datos = recogerDatosFormulario();

    if (!validarDatos(datos)) {
        alert("Todos los campos son obligatorios");
        return;
    }

    let nuevo = new Personaje(
        Date.now(),
        datos.nombre,
        datos.fechaNacimiento,
        datos.sexo,
        datos.activo,
        datos.imagen,
        datos.oceano,
        datos.descripcion
    );

    crearPersonaje(nuevo);
    renderizarPersonajes();
    mostrarVista(vistaListado);
};

// Borrar todos
botonBorrar.onclick = () => {
    listaPersonajes = [];
    renderizarPersonajes();
    mostrarVista(vistaListado);
};

// Modificar
botonModificar.onclick = () => {
    if (personajeSeleccionadoId === null) {
        console.log("No hay personaje seleccionado");
        return;
    }

    let datos = recogerDatosFormulario();
    actualizarPersonaje(personajeSeleccionadoId, datos);
    renderizarPersonajes();
    mostrarVista(vistaListado);
};

// Funciones auxiliares
function recogerDatosFormulario() {
    return {
        nombre: document.querySelector("#nombre").value,
        fechaNacimiento: document.querySelector("#fechaNac").value,
        sexo: document.querySelector("#sexo").value,
        activo: document.querySelector("#activo").checked,
        imagen: document.querySelector("#imagenForm").value,
        oceano: document.querySelector("#oceano").value,
        descripcion: document.querySelector("#descripcionPersonaje").value
    };
}

function validarDatos(datos) {
    return datos.nombre !== "" &&
           datos.fechaNacimiento !== "" &&
           datos.sexo !== "" &&
           datos.oceano !== "" &&
           datos.descripcion !== "";
}

// Renderizar listado
function renderizarPersonajes() {
    let contenedor = document.querySelector("#vistaListado");
    contenedor.innerHTML = "";

    let lista = obtenerPersonajes();

    for (let i = 0; i < lista.length; i++) {
        let personaje = lista[i];

        let div = document.createElement("div");
        div.style.border = "1px solid black";
        div.style.margin = "10px";
        div.style.padding = "10px";

        let h3 = document.createElement("h3");
        h3.textContent = personaje.nombre;

        let fecha = document.createElement("p");
        fecha.textContent = "Fecha: " + personaje.fechaNacimiento;

        let sexo = document.createElement("p");
        sexo.textContent = "Sexo: " + personaje.sexo;

        let oceano = document.createElement("p");
        oceano.textContent = "Océano: " + personaje.oceano;

        let activo = document.createElement("p");
        activo.textContent = "Activo en la limpieza del océano: " + (personaje.activo ? "Sí" : "No");

        let descripcion = document.createElement("p");
        descripcion.textContent = personaje.descripcion;

        let botonEditar = document.createElement("button");
        botonEditar.textContent = "Editar";
        botonEditar.onclick = function () {
            personajeSeleccionadoId = personaje.id;
            cargarDatosEnFormulario(personaje);
            mostrarVista(vistaFormulario);
        };

        let botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.onclick = function () {
            eliminarPersonaje(personaje.id);
            renderizarPersonajes();
        };

        div.appendChild(h3);
        div.appendChild(fecha);
        div.appendChild(sexo);
        div.appendChild(oceano);
        div.appendChild(activo);
        div.appendChild(descripcion);
        div.appendChild(botonEditar);
        div.appendChild(botonEliminar);

        contenedor.appendChild(div);
    }
}

function cargarDatosEnFormulario(personaje) {
    document.querySelector("#nombre").value = personaje.nombre;
    document.querySelector("#fechaNac").value = personaje.fechaNacimiento;
    document.querySelector("#sexo").value = personaje.sexo;
    document.querySelector("#activo").checked = personaje.activo;
    document.querySelector("#oceano").value = personaje.oceano;
    document.querySelector("#descripcionPersonaje").value = personaje.descripcion;
}
