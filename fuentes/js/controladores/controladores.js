const botonGuardar = document.querySelector('#guardarPersonaje');
const botonBorrar = document.querySelector('#borrarPersonajes');
const botonModificar = document.querySelector('#modificarPersonajes');

// Crear
botonGuardar.onclick = () => {
    let nombre = document.querySelector("#nombre").value;
    let fecha = document.querySelector("#fechaNac").value;
    let sexo = document.querySelector("#sexo").value;
    let activo = document.querySelector("#activo").checked;
    let imagen = document.querySelector("#imagenForm").value;
    let oceano = document.querySelector("#oceano").value;
    let descripcion = document.querySelector("#descripcionPersonaje").value;

    if (nombre === "" || fecha === "" || sexo === "" || oceano === "" || descripcion === "") {
        alert("Todos los campos son obligatorios");
        console.log("Todos los campos son obligatorios");
        return;
    }

    let nuevo = new Personaje(
        Date.now(),
        nombre,
        fecha,
        sexo,
        activo,
        imagen,
        oceano,
        descripcion
    );

    crearPersonaje(nuevo);
    console.log("Personaje creado:", nuevo);
    renderizarPersonajes();
    mostrarVista(vistaListado);
};

// Borrar todos
botonBorrar.onclick = () => {
    personajes = [];
    console.log("Todos los personajes eliminados");
    renderizarPersonajes();
    mostrarVista(vistaListado);
};

// Actualizar
botonModificar.onclick = () => {
    let lista = obtenerPersonajes();
    if (lista.length === 0) {
        console.log("No hay personajes para modificar");
        return;
    }

    let id = lista[0].id;
    let datosNuevos = {
        nombre: document.querySelector("#nombre").value,
        fechaNacimiento: document.querySelector("#fechaNac").value,
        sexo: document.querySelector("#sexo").value,
        activo: document.querySelector("#activo").checked,
        imagen: document.querySelector("#imagenForm").value,
        oceano: document.querySelector("#oceano").value,
        descripcion: document.querySelector("#descripcionPersonaje").value
    };

    actualizarPersonaje(id, datosNuevos);
    console.log("Personaje modificado");
    renderizarPersonajes();
    mostrarVista(vistaListado);
};

// Renderizar listado
function renderizarPersonajes() {
    let contenedor = document.querySelector("#vistaListado");
    contenedor.textContent = "";

    let lista = obtenerPersonajes();
    lista.forEach(p => {
        let div = document.createElement("div");
        div.style.border = "1px solid black";
        div.style.margin = "10px";
        div.style.padding = "10px";

        let h3 = document.createElement("h3");
        h3.textContent = p.nombre;

        let fecha = document.createElement("p");
        fecha.textContent = "Fecha: " + p.fechaNacimiento;

        let sexo = document.createElement("p");
        sexo.textContent = "Sexo: " + p.sexo;

        let oceano = document.createElement("p");
        oceano.textContent = "Océano: " + p.oceano;

        let descripcion = document.createElement("p");
        descripcion.textContent = p.descripcion;

        let boton = document.createElement("button");
        boton.textContent = "Eliminar";
        boton.addEventListener("click", function () {
            eliminarUno(p.id);
        });

        div.appendChild(h3);
        div.appendChild(fecha);
        div.appendChild(sexo);
        div.appendChild(oceano);
        div.appendChild(descripcion);
        div.appendChild(boton);

        contenedor.appendChild(div);
    });

    console.log("Listado actualizado");
}

function eliminarUno(id) {
    eliminarPersonaje(id);
    console.log("Eliminado personaje con id:", id);
    renderizarPersonajes();
}